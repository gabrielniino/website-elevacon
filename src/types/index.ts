export interface MenuItem {
    label: string
    href: string
    hasSubmenu?: boolean
    submenu?: Array<{ label: string; href: string }>
}