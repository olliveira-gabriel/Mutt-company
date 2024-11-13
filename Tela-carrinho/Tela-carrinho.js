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


    const info_produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtos_carrinhos = document.getElementById('lista');
    produtos_carrinhos.innerHTML = '';
    let total = 0
    
    
    
    function exibir_carrinho(){
        for (const i in info_produtos){
            const produto = info_produtos[i];
            console.log(produto);
            const li = document.createElement('li');
            const nome = info_produtos[i].nome;
            const tamanho = info_produtos[i].valorTamanho;
            const img = document.createElement('img');
            const valor = info_produtos[i].preco;
            img.src = info_produtos[i].foto;
            img.style.width = '300px';
            li.classList.add('produto-linha')
            li.innerHTML = 
            `${nome}<br> <br>
            Tamanho: ${tamanho}<br> <br>
            Valor: ${valor} <br> <br>
            <a href="../tela-principal/Tela-princial.html"></a>`;
            total = total + parseFloat(valor);
            
            produtos_carrinhos.appendChild(li);
            produtos_carrinhos.appendChild(img);

            const linha = document.createElement('hr');
            linha.style.border = '1px solid black';
            produtos_carrinhos.appendChild(linha);
            
            
            document.getElementById('subtotal').innerHTML = (`Subtotal: RS ${total.toFixed(2)}`)
            if (total > 750){
                document.getElementById('desconto').innerHTML = (`Subtotal: 20%`)
            }else{
                document.getElementById('desconto').innerHTML = (`Subtotal: 0%`)
            }
        }
        console.log(total.toFixed(2))
        const desconto = (total * 20) / 100
        console.log(desconto.toFixed(2))
        Valor_total = total - desconto.toFixed(2)
        document.getElementById('valortotal').innerHTML = (`Valor Total: RS${Valor_total.toFixed(2)}`)

    }
    exibir_carrinho()
