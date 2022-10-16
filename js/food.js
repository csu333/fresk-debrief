const foodData = [
	{ name: 'Apples', namefr: 'Pommes', landUse: 0, farm: 0.2, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },
	{ name: 'Bananas', namefr: 'Bananes', landUse: 0, farm: 0.3, animalFeed: 0, processing: 0.1, transport: 0.3, retail: 0, packaging: 0.1 },
	/*{ name: 'Barley', namefr: 'Orge', landUse: 0, farm: 0.2, animalFeed: 0, processing: 0.1, transport: 0, retail: 0.3, packaging: 0.5 },*/
	{ name: 'Beef (beef herd)', namefr: 'Bœuf (viande)', landUse: 16.3, farm: 39.4, animalFeed: 1.9, processing: 1.3, transport: 0.3, retail: 0.2, packaging: 0.2 },
	{ name: 'Beef (dairy herd)', namefr: 'Bœuf (laitier)', landUse: 0.9, farm: 15.7, animalFeed: 2.5, processing: 1.1, transport: 0.4, retail: 0.2, packaging: 0.3 },
	{ name: 'Beet Sugar', namefr: 'Sucre de betterave', landUse: 0, farm: 0.5, animalFeed: 0, processing: 0.2, transport: 0.6, retail: 0, packaging: 0.1 },
	{ name: 'Berries & Grapes', namefr: 'Baies et raisins', landUse: 0, farm: 0.7, animalFeed: 0, processing: 0, transport: 0.2, retail: 0, packaging: 0.2 },
	/*{ name: 'Brassicas', namefr: 'Choux', landUse: 0, farm: 0.3, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },*/
	{ name: 'Cane Sugar', namefr: 'Sucre de cane', landUse: 1.2, farm: 0.5, animalFeed: 0, processing: 0, transport: 0.8, retail: 0, packaging: 0.1 },
	/*{ name: 'Cassava', namefr: 'Manioc', landUse: 0.6, farm: 0.2, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },*/
	{ name: 'Cheese', namefr: 'Fromage', landUse: 4.5, farm: 13.1, animalFeed: 2.3, processing: 0.7, transport: 0.1, retail: 0.3, packaging: 0.2 },
	{ name: 'Citrus Fruit', namefr: 'Agrumes', landUse: -0.1, farm: 0.3, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },
	{ name: 'Coffee', namefr: 'Café', landUse: 3.7, farm: 10.4, animalFeed: 0, processing: 0.6, transport: 0.1, retail: 0.1, packaging: 1.6 },
	{ name: 'Dark Chocolate', namefr: 'Chocolat noir', landUse: 14.3, farm: 3.7, animalFeed: 0, processing: 0.2, transport: 0.1, retail: 0, packaging: 0.4 },
	{ name: 'Eggs', namefr: 'Œufs', landUse: 0.7, farm: 1.3, animalFeed: 2.2, processing: 0, transport: 0.1, retail: 0, packaging: 0.2 },
	{ name: 'Fish (farmed)', namefr: 'Poisson (d’élevage)', landUse: 0.5, farm: 3.6, animalFeed: 0.8, processing: 0, transport: 0.1, retail: 0, packaging: 0.1 },
	{ name: 'Groundnuts', namefr: 'Arachides', landUse: 0.4, farm: 1.4, animalFeed: 0, processing: 0.4, transport: 0.1, retail: 0, packaging: 0.1 },
	{ name: 'Lamb & Mutton', namefr: 'Agneau et mouton', landUse: 0.5, farm: 19.5, animalFeed: 2.4, processing: 1.1, transport: 0.5, retail: 0.2, packaging: 0.3 },
	{ name: 'Maize', namefr: 'Maïs', landUse: 0.3, farm: 0.5, animalFeed: 0, processing: 0.1, transport: 0.1, retail: 0, packaging: 0.1 },
	{ name: 'Milk', namefr: 'Lait', landUse: 0.5, farm: 1.5, animalFeed: 0.2, processing: 0.1, transport: 0.1, retail: 0.3, packaging: 0.1 },
	{ name: 'Nuts', namefr: 'Noix', landUse: -2.1, farm: 2.1, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0.1 },
	/*{ name: 'Oatmeal', namefr: 'Gruau', landUse: 0, farm: 1.4, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0.1 },*/
	{ name: 'Olive Oil', namefr: 'Huile d’olive', landUse: -0.4, farm: 4.3, animalFeed: 0, processing: 0.7, transport: 0.5, retail: 0, packaging: 0.9 },
	{ name: 'Onions & Leeks', namefr: 'Oignons & Poireaux', landUse: 0, farm: 0.2, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },
	/*{ name: 'Other Fruit', namefr: 'Autres fruits', landUse: 0.1, farm: 0.4, animalFeed: 0, processing: 0, transport: 0.2, retail: 0, packaging: 0 },
	{ name: 'Other Pulses', namefr: 'Autres légumineuses', landUse: 0, farm: 1.1, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0.4 },
	{ name: 'Other Vegetables', namefr: 'Autres Légumes', landUse: 0, farm: 0.2, animalFeed: 0, processing: 0.1, transport: 0.2, retail: 0, packaging: 0 },*/
	{ name: 'Palm Oil', namefr: 'Huile de palme', landUse: 3.1, farm: 2.1, animalFeed: 0, processing: 1.3, transport: 0.2, retail: 0, packaging: 0.9 },
	{ name: 'Peas', namefr: 'Petits pois', landUse: 0, farm: 0.7, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },
	{ name: 'Pig Meat', namefr: 'La viande de porc', landUse: 1.5, farm: 1.7, animalFeed: 2.9, processing: 0.3, transport: 0.3, retail: 0.2, packaging: 0.3 },
	{ name: 'Potatoes', namefr: 'Pommes de terre', landUse: 0, farm: 0.2, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },
	{ name: 'Poultry Meat', namefr: 'Viande de volaille', landUse: 2.5, farm: 0.7, animalFeed: 1.8, processing: 0.4, transport: 0.3, retail: 0.2, packaging: 0.2 },
	/*{ name: 'Rapeseed Oil', namefr: 'L\'huile de colza', landUse: 0.2, farm: 2.3, animalFeed: 0, processing: 0.2, transport: 0.2, retail: 0, packaging: 0.8 },*/
	{ name: 'Rice', namefr: 'Riz', landUse: 0, farm: 3.6, animalFeed: 0, processing: 0.1, transport: 0.1, retail: 0.1, packaging: 0.1 },
	{ name: 'Root Vegetables', namefr: 'Légumes racines', landUse: 0, farm: 0.2, animalFeed: 0, processing: 0, transport: 0.1, retail: 0, packaging: 0 },
	{ name: 'Shrimps (farmed)', namefr: 'Crevettes (d\'élevage)', landUse: 0.2, farm: 8.4, animalFeed: 2.5, processing: 0, transport: 0.2, retail: 0.2, packaging: 0.3 },
	/*{ name: 'Soybean Oil', namefr: 'L\'huile de soja', landUse: 3.1, farm: 1.5, animalFeed: 0, processing: 0.3, transport: 0.3, retail: 0, packaging: 0.8 },
	{ name: 'Soymilk', namefr: 'Lait de soja', landUse: 0.2, farm: 0.1, animalFeed: 0, processing: 0.2, transport: 0.1, retail: 0.3, packaging: 0.1 },
	{ name: 'Sunflower Oil', namefr: 'Huile de tournesol', landUse: 0.1, farm: 2.1, animalFeed: 0, processing: 0.2, transport: 0.2, retail: 0, packaging: 0.9 },
	{ name: 'Tofu', namefr: 'Tofu', landUse: 1, farm: 0.5, animalFeed: 0, processing: 0.8, transport: 0.2, retail: 0.3, packaging: 0.2 },*/
	{ name: 'Tomatoes', namefr: 'Tomates', landUse: 0.4, farm: 0.7, animalFeed: 0, processing: 0, transport: 0.2, retail: 0, packaging: 0.1 },
	{ name: 'Wheat & Rye', namefr: 'Blé & Seigle', landUse: 0.1, farm: 0.8, animalFeed: 0, processing: 0.2, transport: 0.1, retail: 0.1, packaging: 0.1 },
	{ name: 'Wine', namefr: 'Vin', landUse: -0.1, farm: 0.6, animalFeed: 0, processing: 0.1, transport: 0.1, retail: 0, packaging: 0.7 }
]

