export interface Admin {
  Admin_Id: number;  // PK (int8)
  Staff_Id: number;  // FK -> Staff.Staff_Id
}

export type NewAdmin = Omit<Admin, "Admin_Id">;
export type UpdateAdmin = Partial<NewAdmin>;
