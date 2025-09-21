import { z } from "zod";

export const newStaffSchema = z.object({
  Fname: z.string().min(1).trim(),
  Lname: z.string().min(1).trim(),
  Role: z.string().min(1).trim(),
  email: z.string().email().toLowerCase().trim(),
  password: z.string().min(8, "Password must be at least 8 characters"),
}).strict();

export const updateStaffSchema = z.object({
  Fname: z.string().min(1).trim().optional(),
  Lname: z.string().min(1).trim().optional(),
  Role: z.string().min(1).trim().optional(),
  email: z.string().email().toLowerCase().trim().optional(),
  password: z.string().min(8).optional(),
}).strict();

export type NewStaffInput = z.infer<typeof newStaffSchema>;
export type UpdateStaffInput = z.infer<typeof updateStaffSchema>;
