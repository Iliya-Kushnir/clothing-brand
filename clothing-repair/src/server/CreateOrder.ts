"use server";
import { createAdminClient } from "@/lib/server/server"; // Укажите ваш путь к этому файлу

export const createOrder = async (formData: FormData) => {
    const name = formData.get("client_name") as string;
    const phone = formData.get("phone") as string;
    const modelOfWatch = formData.get("watch_model") as string;
    const problemDescription = formData.get("description") as string;
    const file = formData.get("file") as File | null;

    // Используем готовый админ-клиент, который обходит RLS
    const supabaseAdmin = createAdminClient();

    let imageUrl = null;

    if (file && file.size > 0) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabaseAdmin.storage
            .from('order-photos')
            .upload(filePath, file);

        if (uploadError) throw new Error("Ошибка загрузки фото: " + uploadError.message);

        const { data: { publicUrl } } = supabaseAdmin.storage
            .from('order-photos')
            .getPublicUrl(filePath);
        
        imageUrl = publicUrl;
    }

    const { data: newOrder, error } = await supabaseAdmin
        .from('orders')
        .insert([
            {
                client_name: name,
                phone: phone,
                watch_model: modelOfWatch,
                description: problemDescription,
                image_url: imageUrl,
            }
        ])
        .select()
        .single();

    if (error) throw new Error(error.message);

    return newOrder;
}