import { db } from "@/libs/supabase";
//[^]&ERPht4yO!F8w
export async function createSchool({ name, imageFile, userId }) {
    try {

        // 1️⃣ Crear colegio (code se genera por default en BD)
        const { data: school, error: schoolError } = await db
            .from('schools')
            .insert({ name })
            .select('*')
            .single();

        if (schoolError) throw schoolError;

        let logoUrl = null;

        // 2️⃣ Subir logo si existe
        if (imageFile) {

            const ext = imageFile.name.split('.').pop();
            const randomName = crypto.randomUUID();
            const filePath = `${school.id}/${randomName}.${ext}`;

            const { error: uploadError } = await db.storage
                .from('school')
                .upload(filePath, imageFile, {
                    upsert: false,
                    contentType: imageFile.type
                });

            if (uploadError) throw uploadError;

            const { data: publicData } = db.storage
                .from('school')
                .getPublicUrl(filePath);

            logoUrl = publicData.publicUrl;

            // 3️⃣ Guardar logo_url en schools
            const { error: updateError } = await db
                .from('schools')
                .update({ logo_url: logoUrl })
                .eq('id', school.id);

            if (updateError) throw updateError;
        }

        // 4️⃣ Asignar colegio al usuario admin
        const { error: userError } = await db
            .from('users')
            .update({ school_id: school.id })
            .eq('id', userId);

        if (userError) throw userError;

        return {
            school_id: school.id,
            code: school.code,
            logo_url: logoUrl
        };

    } catch (error) {
        console.error('[createSchool]', error);
        throw error;
    }
}