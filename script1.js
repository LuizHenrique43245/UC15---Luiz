
    const texto = document.getElementById("cor");
    const body = document.body;

   
    function mudar() {
        if (texto.style.color === "white") {
            texto.style.color = "black";
        } else {
            texto.style.color = "white";
        }
    }

   
    function trocar() {
        if (body.style.backgroundColor === "grey") {
            body.style.backgroundColor = "darkblue"; 
        } else {
            body.style.backgroundColor = "grey"; 
        }
    }

    texto.addEventListener("click", function() {
        mudar();   
        trocar();  
    });



