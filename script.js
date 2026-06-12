const flores = [

{
nome:"Rosa",
icone:"🌹",
agua:"3 vezes por semana",
sol:"Sol pleno",
caracteristicas:"Flor símbolo do amor e muito perfumada.",
curiosidade:"Existem mais de 300 espécies de rosas no mundo."
},

{
nome:"Girassol",
icone:"🌻",
agua:"2 vezes por semana",
sol:"Muito sol",
caracteristicas:"Acompanha a direção do sol.",
curiosidade:"Pode ultrapassar 3 metros de altura."
},

{
nome:"Orquídea",
icone:"🌸",
agua:"1 vez por semana",
sol:"Luz indireta",
caracteristicas:"Elegante e muito valorizada.",
curiosidade:"Existem mais de 25 mil espécies de orquídeas."
},

{
nome:"Tulipa",
icone:"🌷",
agua:"Solo úmido",
sol:"Meia sombra",
caracteristicas:"Muito popular em jardins.",
curiosidade:"É um dos símbolos da Holanda."
},

{
nome:"Margarida",
icone:"🌼",
agua:"2 vezes por semana",
sol:"Sol pleno",
caracteristicas:"Representa pureza e simplicidade.",
curiosidade:"Suas pétalas podem variar bastante de cor."
},

{
nome:"Lírio",
icone:"🤍",
agua:"2 vezes por semana",
sol:"Meia sombra",
caracteristicas:"Flor perfumada e ornamental.",
curiosidade:"É muito utilizada em cerimônias e decorações."
},

{
nome:"Hortênsia",
icone:"💐",
agua:"Regas frequentes",
sol:"Meia sombra",
caracteristicas:"Forma grandes cachos coloridos.",
curiosidade:"A cor das flores pode mudar conforme o solo."
},

{
nome:"Violeta",
icone:"💜",
agua:"2 vezes por semana",
sol:"Luz indireta",
caracteristicas:"Pequena e delicada.",
curiosidade:"É uma das plantas mais cultivadas em apartamentos."
},

{
nome:"Jasmim",
icone:"🌺",
agua:"Regular",
sol:"Sol pleno",
caracteristicas:"Muito conhecido pelo perfume.",
curiosidade:"Seu aroma é usado em perfumes famosos."
},

{
nome:"Lavanda",
icone:"🪻",
agua:"Pouca água",
sol:"Sol pleno",
caracteristicas:"Possui aroma relaxante.",
curiosidade:"É muito utilizada em óleos essenciais."
},

{
nome:"Camélia",
icone:"🌸",
agua:"Solo úmido",
sol:"Meia sombra",
caracteristicas:"Flores grandes e vistosas.",
curiosidade:"É considerada símbolo da fidelidade."
},

{
nome:"Azaleia",
icone:"🌺",
agua:"3 vezes por semana",
sol:"Meia sombra",
caracteristicas:"Muito utilizada em paisagismo.",
curiosidade:"Floresce principalmente durante o inverno."
},

{
nome:"Begônia",
icone:"🌼",
agua:"Regular",
sol:"Luz indireta",
caracteristicas:"Colorida e fácil de cultivar.",
curiosidade:"Existem mais de 2 mil espécies conhecidas."
},

{
nome:"Cravo",
icone:"💐",
agua:"Moderada",
sol:"Sol pleno",
caracteristicas:"Muito usado em arranjos.",
curiosidade:"É uma das flores mais antigas cultivadas pelo ser humano."
},

{
nome:"Petúnia",
icone:"🌸",
agua:"Diária em dias quentes",
sol:"Sol pleno",
caracteristicas:"Floresce por longo período.",
curiosidade:"Atrai borboletas e beija-flores."
},

{
nome:"Dália",
icone:"🌺",
agua:"Regular",
sol:"Sol pleno",
caracteristicas:"Possui diversas cores.",
curiosidade:"É a flor nacional do México."
},

{
nome:"Gerânio",
icone:"🌷",
agua:"Moderada",
sol:"Sol pleno",
caracteristicas:"Muito resistente.",
curiosidade:"Ajuda a afastar alguns insetos."
},

{
nome:"Bromélia",
icone:"🌿",
agua:"Pouca água",
sol:"Meia sombra",
caracteristicas:"Planta tropical muito bonita.",
curiosidade:"Armazena água entre suas folhas."
},

{
nome:"Flor de Maio",
icone:"🌸",
agua:"2 vezes por semana",
sol:"Luz indireta",
caracteristicas:"Floresce principalmente no outono.",
curiosidade:"Pode viver por muitos anos quando bem cuidada."
},

{
nome:"Antúrio",
icone:"❤️",
agua:"Solo levemente úmido",
sol:"Luz indireta",
caracteristicas:"Folhas brilhantes e flores duradouras.",
curiosidade:"É uma das plantas ornamentais mais vendidas do Brasil."
}

];

const container = document.getElementById("container-flores");

function mostrarFlores(lista){

container.innerHTML = "";

lista.forEach(flor => {

container.innerHTML += `
<div class="card">

<div class="icone-flor">
${flor.icone}
</div>

<h2>${flor.nome}</h2>

<p><strong>💧 Água:</strong> ${flor.agua}</p>

<p><strong>☀️ Sol:</strong> ${flor.sol}</p>

<p><strong>🌼 Características:</strong> ${flor.caracteristicas}</p>

<button
class="btn-saiba"
onclick="abrirModal(
'${flor.nome}',
'${flor.icone}',
'${flor.agua}',
'${flor.sol}',
'${flor.caracteristicas}',
'${flor.curiosidade}'
)">
Saiba Mais
</button>

</div>
`;

});

}

function abrirModal(
nome,
icone,
agua,
sol,
caracteristicas,
curiosidade
){

document.getElementById("modal").style.display = "flex";

document.getElementById("modal-icone").innerHTML = icone;
document.getElementById("modal-nome").innerText = nome;
document.getElementById("modal-agua").innerText = "💧 Água: " + agua;
document.getElementById("modal-sol").innerText = "☀️ Sol: " + sol;
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

mostrarFlores(flores);

document
.getElementById("pesquisa")
.addEventListener("input", function(){

const texto = this.value.toLowerCase();

const resultado = flores.filter(flor =>
flor.nome.toLowerCase().includes(texto)
);

mostrarFlores(resultado);

});