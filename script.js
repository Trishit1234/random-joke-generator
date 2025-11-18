const jokeText = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", getJoke);

async function getJoke() {
    jokeText.innerText = "Loading... 😂";

    const url = "https://v2.jokeapi.dev/joke/Any?type=single";

    let response = await fetch(url);
    let data = await response.json();

    jokeText.innerText = data.joke;
}
