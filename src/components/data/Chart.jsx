import { useState, useEffect } from "react";
import { unixToString } from "../../utils/utils";
import Plot from "react-plotly.js";

const Chart = (props) => {
  const [chartXValues, setChartXValues] = useState([]);
  const [chartYValues, setChartYValues] = useState([]);

  //   if (!props.candleLoading) {
  //     console.log(dateToString(fromUnixToDate(props.candleData.t[0])));
  //     console.log(dateToString(fromUnixToDate(props.candleData.t[1])));
  //   }

  const getXY = () => {
    const chartXValuesFunction = [];
    const chartYValuesFunction = [];
    const data = props.candleData;
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
      data={[
        {
          x: chartXValues,
          y: chartYValues,
          type: "scatter",
          // mode: "lines+markers",
          marker: { color: "black" },
        },
      ]}
      layout={{ width: "100%", height: "100%", title: props.symbol }}
      config={{ displaylogo: false }}
    />
  );
};

export default Chart;
