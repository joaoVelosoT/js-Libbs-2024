// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// //Para "ouvir" o click do botão usamos o addEventListener
// const btnSubmit = document.getElementById("btn");



// btnSubmit.addEventListener('click', function (event) {
//     //nao deixa o formulario se comportar como padrao
//     //ou seja, enviar os dados para proxima pagina/requisiçao 
//     event.preventDefault();
//     console.log("Cliquei !!!!!!!")
//     console.log(fname.value);
//     console.log(lname.value);
// });

const name = document.getElementById("name");
const adress = document.getElementById("adress");
const email = document.getElementById("email");
const phone = document.getElementById("phone")
const btnSubmit = document.getElementById("btn");

//Criar uma lista sozinha
const data = []
//Craindo uma acao ao clicar no botao
btnSubmit.addEventListener('click', function (event){
    event.preventDefault();
    const pessoa = {
        name: name.value,
        adress: adress.value,
        email: email.value,
        phone: phone.value,
    
   favoritos: [
        {
            titulo: "A nova casa",
            autor: "Juca Bala",
            ano: 2025,
            genero: "Aventura"
        }
    ]
    
    }   
    data.push(pessoa);
    console.log(pessoa.favoritos);  
    console.log(data);
})  

console.log("edukk")