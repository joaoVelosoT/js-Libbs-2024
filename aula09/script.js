const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const city = document.getElementById("city");
const state = document.getElementById("state");
const senha = document.getElementById("senha");
const btn = document.getElementById("btn-submit");
const info = document.getElementById("info");
btn.addEventListener('click', () =>  {

console.log(name.value)
console.log(phone.value)
console.log(email.value)
console.log(city.value)
console.log(state.value);



const userData = JSON.stringify({
    name: name.value,
    phone : phone.value,
    email : email.value,
    password : senha.value,
    city :  city.value,
    state : state.value,
    image : "",
})

fetch("http://10.92.198.38:3001/signup", {
    method: "Post",
    body: userData,
    headers: {"Content-type" : "application/json; charset=UTF-8"}
}).then(result => result.json()).then(data => info.innerText = data.message ).catch(err => info.innerText = err.error);
})  