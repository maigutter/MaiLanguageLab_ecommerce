import { useState } from "react";
import CartContext from "./cart.context";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const addItem = (course, quantity) => {
    const { courses } = cart;
    const index = courses.findIndex((i) => i.course.id === course.id);

    if (index > -1) {
      courses[index].quantity += quantity;
    } else {
      courses.push({
        course,
        quantity,
      });
    }

    setCart({
      ...cart,
      courses,
      total: getTotal(),
    });
  };

  const removeItem = (courseId) => {
    const { courses } = cart;
    const index = courses.findIndex((i) => i.course.id === courseId);

    if (index > -1) {
      courses.splice(index, 1);
    }

    setCart({
      ...cart,
      courses,
    });
  };

  const clear = () => {
    setCart((prevValues) => ({
      ...prevValues,
      courses: [],
      total: 0,
    }));
  };

  const getTotal = () => {
    const { courses } = cart;
    return courses.reduce(
      (acc, course) => acc + course.quantity * course.course.price,
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
