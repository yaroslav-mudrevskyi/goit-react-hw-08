import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchingSuccess, setIsError } from "./contactsSlice";

axios.defaults.baseURL = "https://66cb1e4c4290b1c4f1998666.mockapi.io/";

// export const fetchContacts = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get("contacts");
//     dispatch(fetchingSuccess(data));
//   } catch (error) {
//     dispatch(setIsError(true));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
