document.addEventListener("DOMContentLoaded",function(e){
    const parrafos= document.querySelectorAll('.descripcion');
    let alturas = [];
    let alturaMaxima = 0;
    
    const aplicarAlturas = (function aplicarAlturas(){
        
        parrafos.forEach(parrafo =>{
            if(alturaMaxima == 0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = alturaMaxima + "px";
            }
        });
        return aplicarAlturas;
    })();
    alturaMaxima= Math.max.apply(Math, alturas);
    aplicarAlturas();
});
document.addEventListener("DOMContentLoaded", function(e) {
    const parrafos = document.querySelectorAll('.descripcion');
    let alturas = [];
    let alturaMaxima = 0;
  
    const aplicarAlturas = (function aplicarAlturas() {
      parrafos.forEach(parrafo => {
        if (alturaMaxima == 0) {
          alturas.push(parrafo.clientHeight);
        } else {
          parrafo.style.height = alturaMaxima + "px";
        }
      });
      return aplicarAlturas;
    })();
    alturaMaxima = Math.max.apply(Math, alturas);
    aplicarAlturas();
  
    const leerMasLinks = document.querySelectorAll('.post-link');
    leerMasLinks.forEach(link => {
      let isExpanded = false;
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const hiddenContent = event.target.parentNode.querySelector('.hidden-content');
        if (!isExpanded) {
          hiddenContent.style.display = 'block';
          event.target.textContent = 'Leer menos';
        } else {
          hiddenContent.style.display = 'none';
          event.target.textContent = 'Leer más';
        }
        isExpanded = !isExpanded;
      });
    });
  });
  
