import { addData } from "./FirebaseFunction"



async function addUsuario(user) {
    try {
        await addData("Usuarios", {
            nome: user.nome,
            usuario: user.usuario,
            senha: user.senha,
            celular: user.celular, 
            idade: user.idade        
        });
        console.log("Usuário adicionado com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
    }
}

export {
    addUsuario
}