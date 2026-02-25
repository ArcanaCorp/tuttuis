import { db } from "@/libs/supabase";

export async function getStudents() {
    const { data } = await db
        .from("students")
        .select("*")
        .order("created_at", { ascending: false });

    return data;
}

export async function createStudent(student) {
    const { error } = await db.from("students").insert(student);
    if (error) throw error;
}

export async function uploadStudentsBulk(students) {

    const { error } = await db
        .from("students")
        .insert(students);
    if (error) throw error;
}