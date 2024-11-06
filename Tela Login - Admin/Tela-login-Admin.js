function Logo_Header(){
    // Redireciona o usuário para a página "Tela-princial.html"
    window.location.href="../tela-principal/Tela-princial.html";
}

function Login_Header(){
    // Redireciona o usuário para a página "Tela-Login.html" localizada na pasta "Tela-login"
    window.location.href="../Tela Login/Tela-Login.html";
}


function Entrar(){

    let usuario = "Admin"
    let senha = "Admin123"

    if(usuario == "Admin" && senha == "Admin123"){
        window.location.href="../Tela-Admin/Tela-Admim.html"
    }
    else{
        alert(`usuário não digitou o nome ou a senha`)
    }

}
