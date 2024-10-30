const info_produtos = JSON.parse(localStorage.getItem('carrinho')) || []



for(const i in info_produtos){
    const produtos = info_produtos[i];
    const li = document.createElement('li')
    
    const nome = info_produtos[i].nome;
    
    const tamanho = info_produtos[i].valorTamanho;
    
    const img = info_produtos[i].foto;
    
    const valor = info_produtos[i].preco;
    
    
}  

        document.getElementById("nome_produto").innerHTML = nome;    

        document.getElementById("tamanho_produto").innerHTML = (`Tamanho: ${tamanho}`);  

        document.getElementById("img_produto").src = img ;

        document.getElementById("img_produto").style.width = '100px';

        document.getElementById("Valor_produto").innerHTML = valor;



