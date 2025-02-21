function validaCadastro(novoUsuario, confirmarsenha){
    if(!novoUsuario.nome || !novoUsuario.usuario || !novoUsuario.senha || !novoUsuario.celular || !novoUsuario.idade){ // Campos Vazios
        return false;
    }else if(novoUsuario.senha != confirmarsenha || novoUsuario.idade > 120 || novoUsuario.idade < 0){ // Confirmação da senha e Verificação da idade
        return false;
    }else{
        return true;
    }
}
export {
    validaCadastro
}
