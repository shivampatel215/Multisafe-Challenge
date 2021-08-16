import React from 'react'
import {useState, useEffect} from 'react';
import ReactApexChart from 'react-apexcharts';
import { lightenColor } from 'plottable/build/src/utils/colorUtils';


function Chart(props) {
    
    console.log(props.priceData.prices[0][1]-props.priceData.prices[29][1]);
    var color = (props.priceData.prices[1][1]-props.priceData.prices[props.priceData.prices.length -1][1] > 0 ? '#ea3943' : '#16c784');
    console.log(props.priceData.prices);


    const [options, setOptions] = useState({
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        theme: {
            mode: 'light',
            monochrome: {
                enabled: true,
                color: color,
                shadeTo: 'light',
                shadeIntensity: 1,
            }
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min: props.priceData.prices[0][0],
          tickAmount: 12,
        },
        tooltip: {
          x: {
            format: 'MMM dd yyyy hh:mm'
          },
          y: {
              formatter: undefined,
              show: true,
              title: {
                  formatter: (seriesName) => 'Price:',
              },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: .9,
            opacityFrom: 0,
            opacityTo: 1.2,
            stops: [0, 100]
          }
        },
      });

      const [series, setSeries] = useState([{
        data: props.priceData.prices
      }]);

    return (
        <div>
            <div id="chart-timeline">
                <ReactApexChart options={options} series={series} type="area" height={'625'} width={1000} />
            </div>
        </div>
    )
}

export default Chart
