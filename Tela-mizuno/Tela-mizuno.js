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
  
        const li = document.createElement('li');
        li.classList.add('produto-item'); 
    
    
        const img = document.createElement('img');
        img.src = produto.urlImage; 
        img.alt = produto.nome;  
        img.classList.add('produto-img');
    
     
        const nome = document.createElement('p');
        nome.textContent = produto.nome;
        nome.classList.add('produto-nome');  // Adiciona uma classe CSS
    
        const preco = document.createElement('p');
        preco.innerHTML = `<span></span> RS${produto.preco}`; 
        preco.classList.add('produto-preco');  // Adiciona uma classe CSS
    
        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`; 
        descricao.classList.add('produto-descricao');  // Adiciona uma classe CSS
    
        const tipodetamanho = document.createElement('p');
        tipodetamanho.innerHTML = `<span>Tipo de Tamanho:</span> ${produto.tipodetamanho}`; 
        tipodetamanho.classList.add('produto-tipodetamanho');  // Adiciona uma classe CSS
     
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(tipodetamanho)
    
       
        listaProdutos.appendChild(li);
    }
    }
    
    
    window.onload = exibirProduto;
    