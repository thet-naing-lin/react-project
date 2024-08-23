import "./style.css";
// import "./node_modules/flowbite/dist/flowbite"

const fetchBtn = document.querySelector("#fetchBtn");
const app = document.querySelector("#app");
const taskTable = document.querySelector("#taskTable");
const tableBody = document.querySelector("#tableBody");
const taskRowTemplate = document.querySelector("#taskRowTemplate");

const createRow = (tasks) => {
  tasks.forEach(({title, description, status}) => {
      const taskRow = taskRowTemplate.content.cloneNode(true);

      const taskTitle = taskRow.querySelector("#task-title");
      const taskDescription = taskRow.querySelector("#task-description");
      const taskStatus = taskRow.querySelector("#task-status");

      taskTitle.innerText = title;
      taskDescription.innerText = description;
      taskStatus.innerText = status;

      tableBody.append(taskRow);
  })
}

// const showTasks = (tasks) => {
//   tasks.forEach((task) => {
//     // console.log(task);
//     const body = document.createElement("tbody");
//     body.innerHTML = `<tr
//               class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
//             >
//               <th
//                 scope="row"
//                 class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//               >
//                ${task.title}
//               </th>
//               <td class="px-6 py-4">${task.description}</td>
//               <td class="px-6 py-4">${task.status}</td>
//             </tr>`;
//     taskTable.append(body);
//   });
// };

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
      // data.forEach((data) =>
      //   console.log(data.title, " | ",x data.description, " | ", data.status)
      // );
      createRow(data);
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
