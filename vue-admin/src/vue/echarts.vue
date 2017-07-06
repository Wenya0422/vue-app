<template>
	<div id="right">
		<div class="commonBody">
			<p class="x_title">Echarts</p>
			<ul id="echartsUl">
				<li id="roseType"></li>
				<li id="crossChart"></li>
				<li id="barChart"></li>
				<li id="lineChart"></li>
			</ul>
			<a href="http://echarts.baidu.com/examples.html">more</a>
		</div>
	</div>
</template>

<style>
.echarts {
  height: 300px;
}
</style>
<script>
export default {
	data () {
	    return {
    	}
    },
    methods: {
    	drawRoseType(){
    		const roseType = echarts.init(document.getElementById('roseType'))
    		roseType.setOption({
			    title: { text: 'roseType' },
			    tooltip: {},
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius: '55%',
			            data:[
			                {value:235, name:'视频广告'},
			                {value:274, name:'联盟广告'},
			                {value:310, name:'邮件营销'},
			                {value:335, name:'直接访问'},
			                {value:400, name:'搜索引擎'}
			            ]
			        }
			    ]
			})
    	},
    	drawCrossChart() {
            const drawCrossChart = echarts.init(document.getElementById('crossChart'));
            drawCrossChart.setOption({
              title: { text: 'cross' },
              tooltip: {},
              xAxis: {
                  data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        drawBarChart() {
            const barChart = echarts.init(document.getElementById('barChart'));
            barChart.setOption({
                title: {
                    text: 'Bar Chart',
                    subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]
            });
        },
        drawLineChart() {
            const lineChart = echarts.init(document.getElementById('lineChart'));
            lineChart.setOption({
                title: {
                    text: 'Line Chart'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
        },

    },
  	mounted() {
  		this.drawRoseType()
  		this.drawCrossChart()
        this.drawBarChart()
        this.drawLineChart()
  	}
}
</script>

