import ReactApexChart from "react-apexcharts";

const ScatterGraphApexChart = ({points}) => {
    // manipulate points response to match apexchart format 
    const series = [{
        name: Object.keys(points)[0],
        data: Array.from(Object.values(points)[0]).map(coordinate => [coordinate.x, coordinate.y])
    }, {
        name: Object.keys(points)[1],
        data: Array.from(Object.values(points)[1]).map(coordinate => [coordinate.x, coordinate.y])
    }, {
        name: Object.keys(points)[2],
        data: Array.from(Object.values(points)[2]).map(coordinate => [coordinate.x, coordinate.y])
    }];
    const options = {
        chart: {
            type: 'scatter',
        }
    };
    return (
        <ReactApexChart type="scatter" series={series} options={options} ></ReactApexChart>

    )
}

export default ScatterGraphApexChart