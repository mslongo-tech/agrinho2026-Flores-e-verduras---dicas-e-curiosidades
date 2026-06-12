const verduras = [

{nome:"Alface", icone:"🥬", cuidados:"Regar regularmente", caracteristicas:"Folha verde, muito utilizada em saladas.", curiosidade:"É rica em fibras e vitaminas."},
{nome:"Couve", icone:"🥬", cuidados:"Regar frequentemente", caracteristicas:"Folha escura e resistente.", curiosidade:"Muito usada em sopas e refogados."},
{nome:"Espinafre", icone:"🌿", cuidados:"Solo úmido e luz indireta", caracteristicas:"Folhas nutritivas.", curiosidade:"Rico em ferro."},
{nome:"Rúcula", icone:"🥗", cuidados:"Solo úmido", caracteristicas:"Folhas picantes.", curiosidade:"Muito utilizada em saladas gourmet."},
{nome:"Agrião", icone:"💧", cuidados:"Solo sempre úmido", caracteristicas:"Folhas pequenas e delicadas.", curiosidade:"Cresce muito bem próximo à água."},
{nome:"Almeirão", icone:"🌱", cuidados:"Regar 2 vezes por semana", caracteristicas:"Folhas amargas.", curiosidade:"Muito usado em saladas."},
{nome:"Acelga", icone:"🥬", cuidados:"Solo úmido", caracteristicas:"Folhas grandes e coloridas.", curiosidade:"Pode ser branca ou verde."},
{nome:"Repolho", icone:"🥬", cuidados:"Regar regularmente", caracteristicas:"Formação de cabeça compacta.", curiosidade:"Usado em conservas e saladas."},
{nome:"Cebolinha", icone:"🌿", cuidados:"Solo úmido", caracteristicas:"Folhas verdes e aromáticas.", curiosidade:"Muito usada em temperos."},
{nome:"Salsa", icone:"🌿", cuidados:"Solo úmido e luz indireta", caracteristicas:"Planta aromática.", curiosidade:"Muito usada em temperos."},
{nome:"Coentro", icone:"🌿", cuidados:"Solo úmido e luz indireta", caracteristicas:"Aromática e intensa.", curiosidade:"Muito usado na culinária brasileira."},
{nome:"Brócolis", icone:"🥦", cuidados:"Regar regularmente", caracteristicas:"Cabeça verde nutritiva.", curiosidade:"Rico em vitaminas e minerais."},
{nome:"Couve-flor", icone:"🥦", cuidados:"Regar regularmente", caracteristicas:"Formação de cabeça branca.", curiosidade:"Muito usado em sopas e gratinados."},
{nome:"Erva-doce", icone:"🌿", cuidados:"Solo úmido", caracteristicas:"Folhas aromáticas e sementes doces.", curiosidade:"Usada em chás e temperos."},
{nome:"Aipo", icone:"🥬", cuidados:"Solo úmido", caracteristicas:"Talos crocantes.", curiosidade:"Muito usado em sopas."},
{nome:"Nabo", icone:"🥕", cuidados:"Regar regularmente", caracteristicas:"Raiz comestível.", curiosidade:"Muito usado em refogados e sopas."},
{nome:"Rabanete", icone:"🌶️", cuidados:"Regar 2 vezes por semana", caracteristicas:"Raiz picante.", curiosidade:"Cresce rápido e é fácil de cultivar."},
{nome:"Batata-doce", icone:"🍠", cuidados:"Regar moderadamente", caracteristicas:"Raiz nutritiva.", curiosidade:"Pode ser doce ou roxa."},
{nome:"Pepino", icone:"🥒", cuidados:"Solo úmido", caracteristicas:"Fruto refrescante.", curiosidade:"Muito usado em saladas e conservas."},
{nome:"Tomate", icone:"🍅", cuidados:"Sol pleno e rega regular", caracteristicas:"Fruto suculento.", curiosidade:"Muito usado em molhos e saladas."}

];

const container = document.getElementById("container-verduras");

function mostrarVerduras(lista){
    container.innerHTML = "";

    lista.forEach(verdura => {
        container.innerHTML += `
        <div class="card">
            <div class="icone-verdura">${verdura.icone}</div>
            <h2>${verdura.nome}</h2>
            <p><strong>Cuidados:</strong> ${verdura.cuidados}</p>
            <p><strong>Características:</strong> ${verdura.caracteristicas}</p>
            <button class="btn-saiba" onclick="abrirModal(
                '${verdura.nome}',
                '${verdura.icone}',
                '${verdura.cuidados}',
                '${verdura.caracteristicas}',
                '${verdura.curiosidade}'
            )">Saiba Mais</button>
        </div>
        `;
    });
}

function abrirModal(nome, icone, cuidados, caracteristicas, curiosidade){
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-icone").innerHTML = icone;
    document.getElementById("modal-nome").innerText = nome;
    document.getElementById("modal-cuidados").innerText = "💧 Cuidados: " + cuidados;
    document.getElementById("modal-caracteristicas").innerText = caracteristicas;
    document.getElementById("modal-curiosidade").innerText = curiosidade;
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event){
    const modal = document.getElementById("modal");
    if(event.target === modal){
        fecharModal();
    }
}

mostrarVerduras(verduras);

document.getElementById("pesquisa").addEventListener("input", function(){
    const texto = this.value.toLowerCase();
    const resultado = verduras.filter(v => v.nome.toLowerCase().includes(texto));
    mostrarVerduras(resultado);
});