import { db } from "@/libs/supabase";

export async function getAttendanceDashboard(schoolId) {

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    /* ---------------- TOTAL STUDENTS ---------------- */

    const { count: totalStudents } = await db
        .from("students")
        .select("id", { count: "exact", head: true })
        .eq("school_id", schoolId);

    /* ---------------- ON TIME ---------------- */

    const { count: onTime } = await db
        .from("attendance_logs")
        .select(`
            id,
            students!inner (
                id,
                school_id
            )
        `, { count: "exact", head: true })
        .eq("students.school_id", schoolId)
        .eq("type", "on_time")
        .gte("created_at", todayStart.toISOString())
        .lte("created_at", todayEnd.toISOString());

    /* ---------------- LATE ---------------- */

    const { count: late } = await db
        .from("attendance_logs")
        .select(`
            id,
            students!inner (
                id,
                school_id
            )
        `, { count: "exact", head: true })
        .eq("students.school_id", schoolId)
        .eq("type", "late")
        .gte("created_at", todayStart.toISOString())
        .lte("created_at", todayEnd.toISOString());

    let incidents = 0;

    try {
        const { count } = await db
            .from("incidents")
            .select(`
                id,
                students!inner (
                    id,
                    school_id
                )
            `, { count: "exact", head: true })
            .eq("students.school_id", schoolId)
            .gte("created_at", todayStart.toISOString())
            .lte("created_at", todayEnd.toISOString());

        incidents = count || 0;
    } catch {
        incidents = 0;
    }

    return {
        totalStudents: totalStudents || 0,
        onTime: onTime || 0,
        late: late || 0,
        incidents
    };
}