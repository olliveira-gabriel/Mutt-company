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

function Tela_tenis_airmax95(){
    window.location.href="../Tela-produtos-nike/nike_airmax95/nike_airmax95.html";

}

function Tela_tenis_tnpsg(){
    window.location.href="../Tela-produtos-nike/nike_tn_psg/nike_tn_psg.html";

}

function Tela_jaqueta_nike(){
    window.location.href="../Tela-produtos-nike/jaqueta_nocta_nike/jaqueta_nocta_nike.html";

}

function Tela_tenis_tnpurple(){
    window.location.href="../Tela-produtos-nike/nike_tn_purple/nike_tn_purple.html";

}

function Tela_tenis_tnpimento(){
    window.location.href="../Tela-produtos-nike/nike_tn_pimento/nike_tn_pimento.html";

}

function Tela_tenis_vpmax(){
    window.location.href="../Tela-produtos-nike/nike_vp/nike_vp.html";

}
function exibirProduto() {
   
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

   
    const listaProdutos = document.getElementById('listaProdutos');
    
listaProdutos.innerHTML = '';

  
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
