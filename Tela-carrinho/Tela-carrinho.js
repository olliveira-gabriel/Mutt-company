   
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
            img.style.width = '200px';
            li.classList.add('produto-linha')
            li.innerHTML = 
            `${nome}<br> <br>
            Tamanho: ${tamanho}<br> <br>
            Valor: ${valor}`;
            total = total + parseFloat(valor);
            
            produtos_carrinhos.appendChild(li);
            produtos_carrinhos.appendChild(img);
            
        }
        console.log(total)
    }
    
    exibir_carrinho()



