export type developerMenuItemsType = {
    name:string;
    icon:React.ReactElement;
    link:string;
    submenu?:{
        name:string;
        link:string
    }[]
}