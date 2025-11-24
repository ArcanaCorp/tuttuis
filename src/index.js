import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/routers";
import { Providers } from "@/app/providers";

import '@/shared/css/global.css'
import '@/shared/css/class.css'

createRoot(document.getElementById('root')).render(
    <>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </>
)