import { View } from '@tarojs/components';
import Chart from '../echarts';
import * as echarts from 'echarts/core';
import './style.scss';
/**
 * 这个case 数据量有点大，很卡几乎无法交互
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-large
 */
export default function barPolarRealEstate() {
  function genData(len, offset) {
    let arr = new Float32Array(len * 2);
    let off = 0;
    for (let i = 0; i < len; i++) {
      let x = +Math.random() * 10;
      let y =
        +Math.sin(x) -
        x * (len % 2 ? 0.1 : -0.1) * Math.random() +
        (offset || 0) / 10;
      arr[off++] = x;
      arr[off++] = y;
    }
    return arr;
  }
  const data1 = genData(5e5);
  const data2 = genData(5e5, 10);
  const option = {
    title: {
      text:
        echarts.format.addCommas(data1.length / 2 + data2.length / 2) +
        ' Points'
    },
    tooltip: {},
    toolbox: {
      left: 'center',
      feature: {
        dataZoom: {}
      }
    },
    legend: {
      orient: 'vertical',
      right: 10
    },
    xAxis: [{}],
    yAxis: [{}],
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider'
      }
    ],
    animation: false,
    series: [
      {
        name: 'A',
        type: 'scatter',
        data: data1,
        dimensions: ['x', 'y'],
        symbolSize: 3,
        itemStyle: {
          opacity: 0.4
        },
        large: true
      },
      {
        name: 'B',
        type: 'scatter',
        data: data2,
        dimensions: ['x', 'y'],
        symbolSize: 3,
        itemStyle: {
          opacity: 0.4
        },
        large: true
      }
    ]
  };

  return (
    <View>
      <View className="header">数据量大会很卡，交互困难</View>
      <Chart option={option} />
    </View>
  );
}
