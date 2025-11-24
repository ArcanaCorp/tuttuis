import { REACT_API_URL } from "@/config.js";
import Cookies from "js-cookie";

const user = Cookies.get('tuttis_user');

export const serviceRegisterAssitence = async (token, dia, hora) => {
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