const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn-submit')
const info = document.getElementById('info')

btn.addEventListener('click', ()=> {
    const userData = JSON.stringify({
        email : email.value,
        password : password.value
    })
    //o token de acesso foi colocado manualmente no script do post
    fetch("http://10.92.198.38:8080/auth/signin", {
        method: "Post",
        body: userData,
        headers: {"Content-type" : "application/json; charset=UTF-8"}
    }).then(result => console.log(result.json())).then(data => console.log(data) ).catch(err => console.log(err));
})