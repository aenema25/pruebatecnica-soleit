import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ScatterGraphChartjs = ({points}) =>{
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        }
    };
    // manipulate points data to match chartjs format
    const data = {
        datasets: [
            {
                label: Object.keys(points)[0],
                data: Object.values(points)[0]
                ,
                backgroundColor: '#E63946',
            },
            {
                label: Object.keys(points)[1],
                data: Object.values(points)[1],
                backgroundColor: '#A8DADC',
            },
            {
                label: Object.keys(points)[2],
                data: Object.values(points)[2],
                backgroundColor: '#1D3557',
            },
        ],
    };

    return (
        <Scatter options={options} data={data}/>
    )
}

export default ScatterGraphChartjs