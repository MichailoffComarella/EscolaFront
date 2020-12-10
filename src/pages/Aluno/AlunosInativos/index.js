import {React, Component} from 'react';
import httpService from '../../../service/httpService';

class AlunosInativos extends Component {
    constructor() {
        super()

        this.state = {
            alunos: []
        }
    }

    componentDidMount() {
        httpService.get('/aluno?active=inativos')
            .then(({ data }) => {
                this.setState({ alunos: data })
                console.log(data)
            })
            
    }

    render() {

        const { alunos } = this.state

        return (
            
                <div>
                    <h2> Alunos Inativos </h2>

                    <ul>
                        {
                            alunos.map(aluno =>
                                <li key={aluno.id}>
                                    {aluno.nome}
                                </li>
                            )
                        }
                    </ul>
                </div>

        );
    }
}
 
export default AlunosInativos;