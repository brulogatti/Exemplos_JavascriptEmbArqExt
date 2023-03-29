function importantPhrase(){
alert('"Não há razão alguma em usar a palavra “impossível” para descrever algo que claramente aconteceu."\n(Douglas Adams)')
}

const btn = document.getElementById("littleButton");
btn.addEventListener("click", function(){
    importantPhrase();
});