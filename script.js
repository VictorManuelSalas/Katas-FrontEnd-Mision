
const namepokemon = document.getElementById("name");
const pokeId = document.getElementById("number");

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif");

            namepokemon.textContent = 'No encontrado';
            pokeId.textContent = '';
            body.style.background = '#fff';
            pokeTypes.innerHTML = '';
            pokeStats.innerHTML = '';
            
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

            namepokemon.textContent = data.name;
            pokeName.textContent = data.name;
            pokeId.textContent = `Nº ${data.id}`;

            const { stats, types } = data;

            setCardColor(types);
            pokemonTypes(types);
            pokemonStats(stats);

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
    flying: '#F0FFFF',
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
    body.style.backgroundSize = ' 5px 5px';
};

const pokeTypes = document.getElementById("tipo");
const pokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const pokeStats = document.getElementById("estadistica");
const pokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        const statProgressAmount = document.createElement("progress");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statProgressAmount.max = "100";
        statProgressAmount.value = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        statElement.appendChild(statProgressAmount);
        pokeStats.appendChild(statElement);
    });

}