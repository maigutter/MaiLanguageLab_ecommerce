interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/coursesShop",
    label: "Shop",
  },
  {
    label: "Teachers",
    children: [
      {
        label: "Classes with Mai",
        href: "/teacher/Mai",
      },
      {
        label: "Classes with Sabri",
        href: "/teacher/Sabri",
      },
    ],
  },
  {
    label: "Types of Classes",
    children: [
      {
        label: "Individual Classes",
        href: "/category/individual",
      },
      {
        label: "Group Classes",
        href: "/category/group",
      },
      {
        label: "Thematic Group Classes",
        href: "/category/thematicGroup",
      },
    ],
  },
];

export default NAV_ITEMS;
