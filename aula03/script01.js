const h1 = document.querySelectorAll("h1");
const p = document.querySelectorAll("p");
const input = document.querySelectorAll("input");
const button = document.querySelectorAll("button");
const ul = document.querySelectorAll("ul");


h1.forEach(item => console.log(item.innerHTML));
p.forEach(item => console.log(item.innerHTML));
input.forEach(item => console.log(item.innerHTML));
button.forEach(item => console.log(item.innerHTML));
ul.forEach(item => console.log(item.innerHTML));


console.log(h1.length);
console.log(p.length);
console.log(input.length);
console.log(button.length);
console.log(ul.length);
