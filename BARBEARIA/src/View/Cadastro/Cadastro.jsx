import './Style.css'
import { Container, Row, Col, Input, Button } from 'reactstrap';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { addUsuario } from '../../Firebase/Database';
import { validaCadastro } from '../../Valid/ValidCadastro';
import { useState } from 'react';
import { Alert } from '../../Components/Alert';
import { auth } from '../../Firebase/FirebaseConfig';

function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfirmasenha] = useState("");
    const [celular, setCelular] = useState("");
    const [idade, setIdade] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    

    const Cadastrar = async() =>{
        const novoUsuario = {
            nome: nome,
            usuario:email ,
            senha: senha,
            celular: celular,
            idade: idade
        }
        if(validaCadastro(novoUsuario,confirmarsenha)){
            
                await createUserWithEmailAndPassword(email, senha);
                addUsuario(novoUsuario)
            
            Alert("Cadastro efetuado com sucesso", "", "success");
        }else{
            Alert("Erro ao Cadastrar", "Verifique os campos", "error");
        }
    }


    return (
        <div className="all">
            <div className="infosCadastro">
                <h1 className="display-1">Cadastro</h1>
                <Row>
                    <Col>
                        <h5 className=''>Nome Completo:</h5>
                        <Input placeholder='João da Silva' style={{ width: "300px" }} onChange={(e) => { setNome(e.target.value) }} />
                        <h5 className=''>Email:</h5>
                        <Input placeholder='email@gmail.com' style={{ width: "300px" }} type='email' onChange={(e) => { setEmail(e.target.value) }} />
                        <h5 className=''>Senha:</h5>
                        <Input style={{ width: "300px" }} type='password' placeholder='*******' onChange={(e) => { setSenha(e.target.value) }} />
                        <h5 className=''>Confirmar senha:</h5>
                        <Input style={{ width: "300px" }} type='password' placeholder='*******' onChange={(e) => { setConfirmasenha(e.target.value) }} />
                        <h5 className=''>Celular:</h5>
                        <Input style={{ width: "150px" }} type='tel' placeholder="(99) 99999-9999" onChange={(e) => { setCelular(e.target.value) }} />
                        <h5 className=''>Idade:</h5>
                        <Input type='number' style={{ width: "80px" }} onChange={(e) => { setIdade(e.target.value) }} />
                        <Button onClick={Cadastrar} className='mt-3' color='primary'>Cadastrar</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Cadastro;