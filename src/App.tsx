import './App.scss';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodosContainer from './components/TodosContainer';

const App = () => (
  <div className="App">
    <div className="wrapper">
      <Header />
      <TodoForm />
      <TodosContainer />
    </div>
  </div>
);

export default App;
