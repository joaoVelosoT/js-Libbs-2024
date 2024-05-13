const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById("btn-submit");

btn.addEventListener('click', () =>{
    console.log(name.value)
    console.log(email.value)
    console.log(password.value)

    const userData = JSON.stringify({
        name : name.value,
        email : email.value,
        password : password.value
    })
    
    
    
    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "Post",
        body: userData,
        headers: {"Content-type" : "application/json; charset=UTF-8"}
    }).then(result => result.json()).then(data => console.log(data) ).catch(err => console.log(err));
})

