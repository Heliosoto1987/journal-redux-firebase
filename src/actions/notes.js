import Swal from "sweetalert2";
import { fileUpload } from "../components/helpers/fileUpload";
import { loadNotes } from "../components/helpers/loadNotes";
import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, segundoValor) => {
    const { uid } = segundoValor().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      delete note.url;
    }
    const noteFireStore = { ...note };
    delete noteFireStore.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFireStore);

    dispatch(refrestNote(note.id, note));
    Swal.fire("Saved", note.title, "success");
  };
};

export const refrestNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note,
  },
});

export const startUploading = (file) => {
  return async (dispath, getState) => {
    const { active: activeNote } = getState().notes;
    Swal.fire({
      title: "Uploading...",
      text: "Please wait",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispath(startSaveNote(activeNote));
    Swal.close();
  };
};

// react-journal
