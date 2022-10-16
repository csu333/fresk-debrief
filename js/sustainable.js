var title = 'Human Development Index and Ecological Footprint (2018)';
var subtitle = 'Human Development Index and Ecological Footprint by country. Circle radius reflects population size';
var valueFormat = '{index}. {point.name}, HDI: {point.x}, #earths: {point.y}, population: {point.z}.'
var pointFormat = '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
    '<tr><th>HDI:</th><td>{point.x}</td></tr>' +
    '<tr><th># of Earths:</th><td>{point.y:.2f}</td></tr>' +
    '<tr><th>Population:</th><td>{point.z}</td></tr>';
var targetHDI = 'UN target: 0.7';
var targetConsumption = 'Sustainable consumption maximum';

if (language == 'fr') {
    title = 'Indice de Développement Humain et Empreinte écologique (2018)';
    subtitle = 'Indice de Developpement Humain et Empreinte écologique par pays. Le rayon du cercle représente la taille de la population';
    pointFormat = '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
        '<tr><th>IDH:</th><td>{point.x}</td></tr>' +
        '<tr><th># de Terres:</th><td>{point.y:.2f}</td></tr>' +
        '<tr><th>Population:</th><td>{point.z}</td></tr>';
    targetHDI = 'Objectif de l\'ONU: 0,7';
    targetConsumption = 'Maximum de consommation soutenable'
}

