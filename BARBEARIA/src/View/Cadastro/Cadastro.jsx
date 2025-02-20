import './Style.css'
import { Container, Row, Col, Input, Button } from 'reactstrap';

function Cadastro() {
    return (
        <div className="all">
            <div className="infosCadastro">
                <h1 className="display-1">Cadastro</h1>
                <Row>
                    <Col>
                    <h5 className=''>Usuário:</h5>
                    <Input/>
                    <h5 className=''>Senha:</h5>
                    <Input/>
                    <h5 className=''>Confirmar senha:</h5>
                    <Input/>
                    <h5 className=''>Celular:</h5>
                    <Input/>
                    <h5 className=''>Idade:</h5>
                    <Input/>
                    <Button className='mt-3' color='primary'>Cadastrar</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Cadastro;