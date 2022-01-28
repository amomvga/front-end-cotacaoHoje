import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function ChartRealTime() {
  const series = [
    {
      name: "series1",
      data: [1].slice(),
    },
  ];

  var options = {
    chart: {
      height: 350,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    series: [
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8],
      },
    ],
    title: {
      text: "Dynamic Updating Chart",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: 77777777,
    },
    yaxis: {
      max: 100,
    },
    legend: {
      show: false,
    },
    categories: [
      "2021-03-01T00:00:000Z",
      "2021-03-02:00:00.000Z",
      "2021-03-03:00:00.000Z",
      "2021-03-04:00:00.000Z",
      "2021-03-05:00:00.000Z",
      "2021-03-06:00:00.000Z",
      "2021-03-07:00:00.000Z",
      "2021-03-08:00:00.000Z",
      "2021-03-09:00:00.000Z",
      "2021-03-10:00:00.000Z",
      "2021-03-11:00:00.000Z",
      "2021-03-12:00:00.000Z",
      "2021-03-13:00:00.000Z",
      "2021-03-14:00:00.000Z",
      "2021-03-15:00:00.000Z",
    ],
  };

  return (
    <>
      <Chart width={1000} height={250} series={series} options={options} />
    </>
  );
}
