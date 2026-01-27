// SOLUCIÓN COMPLETA

// 1. Obtener elementos del HTML
const pokemonInput = document.getElementById('pokemonInput');
const buscarBtn = document. getElementById('buscarBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const resultado = document. getElementById('resultado');

// 2. Función asíncrona para buscar Pokémon
async function buscarPokemon() {
    // Paso 1 - Obtener el valor del input
    const nombrePokemon = pokemonInput.value.toLowerCase().trim();
    
    // Paso 2 - Validar que no esté vacío
    if (nombrePokemon === '') {
        mostrarError('Por favor, escribe el nombre de un Pokémon');
        return;
    }
    
    // Paso 3 - Mostrar "Buscando..." y ocultar resultado y error
    loading.classList. remove('hidden');
    resultado.classList.add('hidden');
    error.classList.add('hidden');
    
    try {
        // Paso 4 - Crear la URL de la API
        const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
        
        // Paso 5 - Hacer la petición con fetch y await
        const respuesta = await fetch(url);
        
        // Paso 6 - Verificar si la respuesta es correcta
        if (!respuesta.ok) {
            throw new Error('Pokémon no encontrado');
        }
        
        // Paso 7 - Convertir la respuesta a JSON
        const datos = await respuesta.json();
        
        // Paso 8 - Llamar a la función para mostrar el Pokémon
        mostrarPokemon(datos);
        
    } catch (err) {
        // Paso 9 - Mostrar el error
        mostrarError('Pokémon no encontrado.  Intenta con otro nombre.');
    } finally {
        // Paso 10 - Ocultar el mensaje de "Buscando..."
        loading.classList.add('hidden');
    }
}

// 3. Función para mostrar el Pokémon
function mostrarPokemon(pokemon) {
    // Ocultar loading y error
    loading.classList.add('hidden');
    error.classList.add('hidden');
    
    // Mostrar el resultado
    resultado.classList.remove('hidden');
    
    // Actualizar la imagen
    document.getElementById('pokemonImg').src = pokemon.sprites.front_default;
    
    // Actualizar el nombre
    document.getElementById('pokemonNombre').textContent = pokemon.name;
    
    // Actualizar el ID
    document.getElementById('pokemonId').textContent = 'N° ' + pokemon.id;
}

// 4. Función para mostrar errores
function mostrarError(mensaje) {
    // Ocultar loading y resultado
    loading.classList.add('hidden');
    resultado.classList.add('hidden');
    
    // Mostrar el error
    error.classList.remove('hidden');
    error.textContent = mensaje;
}

// 5. Agregar evento al botón
buscarBtn.addEventListener('click', buscarPokemon);

// 6. Agregar evento para buscar al presionar Enter
pokemonInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarPokemon();
    }
});
