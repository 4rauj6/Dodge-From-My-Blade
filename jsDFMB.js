document.addEventListener("keydown", function(event) {
    if(event.code === "Space"){
        event.preventDefault();

        document.querySelector(".nomeTela").style.display = "none";
        document.querySelector(".boardJogo").style.display = "block";
        document.querySelector(".space2start").style.display = "none";
    }
});

const personagemMov = document.getElementById("personagem");

document.addEventListener("keydown", (event) => {
    if(event.key === "a" || event.key === "A" ){
        
        personagem.style.transform = "scaleX(-1)"

    }else if(event.key === "d" || event.key === "D"){
        
        personagem.style.transform = "scaleX(1)";

    }
});