import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
const initialState = {
  user: null,
  user_id: null,
  token: null,
  setAuthToken: () => {},
  setUserId: () => {},
  setUser: () => {},
  signup: () => {},
  login: () => {},
  logout: () => {},
};
