const plus = document.querySelectorAll('.plus'); /*Seleciona todos os elementos HTML que possuem a classe CSS `plus`*/
const minus = document.querySelectorAll('.minus');/*Seleciona todos os elementos HTML que possuem a classe CSS `minus`*/
const hidden = document.querySelectorAll('.hidden');/*Seleciona todos os elementos HTML que possuem a classe CSS `hidden`*/
const para = document.querySelectorAll('.para');/*Seleciona todos os elementos HTML que possuem a classe CSS `para`*/


for (let i = 0; i < plus.length; i++) { /*Percorre todos os elementos selecionados pela variável `plus`*/
    plus[i].addEventListener('click', function () {/*Adiciona um evento de clique a cada elemento `plus`*/
        plus[i].classList.toggle('hidden');/*Adiciona ou remove a classe CSS `hidden` do elemento plus*/
        minus[i].classList.toggle('hidden');/*Adiciona ou remove a classe CSS `hidden` do elemento minus*/
        para[i].classList.toggle('hidden');/*Adiciona ou remove a classe CSS `hidden` do elemento para*/
    })
}

for (let i = 0; i < minus.length; i++) {/*Percorre todos os elementos selecionados pela variável `minus`*/
    minus[i].addEventListener('click', function () {
        minus[i].classList.toggle('hidden');/*Adiciona um evento de clique a cada elemento `minus`*/
        plus[i].classList.toggle('hidden');
        para[i].classList.toggle('hidden');
    })
}