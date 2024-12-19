import Cookies from "js-cookie";
import { UserState } from "./model/type";

export const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
  token: Cookies.get("token") || null
}