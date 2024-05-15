import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header';
import { Intro } from '../components/intro/intro';
import { Pose } from '../components/pose/pose';


const seznam = {
  src: 'img/yoga-pose.jpg',
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
  title: 'Jogíni'
}



document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header title={seznam.title}/>
    <Intro heading={seznam.heading} text={seznam.text}/>
    <Pose src={seznam.src}/>
  </div>
);



