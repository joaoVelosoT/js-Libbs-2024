// document.write('ola...');

// //nomes = ["João", 17, {"Rua Maria"}];

// var nomes = new Array();

// nomes[0] = "joao";

// nomes.push(2006);
// nomes.push(2005);
// nomes.push(2004);
// nomes.push(2003);
// nomes.push(2002);

// document.write(nomes.indexOf(2002));

// var nomesAll = ["Kevin","Ana","Joao","Aninha","Elefante", "Juca"];

// console.log(nomesAll.sort());
// //document.write(nomesAll);

// for (let index = 0; index < nomesAll.length; index++) {
//     const element = nomesAll[index];
//    // console.log(element);
// }

// nomesAll.forEach(nome => {
//     //console.log(nome);
// }); 

// const container = document.getElementById("container")
// const title = document.getElementById("title")

// title.innerText = "Juca Bala";

// container.innerHTML = "<h3>Deu certo?</h3>";
// container.innerHTML = "<h3>Deu certo?</h3>";

// console.log(container)
// console.log(title)

const container = document.getElementById("container");

//simular dados de um servidor 
//essa forma não será a forma final - apenas didática

var array = [1,2,3,4,5];

var myCard =`
<div class="card">
            <img src="imagens/um-tenis-preto-isolado-no-branco.jpg" alt="">
            <div class="texto">
                <h3>tenis basico</h3>
            <p>Tênis Bouncer com solado chunky!</p>
            <h4>R$40,00</h4>
            
            </div>
            <button>comprar</button>
        </div>
        `;

    for (let index = 0; index < array.length; index++) {
        container.innerHTML =  myCard + myCard + myCard+ myCard;

    }

