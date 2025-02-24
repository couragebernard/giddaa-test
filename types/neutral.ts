export type menuItemsType = {
    name:string;
    link:string;
    submenu?:{
        name:string;
        link:string
    }[]
}