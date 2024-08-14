import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rout from "./routes/router";

// const categories = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];

const root = document.querySelector("#root");

// render
createRoot(root).render(<RouterProvider router={rout} />);

// console.log(
//   categories.forEach((category) => createElement("button", null, category))
// );
// console.log(
//   categories.map((category) => createElement("button", null, category))
// );

// legacy react (old react)
// view - react node
// const app = createElement(
//   "div",
//   { id: "category-section", className: "p-5" },
//   createElement(
//     "p",
//     { className: "text-2xl text-gray-500 mb-4" },
//     "Product Categories"
//   ),
//   createElement(
//     "div",
//     null,
//     ...categories.map((category) =>
//       createElement(
//         "button",
//         { className: "border border-gray-500 rounded-md px-4 py-2 me-2" },
//         category
//       )
//     )
//   )
// );
// console.log(app);

// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-2xl", "text-gray-500", "mb-4");

// const categoryBtn = (categoryName) => {
//   const btn = document.createElement("button");
//   btn.innerText = categoryName;
//   btn.classList.add("border", "border-gray-500", "rounded-md", "px-4", "py-2", "me-2");
//   return btn;
// };

// root.append(title);
// categories.forEach((category) => root.append(categoryBtn(category)));
