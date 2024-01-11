import './Results.css'

import { calculateInvestmentResults, formatter } from '../../util/investment';

export default function Results({ input }) {
    // console.log(input);
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    console.log(resultsData);
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Invest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invest Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(({ year, interest, valueEndOfYear, annualInvestment }) => {
                    const totalInterest = valueEndOfYear - annualInvestment * year - initialInvestment;
                    const totalAmountInvested = valueEndOfYear - totalInterest
                    return (
                        <tr key={`yd_${year}`}>
                            <td>Year {year}</td>
                            <td>{formatter.format(valueEndOfYear)}</td>
                            <td>{formatter.format(interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
};