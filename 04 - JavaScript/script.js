const nextpage = function () {
    window.location.href = "pokedex.html";
}
const backpage = function () {
    window.location.href = "index.html";
}
const namepokemon = document.getElementById("name");
const pokeId = document.getElementById("id");
const estadisticname = document.getElementById("title-estadistica");
const description = document.getElementById("description");

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage(".//img/not found it.png");
            pokeImage2(".//img/not found it.png");

            namepokemon.textContent = 'No encontrado';
            pokeId.textContent = '';
            body.style.background = '#fff';
            pokeTypes.innerHTML = '';
            pokeStats.innerHTML = '';
            pokeumberestadistics.innerHTML = '';
            description.textContent = '';
            estadisticname.innerHTML = '';

        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            let pokeImg = data.sprites.other.home.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeImg2 = data.sprites.other.home.front_default;
            pokeImage2(pokeImg2);
            console.log(pokeImg2);

            namepokemon.textContent = data.name;
            pokeId.textContent = `Nº ${data.id}`;

            const { stats, types } = data;

            setCardColor(types);
            pokemonTypes(types);
            pokemonStats(stats);
            pokemonNumber(stats);
            description.textContent = `The pokemon  ${data.name} has the id ${data.id}, it has a height of ${data.height} fts and weighs ${data.weight} kg. The pokemon name has some abilities that make it special, such as ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name} and ${data.abilities[2].ability.name}.`;
            estadisticname.innerHTML = '<p>HP</p> <p>Attack</p> <p>Defense</p> <p>Especial Attack</p> <p>Special Defence</p> <p>Speed</p>'

        }
    });
}
const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF4500',
    water: '#1E90FF',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#A9A9F5',
    fairy: '#A9F5D0',
    grass: '#00FA9A',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#7B68EE',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    dark: 'black',
    default: '#2A1A1F',
};
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
};
const pokeImage2 = (url) => {
    const pokePhoto2 = document.getElementById("pokeImg2");
    pokePhoto2.src = url;
};
const setCardColor = types => {
    //Se toma el elemento body por su id
    const body = document.getElementById("body");
    /*se declara una variable y esta se le iguala al arreglo typscolors luego se manda a llamar 
    el objeto types en el elemento primero se mete a su objeto type luego a el objeto nombre, para sacar el nombre del tipo del pokemon. */
    const colorOne = typeColors[types[0].type.name];

    /*se declara una variable y esta se le iguala a una pregunta, esta pregunta que si el objeto type tiene un segundo valor,
    luego se declara al arreglo typscolors luego se manda a llamar 
   el objeto types en el elemento primero se mete a su objeto type luego a el objeto nombre, para sacar el nombre del tipo del pokemon. */

    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;

    //Luego a la variable body se le declara un estilo y un fondo el cual tomara los dos colores que se obtuvieron anteriro mente.
    body.style.background = `${colorOne}`;
};

const pokeTypes = document.getElementById("tipos");
const pokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.backgroundColor = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const pokeStats = document.getElementById("barras");
const pokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statProgressAmount = document.createElement("progress");
        statProgressAmount.max = "100";
        statProgressAmount.value = stat.base_stat;
        statElement.appendChild(statProgressAmount);
        pokeStats.appendChild(statElement);
    });

}


const pokeumberestadistics = document.getElementById("numberestadistica");
const pokemonNumber = stats => {
    pokeumberestadistics.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statProgressNumber = document.createElement("p");
        statProgressNumber.textContent = stat.base_stat;
        statElement.appendChild(statProgressNumber);
        pokeumberestadistics.appendChild(statElement);
    });

} 