import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css'
import { Container, Row, Col, Input, Button } from 'reactstrap';
import { Alert } from "../../Components/Alert";
import { auth } from "../../Firebase/FirebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleSubmit = async()=>{
        
    try{
    const credencial = await signInWithEmailAndPassword(email, senha);
        if(credencial){
            navigate('../Home')
        }else{
            Alert("Erro ao efetuar login", "Verifique suas credenciais!", "error");
            
        }
    }catch(e){
        console.log("DEU RUIM");
        
    }
    }

    return (
        <div className="all">
            <Container className="login">
                <Row>
                    <Col className="propaganda">
                        <h1 style={{ textAlign: "center" }} className="title mt-5 display-1">Barbearia Oliveira</h1>
                        <h5 style={{ textAlign: "center" }}>Procurando um corte impecável e um atendimento de primeira? Na Barbearia Oliveira, transformamos
                            seu visual com profissionalismo, modernidade e aquele toque clássico que nunca sai de moda!</h5>
                        <h3 style={{ textAlign: "center" }} className="display-6">.Cortes modernos e tradicionais</h3>
                        <h3 style={{ textAlign: "center" }} className="display-6">.Atendimento personalizado e ambiente confortável</h3>
                        <h3 style={{ textAlign: "center" }} className="display-6">.Produtos de alta qualidade para o melhor cuidado</h3>
                    </Col>
                    <Col className="infosLogin">

                        <div className="blocoLogin">
                            <h1 style={{ textAlign: "center" }} className="display-6 mt-5">Email:</h1>
                            <Input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                            <h1 style={{ textAlign: "center" }} className="display-6 mt-5">Senha:</h1>
                            <Input type="password" onChange={(e)=>{setSenha(e.target.value)}} />
                            <Row className="mt-3">
                                <Col>
                                <Button onClick={handleSubmit} color="primary">Entrar</Button>
                                </Col>
                                <Col>
                                <Button color="primary">Cadastrar</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
