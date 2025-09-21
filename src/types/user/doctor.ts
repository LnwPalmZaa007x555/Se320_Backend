export interface Doctor {
  Doctor_id: number; // PK (int8)
  Staff_Id: number;  // FK -> Staff.Staff_Id
}

export type NewDoctor = Omit<Doctor, "Doctor_id">;
export type UpdateDoctor = Partial<NewDoctor>;
