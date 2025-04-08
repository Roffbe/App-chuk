
const getJokeButton = document.getElementById('getJokeButton');
const jokeContainer = document.getElementById('jokeContainer');
const chuckNorrisJoke = document.getElementById('chuckNorrisJoke');

getJokeButton.addEventListener('click', fetchChuckNorrisJoke);

async function fetchChuckNorrisJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    const joke = data.value;
    
    chuckNorrisJoke.textContent = joke;
    jokeContainer.style.display = 'block';
  } catch (error) {
    console.error('Error fetching joke:', error);
    chuckNorrisJoke.textContent = 'Hubo un error al obtener el chiste. Intenta nuevamente.';
    jokeContainer.style.display = 'block';
  }
}
    