foodData.sort(function(a, b) { return (b.landUse + b.farm + b.animalFeed + b. processing + b.transport + b.retail + b.packaging) - (a.landUse + a.farm + a.animalFeed + a. processing + a.transport + a.retail + a.packaging) })

var title = 'Food: Greenhouse gas emissions across the supply chain';
var yAxisLabel = 'Greenhouse gas emissions (kg CO₂eq per kilogram of food product)';
var seriesName = [
	'Packaging',
	'Retail',
	'Transport',
	'Processing',
	'Animal Feed',
	'Farm',
	'Land Use Change'
];
var seriesDesc = [
	'Emissions from the production of packaging materials, material transport and end-of-life disposal',
	'Emissions from energy use in refrigeration and other retail processes',
	'Emissions from energy use in the transport of food items in country and internationally',
	'Emissions from energy use in the process of converting raw agricultural products into final food items',
	'On-farm emissions from crop production and its processing into feed for livestock',
	'Methane emissions from cows, methane from rice, emissions from fertilizers, manure and farm machinery',
	'Aboveground changes in biomass from deforestation, and belowground changes in soil carbon'
]

if (language == 'fr') {
	title = 'Nourriture: émissions de gas à effet de serre à travers la chaine de production (2018)';
	yAxisLabel = 'Émissions de gas à effet de serre (kg CO₂eq par kilo de produit)';
	seriesName = [
		'Emballage',
		'Vente',
		'Transport',
		'Traitement',
		'Nourriture',
		'Ferme',
		'Utilisation des sols'
	];
	seriesDesc = [
		'Émissions pour la production de matériel d\'emballage, pour son transport et pour son traitement en fin de vie',
		'Émissions dues à l\'utilisation d\'énergie pour la réfrigération et les autres processus de vente',
		'Émissions dues à l\'utilisation d\'énergie pour le transport de la nourriture au sein du pays et vers l\'étranger',
		'Émission dues à l\'utilitation d\'énergie nécessaire à la transformation de la matière première en produit fini',
		'Émissions dues à la production et au traitement de la nourriture animale',
		'Émissions de méthane par les vaches et le riz et émissions des engrais, fumier et machines agricoles',
		'Changements de biomasse dus à la déforestation et changements de la capture du carbone par le sol'
	]
}


