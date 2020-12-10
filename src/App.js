import { AppBar, Button, IconButton, Switch, Toolbar } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import { Link, Route } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import Alunos from "./pages/Aluno/TodosAlunos/index";
import AlunosAtivos from "./pages/Aluno/AlunosAtivos";
import AlunosInativos from "./pages/Aluno/AlunosInativos"


function App() {
  return (
    <div>

      <h1> Todos: </h1>

      <Alunos />

      <h1> Ativos: </h1>

      <AlunosAtivos />

      <h1> Inativos: </h1>

      <AlunosInativos />


      {/* <Router>
        <Switch>
          <Route path="/aluno" exact component={Alunos}/>
        </Switch>
      </Router>  */}
      
      {/* <Router>

        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton edge="start" color="default" aria-label="menu"> <HomeIcon/> </IconButton>
            </Link>
            <Link to="/aluno">
              <Button variant="contained" color="secondary"> Alunos </Button>
            </Link>
            <Link to="/mentor">
              <Button variant="contained" color="secondary"> Mentores </Button>
            </Link>
            <Link to="/mentoria">
              <Button variant="contained" color="secondary"> Mentorias </Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/aluno" exact component={Alunos} />
        </Switch>

      </Router> */}

    </div>
  );
}

export default App;
