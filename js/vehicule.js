var pointFormat = '<span style="color:{point.color}">\u25CF</span> {series.name}: ' +
    '<br/>&nbsp&nbsp&nbsp- High <b>{point.high}</b> g CO₂ / km<br/>&nbsp&nbsp&nbsp- Average <b>{point.median}</b> g CO₂ / km<br/>&nbsp&nbsp&nbsp- Low <b>{point.low}</b> g CO₂ / km';
var title = 'CO₂ emissions from well to wheel per passenger';
var subtitle = 'And order of magnitude of the full lifecycle if available. Electricity 212 g CO₂ / kWh';
var categories = [
    'Wakling', 
    'Bike', 
    'Electric bike', 
    'Scooter (Combustion)', 
    'Scooter (Electric)', 
    'Motorbike (Combustion)', 
    '1 passenger', 
    '2 passengers', 
    '3 passengers', 
    '4 passengers', 
    '5 passengers', 
    '1 passenger', 
    '2 passengers', 
    '3 passengers', 
    '4 passengers', 
    '5 passengers', 
    '1 passenger', 
    '2 passengers', 
    '3 passengers', 
    '4 passengers', 
    '5 passengers', 
    '4 passengers', 
    '8 passengers', 
    '27,5 passengers', 
    '55 passengers', 
    '150 passengers', 
    '300 passengers', 
    '100 passengers', 
    '200 passengers',
    'Plane'
]

var bands = [
    { 
        title: 'Unipersonal<br/>transport',
        from: -0.5,
        to: 5.5
    },
    {
        title: 'Petrol<br/>car',
        from: 5.5,
        to: 10.5
    },
    {
        title: 'Diesel<br/>car',
        from: 10.5,
        to: 15.5
    },    
    { 
        title: 'Electric<br/>car',
        from: 15.5,
        to: 20.5
    },
    { 
        title: 'Diesel<br/>minibus',
        from: 20.5,
        to: 22.5
    },
    { 
        title: 'Diesel<br/>bus',
        from: 22.5,
        to: 24.5
    },
    {
        title: 'Electric<br/>train',
        from: 24.5,
        to: 26.5
    },
    { 
        title: 'Diesel<br/>train',
        from: 26.5,
        to: 28.5
    }
];

var seriesName = [
    'Average emissions',
    'Average emissions during full lifecycle'
];

var yAxisTitle = 'Emissions (g CO₂ / km)';

if (language == "fr"){
    pointFormat = '<span style="color:{point.color}">\u25CF</span> {series.name}: ' +
        '<br/>&nbsp&nbsp&nbsp- Haute <b>{point.high}</b> g CO₂ / km<br/>&nbsp&nbsp&nbsp- Moyenne <b>{point.median}</b> g CO₂ / km<br/>&nbsp&nbsp&nbsp- Bas <b>{point.low}</b> g CO₂ / km<br/>';
    title = 'Émissions CO₂ du puits à la roue par passager';
    subtitle = 'Et ordre de grandeur tenant compte du cycle de vie complet si disponible. Électricité 212 g CO₂ / kWh';
    categories = [
        'Marche', 
        'Cycles', 
        'VAE-EDP', 
        'Scooter essence', 
        'Scooter électrique', 
        'Moto essence', 
        '1 passager', 
        '2 passagers', 
        '3 passagers', 
        '4 passagers', 
        '5 passagers', 
        '1 passager', 
        '2 passagers', 
        '3 passagers', 
        '4 passagers', 
        '5 passagers', 
        '1 passager', 
        '2 passagers', 
        '3 passagers', 
        '4 passagers', 
        '5 passagers', 
        '4 passagers', 
        '8 passagers', 
        '27,5 passagers', 
        '55 passagers', 
        '150 passagers', 
        '300 passagers', 
        '100 passagers', 
        '200 passagers',
        'Avion'
    ];
    
    bands[0].title = 'Transport<br/>unipersonnel';
    bands[1].title = 'Voiture<br/>essence';
    bands[2].title = 'Voiture<br/>diesel';
    bands[3].title = 'Voiture<br/>électrique';
    bands[4].title = 'Minibus<br/>diesel';
    bands[5].title = 'Autocar<br/>diesel';
    bands[6].title = 'Train<br/>électrique';
    bands[7].title = 'Train<br/>diesel';
    
    seriesName = [
        'Émissions moyennes',
        'Émissions moyennes cycle de vie complet'
    ];
    yAxisTitle = 'Émissions (g CO₂ / km)'
}

