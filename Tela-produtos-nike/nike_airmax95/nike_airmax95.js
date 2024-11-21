function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../../Tela Login/Tela-Login.html";
}
function carrinho_Header(){
    // Redireciona o usuário para a página "Tela-carrinho.html" localizada na pasta "Tela-login"
    window.location.href="../Tela-carrinho/Tela-carrinho.html";
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

    window.location.href="../Tela-carrinho/Tela-carrinho.html"

}
