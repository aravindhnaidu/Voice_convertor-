// Create a SpeechSynthesisUtterance instance
const speech = new SpeechSynthesisUtterance();

// Initialize an empty array to store available voices
let voices = [];

// Get the voice selection dropdown
const voiceSelect = document.querySelector("select");

// Event handler for when voices change
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Set the default voice

    // Populate the voice selection dropdown
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Event listener for voice selection change
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Event listener for button click
document.querySelector("button").addEventListener("click", () => {
    // Get the text from the textarea
    const inputText = document.querySelector("textarea").value;
    speech.text = inputText;

    // Speak the provided text
    window.speechSynthesis.speak(speech);
});