// Define custom series type for displaying low/med/high values using boxplot as a base
Highcharts.seriesType('lowmedhigh', 'boxplot', {
    keys: ['low', 'median', 'high'],
    tooltip: {
        pointFormat: pointFormat
    }
}, {
    // Change point shape to a line with three crossing lines for low/median/high
    // Stroke width is hardcoded to 1 for simplicity
    drawPoints: function () {
        var series = this;
        this.points.forEach(function (point) {
            var graphic = point.graphic,
                verb = graphic ? 'animate' : 'attr',
                shapeArgs = point.shapeArgs,
                width = shapeArgs.width,
                left = Math.floor(shapeArgs.x) + 0.5,
                right = left + width,
                crispX = left + Math.round(width / 2) + 0.5,
                highPlot = Math.floor(point.highPlot) + 0.5,
                medianPlot = Math.floor(point.medianPlot) + 0.5,
                // Sneakily draw low marker even if 0
                lowPlot = Math.floor(point.lowPlot) +
                    0.5 - (point.low === 0 ? 1 : 0);

            if (point.isNull) {
                return;
            }

            if (!graphic) {
                point.graphic = graphic = series.chart.renderer
                    .path('point')
                    .add(series.group);
            }

            graphic.attr({
                stroke: point.color || series.color,
                "stroke-width": 3
            });

            graphic[verb]({
                d: [
                    'M', left, highPlot,
                    'H', right,
                    'M', left, medianPlot,
                    'H', right,
                    'M', left, lowPlot,
                    'H', right,
                    'M', crispX, highPlot,
                    'V', lowPlot
                ]
            });
        });
    }
});

