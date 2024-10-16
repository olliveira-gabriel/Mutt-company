function colocar_carrinho(nome, foto, preco){   
    // Obtém os elementos dos botões de rádio pelo ID
    const tamanho38 = document.getElementById("38");
    const tamanho39 = document.getElementById("39");
    const tamanho40 = document.getElementById("40");
    const tamanho41 = document.getElementById("41");
    const tamanho42 = document.getElementById("42");
    const tamanho43 = document.getElementById("43");

    let valorTamanho;

    // Verifica qual botão de rádio está selecionado
    if (tamanho38.checked) {
        valorTamanho = tamanho38.value;
    } else if (tamanho39.checked) {
        valorTamanho = tamanho39.value;
    } else if (tamanho40.checked) {
        valorTamanho = tamanho40.value;
    } else if (tamanho41.checked) {
        valorTamanho = tamanho41.value;
    } else if (tamanho42.checked) {
        valorTamanho = tamanho42.value;
    } else if (tamanho43.checked) {
        valorTamanho = tamanho43.value;
    }
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
