// js code

// une liste de couleurs
let colors = [
  "#D9FCF2",
  "#E0F1FE",
  "#EAEAFD",
  "#E0DFF8",
  "#FDE4EC",
  "#FDEEEB",
  "#FDFAEC",
];


// une fonction pour récupérer une couleur aléatoire
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// la fonction encrypt qui permet de chiffrer un message
function encrypt() {
  // on récupère la valeur du champs input
  let message = messageInput.value;

  // on chiffre le message
  // le 1 correspond ici au nombre de tours
  // c'est à dire le nombre de lettre de décalage entre le message original
  // et le message chiffré
  let code = caesarCypher(message, 1);
 //Question 3
  result.innerText = (code);
 //Question 4
  page.style.backgroundColor = getRandomColor();

  //Question 5
  let musique = new Audio("son.mp3");
  musique.play();

  // on affiche dans la console le message chiffre retourné
  console.log(code);

}


function decrypt() {
  let message = messageInput.value;
  let code = caesarCypher(message, 0);
  result.innerText = (code);
  page.style.backgroundColor = getRandomColor();
  let musique = new Audio("son.mp3");
  musique.play();
  console.log(code);
}  

// la fonction de l'algorithme de César
// vous n'aurez pas à y toucher :)
function caesarCypher(message, amount) {
  // récupéré de : https://gist.github.com/EvanHahn/2587465
  // il existe des alternatives + courtes, mais au moins celle-ci est compréhensible

  // Wrap the amount
  if (amount < 0) return encrypt(message, amount + 26);

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < message.length; i++) {
    // Get the character we'll be appending
    var c = message[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = message.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90)
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      // Lowercase letters
      else if (code >= 97 && code <= 122)
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }

    // Append
    output += c;
  }

  // All done!
  return output;
}
