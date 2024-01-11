import { useState } from 'react'

import Header from "./components/Header/Header.jsx"
import UserInput from "./components/UserInput/UserInput.jsx"
import Results from "./components/Results/Results.jsx"


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue)
      }
    });
  };
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      <Results {...userInput} />
    </>
  )
}

export default App
