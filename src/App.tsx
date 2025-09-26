import './styles/theme.css';
import './styles/global.css';

import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <DefaultInput type='text' id='task' labelText='Task:' />

          <DefaultInput id='task' labelText='Lorem ipsum dolor sit amet.' />

          {/* 
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div> */}

          <div className='formRow'>
            <p>Ciclos:</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
