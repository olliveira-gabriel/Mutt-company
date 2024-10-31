    const info_produtos = JSON.parse(localStorage.getItem('carrinho')) || []

    
    
    
    
    
    const nome = info_produtos[0].nome;
    
    const tamanho = info_produtos[0].valorTamanho;
    
    const img = info_produtos[0].foto;
    
    const valor = info_produtos[0].preco;
    
    
    
    document.getElementById("nome_produto").innerHTML = nome;    
    
    document.getElementById("tamanho_produto").innerHTML = (`Tamanho: ${tamanho}`);  
    
    document.getElementById("img_produto").src = img ;
    
    document.getElementById("img_produto").style.width = '100px';
    
    document.getElementById("Valor_produto").innerHTML = valor;

    
