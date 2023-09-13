import { useState } from "react";
import "./Form.css";


export default function Form(props) {

  //useStates for inputValues
  const [currentSavingsInput, setCurrentSavingsInput] = useState(0);
  const [yearlyContributionsInput, setYearlyContributionsInput] = useState(0);
  const [expectedReturnInput, setExpectedReturnInput] = useState(0);
  const [durationInput, setDurationInput] = useState(0);


  function handleCurrentSavingsInput(event) {
    setCurrentSavingsInput(event.target.value);
  }
  function handleyearlyContributionsInput(event) {
    setYearlyContributionsInput(event.target.value);
  }
  function handleExpectedReturnsInput(event) {
    setExpectedReturnInput(event.target.value);
  }
  function handleDurationInput(event) {
    setDurationInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formValue = {
      currentSavings: currentSavingsInput,
      yearlyContributions: yearlyContributionsInput,
      expectedReturn: expectedReturnInput,
      duration: durationInput
    }
    props.getFormData(formValue);
  }

  return <form className="form" onSubmit={handleSubmit}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" id="current-savings" onChange={handleCurrentSavingsInput} />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" id="yearly-contribution" onChange={handleyearlyContributionsInput} />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label><input type="number" id="expected-return" onChange={handleExpectedReturnsInput} />
      </p>
      <p><label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" id="duration" onChange={handleDurationInput} />
      </p>
    </div>
    <p className="actions">
      <button type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>
}