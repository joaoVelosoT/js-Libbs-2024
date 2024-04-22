// Comando fetch usando async/await
const main = document.getElementById("container");


async function getPets(){


const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
const personagens = await response.jn();
const data = personagens.results;

data.forEach(element => {
    const card = document.createElement("div");
    card.className= "card" 
    card.innerHTML =`
    <div class="name">
        <p>${element.name}</p>
    </div>
    <div class="img">
        <img src="${element.image}" alt="">
    </div>
    <div class="infos">
        <ul>
            <li>
                Species : ${element.species}
            </li>
            <li>
                Status : ${element.status}
            </li>
            <li>
                Gender : ${element.gender}
            </li>
            <li>
                Type :  ${element.type}
            </li>
            
        </ul>
        <!-- <p id="species">Human</p>
        <p id="status">Alive</p>
        <p id="gender">Male</p>
        <p id="type"></p> -->
    </div>
    </div>
    <br>`
    
    main.appendChild(card);
});


console.log(personagens.results)

}




getPets();