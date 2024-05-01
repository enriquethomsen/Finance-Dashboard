import {dashboard, expenses, trend} from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Übersicht',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "Einkommen",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Ausgaben",
        icon: expenses,
        link: "/dashboard",
    },
]