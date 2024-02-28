// import logo from './logo.svg';
import './App.css';
// import Heading from "./Heading";
// import Card from "./card";

function handleClick() { 
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt('type a number'); 
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}

function App() {
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Task: Add three Card elements</h1>
//       <Card h2="First card's h2" h3="First card's h3"/>
//       <Card h2="Second card's h2" h3="Second card's h3"/>
//       <Card h2="Third card's h2" h3="Third card's h3"/>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <h1>Hello World!</h1>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <Heading firstName="Ballukam"/>
//       <Heading firstName="Bob"/>
//     </div>
//   );
// }

export default App;
