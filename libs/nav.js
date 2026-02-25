import { IconCalendar, IconClock, IconHome, IconReportAnalytics, IconSettings2, IconUsers } from "@tabler/icons-react";

export const adminRoutes = [
    {
        url: '/dashboard',
        txt: 'Inicio',
        ico: <IconHome/>
    },
    {
        url: '/dashboard/students',
        txt: 'Estudiantes',
        ico: <IconUsers/>
    },
    {
        url: '/dashboard/events',
        txt: 'Eventos',
        ico: <IconCalendar/>
    },
    {
        url: '/dashboard/reports',
        txt: 'Reportes',
        ico: <IconReportAnalytics/>
    },
    {
        url: '/dashboard/settings',
        txt: 'Configuración',
        ico: <IconSettings2/>
    }
]

export const auxiliaryRoutes = [
    {
        url: '/dashboard',
        txt: 'Inicio',
        ico: <IconHome/>
    },
    {
        url: '/dashboard/history',
        txt: 'Historial',
        ico: <IconClock/>
    },
    {
        url: '/dashboard/settings',
        txt: 'Configuración',
        ico: <IconSettings2/>
    }
]