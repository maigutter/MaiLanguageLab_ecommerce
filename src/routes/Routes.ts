interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  link?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    link: "/",
    label: "Inicio",
  },
  {
    link: "/coursesShop",
    label: "Shop",
  },
  {
    label: "Teachers",
    children: [
      {
        label: "Classes with Mai",
        link: "/teacher/Mai",
      },
      {
        label: "Classes with Sabri",
        link: "/teacher/Sabri",
      },
    ],
  },
  {
    label: "Types of Classes",
    children: [
      {
        label: "Individual Classes",
        link: "/category/individual",
      },
      {
        label: "Group Classes",
        link: "/category/group",
      },
      {
        label: "Thematic Group Classes",
        link: "/category/thematicGroup",
      },
    ],
  },
];

export default NAV_ITEMS;
