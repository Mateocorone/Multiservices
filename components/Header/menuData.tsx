import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "menu.home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "menu.services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "menu.gallery",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "menu.aboutUs",
    newTab: false,
    path: "/docs",
  },
];

export default menuData;