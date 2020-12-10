import { Button } from '@material-ui/core';
import {React, Component} from 'react';
import httpService from '../../../service/httpService';

class AlunosAtivos extends Component {
    constructor() {
        super()

        this.state = {
            alunos: []
        }
    }

    componentDidMount() {
        httpService.get('/aluno?active=ativos')
            .then(({ data }) => {
                this.setState({ alunos: data })
                console.log(data)
            })
            
    }

    _handleDeleteAluno = (id) => {
        httpService.delete(`/aluno/${id}`)
        .then(() => {
            const { alunos } = this.state
            const updatedAlunos = alunos.filter(
                alunos => alunos.id !== id
            )

            this.setState({
                alunos: updatedAlunos
            })
        })
    }

    render() {

        const { alunos } = this.state

        return (
            
                <div>
                    <h2> Alunos Ativos </h2>

                    <ul>
                        {
                            alunos.map(aluno =>
                                <li key={aluno.id}>
                                    {aluno.nome}
                                    <Button onClick={() => this._handleDeleteAluno(aluno.id)}> 
                                    Desativar
                                    </Button>
                                </li>
                            )
                        }
                    </ul>
                </div>

        );
    }
}
 
export default AlunosAtivos;