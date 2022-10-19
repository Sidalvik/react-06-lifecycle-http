import './App.css';
import Crud from './Components/Crud/Crud';
import Separator from './Components/Separator/Separator';
import Watches from './Components/Watches/Watches';

function App() {
  return (
    <div className='App'>
      <h1 className=''>Курс React.<br></br>Домашнее задание по&nbsp;теме<br></br>"Композиция компонентов"</h1>
      <h2 className='mx-auto text-center'>Задание 1. "Карточки (Cards)"</h2>
      <div className='task-1' id='task-1'>
        {/* <Watches className = {''}/> */}
      </div>
      <Separator/>
      <h2 className='mx-auto text-center'>Задание 1. "CRUD (Crud)"</h2>
      <div className='task-2' id='task-2'>
        <Crud className = {''}/>
      </div>
      <Separator/>
    </div>
  );
}

export default App;
