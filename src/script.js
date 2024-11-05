


document.querySelector(".btnContinuar").addEventListener("click", function() {
   
    const crm = document.getElementById("crm").value.replace(/\D/g, "").trim();
    const uf = document.getElementById("uf").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    let erro = false;

 
    if (crm.length !== 7 || isNaN(crm)) {
        erro = true;
    }

    
    if (uf === "Selecione") {
        erro = true;
    }

    if (erro) {
        mensagemErro.style.display = "block";  
        mensagemSucesso.style.display = "none"; 
        mensagemErro.style.display = "none"; 
        mensagemSucesso.style.display = "block"; 

      
        setTimeout(() => {
            mensagemSucesso.style.display = "none";
            window.location.href = "https://www.senacrs.com.br/home"; 
        }, 3000);
    }
});


document.getElementById("crm").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 6) value = value.substring(0, 7);
    
    // Formata como "000.000-0"
    if (value.length > 3) {
        value = value.substring(0, 3) + "." + value.substring(3);
    }
    if (value.length > 7) {
        value = value.substring(0, 7) + "-" + value.substring(7, 8);
    }
    e.target.value = value;
});
