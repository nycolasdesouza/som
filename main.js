//declaraçao/criaçaoda funçao tocaSomPom
function tocaSomPom(){    
    document.querySelector('#som_tecla_pom').play();
}
//chamada ou invocaçao a funçao tocasompom ao clicar no botao
document.querySelector('.tecla_pom').onclick = tocaSomPom