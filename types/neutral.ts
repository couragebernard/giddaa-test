// export type neutralMenuItemsType = {
//     name:string;
//     link:string;
//     submenu?:{
//         name:string;
//         link:string
//     }[]
// }

export type menuItemsType = {
    name: string;
    icon?: React.ReactElement;
    link: string;
    submenu?: {
      name: string;
      link: string;
    }[];
  };