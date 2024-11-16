function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../Tela Login/Tela-Login.html";
}

function carrinho_Header(){
    // Redireciona o usuário para a página "Tela-carrinho.html" localizada na pasta "Tela-login"
    window.location.href="../Tela-carrinho/Tela-carrinho.html";
}
function S_blue(){

    window.location.href="../tela-produtos-mizuno/Mizuno Wave Prophecy 11S Blue/Mizuno Wave Prophecy 11S Blue.html";
}
function LS_seset(){

    window.location.href="../tela-produtos-mizuno/Mizuno Wave Prophecy LS Desert Risk Red Diva Blue/Mizuno Wave Prophecy LS Desert Risk Red Diva Blue.html";
}
function Future_LS(){

    window.location.href="../tela-produtos-mizuno/Mizuno Wave Prophecy LS Future Garden Summer Sand/Mizuno Wave Prophecy LS Future Garden Summer Sand.html";
}
function cherry_miz(){

    window.location.href="../tela-produtos-mizuno/GCDS x Mizuno Wave Prophecy 8 Cherry/GCDS x Mizuno Wave Prophecy 8 Cherry.html";
}
function wave_10(){

    window.location.href="../tela-produtos-mizuno/Mizuno Wave Rider 10 Sport White Silver/GCDS x Mizuno Wave Prophecy 8 Cherry.html";
}
function Prophecy_gold(){

    window.location.href="../tela-produtos-mizuno/Shinzo x Mizuno Wave Prophecy LS Gold/GCDS x Mizuno Wave Prophecy 8 Cherry.html";
}

function exibirProduto() {
   
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

   
    const listaProdutos = document.getElementById('listaProdutos');
    
    
    listaProdutos.innerHTML = '';

    // 4. Percorre cada produto no array "produtos" e cria um card para exibi-lo
    for (let produto of produtos) {
        // 5. Cria um elemento <li> que servirá como o card do produto
        const li = document.createElement('li');
        li.classList.add('produto-item'); // Adiciona uma classe para aplicar o estilo de card

        // 6. Cria um elemento <img> para exibir a imagem do produto e define o src e o texto alternativo (alt)
        const img = document.createElement('img');
        img.src = produto.urlImage; // Define a URL da imagem do produto
        img.alt = produto.nome; // Define o nome do produto como texto alternativo da imagem
        img.classList.add('produto-img'); // Classe para aplicar o estilo da imagem

     
        const nome = document.createElement('p');
        nome.textContent = produto.nome;
      
        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produto.preco}`; 


        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`; 
        
        const tipodetamanho = document.createElement('p');
        descricao.innerHTML = `<span>tipodetamanho:</span> ${produto.tipodetamanho}`; 

     
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(tipodetamanho)

       
        listaProdutos.appendChild(li);
    }
}

// Executa a função ao carregar a página inicial
    window.onload = exibirProduto;
