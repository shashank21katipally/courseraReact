import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";



// function Header() {
//   return (
//     <h1>Hello World!</h1>
//   )
// }

function App() {
  return (
    <div className="App">
      <Heading firstName="Ballukam"/>
      <Heading firstName="Bob"/>
    </div>
  );
}

export default App;
