const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementsByClassName("form")[0];
const info = document.getElementById('info')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const userData = JSON.stringify({
        name : name.value,
        email : email.value,
        password : password.value
    })
    
    console.log("Cadastro Feito com sucesso")
    
    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "Post",
        body: userData,
        headers: {"Content-type" : "application/json; charset=UTF-8"}
    }).then(result => result.json()).then(data => info.innerText = data.message  ).catch(err => console.log(err));
})

