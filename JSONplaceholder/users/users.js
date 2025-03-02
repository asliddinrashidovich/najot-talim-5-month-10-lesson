const ul = document.querySelector('ul');
let API = "https://jsonplaceholder.typicode.com/users";
    
async function getData() {
    const res = await fetch(API);
    const data = await res.json();
    setData(data)
} 
getData();

function setData(data) {
    data.map((item, i) => {
        ul.innerHTML += `
            <a href="user.html?id=${item.id}" class="bg-blue-500 inline-block w-full  capitalize py-3 pl-4 text-white rounded-[10px] mb-2 cursor-pointer active:bg-blue-600" ><span>${item.id} -</span> ${item.name}</a>
        `
    }) 
}