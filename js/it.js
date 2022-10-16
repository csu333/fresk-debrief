const itData = [
	{ name: 'Desktops Home', namefr: 'Desktop maison', production: 423, use: 627 },
	{ name: 'Desktop Office', namefr: 'Desktop bureau',production: 423, use: 432 },
	{ name: 'Notebooks Home', namefr: 'Portable maison',production: 375, use: 186 },
	{ name: 'Notebooks Office', namefr: 'Portable bureau',production: 375, use: 129 },
	{ name: 'CRT Displays', namefr: 'Ecran LCD',production: 200, use: 438 },
	{ name: 'LCD Displays', namefr: 'Ecran CRT',production: 95, use: 198 },
	{ name: 'Tablets', namefr: 'Tablettes',production: 98, use: 27 },
	{ name: 'Smartphones', namefr: 'Smartphones',production: 60, use: 10 }

]

var title = 'IT: Greenhouse gas emissions across the lifecycle';
var yAxisLabel = 'Greenhouse gas emissions (kg CO₂eq)';
var seriesName = [
	'Production',
	'Use'
];

if (language == 'fr') {
	title = 'Informatique: émissions de gas à effet de serre pendant la durée de vie';
	yAxisLabel = 'Émissions de gas à effet de serre (kg CO₂eq)';
	seriesName = [
		'Production',
		'Utilisation',
	];
}


// Create the chart
Highcharts.chart('container-it', {
  chart: {
    type: 'bar',
    styledMode: true
  },
  title: {
    text: title,
  },
  xAxis: {
    categories: itData.map(x => x.name),
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
					height: '250px'
				},
				legend: {
					labelFormatter: function() {
						return "<b>" + this.name + "</b>";
					}
				}
            }
        }]
  },
  legend: {
    reversed: true,
	useHTML: true,
	floating: true,
	x: 150,
	y: -50,
	width: '40%',
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
  series: [ {
		name: seriesName[1],
		data: itData.map(x => x.use)
	 }, {
		name: seriesName[0],
		data: itData.map(x => x.production),
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