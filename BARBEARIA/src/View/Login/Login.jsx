import React from "react";
import './Style.css'
import { Container, Row, Col, Input, Button } from 'reactstrap';
function Login() {
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
                            <h1 style={{ textAlign: "center" }} className="display-6 mt-5">Usuário:</h1>
                            <Input />
                            <h1 style={{ textAlign: "center" }} className="display-6 mt-5">Senha:</h1>
                            <Input />
                            <Row className="mt-3">
                                <Col>
                                <Button color="primary">Entrar</Button>
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
