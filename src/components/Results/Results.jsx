import './Results.css'

import { calculateInvestmentResults } from '../../util/investment';

export default function Results({ input }) {
    // console.log(input);
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return (
        <table id='result'>
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
};