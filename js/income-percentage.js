const dataIncome = [
    {
        name: 'EU Top 1%',
        x: 0,
        y: 43.1
	},
    {
        name: 'EU Top 10%',
        x: 0.10,
        y: 19.4
	},
    {
        name: 'EU Middle 40%',
        x: 0.40,
        y: 8.5
	},
    {
        name: 'EU Bottom 50%',
        x: 0.50,
        y: 4.0
	}
]

var colData = [];
var pieData = [];
var total = 0;

for (const sector in dataIncome) {
    colData.push({
        type: 'column',
        color: Highcharts.getOptions().colors[sector],
        name: dataIncome[sector].name,
        data : [ dataIncome[sector].y ]
    });
    if (pieData[sector]){
        pieData[sector].y += dataIncome[sector].y
    } else {
        //if (dataIncome[sector].x > 0) {
            pieData.push({
                color: Highcharts.getOptions().colors[sector],
                name: dataIncome[sector].name,
                x: dataIncome[sector].x,
                y: dataIncome[sector].y
            });
        //}
    }
    total += dataIncome[sector].x * dataIncome[sector].y;
}
pieData.forEach(item => item.y = item.x * item.y * 100 / total);

colData.push(
{
    type: 'pie',
    data: pieData,
    center: ['70%', '40%'],
    size: '45%',
    innerSize: '60%',
    showInLegend: false,
    dataLabels: {
        enabled: true,
        color: '#000',
        style: {fontWeight: 'bolder'},
        format: '{point.y:.0f} %',
        distance: '-20%'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">{point.name}</span><br/> <b>{point.y:.2f}%</b> du total<br/>'
    },
});

var title = 'Average carbon footprint in EU';
var subtitle = "EU individuals (adjusted by household size)";
var yAxisLabel = 'Average carbon footprint (t CO₂eq / pers / year)';

if (language == 'fr') {
	title = 'Empreinte carbone moyenne';
    subtitle = "Individus de l’Union Européenne (ajusté par taille de ménage)"
	yAxisLabel = 'Empreinte carbone moyenne (t CO₂eq / pers / an)';
}

// Create the chart
Highcharts.chart('container-income-percentage', {
	chart: {
		type: 'column',
        styledMode: true,
	},
	title: {
		text: title,
	},
	subtitle: {
		text: subtitle,
	},
	xAxis: {
		labels: {
            enabled: false
        }
	},
	yAxis: {
		title: {
			text: yAxisLabel,
		},

	},
	legend: {
		enabled: true
	},
	plotOptions: {
		series: {
			borderWidth: 0,
            groupPadding: 0,
			dataLabels: {
				enabled: true,
				style: {
                    fontWeight: 'bolder',
                    fontSize: '1.5em'
                },
				format: '{point.y:.2f}'
			}
		},
	},

	tooltip: {
		headerFormat: '<span style="color:{point.color}">{series.name}</span><br>',
		pointFormat: '<b>{point.y:.2f}t CO₂eq</b> <br/>'
	},

	series: colData,
});