// Create chart
var chartVehicule = Highcharts.chart('container-vehicule', {
    chart: {
        type: 'lowmedhigh',
		plotBackgroundColor: {
            linearGradient: [0, 0, 0, 600],
            stops: [
                [0, 'rgba(255, 220, 220, 0.3)'],
                [0.4, 'rgba(255, 220, 220, 0.3)'],
                [0.7, 'rgba(255, 255, 220, 0.3)'],
                [1, 'rgba(220, 255, 220, 0.3)']
            ]
        },
    },

    title: {
        text: title,
        style: {
            fontSize: '1.5rem'
        }
    },
	
	subtitle: {
		text: subtitle
	},

    xAxis: [{
        categories: categories,
        labels: {
            style: {
                fontSize: '1.3em'
            }
        },
        crosshair: true,
		plotBands: bands.map(function(element, index) {
            return {
                from: element.from,
                to: element.to,
                color: (index % 2 == 1) ? 'rgba(200, 200, 200, 0.3)' : 'rgba(200, 200, 200, 0.05)',
                label: {
                    text: '<em>' + element.title + '</em>',
                    style: {
                        color: '#333333',
                        fontSize: '1.5em'
                    },
                    y: 20
                }
            }
        })
    }],

    yAxis: {
        title: {
            text: yAxisTitle,
            style: {
                fontSize: '1.3em'
            }
        },
        labels: {
            style: {
                fontSize: '1.3em'
            }
        },
        min: 0,
		max: 400
    },
	
    responsive: {
        rules: [{
            condition: {
                maxWidth: 550
            },
            chartOptions: {
                xAxis: {
                    plotBands: 
                    bands.map(function(element, index) {
                        return {
                            from: element.from,
                            to: element.to,
                            color: (index % 2 == 1) ? 'rgba(200, 200, 200, 0.3)' : 'rgba(200, 200, 200, 0.05)',
                            label: {
                                text: '<em>' + element.title + '</em>',
                                style: {
                                    color: '#333333'
                                },
                                y: (index % 2 == 0) ? 20 : 60
                            }
                        }
                    })
                }
            }
        }]
    },

    tooltip: {
        shared: true
    },

    plotOptions: {
        series: {
            //whiskerWidth: 5,
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}        
        }
    },

    series: [{
        name: seriesName[0],
        data: [
            [ 18, 55, 132 ],
			[ 8, 26, 110 ],
			[ 0, 25, 60 ],
			[ 86, 120, 220 ],
			[ 1, 3, 5 ],
			[ 83, 180, 333 ],
			[ 136, 174, 326 ],
			[ 68, 87, 163 ],
			[ 45, 58, 109 ],
			[ 34, 44, 81 ],
			[ 27, 35, 65 ],
			[ 106, 168, 212 ],
			[ 53, 84, 106 ],
			[ 35, 56, 71 ],
			[ 27, 42, 53 ],
			[ 21, 34, 42 ],
			[ 36, 50, 69 ],
			[ 18, 25, 34 ],
			[ 12, 17, 23 ],
			[ 9, 13, 17 ],
			[ 7, 10, 14 ],
			[ 45, 50, 60 ],
			[ 23, 25, 30 ],
			[ 28, 32, 36 ],
			[ 14, 16, 18 ],
			[ 2, 3, 5 ],
			[ 1, 2, 2 ],
			[ 32, 48, 63 ],
			[ 16, 24, 32 ],
			[ 141, 246, 591 ]
        ]
    }, {
		name: seriesName[1],
		type: 'scatter',
		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<b>{point.y}</b> g CO₂eq / km'
		},
		data: [
			55,
			33,
			37,
			130,
			25,
			null,
			247,
			124,
			82,
			62,
			49,
			205,
			103,
			68,
			51,
			41,
			82,
			41,
			27,
			21,
			16
		]
	}],
	
	annotations: [{
		/*shapes: [{
			type: 'path',
			strokeWidth: 1,
			stroke: '#c6c6c6',
			points: [{
				x: 5.5,
				y: 0,
				xAxis: 0,
				yAxis: 0
			}, {
				x: 5.5,
				y: 1000,
				xAxis: 0,
				yAxis: 0
			}]
		}, {
			type: 'path',
			strokeWidth: 1,
			stroke: '#c6c6c6',
			points: [{
				x: 10.5,
				y: 0,
				xAxis: 0,
				yAxis: 0
			}, {
				x: 10.5,
				y: 1000,
				xAxis: 0,
				yAxis: 0
			}]
		}, {
			type: 'path',
			strokeWidth: 1,
			stroke: '#c6c6c6',
			points: [{
				x: 15.5,
				y: 0,
				xAxis: 0,
				yAxis: 0
			}, {
				x: 15.5,
				y: 1000,
				xAxis: 0,
				yAxis: 0
			}]
		}, {
			type: 'path',
			strokeWidth: 1,
			stroke: '#c6c6c6',
			points: [{
				x: 20.5,
				y: 0,
				xAxis: 0,
				yAxis: 0
			}, {
				x: 20.5,
				y: 1000,
				xAxis: 0,
				yAxis: 0
			}]
		}, {
			type: 'path',
			strokeWidth: 1,
			stroke: '#c6c6c6',
			points: [{
				x: 24.5,
				y: 0,
				xAxis: 0,
				yAxis: 0
			}, {
				x: 24.5,
				y: 1000,
				xAxis: 0,
				yAxis: 0
			}]
		}],*/
        labels: [{
            point: {
                x: 29,
                y: 385,
                xAxis: 0,
                yAxis: 0
            },
            shape: 'triangle',
            padding: 10,
			borderWidth: 0,
			backgroundColor: 'rgba(124, 181, 236, 0.7)',
            overflow: 'justify',
			text: '<br>591'
        }],
		zIndex: 3,
		draggable: ''
	}],
});

// Remove click events on container to avoid having "clickable" announced by AT
// These events are needed for custom click events, drag to zoom, and navigator
// support.
chartVehicule.container.onmousedown = null;
chartVehicule.container.onclick = null;