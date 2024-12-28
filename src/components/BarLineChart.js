import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Y-axis Bar Chart",
        type: "column",
        data: [440, 505, 414],
      },
      {
        name: "Y-axis Line Chart",
        type: "line",
        data: [null, null, null, 201, 352, 752, 320, 257, 160],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: [0, 4],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        formatter: function (val, opts) {
          if (opts.seriesIndex === 1 && opts.dataPointIndex < 3) {
            return "";
          }
          return val;
        },
      },
      markers: {
        colors: [
          "#008FFB",
          function ({ value, seriesIndex, dataPointIndex, w }) {
            if (seriesIndex === 1 && dataPointIndex < 3) {
              return "transparent";
            }
            return "#00E396";
          },
        ],
      },
      labels: [
        "2024-12-01",
        "2024-12-02",
        "2024-12-03",
        "2024-12-04",
        "2024-12-05",
        "2024-12-06",
        "2024-12-07",
        "2024-12-08",
        "2024-12-09",
        "2024-12-10",
      ],
      yaxis: [
        {
          title: {
            text: "Bar",
          },
        },
        {
          opposite: true,
          title: {
            text: "Line Trend",
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
