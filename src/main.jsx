import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import CartProvider from "./context/cart.provider.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAjkDOwJnosI2CvYi8ze7AQec_GRZwEjaE",
  authDomain: "mailanguagelabecommerce.firebaseapp.com",
  projectId: "mailanguagelabecommerce",
  storageBucket: "mailanguagelabecommerce.appspot.com",
  messagingSenderId: "709342493209",
  appId: "1:709342493209:web:7a01cb2f85fd61ad2b8888",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
