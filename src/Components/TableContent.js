import "./Table.css";
export default function TableContent(props) {
  return <table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => {
        return <tr>
          <td>{item.year}</td>
          <td>{item.yearlyInterest}</td>
          <td>{item.yearlyInterest}</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>{item.yearlyContribution}</td>
        </tr>
      })}
    </tbody>
  </table>
}