// Create the chart
Highcharts.chart('container-food', {
  chart: {
    type: 'bar',
  },
  title: {
    text: title,
    style: {
        fontSize: '2em'
    }
  },
  xAxis: {
    categories: foodData.map(x => language == 'fr' ? x.namefr : x.name),
    labels: {
        style: {
            fontSize: '1.3em'
        }
    }
  },
  yAxis: {
    title: {
      text: yAxisLabel,
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
  responsive: {
        rules: [{
            condition: {
                maxWidth: 550
            },
            chartOptions: {
				legend: {
					labelFormatter: function() {
						return "<b>" + this.name+"</b>";
					},
                    itemStyle: {
                        fontSize: '9px'
                    }
				},
                title: {
                    style: {
                        fontSize: '12px'
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
		return "<b>" + this.name+"</b><br>" + this.userOptions.desc;
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
		name: seriesName[0],
		desc: seriesDesc[0],
		data: foodData.map(x => x.packaging),
		dataLabels: {
			enabled: true,
			color: '#000',
			style: {fontWeight: 'bolder'},
			formatter: function() {
				return Math.round(this.point.total * 100, 2) / 100 + " kg"},
			inside: false
		},
	}, {
		name: seriesName[1],
		desc: seriesDesc[1],
		data: foodData.map(x => x.retail)
	 }, {
		name: seriesName[2],
		desc: seriesDesc[2],
		data: foodData.map(x => x.transport)
	 }, {
		name: seriesName[3],
		desc: seriesDesc[3],
		data: foodData.map(x => x.processing)
	 }, {
		name: seriesName[4],
		desc: seriesDesc[4],
		data: foodData.map(x => x.animalFeed)
	 }, {
		name: seriesName[5],
		desc: seriesDesc[5],
		data: foodData.map(x => x.farm)
	 }, {
		name: seriesName[6],
		desc: seriesDesc[6],
		data: foodData.map(x => x.landUse)
		}, ]
});