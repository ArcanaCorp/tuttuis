import { db } from "@/libs/supabase";

export const createAccount = async ({ fullname, email, phone, password }) => {
    
    try {

        const { data, error } = await db.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullname,
                    phone: phone
                }
            }
        });

        if (error) throw error;

        if (data.user) {
            const { error: updateError } = await db
                .from("users")
                .update({
                    full_name: fullname,
                    phone,
                    role: "admin",
                    is_active: true,
                })
                .eq("id", data.user.id);

            if (updateError) throw updateError;
        }

        return { ok: true, user: data.user };

    } catch (error) {
        console.error("createAccount error:", error);
        return { ok: false, message: error.message, code: error.code || 500 };
    }
};

export async function loginWithEmail(email, password) {
    const { data, error } = await db.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data.session;
}

export async function getSession() {
    const { data } = await db.auth.getSession();
    return data.session;
}

export function onAuthChange(callback) {
    return db.auth.onAuthStateChange((_event, session) => {
        callback(session);
    });
}

export async function signOut() {
    await db.auth.signOut();
}

/* ---------------- USER ---------------- */

export async function fetchUserWithSchool(userId) {
    const { data, error } = await db
        .from("users")
        .select(`
            id,
            full_name,
            email,
            role,
            school_id,
            schools (
                id,
                name,
                code,
                logo_url
            )
        `)
        .eq("id", userId)
        .single();

    if (error) throw error;

    return {
        ...data,
        school: data.schools || null
    };
}