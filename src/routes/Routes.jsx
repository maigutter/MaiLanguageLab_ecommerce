const categories = ["individual", "group", "thematicGroup"];
const teachers = ["Mai", "Sabri"];

const categoryRoutes = categories.map((category) => ({
  path: `/category/${category}`,
  name: `${category}`,
}));

const teacherRoutes = teachers.map((teacher) => ({
  path: `/teacher/${teacher}`,
  name: ` Classes with ${teacher}`,
}));

const Navbar_Routes = [
  {
    path: "/",
    name: "Inicio",
  },
  {
    path: "/coursesShop",
    name: "Shop",
  },
  ...categoryRoutes,
  ...teacherRoutes,
  {
    path: "/checkout",
    name: "Checkout",
  },
  {
    path: "/register",
    name: "Sing Up",
  },
];

export default Navbar_Routes;
