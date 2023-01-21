var title = 'EU-27 Carbon Footprint';
var subtitle = 'Carbon Footprint per inhabitant in CO₂ tonnes equivalent (2020)';

if (language == 'fr') {
	sourceData.forEach(x => x.name = x.namefr);
	title = 'Empreinte carbone EU-27';
	subtitle = 'Empreinte carbone par habitant en tonnes équivalent CO₂ (2020)';
	
}

(async () => {
	
	// Instantiate the map	
	Highcharts.mapChart('container-europe-heat', {
          "title": {
            "align": "center",
            "text": "Energy consumption of residential per m² (kWh/m², normal climate, 2014)"
          },
          "subtitle": {
            "text": "",
            "align": "left"
          },
          "chart": {
			map: topology,
			spacingTop: 30,
			spacingBottom: 30,
			height: '35%',
            "description": "Energy consumption of residential per m² (normal climate)"
          },
          plotOptions: {
			map: {
				allAreas: false,
				joinBy: ['iso-a2', 'code'],
				dataLabels: {
					enabled: true,
					color: '#FFFFFF',
					style: {
						fontWeight: 'bold'
					},
					// Only show dataLabels for areas with high label rank
					format: null,
					formatter: function () {
						if (this.point.value && this.point.properties) {
							return this.point.code;
						}
					}
				},
				tooltip: {
					useHTML: true,
					pointFormat: pointFormat
				}
			}
		},
		
		colorAxis: {
			min: 0,
			max: 300,
			labels: {
				format: '{value}'
			},
			stops: [
				[0, '#00ff00'],
				[0.5, '#ffff00'],
				[1, '#ff0000']
			],
            showInLegend: true
		},
          "legend": {
            "enabled": true,
            "verticalAlign": "bottom",
            "align": "center",
            "symbolRadius": 0,
            "y": 5,
            "x": 0
          },
          "exporting": {
            "csv": {
              "itemDelimiter": ",",
              "lineDelimiter": "\n"
            },
            "buttons": {
              "contextButton": {
                "enabled": false
              }
            }
          },
          "responsive": {
            "rules": [
              {
                "condition": {
                  "maxWidth": 479
                },
                "chartOptions": {
                  "title": {
                    "align": "center",
                    "widthAdjust": 0
                  },
                  "subtitle": {
                    "text": ""
                  }
                }
              }
            ]
          },
          "tooltip": {
            "valueDecimals": "1",
            "valueSuffix": "kWh/m²"
          },
          "series": [
            {
              "name": "Energy consumption of residential per m² (normal climate)",
              "data": [
                    {
                      "code": "BE",
                      "name": "Belgium",
                      "value": "255.4",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "BG",
                      "name": "Bulgaria",
                      "value": "115.2",
                      "className": "legend-state-0"
                    },
                    {
                      "code": "CY",
                      "name": "Cyprus",
                      "value": "70.0",
                      "className": "legend-state-0"
                    },
                    {
                      "code": "CZ",
                      "name": "Czech Republic",
                      "value": "228.8",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "DE",
                      "name": "Germany",
                      "value": "192.4",
                      "className": "legend-state-2"
                    },
                    {
                      "code": "DK",
                      "name": "Denmark",
                      "value": "167.8",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "EE",
                      "name": "Estonia",
                      "value": "272.3",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "EL",
                      "name": "Greece",
                      "value": "123.9",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "ES",
                      "name": "Spain",
                      "value": "107.8",
                      "className": "legend-state-0"
                    },
                    {
                      "code": "FI",
                      "name": "Finland",
                      "value": "223.8",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "FR",
                      "name": "France",
                      "value": "186.4",
                      "className": "legend-state-2"
                    },
                    {
                      "code": "HR",
                      "name": "Croatia",
                      "value": "243.7",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "HU",
                      "name": "Hungary",
                      "value": "148.4",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "IE",
                      "name": "Ireland",
                      "value": "158.8",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "IT",
                      "name": "Italy",
                      "value": "167.5",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "LT",
                      "name": "Lithuania",
                      "value": "198.0",
                      "className": "legend-state-2"
                    },
                    {
                      "code": "LU",
                      "name": "Luxembourg",
                      "value": "220.5",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "LV",
                      "name": "Latvia",
                      "value": "285.5",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "MT",
                      "name": "Malta",
                      "value": "47.8",
                      "className": "legend-state-0"
                    },
                    {
                      "code": "NL",
                      "name": "Netherlands",
                      "value": "141.1",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "PL",
                      "name": "Poland",
                      "value": "226.2",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "PT",
                      "name": "Portugal",
                      "value": "67.3",
                      "className": "legend-state-0"
                    },
                    {
                      "code": "RO",
                      "name": "Romania",
                      "value": "298.1",
                      "className": "legend-state-4"
                    },
                    {
                      "code": "SE",
                      "name": "Sweden",
                      "value": "198.6",
                      "className": "legend-state-2"
                    },
                    {
                      "code": "SI",
                      "name": "Slovenia",
                      "value": "214.2",
                      "className": "legend-state-2"
                    },
                    {
                      "code": "SK",
                      "name": "Slovakia",
                      "value": "169.7",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "UK",
                      "name": "United Kingdom",
                      "value": "165.8",
                      "className": "legend-state-1"
                    },
                    {
                      "code": "EU-28",
                      "name": "EU",
                      "value": "173.2",
                      "className": "legend-state-2"
                    } 
              ]
            }
          ]
        }
      );
})();

