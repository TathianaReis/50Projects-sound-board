document.addEventListener('DOMContentLoaded', () => {
  //ensure the DOM is fully loaded before executing
  const audioList = document.querySelectorAll('audio');
  const buttonDiv = document.getElementById('buttons');

  //const createButtons = () => {
  audioList.forEach((audio) => {
    // Create button elements
    const button = document.createElement('button');
    button.textContent = audio.id;
    // Set a data attribute to link the button with the corresponding audio element
    button.setAttribute('data-audio-id', audio.id);
    // Append button to the buttonDiv
    buttonDiv.appendChild(button);

    // Add event listener to play the audio when button is clicked
    button.addEventListener('click', () => {
      stopAudios();
      audio.play();
    });
  });
  // };

  //createButtons();
  function stopAudios() {
    audioList.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  }
});
