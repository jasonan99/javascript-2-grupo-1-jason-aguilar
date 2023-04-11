const pokemonSelect = document.getElementById('pokemonSelect');
const pokemonDetail = document.getElementById('pokemon-detail');

async function pokeApp() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=110&limit=100");
  const data = await response.json();
  pokeList(data.results);
}

pokeApp();

function pokeList(pokemon) {
  pokemonSelect.innerHTML = `<option class="select">Choose a Pokemon</option>`;
  pokemon.forEach(element =>
    pokemonSelect.innerHTML +=
    `<option>${element.name}</option>`);

  pokemonSelect.addEventListener('change', () => {
    let pokemonName = pokemonSelect.value;
    selectPokemon(pokemonName);
  })
}

async function selectPokemon(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();
  showPokemon(data);
}

function showPokemon(pokemon) {
  pokemonDetail.innerHTML =
    `<div class="card">
      <div class="card-header">
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
      </div>
      <div class="card-body">
        <div class="type">
          <span class="tag tag-${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
        </div>
        <h3>${pokemon.name.toUpperCase()}</h3>
        <div>
          <p><span>Abilities:<span> ${pokemon.abilities.map((element) => {return `<p>${element.ability.name}</p>`}).join(', ')}.</p>
        </div>
        <div class="stat">
          <div class="tak"><span>Height:</span> ${pokemon.height}</div>
          <div class="tak"><span>Weight:</span> ${pokemon.weight}</div>
          <div class="tak"><span>Hp:</span> ${pokemon.stats[0].base_stat}</div>
          <div class="tak"><span>Attack:</span> ${pokemon.stats[1].base_stat}</div>
          <div class="tak"><span>Defense:</span> ${pokemon.stats[2].base_stat}</div>
          <div class="tak"><span>Special Attack:</span> ${pokemon.stats[3].base_stat}</div>
          <div class="tak"><span>Special Defense:</span> ${pokemon.stats[4].base_stat}</div>
          <div class="tak"><span>Speed:</span> ${pokemon.stats[5].base_stat}</div>
        </div>
        <div class="botcir">
          <img src="https://www.pngitem.com/pimgs/m/107-1075173_pokeball-png-free-download-pokemon-pokeball-logo-png.png" alt="">
        </div>
      </div>
    </div>`
}