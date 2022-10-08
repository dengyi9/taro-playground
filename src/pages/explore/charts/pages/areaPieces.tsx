import { View } from '@tarojs/components';
import * as echarts from 'echarts/core';
import Chart from '../echarts';
import './style.scss';

/**
 * 这个case ios上svg不出来（严格来说，应该是动画效果出不来，页面滑动几下还是可以看到图表的；但是android上表现就挺好）
 * https://echarts.apache.org/examples/zh/editor.html?c=area-pieces
 * https://echarts.apache.org/examples/zh/editor.html?c=data-transform-filter
 * https://echarts.apache.org/examples/zh/editor.html?c=confidence-band
 * https://echarts.apache.org/examples/zh/editor.html?c=line-easing
 */

export default function barPolarRealEstate() {
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '30%']
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: 'rgba(0, 0, 180, 0.4)'
        },
        {
          gt: 5,
          lt: 7,
          color: 'rgba(0, 0, 180, 0.4)'
        }
      ]
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#5470C6',
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
        },
        areaStyle: {},
        data: [
          ['2019-10-10', 200],
          ['2019-10-11', 560],
          ['2019-10-12', 750],
          ['2019-10-13', 580],
          ['2019-10-14', 250],
          ['2019-10-15', 300],
          ['2019-10-16', 450],
          ['2019-10-17', 300],
          ['2019-10-18', 100]
        ]
      }
    ]
  };

  return (
    <View>
      <View className="header">
        这个case
        ios上svg不出来（严格来说，应该是动画效果出不来，页面滑动几下还是可以看到图表的；但是android上表现就挺好）；另外，canvas那个背景条没出来
      </View>
      <Chart option={option} />
    </View>
  );
}
