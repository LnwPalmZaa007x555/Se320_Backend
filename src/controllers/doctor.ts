import { Request, Response } from "express";
import { supabase } from "../supabaseClient";
import { newDoctorSchema, updateDoctorSchema } from "../schemas/doctor.schema";
import type { Doctor, NewDoctor, UpdateDoctor } from "../types/doctor";

// GET /api/doctor
export async function getDoctors(_req: Request, res: Response) {
  try {
    const { data, error } = await supabase
      .from("Doctor")
      .select("*")
      .order("Doctor_id", { ascending: true })
      .returns<Doctor[]>();

    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: String(e?.message || e) });
  }
}

// (ทางเลือก) GET /api/doctor/with-staff  — รวมข้อมูล Staff ด้วย
export async function getDoctorsWithStaff(_req: Request, res: Response) {
  try {
    const { data, error } = await supabase
      .from("Doctor")
      .select(`
        Doctor_id,
        Staff_Id,
        Staff:Staff_Id ( Staff_Id, Fname, Lname, email, Role )
      `);

    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: String(e?.message || e) });
  }
}

// GET /api/doctor/:id
export async function getDoctorById(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: "Invalid Doctor_id (must be a number)" });
  }

  try {
    const { data, error } = await supabase
      .from("Doctor")
      .select("*")
      .eq("Doctor_id", id)
      .single()
      .returns<Doctor>();

    if (error) return res.status(404).json({ error: error.message });
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: String(e?.message || e) });
  }
}

// POST /api/doctor
export async function createDoctor(req: Request, res: Response) {
  try {
    const payload = newDoctorSchema.parse(req.body) as NewDoctor;

    // (ทางเลือก) ตรวจว่า Staff_Id มีอยู่จริง
    // const { data: staff, error: staffErr } = await supabase
    //   .from("Staff").select("Staff_Id").eq("Staff_Id", payload.Staff_Id).maybeSingle();
    // if (staffErr) return res.status(500).json({ error: staffErr.message });
    // if (!staff)  return res.status(400).json({ error: "Staff_Id not found" });

    const { data, error } = await supabase
      .from("Doctor")
      .insert(payload)
      .select("*")
      .single()
      .returns<Doctor>();

    if (error) return res.status(400).json({ error: error.message });
    return res.status(201).json(data);
  } catch (e: any) {
    if (e?.name === "ZodError") return res.status(400).json({ error: e.flatten() });
    return res.status(500).json({ error: String(e?.message || e) });
  }
}

// PUT /api/doctor/:id
export async function updateDoctorById(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: "Invalid Doctor_id (must be a number)" });
  }

  try {
    const patch = updateDoctorSchema.parse(req.body) as UpdateDoctor;

    const { data, error } = await supabase
      .from("Doctor")
      .update(patch)
      .eq("Doctor_id", id)
      .select("*")
      .single()
      .returns<Doctor>();

    if (error) return res.status(400).json({ error: error.message });
    return res.json(data);
  } catch (e: any) {
    if (e?.name === "ZodError") return res.status(400).json({ error: e.flatten() });
    return res.status(500).json({ error: String(e?.message || e) });
  }
}

// DELETE /api/doctor/:id
export async function deleteDoctorById(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!Number.isFinite(id)) {
    return res.status(400).json({ error: "Invalid Doctor_id (must be a number)" });
  }

  try {
    const { error } = await supabase
      .from("Doctor")
      .delete()
      .eq("Doctor_id", id);

    if (error) return res.status(500).json({ error: error.message });
    return res.json({ ok: true, message: `Doctor ${id} deleted` });
  } catch (e: any) {
    return res.status(500).json({ error: String(e?.message || e) });
  }
}
