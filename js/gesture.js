const dataGesture = [{
	name: 'Alimentation',
	data: [{
		name: 'Régime végétarien',
		y: 1.12
	}, {
		name: 'Manger local',
		y: 0.17
	}]
}, {
	name: 'Mobilité',
	data: [{
		name: 'Vélo pour trajets courts',
		y: 0.32
	}, {
		name: 'Covoiturage sur tous les trajets',
		y: 0.27
	}, {
		name: 'Ne plus prendre l\'avion',
		y: 0.27
	}]
}, {
	name: 'Biens et services',
	data: [{
		name: 'Moins de vêtements neufs',
		y: 0.22
	}, {
		name: 'Électroménager et high-tech d\'occasion',
		y: 0.16
	}, {
		name: 'Zéro déchets et gourde',
		y: 0.09
	}]
},{
	name: 'Logement',
	data: [{
		name: 'Thermostat',
		y: 0.16
	}, {
		name: 'LEDs dans logement',
		y: 0.02
	}]
}]

const colData = [];
const pieData = [];
var total = 0;

for (const sector in dataGesture) {
	for (const gesture in dataGesture[sector].data) {
		colData.push({
			color: Highcharts.getOptions().colors[sector],
			... dataGesture[sector].data[gesture]
		});
		if (pieData[sector]){
			pieData[sector].y += dataGesture[sector].data[gesture].y
		} else {
			pieData.push({
				color: Highcharts.getOptions().colors[sector],
				name: dataGesture[sector].name,
				y: dataGesture[sector].data[gesture].y
			});
		}
		total += dataGesture[sector].data[gesture].y;
	}
}
pieData.forEach(item => item.y = item.y * 100 / total)

// Create the chart
Highcharts.chart('container-gesture', {
	chart: {
		type: 'column',
		events: {
		  render: function() {
			var chart = this;
			chart.renderer.text('<b>Total baisse:</b><br>&nbsp;&nbsp;2,8 t CO₂eq',  chart.plotLeft + 0.6 * chart.plotWidth - chart.series[1].center[3] *0.4, chart.plotTop + 0.4 * chart.plotHeight)
			  .css({
				fontSize: chart.series[1].center[3] /8+ 'px',
				color: '#666666'
			  })
			  .attr({zIndex:6}).add();
		  }}
	},
	title: {
		text: 'Réduction de CO₂ induites par les gestes individuels'
	},
	xAxis: {
		type: 'category'
	},
	yAxis: {
		title: {
			text: 'Baisse (t CO₂eq / pers / an)'
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
		name: "Gestes gratuits",
		data: colData,
		dataSorting: {
			enabled: true,
		},
		showInLegend: false
	}, {
		type: 'pie',
		title: 'Total baisse: 2,8 t CO₂eq',
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
