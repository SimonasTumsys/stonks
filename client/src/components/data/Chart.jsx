import { useState, useEffect } from "react";
import { unixToString } from "../../utils/utils";
import Plot from "react-plotly.js";

const Chart = (props) => {
  const [chartXValues, setChartXValues] = useState([]);
  const [chartYValues, setChartYValues] = useState([]);

  const getXY = () => {
    const chartXValuesFunction = [];
    const chartYValuesFunction = [];
    const timeData = props.candleData["t"];
    const priceData = props.candleData["c"];

    for (let key in timeData) {
      chartXValuesFunction.push(unixToString(timeData[key]));
    }

    for (let key in priceData) {
      chartYValuesFunction.push(priceData[key]);
    }

    setChartXValues(chartXValuesFunction);
    setChartYValues(chartYValuesFunction);
  };

  useEffect(() => {
    getXY();
  }, [props.symbol]);

  return (
    <Plot
      className="overflow-x-auto pt-6 w-full"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#161a1d",
      }}
      data={[
        {
          x: chartXValues,
          y: chartYValues,
          type: "scatter",
          marker: { color: "#1f77b4" },
        },
      ]}
      layout={{
        width: "100%",
        height: "100%",
        paper_bgcolor: "#161a1d",
        plot_bgcolor: "#161a1d",
        title: props.companyName,
        dragmode: "zoom",
        modebar: {
          orientation: "v",
          remove: ["zoomin", "zoomout", "autoscale", "lasso", "select"],
        },
        xaxis: {
          gridcolor: "#273341",
          rangebreaks: [
            { pattern: "day of week", bounds: [6, 1] },
            { pattern: "hour", bounds: [3, 11] },
          ],
        },
        yaxis: {
          gridcolor: "#273341",
        },
        font: { color: "#abaeb3" },
      }}
      config={{
        displaylogo: false,
        scrollZoom: true,
        responsive: true,
      }}
    />
  );
};

export default Chart;
