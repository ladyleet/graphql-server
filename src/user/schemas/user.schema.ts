import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true }
  },
  {
    timestamps: true
  }
);
