import { IconHome, IconReport, IconScan, IconSearch, IconUserCircle } from "@tabler/icons-react"

export const REACT_API_URL = 'https://college.ttutis.com/api/v1'

export const tabs = [
    {
        link: '/dashboard',
        tab: 'Inicio',
        ico: <IconHome/>
    },
    {
        link: '/dashboard/reports',
        tab: 'Reportes',
        ico: <IconReport/>,
    },
    {
        link: '/dashboard/scan',
        tab: 'Escaner',
        ico: <IconScan/>
    },
    {
        link: '/dashboard/search',
        tab: 'Buscar',
        ico: <IconSearch/>
    },
    {
        link: '/dashboard/account',
        tab: 'Cuenta',
        ico: <IconUserCircle/>
    }
]