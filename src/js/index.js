// esse é o jeito de comentar com uma linha só. 

/*
forma de comentar com varias linhas.
*/

//passo1- dar um jeito de pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

//passo2- dar um jeito de identificar o clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //passo 3- desmarcar o botão selecionado anterior, obs aqui dentro do addeventlistener
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado')

        //passo4- marcar o botao clicado como se tivesse selecionado
        botao.classList.add('selecionado')

        //passo5-esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa')

        //passo6- fazer aparecer a imagem de fundo correspodente ao botao clicado
        imagens[indice].classList.add('ativa')
    })
})

