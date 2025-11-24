import { REACT_API_URL } from "@/config.js";

export const login = async (email, passw) => {

    if (!email || !passw) return { ok: false, message: 'Datos incompletos', error: 'NOT_FOUND', code: 404 }

        try {
            
            const response = await fetch(`${REACT_API_URL}/responsible/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({email, passw})
            })

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || response.statusText);
                
                return data;

        } catch (error) {
            console.error(error);
            return { ok: false, message: `Fatal: ${error.message}`, error: 'BAD_REQUEST', code: 500 }
        }

}