const fishData = [
	{ name: 'Bivalves ', namefr: 'Bivalves', value: 1.39912623, farmed: true },
	{ name: 'Bivalves ', namefr: 'Bivalves', value: 11.40004939, farmed: false },
	{ name: 'Carp ', namefr: 'Carpe', value: 6.946922702, farmed: true },
	{ name: 'Catfish ', namefr: 'Poisson-chat', value: 7.774491103, farmed: true },
	{ name: 'Chicken', namefr: 'Poulet', value: 8.335000001, farmed: undefined },
	{ name: 'Cod, haddock ', namefr: 'Cabillaud, églefin', value: 5.125038766, farmed: false },
	{ name: 'Flounder ', namefr: 'Flet', value: 20.31331444, farmed: false },
	{ name: 'Herring, sardines ', namefr: 'Hareng, sardines', value: 3.877940448, farmed: false },
	{ name: 'Jack fish ', namefr: 'Carangue', value: 9.665174349, farmed: false },
	{ name: 'Lobster ', namefr: 'Homard', value: 19.44495157, farmed: false },
	{ name: 'Milkfish ', namefr: 'Chanos', value: 6.434886518, farmed: true },
	{ name: 'Other freshwater fish ', namefr: 'Autres poissons d\'eau douce', value: 18.90592209, farmed: true },
	{ name: 'Other marine fish ', namefr: 'Autres poissons marins', value: 11.59517858, farmed: true },
	{ name: 'Redfish, bass ', namefr: 'Sébaste, achigan', value: 9.914649563, farmed: false },
	{ name: 'Salmon ', namefr: 'Saumon', value: 5.100985973, farmed: true },
	{ name: 'Salmon, trout ', namefr: 'Saumon, truite', value: 6.881338695, farmed: false },
	{ name: 'Seaweed ', namefr: 'Algues', value: 1.086722561, farmed: true },
	{ name: 'Shrimp ', namefr: 'Crevette', value: 9.428015643, farmed: true },
	{ name: 'Shrimp ', namefr: 'Crevette', value: 11.95673939, farmed: false },
	{ name: 'Silver/bighead ', namefr: 'Argent/grosse tête', value: 3.510591001, farmed: true },
	{ name: 'Squid ', namefr: 'Calmar', value: 8.184950304, farmed: false },
	{ name: 'Tilapia ', namefr: 'Tilapia', value: 10.67598157, farmed: true },
	{ name: 'Trout ', namefr: 'Truite', value: 5.409547178, farmed: true },
	{ name: 'Tuna ', namefr: 'Thon', value: 7.629053804, farmed: false }
]

fishData.sort(function(a, b) { return (b.value) - (a.value) })

fishData.series = [
    {
        data: []
    },
    {  
        data: []
    }
]
fishData.forEach( (fish) => {
	if (fish.farmed === undefined) {
		fish.color = Highcharts.getOptions().colors[2]
        fishData.series[1].data += fish;
	} else if (fish.farmed) {
		fish.color = Highcharts.getOptions().colors[1]
        fishData.series[0].data += fish;
	}
	fish.y = fish.value
})

var title = 'Greenhouse gas emissions per kilogram of seafood (2021)';
var subtitle = 'Based on a meta-analysis of data from 1690 fish farms and 1000 unique fishery records. Impacts are given per kilogram of edible weight. Farmed fish are shown in black; wild-caught in blue. Chicken – the lowest-impact meat – is shown for comparison.'
var seriesLabel = [   
    'Wild fish',
    'Farmed fish'
]

if (language == 'fr') {
  title = 'Gaz à effet de serre par kilo de fruit de mer (2021)';
  subtitle = 'Basé sur une meta-analyse de 1690 élevages et 1000 enregistrements de pêche uniques. Les impacts sont donnés par kilogramme de poids comestible. Le poulet - la viande avec le moins d\'impact - est indiqué en vert pour comparasion';
  seriesLabel = [
    'Poisson sauvage',
    'Poisson d\'élevage'
  ]
}

// Create the chart
Highcharts.chart('container-fish', {
  chart: {
    type: 'bar'
  },
  title: {
    text: title,
    style: {
        fontSize: '2em'
    }
  },
  subtitle: {
	  text: subtitle
  },
  responsive: {
    rules: [{
        condition: {
            maxWidth: 550
        },
        chartOptions: {
            legend: {
                itemStyle: {
                    fontSize: '9px'
                }
            },
            title: {
                style: {
                    fontSize: '12px'
                }
            },
            subtitle: {
                style: {
                    fontSize: '8px'
                }
            }
        }
    }]
  },
  xAxis: {
    categories: fishData.map(x => language =='fr' ? x.namefr : x.name),
    labels: {
        style: {
            fontSize: '1.3em'
        }
    }
  },
  yAxis: {
    title: {
      text: 'Émissions de gas à effet de serre (kg CO₂eq par kilo de produit)',
      style: {
            fontSize: '1.3em'
        }
    },
    labels: {
        style: {
            fontSize: '1em'
        }
    }
  },
 legend: {
    reversed: true,
	useHTML: true,
	floating: true,
	x: 250,
	y: -250,
	layout: 'vertical'
  },
  plotOptions: {
    series: {
		dataLabels: {
			enabled: true,
			color: '#000',
			style: {fontWeight: 'bolder'},
			formatter: function() {return Math.round(this.point.value * 100, 2) / 100 + " kg"},
			inside: false
		},
		pointPadding: 0.1,
		groupPadding: 0
    },
  },
  series: [
    {
        name: seriesLabel[0],
        data: fishData
    }, {
        name: seriesLabel[1]
    }
  ]
});