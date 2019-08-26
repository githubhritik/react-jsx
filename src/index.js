// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return 'Click On Me !';
// }
// Create a react component
const App = () => {
  const buttonText = 'Click me !';
  // const style = { backgroundColor: 'blue', color: 'white' };
  // const buttonText = { text: 'Click me' };
  // const labelText = 'Enter name:';
  //* class="label" do not use this because it is javascript keyword
  return (
    <div>
      <label className="label" for="name">Ente r name:</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
    </div>
  );
};
//* button = submit

// <button style="background-color:blue; color: white;"></button>

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));


