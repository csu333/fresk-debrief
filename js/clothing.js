const clothingData = [
	{ name: "Jeans", production: 28.08, washing: 13.1, drying: 11.5, disposal: 0.11 },
	{ name: "T-shirts", production:	5.62, washing: 7.8, drying:	5.6, disposal: 0}
]

var title = 'Clothing: Greenhouse gas emissions across the lifecycle';
var yAxisLabel = 'Greenhouse gas emissions (kg CO₂eq)';
var seriesName = [
	'Production',
	'Washing',
	'Drying',
	'Disposal'
];

if (language == 'fr') {
	title = 'Habillage: émissions de gas à effet de serre pendant la durée de vie';
	yAxisLabel = 'Émissions de gas à effet de serre (kg CO₂eq)';
	seriesName = [
		'Production',
		'Lavage',
		'Sèchage',
		'Élimination'
	];
}


// Create the chart
Highcharts.chart('container-clothing', {
  chart: {
    type: 'bar',
	height: '250px',
    styledMode: true
  },
  title: {
    text: title,
  },
  xAxis: {
    categories: clothingData.map(x => x.name),
    labels: {
        style: {
            fontSize: '1.5em'
        }
    }
  },
  yAxis: {
    title: {
      text: yAxisLabel
    }
  },
  responsive: {
        rules: [{
            condition: {
                maxWidth: 550
            },
            chartOptions: {
				chart: {
					height: '140px'
				},
				legend: {
					labelFormatter: function() {
						return "<b>" + this.name + "</b>";
					},
                    itemStyle: {
                        fontSize: '9px'
                    }
				},
                title: {
                    style: {
                        fontSize: '10px'
                    }
                },
            legend: {
                x: 100,
                y: -20,
                width: '50%',
                labelFormatter: function() {
                    return "<b>" + this.name+"</b>";
                },
                itemStyle: {
                    textOverflow: undefined,
                    fontWeight: 'normal'
                }
              },
            },
        }]
  },
  legend: {
    reversed: true,
	useHTML: true,
	floating: true,
	x: 210,
	y: -70,
	width: '50%',
	labelFormatter: function() {
		return "<b>" + this.name+"</b>";
	},
	itemStyle: {
		textOverflow: undefined,
		fontWeight: 'normal'
	}
  },
  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },
  series: [{
		name: seriesName[3],
		data: clothingData.map(x => x.disposal)
 	}, {
		name: seriesName[2],
		data: clothingData.map(x => x.drying)
	},  {
		name: seriesName[1],
		data: clothingData.map(x => x.washing)
	 }, {
		name: seriesName[0],
		data: clothingData.map(x => x.production),
		/*dataLabels: {
			enabled: true,
			color: '#000',
			style: {fontWeight: 'bolder'},
			formatter: function() {
				return Math.round(this.point.total * 100, 2) / 100 + " kg"},
			inside: false
		},*/
	},  ]
});