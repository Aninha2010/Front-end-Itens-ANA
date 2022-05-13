import { FunctionComponent } from 'react';
import './Botao.css';

type Props = {
    texto: string
}

const Botao: FunctionComponent<Props> = function(Props) {
    return(
        <button>Criar</button>
        
    );
};
 
export default Botao;