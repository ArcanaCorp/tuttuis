import { REACT_API_URL } from "@/config.js";
import Cookies from "js-cookie";


export const serviceRegisterAssitence = async (token, dia, hora) => {
    const user = Cookies.get('tuttis_user');
    if (!user) return {ok: false, message: 'No se recibió el token', error: 'NOT_FOUND', status: 'NOT_FOUND', code: 404}
        try {
            const response = await fetch(`${REACT_API_URL}/student/assistence`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${user}`
                },
                body: JSON.stringify({token, dia, hora})
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.message || response.statusText);
                return data;
        } catch (error) {
            return { ok: false, message: `Error: ${error.message}`, error: error, status: 'SERVER_ERROR', code: 500 }
        }
}