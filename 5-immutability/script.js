const products = [
  {
    id: 1,
    name: "Apple MacBook Pro",
    price: 1999,
    stock: 25,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    stock: 50,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: 349,
    stock: 100,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 1199,
    stock: 15,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Apple iPad Pro",
    price: 999,
    stock: 30,
    rating: 4.8,
  },
];

const newProduct = {
  id: 6,
  name: "Apple Watch",
  price: 399,
  stock: 10,
  rating: 4.8,
};

// add
// const arr = [...products, newProduct];

// remove
// const arr = products.filter( el => el.id !== 4)

// update
// const arr = products.map((el) => {
//     if (el.id === 3) {
//         return {...el, stock : el.stock + 900};
//     }

//     return el;
// })

const arr = products.map((el) => {
  return { ...el, price: el.price + 100 };
});

console.table(products);
console.table(arr);

// const macBook = {
//   name: "Apple M1",
//   architecture: "ARM-based",
//   releaseYear: 2020,
// };

// mutable
// macBook.color = "silver";

// immutable add
// const obj = { ...macBook, color: "silver", price: 1000 };

// immutable remove
// const { architecture, ...obj } = macBook;

// immutable update (same with add)
// const obj = { ...macBook, name: "M2", releaseYear: 2021, price: 1000 };

// console.log(macBook);
// console.log(obj);

// const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Grapes"];

// immutable add
// const arr = [...fruits, "Kiwi"];

// immutable remove
// const arr = fruits.filter( el => el !== "Grapes");

// immutable update
// const arr = fruits.map( el => el === "Apple" ? "Papaya" : el);

// console.log(fruits);
// console.log(arr);
