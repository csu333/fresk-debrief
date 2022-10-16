const incomeData = [
    {
        data: [
            [ 8128, 4.3 ],
            [ 11518, 5.8 ],
            [ 13499, 6.9 ],
            [ 15243, 7.7 ],
            [ 17350, 8.5 ],
            [ 19439, 9.6 ],
            [ 20965, 10.6 ],
            [ 23472, 12 ],
            [ 25780, 14.2 ],
            [ 33065, 20.1 ]
        ]
    },
    {
        data: [
            [ 2017, 5.6 ],
            [ 3180, 7.6 ],
            [ 4062, 9 ],
            [ 4724, 10.7 ],
            [ 5325, 12.1 ],
            [ 6107, 13.5 ],
            [ 7530, 16 ],
            [ 8091, 17.9 ],
            [ 10108, 21.5 ],
            [ 16287, 31.5 ]        
        ]
    },
    {
        data: [
            [ 8428, 5.3 ],
            [ 11244, 7.6 ],
            [ 12413, 8.2 ],
            [ 13204, 8.9 ],
            [ 15518, 10.5 ],
            [ 16466, 11.1 ],
            [ 17809, 13 ],
            [ 25905, 21.8 ]
        ]
    }
]

var title = 'Average carbon footprint by Income Level (2020)';
var xAxisLabel = 'Net income (EUR per capita)';
var yAxisLabel = 'Average carbon footprint (t CO₂eq per capita)';

var seriesDesc = [
	'Belgium',
    'Luxembourg',
    'France'
]

if (language == 'fr') {
	title = 'Empreinte carbone moyenne par niveau de revenu (2020)';
    var xAxisLabel = 'Revenu net (EUR par personne)';
	yAxisLabel = 'Empreinte carbone moyenne (t CO₂eq par personne)';
	seriesDesc = [
		'Belgique',
        'Luxembourg',
        'France'
	];
}


// Create the chart
Highcharts.chart('container-income', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        styledMode: true
    },
    title: {
        text: title,
        style: {
            fontSize: '2em'
        }
    },
    xAxis: {
        title: {
            enabled: true,
            text: xAxisLabel,
            style: {
                fontSize: '1.5em'
            }
        },
        labels: {
            style: {
                fontSize: '1.3em'
            }
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: yAxisLabel,
            style: {
                fontSize: '1.5em'
            }
        },
        labels: {
            style: {
                fontSize: '1.3em'
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} EUR, {point.y} t CO₂eq'
            }
        }
    },
    series: incomeData.map(function(element, index) {
        return {
            name: seriesDesc[index],
            color: element.color,
            data: element.data
        }
    })
});