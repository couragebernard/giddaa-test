"use server"

import { loginType } from "@/schemas/auth";
import { fetchAPI } from "./fetch";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_KEY as string;

export async function Login(formData:loginType) {
const cookieStore = await cookies();
    const {email, password, type} = formData;
    const {data,error} = await fetchAPI({
        url: "https://dev-api.giddaa.com/account/login",
        method: "POST",
        body: {email,password,type},
      });

      if (error) {
        return {data:null, error}
      }

      // Generate a JWT token
  const token = jwt.sign({ token:data.value.value.token, id: data.value.value.user.id, email: data.value.value.user.email }, JWT_SECRET, {
    expiresIn: "3h", //3hours
  });

  // Set the cookie
  cookieStore.set("giddaatoken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 3, // 3 hours
  });

  return {data, error:null}


}

export async function loggedInUser() {
  const cookieStore = await cookies()
  try {
    const token = cookieStore.get("giddaatoken")?.value;
    if (!token) {
      return { data: null, error: "Unauthorized: Kindly log in first." };
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string; token: string };

    return {
      data: {
        id: decoded.id,
        email: decoded.email,
        token: decoded.token
      },
      error: null,
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { data: null, error: "Unauthorized: Invalid or expired session." };
  }
}