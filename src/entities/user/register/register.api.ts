import axios from "axios";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const res = await axios.post("http://localhost:3000/register", data);
    return res.data;
  } catch (error) {
    console.error("Ошибка при регистрации", error);
    throw error;
  }
};
