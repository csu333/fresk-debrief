const dataAction = [{
	namefr: 'Alimentation',
	name: 'Food',
	data: [{
		namefr: 'Régime végétarien',
		name: 'Eat vegetarian',
		y: 1.12
	}, {
		namefr: 'Manger local',
		name: 'Eat local',
		y: 0.17
	}]
}, {
	namefr: 'Mobilité',
	name: 'Mobility',
	data: [{
		namefr: 'Vélo pour trajets courts',
		name: 'Use bike for short trips',
		y: 0.32
	}, {
		namefr: 'Covoiturage sur tous les trajets',
		name: 'Car sharing on all trips',
		y: 0.27
	}, {
		namefr: 'Ne plus prendre l\'avion',
		name: 'Don\' take the plane anymore',
		y: 0.27
	}]
}, {
	namefr: 'Biens et services',
	name: 'Goods and services',
	data: [{
		namefr: 'Moins de vêtements neufs',
		name: 'Less new clothes',
		y: 0.22
	}, {
		namefr: 'Électroménager et high-tech d\'occasion',
		name: 'Second hand electro and high-tech',
		y: 0.16
	}, {
		namefr: 'Zéro déchets et gourde',
		name: 'No garbage and bottle',
		y: 0.09
	}]
},{
	namefr: 'Logement',
	name: 'Building',
	data: [{
		namefr: 'Thermostat',
		name: 'Thermostat',
		y: 0.16
	}, {
		namefr: 'LEDs dans logement',
		name: 'LED at home',
		y: 0.02
	}]
}]

const colData = [];
const pieData = [];
var total = 0;

for (const sector in dataAction) {
	for (const action in dataAction[sector].data) {
		colData.push({
			color: Highcharts.getOptions().colors[sector],
			name: language == 'fr' ? dataAction[sector].data[action].namefr : dataAction[sector].data[action].name,
			y : dataAction[sector].data[action].y
		});
		if (pieData[sector]){
			pieData[sector].y += dataAction[sector].data[action].y
		} else {
			pieData.push({
				color: Highcharts.getOptions().colors[sector],
				name: language == 'fr' ? dataAction[sector].namefr : dataAction[sector].name,
				y: dataAction[sector].data[action].y
			});
		}
		total += dataAction[sector].data[action].y;
	}
}
pieData.forEach(item => item.y = item.y * 100 / total)

var title = 'CO₂ emission reduction achieved through personal actions (France)';
var yAxisLabel = 'Decrease  (t CO₂eq / pers / year)';
var totalLabel = 'Total decr.';

if (language == 'fr') {
	title = 'Réduction de CO₂ induites par les gestes individuels (France)';
	yAxisLabel = 'Baisse (t CO₂eq / pers / an)';
	totalLabel = 'Total baisse';
}

// Create the chart
Highcharts.chart('container-action', {
	chart: {
		type: 'column',
		events: {
		  render: function() {
			var chart = this;
			chart.renderer.text('<b>' + totalLabel + ':</b><br>&nbsp;&nbsp;2,8 t CO₂eq',  chart.plotLeft + 0.6 * chart.plotWidth - chart.series[1].center[3] *0.4, chart.plotTop + 0.4 * chart.plotHeight)
			  .css({
				fontSize: (chart.series[1].center[3] / 8) + 'px',
				color: '#666666'
			  })
			  .attr({zIndex:6}).add();
		  }}
	},
	title: {
		text: title
	},
	xAxis: {
		type: 'category'
	},
	yAxis: {
		title: {
			text: yAxisLabel
		}

	},
	legend: {
		enabled: true
	},
	plotOptions: {
		series: {
			borderWidth: 0,
			dataLabels: {
				enabled: true,
				style: {fontWeight: 'bolder'},
				format: '{point.y:.2f}'
			}
		},
	},

	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
	},

	series: [{
		data: colData,
		dataSorting: {
			enabled: true,
		},
		showInLegend: false
	}, {
		type: 'pie',
		title: 'Total: 2,8 t CO₂eq',
		data: pieData,
		center: ['60%', '40%'],
		size: '45%',
		innerSize: '60%',
		showInLegend: true,
		dataLabels: {
			enabled: true,
			color: '#000',
			style: {fontWeight: 'bolder'},
			format: '{point.y:.0f} %',
			distance: '-20%'
		},
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> du total<br/>'
		},
	  }],
});
