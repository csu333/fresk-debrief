var sectors;
var subSectors;
var subSubSectors;
var title;

if (language == 'fr') {
    title = 'Émissions par secteur, 2020';
    sectors = [
		'Énergie',
		'Processus industriels',
		'Déchets',
		'Agriculture, forêts & utilisation des terres (AFOLU)'
  ];
    subSectors = [[
        'Énergie de l\'industrie',
        'Transport',
        'Énergie des bâtiments (élec et chauffage)',
        'Énergie de l\'agri & pêche',
        'Combustion de carburant non alloué',
        'Émissions fugitives d\'énergie'
    ],[
        'Ciment',
        'Chimie & pétrochimie (industriel)'
    ],[
        'Décharges',
        'Eaux usées'
    ],
    [
        'Élevage & fumier',
        'Culture du riz',
        'Sols agricoles',
        'Brûlage des champs',
        'Espaces forestiers',
        'Espace de culture',
        'Prairie'
    ]
    ];
    subSubSectors = [
        'Fer & acier',
        'Métaux non-féreux',
        'Chimie & pétrochimie (énergie)',
        'Nourriture et tabac',
        'Papier, pulpe & impression',
        'Machinerie',
        'Autres industries',
        'Route',
        'Aviation',
        'Bâteaux',
        'Rail',
        'Pipeline',
        'Résidentiel',
        'Commercial'
    ];
} else {
    title = 'Emissions by sector, 2020';
	sectors = [
		'Energy',
		'Industrial processes',
		'Waste',
		'Agriculture, Forestry & Land Use (AFOLU)'
	];
	subSectors = [[
	  'Energy in industry',
	  'Transport',
	  'Energy in buildings (elec and heat)',
	  'Energy in Agri & Fishing',
	  'Unallocated fuel combustion',
	  'Fugitive emissions from energy'
	],[
	  'Cement',
	  'Chemical & petrochemical (industrial)'
	],[
	  'Landfills',
	  'Wastewater'
	],
	[
	  'Livestock & Manure',
	  'Rice Cultivation',
	  'Agricultural Soils',
	  'Crop Burning',
	  'Forest Land',
	  'Cropland',
	  'Grassland'
	]
  ];
  subSubSectors = [
	  'Iron & Steel',
	  'Non-ferous metals',
	  'Chemical & petrochemical (energy)',
	  'Food and tobacco',
	  'Paper, pulp & printing',
	  'Machinery',
	  'Other industry',
	  'Road',
	  'Aviation',
	  'Ship',
	  'Rail',
	  'Pipeline',
	  'Residential',
	  'Commercial'
	];
};



var colors = Highcharts.getOptions().colors,
  categories = sectors,
  data = [
	{
	  y: 73.2,
	  color: colors[8],
	  drilldown: {
		name: sectors[0],
		categories: subSectors[0],
		data: [
		  24.2,
		  16.2,
		  17.5,
		  1.7,
		  7.8,
		  5.8
		]
	  }
	},
	{
	  y: 5.2,
	  color: colors[1],
	  drilldown: {
		name: sectors[1],
		categories: subSectors[1],
		data: [
		  3,
		  2.2
		]
	  }
	},
	{
	  y: 3.2,
	  color: colors[0],
	  drilldown: {
		name: sectors[2],
		categories: subSectors[2],
		data: [
		  1.9,
		  1.3
		]
	  }
	},
	{
	  y: 18.4,
	  color: colors[2],
	  drilldown: {
		name: sectors[3],
		categories: subSectors[3],
		data: [
		  5.8,
		  1.3,
		  4.1,
		  3.5,
		  2.2,
		  1.4,
		  0.1
		]
	  }
	}
  ],
  subData = [{
	  y: 57.9,
	  color: colors[8],
	  drilldown: {
		name: 'Energy',
		categories: subSubSectors,
		data: [
		  7.2,
		  0.7,
		  3.6,
		  1,
		  0.6,
		  0.5,
		  10.6,
		  11.9,
		  1.9,
		  1.7,
		  0.4,
		  0.3,
		  10.9,
		  6.6
		]
	  }
	},
	{
	  y: 42.1,
	  color: Highcharts.color(colors[0]).setOpacity(0).get(),
	  enable: false,
	  drilldown: {
		name: 'Other²',
		categories: [
		  'Other'
		],
		data: [
		  42.1
		],
	  },
	  tooltip: {
		enable: false
	  },
	  dataLabels: {
		color: '#ffff00',
	  }
	}],
  sectorData = [],
  subSectorData = [],
  subSubSectorData = [],
  i,
  j,
  dataLen = data.length,
  drillDataLen,
  brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

  // add sector data
  sectorData.push({
	name: categories[i],
	y: data[i].y,
	color: data[i].color
  });

  // add sub sector data
  drillDataLen = data[i].drilldown.data.length;
  for (j = 0; j < drillDataLen; j += 1) {
	brightness = 0.2 - (j / drillDataLen) / 2;
	subSectorData.push({
	  name: data[i].drilldown.categories[j],
	  y: data[i].drilldown.data[j],
	  color: Highcharts.color(data[i].color).brighten(brightness).get()
	});
  }
}

