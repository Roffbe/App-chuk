
const getJokeButton = document.getElementById('getJokeButton');
const jokeContainer = document.getElementById('jokeContainer');
const chuckNorrisJoke = document.getElementById('chuckNorrisJoke');

getJokeButton.addEventListener('click', fetchChuckNorrisJoke);

async function fetchChuckNorrisJoke() {
  try {
    // Obtener el chiste en español usando la API pública JokeAPI
    const response = await fetch('https://v2.jokeapi.dev/joke/ChuckNorris?lang=es&type=single');
    const data = await response.json();

    // Verificar si la respuesta contiene un chiste
    if (data.joke) {
      chuckNorrisJoke.textContent = data.joke;
    } else {
      chuckNorrisJoke.textContent = 'No se encontró un chiste de Chuck Norris en este momento.';
    }

    jokeContainer.style.display = 'block';
  } catch (error) {
    console.error('Error fetching joke:', error);
    chuckNorrisJoke.textContent = 'Hubo un error al obtener el chiste. Intenta nuevamente.';
    jokeContainer.style.display = 'block';
  }
}
    