//function randletter ();
  //  var letter = ["a","b","c","d","e","f","g","h","i","j","k",
    //"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //Math.random();
    //console.log(Math.floor);
//function randWord ();
//function randSentance ();
function randLetter(){
    var letters = 'abcdefghijklmnopqrstuvwxyz'
    return letters[rand(letters.length)];
}
function randword(){
    var word = '';
    var length = 1 + rand(15);
    for (var i = 0; i < length; i++ ){
        word = word + randletter();
    }
    return word;

}

function randSentence(){
    var sentence = randword();
    var length = rand(10);
    for (var i = 0; i< length; i++){
        sentence = sentence " " + randword();
    }
    return sentence(0).toUpperCase() + sentence.slice(1,sentence.length) + "."
}
function pokeAttack(poke1, poke2){
    poke2[2] -= poke 1[1];
    return poke2;
}