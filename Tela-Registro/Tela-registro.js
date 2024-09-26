function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function  Registro_usuario(){
    
    let usuario =  document.getElementById('User').value;

    let senha =  document.getElementById('Senha').value;

    let confirmar_senha =  document.getElementById('Confirmar_senha').value;

    let checkbox = document.getElementById('termos_de_contrato');

    if(checkbox.checked){

        if(senha === confirmar_senha){
            let BancoDeDados = JSON.parse(localStorage.getItem("BancoDedados")) || {};
            
            if(BancoDeDados[usuario]){
                
                alert('Nome de usuário já cadastrado');
                return;
            }
            BancoDeDados[usuario] = {
                usuario: usuario,
                password: senha
            };
            localStorage.setItem("BancoDeDados", JSON.stringify(BancoDeDados));
            
            alert('Usuário cadastrado com sucesso!');
            window.location.href="../Tela-Login/Tela-Login.html";
            
        }else('As senhas são diferentes');
        
    }else{
        alert('aceite os termos')
    }
}

