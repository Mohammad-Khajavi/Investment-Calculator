import Header from "./Componenets/Header.jsx";
import UserInput from "./Componenets/UserInput.jsx";
import { useState } from "react";
import Results from "./Componenets/results.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
      {/* Results Go here  */}
    </>
  );
}

export default App;
