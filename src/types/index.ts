import { ObjectId, Document } from "mongoose";
import { JwtPayload } from "jsonwebtoken";

export interface IUser {
  name: string;
  email: string;
  password: string;
  subscription: string;
  avatarURL: string;
  token: string | null;
  verify: boolean;
  verificationToken: string;
  isValidPassword: (passwod: string) => Promise<boolean>;
}

export interface IContact {
  name: string;
  email: string;
  password: string;
  phone: string;
  favorite: boolean;
  owner: ObjectId;
}

export interface ITransaction {
  type: "incoming" | "spending";
  category: string;
  sum: number;
  date: Date;
  owner: ObjectId;
  comment: string;
}

export interface UserDocument extends Document, IUser {}
export interface ContactDocument extends Document, IContact {}
export interface TransactionDocument extends Document, ITransaction {}

export type UserCredential = {
  email: string;
  password: string;
};

export type CustomJwtPayload = JwtPayload & {
  id: string;
};

export type Subscription = "starter" | "pro" | "business";
