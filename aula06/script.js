const main = document.getElementById("principal");





const myCards = [
    {
        image: "imagens/o-que-fazer-em-gramado-e-canela.jpg" ,
        text: "New York"
    },
    
    
]

// myItems.forEach(item => {
//     const meuH1 = document.createElement('h1');
//     meuH1.innerText = item.text;
//     meuH1.style.color = item.color;
//     main.appendChild(meuH1);
// });

myCards.forEach(cards => {
    // //Criando a div01 e colocando a classe nela
    // const meuCard = document.createElement('div');
    // meuCard.classList.add("w3-card-4 w3-margin");
    // //Criando a div02 e colocando a classe nela
    // const div02 = document.createElement('div');
    // div02.classList.add("w3-display-container");
    // //Adicionando a div02 dentro da div01
    // meuCard.appendChild(div02);
    // //Criando a imagem e adicionando ela dentro da div div02
    // const image = document.createElement('img')
    
    // div02.appendChild(image);
    // //Criando a divTextoCidade e adicionando ela dento da div02
    // const divTextoCidade = document.createElement('div');
    // div02.appendChild(divTextoCidade);
    // divTextoCidade.classList.add("textoCidade")


    // main.appendChild(meuCard);

    //Criando a div principal
    myCards.forEach(cards => {
        const principalDiv = document.createElement('div')
        principalDiv.classList.add("principalDiv")
        main.appendChild(principalDiv);
        //Criando a div secundaria
        const secundariaDiv = document.createElement('div')
        secundariaDiv.classList.add("secundaria");
        principalDiv.appendChild(secundariaDiv);
        //Adicionando a imagem e o nome da cidade
        const imagemCidade = document.createElement('img');
        imagemCidade.src = cards.image;
        imagemCidade.classList.add("imagem")
        secundariaDiv.appendChild(imagemCidade);

        //Adicionando o nome da cidade
        const nomeCidade = document.createElement('div');
        nomeCidade.classList.add("nome");
        nomeCidade.innerText = cards.text
        secundariaDiv.appendChild(nomeCidade);

        //Criando a div w3-row
        const w3Rom = document.createElement('div');
        w3Rom.classList.add("w3-row");
        principalDiv.appendChild(w3Rom);
        //Criando div1
        const div1 = document.createElement('div');
        div1.classList.add("div1");
        w3Rom.appendChild(div1)
        //Criando o h3Div1
        const h3Div1 = document.createElement('h3');
        h3Div1.innerText = "SEG"
        div1.appendChild(h3Div1);
        //Criando imgSol
        const imgSol = document.createElement('img');
        imgSol.classList.add("imgSol");
        imgSol.src = "imagens/sol 1.png"
        div1.appendChild(imgSol);
        //Criando div2
        const div2 = document.createElement('div');
        div2.classList.add("div1")
        w3Rom.appendChild(div2);
        //Criando o h3Div2
        const h3Div2 = document.createElement('h3');
        h3Div2.innerText = "TER"
        div2.appendChild(h3Div2);

    });
    
});