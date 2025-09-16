import './styles/theme.css';
import './styles/global.css';
import { Trash } from 'lucide-react';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export function App() {
  return (
    <>
      <Logo />
      <Menu />
      <Heading>
        Olá mundo!
        <button>
          <Trash color='green' />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
        aperiam delectus? Maxime earum soluta cupiditate culpa exercitationem
        deserunt dolor veritatis asperiores repudiandae, corrupti, nesciunt vel
        iure odio quae dicta nam.
      </p>
    </>
  );
}
