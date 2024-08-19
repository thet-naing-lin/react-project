import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");

const handleFetchBtn = () => {
  console.log("click");
  // const resp = fetch("http://localhost:5100/tasks");
  // console.log(resp);
  // console.log(resp.then((data) => console.log(data)));

  // fetch("http://localhost:5100/tasks")
  // .then((data) => console.log(data.text()));

  // fetch("http://localhost:5100/tasks")
  //   .then((res) => res.text())
  //   .then((data) => {
  //     console.log(typeof data);
  //     console.log(JSON.parse(data)); // convert json string to json
  //   });

  // fetch("http://localhost:5100/tasks")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  fetch("http://localhost:5100/tasks")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) =>
        console.log(data.title, " | ", data.description, " | ", data.status)
      );
    });

  // fetch("http://localhost:5100/tasks/3")
  // .then((res) => res.json())
  // .then((data) => console.log(data));

  // fetch("http://localhost:5100/tasks/1")
  // .then((res) => res.json())
  // .then((data) => console.log(data));

  // fetch("http://localhost:5100/tasks/5")
  // .then((res) => res.json())
  // .then((data) => console.log(data));

  // fetch("https://api.fastforex.io/fetch-all?api_key=696d6b56d1-4bf125dc84-sig2tq")
  //   .then((res) => res.json())
  //   .then((rate) => console.log(rate));

  // fetch("https://fakestoreapi.com/products")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // fetch("https://fakestoreapi.com/products/categories")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // fetch("https://fakestoreapi.com/products/category/jewelery")
  // .then(res => res.json())
  // .then(products => console.log(products))
};

fetchBtn.addEventListener("click", handleFetchBtn);
