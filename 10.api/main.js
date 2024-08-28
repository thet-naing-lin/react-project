import "./style.css";
// import "./node_modules/flowbite/dist/flowbite"

const fetchBtn = document.querySelector("#fetchBtn");
const app = document.querySelector("#app");
const taskTable = document.querySelector("#taskTable");
const tableBody = document.querySelector("#tableBody");
const taskRowTemplate = document.querySelector("#taskRowTemplate");

const createRow = (tasks) => {
  tasks.forEach(({ title, description, status }) => {
    const taskRow = taskRowTemplate.content.cloneNode(true);

    const taskTitle = taskRow.querySelector("#task-title");
    const taskDescription = taskRow.querySelector("#task-description");
    const taskStatus = taskRow.querySelector("#task-status");

    taskTitle.innerText = title;
    taskDescription.innerText = description;
    taskStatus.innerText = status;

    tableBody.append(taskRow);
  });
};

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

const handleFetchBtn = async () => {
  console.log("click");

  // const resp1 = await fetch("https://fakestoreapi.com/products/1");
  // // console.log(resp1);
  // const data1 = await resp1.json();
  // console.log(data1);

  // const resp2 = await fetch("https://fakestoreapi.com/products/2");
  // const data2 = await resp2.json();
  // console.log(data2);

  // const resp3 = await fetch("https://fakestoreapi.com/products/3");
  // const data3 = await resp3.json();
  // console.log(data3);

  // const resp4 = await fetch("https://fakestoreapi.com/products/4");
  // const data4 = await resp4.json();
  // console.log(data4);

  // const resp5 = await fetch("https://fakestoreapi.com/products/5");
  // const data5 = await resp5.json();
  // console.log(data5);

  // const resp = fetch("https://fakestoreapi.com/products/1");
  // const data = resp.then((data) => data.text())
  // data.then((result) => console.log(JSON.parse(result)))

  // fetch("https://fakestoreapi.com/products/1")
  //   .then((res) => res.json())
  //   .then((products) => {
  //     console.log(products);
  //     fetch("https://fakestoreapi.com/products/2")
  //       .then((res) => res.json())
  //       .then((products) => {
  //         console.log(products);
  //         fetch("https://fakestoreapi.com/products/3")
  //           .then((res) => res.json())
  //           .then((products) => {
  //             console.log(products);
  //             fetch("https://fakestoreapi.com/products/4")
  //               .then((res) => res.json())
  //               .then((products) => {
  //                 console.log(products);
  //                 fetch("https://fakestoreapi.com/products/5")
  //                   .then((res) => res.json())
  //                   .then((products) => console.log(products));
  //               });
  //           });
  //       });
  //   });

  const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const val = Math.floor(Math.random() * 10);
      console.log(val);

      if (val > 5) {
        resolve(val);
      } else {
        reject(val);
      }
    }, 1000);
  })

  p.then(
    function (x) {
      console.log(x, "success");
    },
    function (y) {
      console.log(y, "fail");
    }
  );

  // console.log(p);

  p.catch((e) => {
    console.log(e);
  })

  // p.finally(() => {
  //   console.log("finish");
  // })

  // let x = 0;

  // const p = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(5);
  //   }, 1500);
  // });

  // p.then((data) => {
  //   x = data;
  //   console.log(x);
  //   console.log(x = 5 ? "good" : "bad");
  // })

  // let x = 0;

  // setTimeout(() => {
  //   x = 5;
  // },100);

  // console.log(x);

  // sync
  // console.log("a");
  // console.log("b");
  // console.log("c");

  // async
  //  fetch("https://fakestoreapi.com/products/1")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // fetch("https://fakestoreapi.com/products/2")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // fetch("https://fakestoreapi.com/products/3")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // fetch("https://fakestoreapi.com/products/4")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // fetch("https://fakestoreapi.com/products/5")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // lone time sync process (ကြာနေလို့ async ဖစ်တာမဟုတ်ကြောင်းပြတာာပါ)
  // console.log("start");
  // let x = 0;
  // for (let i = 0; i < 999999999; i++) {
  //   x += i;
  // }
  // console.log(x);

  //  fetch("https://fakestoreapi.com/products/1")
  // .then(res => res.json())
  // .then(products => console.log(products))

  // setTimeout(() => {
  //   console.log("hello");
  // }, 1000);

  // console.log("end");

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

  // fetch("http://localhost:5100/tasks")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // data.forEach((data) =>
  //     //   console.log(data.title, " | ",x data.description, " | ", data.status)
  //     // );
  //     createRow(data);
  //   });

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
