import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('App component rendered');
  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
        aperiam delectus? Maxime earum soluta cupiditate culpa exercitationem
        deserunt dolor veritatis asperiores repudiandae, corrupti, nesciunt vel
        iure odio quae dicta nam.
      </p>
    </>
  );
}
