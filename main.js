//declaraçao/criaçaoda funçao tocaSomPom
function tocaSomPom(){    
    document.querySelector('#som_tecla_pom').play();
}
//chamada ou invocaçao a funçao tocasompom ao clicar no botao
document.querySelector('.tecla_pom').onclick = tocaSomPom

//declaraçao/criaçaoda funçao tocaSomClap
function tocaSomClap(){    
    document.querySelector('#som_tecla_clap').play();
}
//chamada ou invocaçao a funçao tocaSomClap ao clicar no botao
document.querySelector('.tecla_clap').onclick = tocaSomClap;