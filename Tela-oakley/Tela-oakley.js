function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../Tela Login/Tela-Login.html";
}
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
function Tela_jaqueta_oakley(){
    window.location.href="../Tela-produtos-oakley/Oakley x Piet Jaqueta Static Anorak Olive/Oakley x Piet Jaqueta Static Anorak Olive.html";

}

function Tela_tenis_oakley(){
    window.location.href="../Tela-produtos-oakley/Oakley Teeth Blue Grey/Oakley-Teeth-Blue-Grey.html";

}

function Tela_oculos_oakley(){
    window.location.href="../Tela-produtos-oakley/Piet x Oakley oculos Eye Jacket Orange/Piet-x-Oakley-oculos-Eye-Jacket-Orange.html";

}

function Tela_jaqueta_future_black(){
    window.location.href="../Tela-produtos-oakley/Colete Oakley x Piet The Future Black/Colete Oakley x Piet The Future Black.html";

}

function Tela_jaqueta_Dog(){
    window.location.href="../Tela-produtos-oakley/Oakley x Piet Moletom Monster Dog Solid Black/Oakley x Piet Moletom Monster Dog Solid Black.html";

}

function Tela_moletom_BigSkull(){
    window.location.href="../Tela-produtos-oakley/Camiseta Oakley x Piet Big Skull LS Brown/Camiseta Oakley x Piet Big Skull LS Brown.html";

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
