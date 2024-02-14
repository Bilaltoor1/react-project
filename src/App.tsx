import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import {useState} from "react";
import {Data} from './utils/Data.ts'
import './App.css'
import PieChart from "./components/PieChart.tsx";

Chart.register(CategoryScale);

export default function App() {

    // @ts-ignore
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained ",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#2a71d0",
                    "#f3ba2f"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });


    return (
        <div className="App">
            <p>Using Chart.js in React</p>
            <PieChart chartData={chartData}/>
        </div>
    );
}