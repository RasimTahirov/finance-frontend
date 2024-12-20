import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authThunk = createAsyncThunk("authThunk", async (userData: {email: string; password: string}) => {
  try {
    const res = await axios.post("http://localhost:3000/auth/login", userData);
    return res.data;
  } catch (error) {
    console.log("Ошибка при авторизации", error);
    throw error
  }
});
