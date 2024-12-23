import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const categoryThunk = createAsyncThunk(
  "categoryThunk",
  async (categoryData: { title: string }) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/category",
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("Ошибка", error);
    }
  }
);

export const categoryAll = createAsyncThunk("categoryAll", async () => {
  try {
    const res = await axios.get("http://localhost:3000/category", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("Ошибка 2", error);
  }
});

export const deleteCategory = createAsyncThunk('deleteCategory', async (id: number) => {
  try {
    const res = await axios.delete(`http://localhost:3000/category/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  } catch (error) {
    console.log('Ошибка 3', error);
    
  }
})