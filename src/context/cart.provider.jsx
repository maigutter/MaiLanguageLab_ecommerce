import { useState } from "react";
import CartContext from "./cart.context";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    courses: [],
    total: 0,
  });

  const addItem = (course, quantity, toast) => {
    if (course.stock >= quantity) {
      const { courses } = cart;
      const index = courses.findIndex((i) => i.course.id === course.id);

      if (index > -1) {
        if (courses[index].quantity + quantity <= course.stock) {
          toast({
            title: "Added to the cart!",
            description: "Tu producto ha sido agregado al carrito",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          courses[index].quantity += quantity;
        } else {
          toast({
            title: "No More Spots Available",
            description:
              "There aren't enough spots available for this quantity, sorry!",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        courses.push({
          course,
          quantity,
        });
      }

      setCart({
        ...cart,
        courses,
        total: getTotal(courses),
      });
    } else {
      toast({
        title: "No More Spots Available",
        description:
          "There aren't any more spots available in this course, sorry!",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const removeItem = (courseId) => {
    const { courses } = cart;
    const index = courses.findIndex((item) => item.course.id === courseId);

    if (index > -1) {
      courses.splice(index, 1);
    }

    setCart({
      ...cart,
      courses,
      total: getTotal(courses),
    });
  };

  const clear = () => {
    setCart((prevValues) => ({
      ...prevValues,
      courses: [],
      total: 0,
    }));
  };

  const getTotal = (courses) => {
    return courses.reduce(
      (acc, item) => acc + item.quantity * item.course.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
