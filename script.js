const messageElement = document.getElementById('message');
const buttonContainer = document.getElementById('buttonContainer');
const messages = [
    "Julia",
    "I have something to ask you...",
    "Will you be my Valentine?"
];
let currentMessageIndex = 1;

function showNextMessage() {
    messageElement.textContent = messages[currentMessageIndex];
    currentMessageIndex++;
    if (currentMessageIndex === messages.length) {
        gifContainer.classList.add('hidden');
        buttonContainer.classList.remove('hidden');
    }
}

document.addEventListener('click', () => {
    if (currentMessageIndex < messages.length) {
        showNextMessage();
    }
});

document.getElementById('yesButton').addEventListener('click', () => {
    messageElement.textContent = "yayayyyyyyyy 💖 I love you";
    yes.classList.remove('hidden')
    gifContainer.classList.add('hidden')
    buttonContainer.classList.add('hidden');
});

document.getElementById('noButton').addEventListener('click', () => {
    messageElement.textContent = "fuck you😢";
    no.classList.remove('hidden');
    buttonContainer.classList.add('hidden');
});

document.getElementById('tryAgain').addEventListener('click', () => {
    currentMessageIndex = 0;
    messageElement.textContent = messages[currentMessageIndex];
    messageElement.style.opacity = 1;
    buttonContainer.classList.add('hidden');
    no.classList.add('hidden');
    gifContainer.classList.remove('hidden');
});