Highcharts.chart('container-sustainable', {

	chart: {
		type: 'bubble',
		plotBorderWidth: 1,
		zoomType: 'xy'
	},

	legend: {
		enabled: false
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

	accessibility: {
		point: {
			valueDescriptionFormat: valueFormat
		}
	},

	xAxis: {
		gridLineWidth: 1,
		title: {
			text: 'HDI Value'
		},
		labels: {
			format: '{value}'
		},
		plotLines: [{
			color: 'black',
			dashStyle: 'dot',
			width: 2,
			value: 0.7,
			zIndex: 3,
			label: {
				rotation: 0,
				y: 15,
				style: {
					fontStyle: 'italic'
				},
				text: targetHDI
			},
		min: 0
		}],
		accessibility: {
			rangeDescription: 'Range: 0 to 1'
		}
	},

	yAxis: {
		startOnTick: false,
		endOnTick: false,
		title: {
			text: 'Number of Earths'
		},
		labels: {
			format: '{value}'
		},
		maxPadding: 0.2,
		plotLines: [{
			color: 'black',
			dashStyle: 'dot',
			width: 2,
			value: 1,
			label: {
				align: 'right',
				style: {
					fontStyle: 'italic'
				},
				text: targetConsumption,
				x: -10
			},
			zIndex: 3
		}],
		accessibility: {
			rangeDescription: 'Number of earths.'
		}
	},

	tooltip: {
		useHTML: true,
		headerFormat: '<table>',
		pointFormat: pointFormat,
		footerFormat: '</table>',
		followPointer: true
	},

	plotOptions: {
		series: {
			dataLabels: {
				enabled: true,
				format: '{point.name}'
			}
		}
	},
	
	defs: {
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 1,
            y1: 0,
            x2: 0,
            y2: 0,
            children: [{
                tagName: 'stop',
                offset: 0
            }, {
                tagName: 'stop',
                offset: 0.75
            },{
                tagName: 'stop',
                offset: 1
            }]
        }
	},

	series: [{
		data: [
			{ x: 0.92, y: 3.8319022514267673, z: 8891390, name: 'AT', country: 'Austria' },
			{ x: 0.93, y: 4.338133815727294, z: 11482200, name: 'BE', country: 'Belgium' },
			{ x: 0.81, y: 2.288016879618429, z: 7051610, name: 'BG', country: 'Bulgaria' },
			{ x: 0.85, y: 2.4521713047284943, z: 4156400, name: 'HR', country: 'Croatia' },
			{ x: 0.88, y: 2.4327752296002236, z: 1189270, name: 'CY', country: 'Cyprus' },
			{ x: 0.9, y: 3.612755656577719, z: 10665700, name: 'CZ', country: 'Czech Republic' },
			{ x: 0.94, y: 4.204023418595189, z: 5752130, name: 'DK', country: 'Denmark' },
			{ x: 0.89, y: 5.060862034216295, z: 1322920, name: 'EE', country: 'Estonia' },
			{ x: 0.94, y: 4.07138091296582, z: 5522580, name: 'FI', country: 'Finland' },
			{ x: 0.9, y: 2.7934822099532113, z: 65029200, name: 'FR', country: 'France' },
			{ x: 0.95, y: 2.9522732671455736, z: 83124400, name: 'DE', country: 'Germany' },
			{ x: 0.88, y: 2.5900377581879823, z: 10522200, name: 'GR', country: 'Greece' },
			{ x: 0.85, y: 2.4426966439952076, z: 9707500, name: 'HU', country: 'Hungary' },
			{ x: 0.95, y: 3.3178458508725788, z: 4818690, name: 'IE', country: 'Ireland' },
			{ x: 0.89, y: 2.7236622673952247, z: 60661896, name: 'IT', country: 'Italy' },
			{ x: 0.86, y: 4.047186704296443, z: 1928460, name: 'LV', country: 'Latvia' },
			{ x: 0.88, y: 3.791668460721118, z: 2801260, name: 'LT', country: 'Lithuania' },
			{ x: 0.91, y: 8.182841261593007, z: 604245, name: 'LU', country: 'Luxembourg' },
			{ x: 0.89, y: 3.4444248310058914, z: 439248, name: 'MT', country: 'Malta' },
			{ x: 0.94, y: 3.5962860681729056, z: 17085300, name: 'NL', country: 'Netherlands' },
			{ x: 0.88, y: 3.0043437030787694, z: 37921600, name: 'PL', country: 'Poland' },
			{ x: 0.86, y: 2.876045763701107, z: 10256200, name: 'PT', country: 'Portugal' },
			{ x: 0.82, y: 2.2648370900956194, z: 19506100, name: 'RO', country: 'Romania' },
			{ x: 0.91, y: 3.3906989486257846, z: 2077840, name: 'SI', country: 'Slovenia' },
			{ x: 0.86, y: 2.9896331413836488, z: 5453010, name: 'SK', country: 'Slovakia' },
			{ x: 0.9, y: 2.7748169303243193, z: 46692896, name: 'ES', country: 'Spain' },
			{ x: 0.94, y: 3.9657281960716553, z: 9971640, name: 'SE', country: 'Sweden' },
			],
            color: Highcharts.getOptions().colors[3],
		},
		{
		data: [
			{ x: 0.77, y: 1.200785785898854, z: 2951750, name: 'AM', country: 'Armenia' },
			{ x: 0.51, y: 0.4310913107429446, z: 37171896, name: 'AF', country: 'Afghanistan' },
			{ x: 0.79, y: 1.1919813601342713, z: 2882740, name: 'AL', country: 'Albania' },
			{ x: 0.75, y: 1.4791315365910767, z: 42228400, name: 'DZ', country: 'Algeria' },
			{ x: 0.58, y: 0.5445669993163311, z: 30809800, name: 'AO', country: 'Angola' },
			{ x: 0.77, y: 2.941376551276641, z: 96286, name: 'AG', country: 'Antigua and Barbuda' },
			{ x: 0.84, y: 2.092566900380145, z: 44361104, name: 'AR', country: 'Argentina' },
			{ x: 0.94, y: 4.477399572555192, z: 24898200, name: 'AU', country: 'Australia' },
			{ x: 0.81, y: 2.7072296586837385, z: 385637, name: 'BS', country: 'Bahamas' },
			{ x: 0.85, y: 5.164138380556491, z: 1569450, name: 'BH', country: 'Bahrain' },
			{ x: 0.81, y: 2.508274655507707, z: 286641, name: 'BB', country: 'Barbados' },
			{ x: 0.63, y: 0.571136520035519, z: 161376992, name: 'BD', country: 'Bangladesh' },
			{ x: 0.65, y: 3.259631104890012, z: 754388, name: 'BT', country: 'Bhutan' },
			{ x: 0.71, y: 1.9641446815944978, z: 11353100, name: 'BO', country: 'Bolivia' },
			{ x: 0.73, y: 1.4970430212791628, z: 2254070, name: 'BW', country: 'Botswana' },
			{ x: 0.76, y: 1.6352333694216818, z: 209468992, name: 'BR', country: 'Brazil' },
			{ x: 0.71, y: 4.97430938026664, z: 383071, name: 'BZ', country: 'Belize' },
			{ x: 0.56, y: 1.1194733106304378, z: 652857, name: 'SB', country: 'Solomon Islands' },
			{ x: 0.84, y: 3.4217664876843004, z: 428963, name: 'BN', country: 'Brunei Darussalam' },
			{ x: 0.58, y: 1.0477357404006054, z: 53708300, name: 'MM', country: 'Myanmar' },
			{ x: 0.43, y: 0.5266320006063497, z: 11175400, name: 'BI', country: 'Burundi' },
			{ x: 0.56, y: 0.7669739902925401, z: 25216300, name: 'CM', country: 'Cameroon' },
			{ x: 0.93, y: 5.095999381223149, z: 37074600, name: 'CA', country: 'Canada' },
			{ x: 0.66, y: 1.1589313066121174, z: 543767, name: 'CV', country: 'Cabo Verde' },
			{ x: 0.4, y: 0.7606539104051959, z: 4666370, name: 'CF', country: 'Central African Republic' },
			{ x: 0.78, y: 0.9561248809326801, z: 21228800, name: 'LK', country: 'Sri Lanka' },
			{ x: 0.4, y: 1.043410254345712, z: 15477700, name: 'TD', country: 'Chad' },
			{ x: 0.85, y: 2.7127144490853103, z: 18729200, name: 'CL', country: 'Chile' },
			{ x: 0.76, y: 1.1731328709724949, z: 49661000, name: 'CO', country: 'Colombia' },
			{ x: 0.55, y: 0.7540485498402777, z: 832322, name: 'KM', country: 'Comoros' },
			{ x: 0.57, y: 0.6496013801518122, z: 5244360, name: 'CG', country: 'Congo' },
			{ x: 0.81, y: 1.5456908749247642, z: 4999440, name: 'CR', country: 'Costa Rica' },
			{ x: 0.78, y: 1.1127752991540198, z: 11338100, name: 'CU', country: 'Cuba' },
			{ x: 0.75, y: 1.301683210183702, z: 9949540, name: 'AZ', country: 'Azerbaijan' },
			{ x: 0.54, y: 1.0156799771901777, z: 11485000, name: 'BJ', country: 'Benin' },
			{ x: 0.74, y: 1.5533689797210808, z: 71625, name: 'DM', country: 'Dominica' },
			{ x: 0.75, y: 1.117665378726384, z: 10627100, name: 'DO', country: 'Dominican Republic' },
			{ x: 0.82, y: 2.7820755371872137, z: 9452620, name: 'BY', country: 'Belarus' },
			{ x: 0.76, y: 1.0757249516595944, z: 17084400, name: 'EC', country: 'Ecuador' },
			{ x: 0.7, y: 1.160294838082741, z: 98423600, name: 'EG', country: 'Egypt' },
			{ x: 0.67, y: 1.281439104472862, z: 6420750, name: 'SV', country: 'El Salvador' },
			{ x: 0.58, y: 1.2774638109536842, z: 1308970, name: 'GQ', country: 'Equatorial Guinea' },
			{ x: 0.74, y: 1.6853838128136724, z: 883483, name: 'FJ', country: 'Fiji' },
			{ x: 0.52, y: 1.5407251591198816, z: 958923, name: 'DJ', country: 'Djibouti' },
			{ x: 0.81, y: 1.4658623436732856, z: 4002940, name: 'GE', country: 'Georgia' },
			{ x: 0.7, y: 1.2342411290478346, z: 2119270, name: 'GA', country: 'Gabon' },
			{ x: 0.49, y: 0.6576024952024694, z: 2280090, name: 'GM', country: 'Gambia' },
			{ x: 0.78, y: 2.4593545439530753, z: 3323930, name: 'BA', country: 'Bosnia and Herzegovina' },
			{ x: 0.61, y: 1.2666715749372492, z: 29767100, name: 'GH', country: 'Ghana' },
			{ x: 0.77, y: 1.6024920419495563, z: 111454, name: 'GD', country: 'Grenada' },
			{ x: 0.66, y: 1.1498831333698234, z: 17247800, name: 'GT', country: 'Guatemala' },
			{ x: 0.47, y: 1.1651638000754658, z: 12414300, name: 'GN', country: 'Guinea' },
			{ x: 0.68, y: 2.1528658080712177, z: 779006, name: 'GY', country: 'Guyana' },
			{ x: 0.51, y: 0.402709699986639, z: 11123200, name: 'HT', country: 'Haiti' },
			{ x: 0.63, y: 0.9949014696311067, z: 9587520, name: 'HN', country: 'Honduras' },
			{ x: 0.64, y: 0.7642729316060293, z: 1352640000, name: 'IN', country: 'India' },
			{ x: 0.71, y: 1.0850216540842013, z: 267671008, name: 'ID', country: 'Indonesia' },
			{ x: 0.79, y: 2.058938324928838, z: 81800200, name: 'IR', country: 'Iran' },
			{ x: 0.67, y: 1.1148139505666688, z: 38433600, name: 'IQ', country: 'Iraq' },
			{ x: 0.92, y: 2.9441100737541417, z: 8381520, name: 'IL', country: 'Israel' },
			{ x: 0.53, y: 0.8823214197806739, z: 25069200, name: 'CI', country: 'Côte d\'Ivoire' },
			{ x: 0.82, y: 3.1282771275032903, z: 18319600, name: 'KZ', country: 'Kazakhstan' },
			{ x: 0.73, y: 1.0323715945907486, z: 2934850, name: 'JM', country: 'Jamaica' },
			{ x: 0.92, y: 2.9114262655341645, z: 127202000, name: 'JP', country: 'Japan' },
			{ x: 0.73, y: 1.1102170354405851, z: 9965320, name: 'JO', country: 'Jordan' },
			{ x: 0.7, y: 0.9740481387663048, z: 6304030, name: 'KG', country: 'Kyrgyzstan' },
			{ x: 0.6, y: 0.6331947736312485, z: 51392600, name: 'KE', country: 'Kenya' },
			{ x: 0.58, y: 0.9486828812343137, z: 16249800, name: 'KH', country: 'Cambodia' },
			{ x:  0.91, y: 3.9913591516309377, z: 51171700, name: 'KR', country: 'South Korea' },
			{ x: 0.81, y: 4.991540120535078, z: 4137310, name: 'KW', country: 'Kuwait' },
			{ x: 0.61, y: 1.1625547901816984, z: 7061510, name: 'LA', country: 'Lao People\'s Democratic Republic' },
			{ x: 0.75, y: 1.8726606259756335, z: 6859410, name: 'LB', country: 'Lebanon' },
			{ x: 0.52, y: 0.9756858608076284, z: 2108330, name: 'LS', country: 'Lesotho' },
			{ x: 0.48, y: 0.7853803998608487, z: 4818970, name: 'LR', country: 'Liberia' },
			{ x: 0.72, y: 2.0732246591544565, z: 6678560, name: 'LY', country: 'Libyan Arab Jamahiriya' },
			{ x: 0.53, y: 0.6009344062787948, z: 26262300, name: 'MG', country: 'Madagascar' },
			{ x: 0.48, y: 0.5562744091551463, z: 18143200, name: 'MW', country: 'Malawi' },
			{ x: 0.81, y: 2.691387898524745, z: 31528000, name: 'MY', country: 'Malaysia' },
			{ x: 0.43, y: 1.0293252488485178, z: 19077700, name: 'ML', country: 'Mali' },
			{ x: 0.54, y: 1.590166461916746, z: 4403310, name: 'MR', country: 'Mauritania' },
			{ x: 0.8, y: 2.0345974720380604, z: 1267190, name: 'MU', country: 'Mauritius' },
			{ x: 0.78, y: 1.505387465997014, z: 126191000, name: 'MX', country: 'Mexico' },
			{ x: 0.74, y: 4.59724904063675, z: 3170220, name: 'MN', country: 'Mongolia' },
			{ x: 0.68, y: 1.1080044649709015, z: 36029104, name: 'MA', country: 'Morocco' },
			{ x: 0.45, y: 0.5049670778498916, z: 29496000, name: 'MZ', country: 'Mozambique' },
			{ x: 0.75, y: 1.180734680433747, z: 4051940, name: 'MD', country: 'Republic of Moldova' },
			{ x: 0.64, y: 1.5860071559477797, z: 2448300, name: 'NA', country: 'Namibia' },
			{ x: 0.6, y: 0.7515633726837341, z: 28095700, name: 'NP', country: 'Nepal' },
			{ x: 0.77, y: 1.9572571572184088, z: 2082960, name: 'MK', country: 'Republic of North Macedonia' },
			{ x: 0.93, y: 3.349023737417517, z: 4743130, name: 'NZ', country: 'New Zealand' },
			{ x: 0.66, y: 0.9019600870344584, z: 6465500, name: 'NI', country: 'Nicaragua' },
			{ x: 0.39, y: 0.9751968144490483, z: 22442800, name: 'NE', country: 'Niger' },
			{ x: 0.53, y: 0.687289987046699, z: 195875008, name: 'NG', country: 'Nigeria' },
			{ x: 0.96, y: 3.581964994272257, z: 5337960, name: 'NO', country: 'Norway' },
			{ x: 0.55, y: 0.4871874718044618, z: 212228000, name: 'PK', country: 'Pakistan' },
			{ x: 0.81, y: 1.8469848707494372, z: 4176870, name: 'PA', country: 'Panama' },
			{ x: 0.55, y: 1.0881805455632825, z: 8606320, name: 'PG', country: 'Papua New Guinea' },
			{ x: 0.73, y: 1.9397849842673687, z: 6956070, name: 'PY', country: 'Paraguay' },
			{ x: 0.77, y: 1.4895815148133307, z: 31989300, name: 'PE', country: 'Peru' },
			{ x: 0.71, y: 0.9274826344547521, z: 106651000, name: 'PH', country: 'Philippines' },
			{ x: 0.47, y: 0.9269682257910802, z: 1874300, name: 'GW', country: 'Guinea-Bissau' },
			{ x: 0.6, y: 0.3742873987050707, z: 1267970, name: 'TL', country: 'Timor-Leste' },
			{ x: 0.46, y: 0.5147556589076914, z: 3452790, name: 'ER', country: 'Eritrea' },
			{ x: 0.85, y: 9.017274949608842, z: 2781680, name: 'QA', country: 'Qatar' },
			{ x: 0.57, y: 0.7681473925396676, z: 14438800, name: 'ZW', country: 'Zimbabwe' },
			{ x: 0.54, y: 0.479795956473894, z: 12302000, name: 'RW', country: 'Rwanda' },
			{ x: 0.82, y: 3.3555888803854543, z: 145734000, name: 'RU', country: 'Russian Federation' },
			{ x: 0.76, y: 1.43040076327351, z: 181889, name: 'LC', country: 'Saint Lucia' },
			{ x: 0.74, y: 1.7517362490044024, z: 110211, name: 'VC', country: 'Saint Vincent and Grenadines' },
			{ x: 0.62, y: 0.8118186785106976, z: 211028, name: 'ST', country: 'Sao Tome and Principe' },
			{ x: 0.85, y: 3.131146253725623, z: 33702800, name: 'SA', country: 'Saudi Arabia' },
			{ x: 0.52, y: 0.8922035777169379, z: 15854300, name: 'SN', country: 'Senegal' },
			{ x: 0.45, y: 0.7163395851691678, z: 7650150, name: 'SL', country: 'Sierra Leone' },
			{ x: 0.94, y: 3.7478812717670924, z: 5757500, name: 'SG', country: 'Singapore' },
			{ x: 0.71, y: 2.401368120818157, z: 57792500, name: 'ZA', country: 'South Africa' },
			{ x: 0.73, y: 1.93638382513403, z: 575990, name: 'SR', country: 'Suriname' },
			{ x: 0.66, y: 0.7125191446421109, z: 9100830, name: 'TJ', country: 'Tajikistan' },
			{ x: 0.61, y: 1.5568422562627564, z: 1136280, name: 'SZ', country: 'Eswatini' },
			{ x: 0.95, y: 2.747494538011728, z: 8525610, name: 'CH', country: 'Switzerland' },
			{ x: 0.56, y: 0.8448021377766091, z: 16945100, name: 'SY', country: 'Syrian Arab Republic' },
			{ x: 0.71, y: 3.094170592512282, z: 5850900, name: 'TM', country: 'Turkmenistan' },
			{ x: 0.52, y: 0.7411444360977318, z: 56313400, name: 'TZ', country: 'Tanzania' },
			{ x: 0.77, y: 1.4863714302414306, z: 69428496, name: 'TH', country: 'Thailand' },
			{ x: 0.51, y: 0.6594942561447545, z: 7889090, name: 'TG', country: 'Togo' },
			{ x: 0.72, y: 1.845401665632136, z: 103197, name: 'TO', country: 'Tonga' },
			{ x: 0.8, y: 4.7034182798770185, z: 1389840, name: 'TT', country: 'Trinidad and Tobago' },
			{ x: 0.81, y: 3.973413207704322, z: 4829470, name: 'OM', country: 'Oman' },
			{ x: 0.74, y: 1.2791287891661172, z: 11565200, name: 'TN', country: 'Tunisia' },
			{ x: 0.82, y: 2.1137200072175215, z: 82340104, name: 'TR', country: 'Turkey' },
			{ x: 0.89, y: 5.115693852562694, z: 9630960, name: 'AE', country: 'United Arab Emirates' },
			{ x: 0.54, y: 0.6691145706453877, z: 42729000, name: 'UG', country: 'Uganda' },
			{ x: 0.93, y: 2.640756370175975, z: 67141704, name: 'GB', country: 'United Kingdom' },
			{ x: 0.77, y: 1.530858407218098, z: 44246200, name: 'UA', country: 'Ukraine' },
			{ x: 0.93, y: 5.132226196417338, z: 327096000, name: 'US', country: 'United States of America' },
			{ x: 0.44, y: 0.7969589720110887, z: 19751500, name: 'BF', country: 'Burkina Faso' },
			{ x: 0.82, y: 0.7952746248298286, z: 3449280, name: 'UY', country: 'Uruguay' },
			{ x: 0.72, y: 1.2879667944830435, z: 32476200, name: 'UZ', country: 'Uzbekistan' },
			{ x: 0.73, y: 1.5111692517527604, z: 28887100, name: 'VE', country: 'Venezuela' },
			{ x: 0.7, y: 1.435682772869994, z: 95546000, name: 'VN', country: 'Viet Nam' },
			{ x: 0.48, y: 0.6448306325759743, z: 109224000, name: 'ET', country: 'Ethiopia' },
			{ x: 0.71, y: 1.675454328606276, z: 196129, name: 'WS', country: 'Samoa' },
			{ x: 0.47, y: 0.32132824020564493, z: 28498700, name: 'YE', country: 'Yemen' },
			{ x: 0.48, y: 0.6496013801518122, z: 84068104, name: 'CG', country: 'Congo' },
			{ x: 0.58, y: 0.8113292873221437, z: 17351700, name: 'ZM', country: 'Zambia' },
			{ x: 0.8, y: 1.9401405205693345, z: 8802750, name: 'RS', country: 'Serbia' },
			{ x: 0.83, y: 2.672000215305592, z: 627809, name: 'ME', country: 'Montenegro' },
			{ x: 0.51, y: 0.9321467020724603, z: 41801500, name: 'SD', country: 'Sudan' },
			{ x: 0.43, y: 1.0183835532057774, z: 10975900, name: 'SS', country: 'South Sudan' },
			{ x: 0.71, y: 0.7213312041937809, z: 4862980, name: 'PS', country: 'State of Palestine' },
			{ x: 0.75, y: 2.399011971001239, z: 1459379968, name: 'CN', country: 'China' },

		]
	}],
	
	    annotations: [{
			shapes: [{
				type: 'path',
				strokeWidth: 0,
				fill: 'rgba(144, 237, 125, 0.4)',
				points: [{
					x: 0.7,
					y: 0,
					xAxis: 0,
					yAxis: 0
				}, {
					x: 1,
					y: 0,
					xAxis: 0,
					yAxis: 0
				}, {
					x: 1,
					y: 1,
					xAxis: 0,
					yAxis: 0
				}, {
					x: 0.7,
					y: 1,
					xAxis: 0,
					yAxis: 0
				}]
			}],
			zIndex: 1,
			draggable: ''
		}],
	});