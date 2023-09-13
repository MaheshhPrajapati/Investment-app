
import Form from "./Components/Form";
import Header from "./Components/Header";
import TableTitles from "./Components/TableTitles";
import { useState } from "react";
import TableContent from "./Components/TableContent";
import userEvent from "@testing-library/user-event";

const yearlyData = [];


function App() {

  //useState for yearly data
  const [data, setData] = useState([]);

  let formObject;
  function getFormData(formValue) {
    formObject = formValue;
    calculateHandler(formValue);
  }

  function calculateHandler(userInput) {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = userInput.yearlyContributions; // as mentioned: feel free to change the shape...
    const expectedReturn = userInput.expectedReturn / 100;
    const duration = userInput.duration;


    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...

    setData((prevValue) => {
      return [...prevValue, yearlyData];
    })
  };

  return (
    <div>
      <Header />

      <Form getFormData={getFormData} />


      {!data && <p>No calculations yet</p>}
      {data && <TableContent data={yearlyData} />}


    </div>
  );
}

export default App;
