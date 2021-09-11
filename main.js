var affirmations = [
'I forgive myself and set myself free.',
'I believe I can be all that I want to be.',
'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.'
]

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]

// Query selectors

var receiveButton = document.querySelector('#receive-message');
var messageOutput = document.querySelector('#message-output');
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var addMessageButton = document.querySelector('#add-message');
var placeholderIcon = document.querySelector('#placeholder-icon');
var newMessageForm = document.querySelector('#new-message-form');
var newAffirmationButton = document.querySelector('#new-affirmation');
var newMantraButton = document.querySelector('#new-mantra');
var submitMessageButton = document.querySelector('#submit-message');
var newMessageField = document.querySelector('#new-message-field');
var displayedMessage = document.querySelector('#displayed-message');

// Event listeners

receiveButton.addEventListener('click', showRandomMessage)
addMessageButton.addEventListener('click', showAddMessageForm)
submitMessageButton.addEventListener('click', submitNewMessage)

// Event handlers

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showRandomMessage(){
  displayMessage();
  if (affirmationButton.checked){
    displayedMessage.innerHTML = affirmations[getRandomIndex(affirmations)];
  } else if (mantraButton.checked){
    displayedMessage.innerHTML = mantras[getRandomIndex(mantras)];
  } else {
    displayedMessage.innerHTML = '<p>Please select a message type!</p>'
  }
}

function displayMessage(){
  placeholderIcon.classList.add("hidden");
  newMessageForm.classList.add("hidden");
  displayedMessage.classList.remove("hidden");
}

function showAddMessageForm(){
  displayedMessage.classList.add("hidden");
  newMessageForm.classList.remove("hidden");
  placeholderIcon.classList.add("hidden");
}

function submitNewMessage(){
  if (newAffirmationButton.checked){
    affirmations.push(newMessageField.value);
    messageOutput.innerHTML = affirmations[0];
  } else if (newMantraButton.checked){
    mantras.push(newMessageField.value);
    messageOutput.innerHTML = mantras[0];
  } else {
    newMessageField.placeholder = 'Please select a message type!'
  }
}