// Build the sub data arrays
for (i = 0; i < subData.length; i += 1) {
  // add sub sector data
  drillDataLen = subData[i].drilldown.data.length;
  for (j = 0; j < drillDataLen; j += 1) {
	brightness = 0.2 - (j / drillDataLen) / 5;
	subSubSectorData.push({
	  name: subData[i].drilldown.categories[j],
	  y: subData[i].drilldown.data[j],
	  color: Highcharts.color(subData[i].color).brighten(brightness).get()
	});
  }
}

// Create the chart
const chart = Highcharts.chart('container-sectors', {
  chart: {
	type: 'pie',
	height: '100%' // 16:9 ratio
  },
  title: {
	text: title
  },
  responsive: {
    rules: [{
        condition: {
            maxWidth: 170
        },
        chartOptions: {
            chart: {
                height: '50%'
            },
            title: {
                style: {
                    fontSize: '11px'
                }
            },
        }
    }]
  },
  plotOptions: {
	pie: {
	  shadow: false,
	  center: ['50%', '50%']
	}
  },
  tooltip: {
	valueSuffix: '%'
  },
  series: [{
	name: 'Sector',
	id: 'sectors',
	data: sectorData,
	size: '50%',
	dataLabels: {
	  formatter: function () {
		return this.y > 5 ? this.point.name : null;
	  },
	  color: '#ffffff',
	  distance: -30
	}
  }, {
	name: 'Sub-sector',
	data: subSectorData,
	size: '65%',
	innerSize: '90%',
	dataLabels: {
	  formatter: function () {
		// display only if larger than 1
		return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
		  this.y + '%' : null;
	  }
	},
	id: 'sub-sectors'
  }, {
	name: 'Sub-sector',
	data: subSubSectorData,
	size: '80%',
	innerSize: '90%',
	dataLabels: {
	  formatter: function () {
		// display only if larger than 1
		return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
		  this.y + '%' : null;
	  }
	},
	id: 'sub-sub-sectors'
  }],
  responsive: {
	rules: [{
	  condition: {
		maxWidth: 600
	  },
	  chartOptions: {
		series: [{
		}, {
			id: 'sub-sectors',
			dataLabels: {
			enabled: false
		  }},
		  {
			id: 'sub-sub-sectors',
			dataLabels: {
			enabled: false
		  }
		}]
	  }
	}]
  },
  annotations: [{
	  shapes: [{
			type: 'path',
			points: [{
				x: 88,
				y: 3,
				xAxis: 0,
				yAxis: 0
			}, {
				x: 12,
				y: 2,
				xAxis: 0,
				yAxis: 0
			}]
	  }]
  }]
});
