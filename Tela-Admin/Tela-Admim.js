function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../../Tela Login/Tela-Login.html";
}

function colocar_carrinho(nome, foto, preco){   
    
    let valorTamanho = document.querySelector("input[name='tamanho']:checked").value;

    const produto = {
        nome, 
        foto,
        preco,
        valorTamanho
    }

   let carrinho = JSON.parse(localStorage.getItem('carrinho'))

   if(carrinho){
    carrinho.push(produto)
   }else{
    carrinho = [];
    carrinho.push(produto)

   }
    localStorage.setItem('carrinho', JSON.stringify(carrinho))

}
function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('urlImage').value;
    const tipodetamanho = document.querySelector("input[name='tipodepeça']:checked").value;

    const produto = {
        nome,
        preco,
        descricao,
        urlImage,
        tipodetamanho
    };

    if (produto.nome && produto.preco && produto.descricao && produto.urlImage && produto.tipodetamanho) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.push(produto);
        localStorage.setItem('produtos', JSON.stringify(produtos));

        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('urlImage').value = '';
    document.querySelector("input[name='tipodepeça']:checked").value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');
        li.classList.add('produto-linha')

        const img = document.createElement('img');
        img.src = produtos[i].urlImage;
        img.style.height = '100%';
        img.style.width = '100px';
        li.textContent = `${produto.nome} - RS${produto.preco} - ${produto.descricao} - ${produto.tipodetamanho}`;
       
        listaProdutos.appendChild(img);
        listaProdutos.appendChild(li);
    }
}

function deletarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    exibirProdutos();
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

window.onload = exibirProdutos;