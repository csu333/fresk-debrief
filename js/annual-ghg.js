var points =[
	{ 'id': 'Asia_AFG', 'name': 'Afghanistan', 'namefr': 'Afghanistan', 'parent': 'Asia', 'value': 12160286, 'percentage': 0.03 },
	{ 'id': 'Europe_ALB', 'name': 'Albania', 'namefr': 'Albanie', 'parent': 'Europe', 'value': 4534673, 'percentage': 0.01 },
	{ 'id': 'Africa_DZA', 'name': 'Algeria', 'namefr': 'Algérie', 'parent': 'Africa', 'value': 154995460, 'percentage': 0.45 },
	{ 'id': 'Europe_AND', 'name': 'Andorra', 'namefr': 'Andorre', 'parent': 'Europe', 'value': 466294, 'percentage': 0 },
	{ 'id': 'Africa_AGO', 'name': 'Angola', 'namefr': 'Angola', 'parent': 'Africa', 'value': 22198161, 'percentage': 0.06 },
	{ 'id': 'NorthAmerica_AIA', 'name': 'Anguilla', 'namefr': 'Anguilla', 'parent': 'NorthAmerica', 'value': 123426, 'percentage': 0 },
	{ 'id': 'NorthAmerica_ATG', 'name': 'Antigua and Barbuda', 'namefr': 'Antigua-et-Barbuda', 'parent': 'NorthAmerica', 'value': 430410, 'percentage': 0 },
	{ 'id': 'SouthAmerica_ARG', 'name': 'Argentina', 'namefr': 'Argentine', 'parent': 'SouthAmerica', 'value': 156978063, 'percentage': 0.45 },
	{ 'id': 'Asia_ARM', 'name': 'Armenia', 'namefr': 'Arménie', 'parent': 'Asia', 'value': 5890292, 'percentage': 0.02 },
	{ 'id': 'NorthAmerica_ABW', 'name': 'Aruba', 'namefr': 'Aruba', 'parent': 'NorthAmerica', 'value': 753218, 'percentage': 0 },
	{ 'id': 'Asia', 'name': 'Asia', 'namefr': 'Asie', 'value': 20317058379, 'percentage': 58.37, color: Highcharts.getOptions().colors[0] },
	{ 'id': 'Oceania_AUS', 'name': 'Australia', 'namefr': 'Australie', 'parent': 'Oceania', 'value': 391891928, 'percentage': 1.13 },
	{ 'id': 'Europe_27_AUT', 'name': 'Austria', 'namefr': 'Autriche', 'parent': 'Europe_27', 'value': 60634876, 'percentage': 0.17 },
	{ 'id': 'Asia_AZE', 'name': 'Azerbaijan', 'namefr': 'Azerbaïdjan', 'parent': 'Asia', 'value': 37720462, 'percentage': 0.11 },
	{ 'id': 'NorthAmerica_BHS', 'name': 'Bahamas', 'namefr': 'Bahamas', 'parent': 'NorthAmerica', 'value': 2337684, 'percentage': 0.01 },
	{ 'id': 'Asia_BHR', 'name': 'Bahrain', 'namefr': 'Bahreïn', 'parent': 'Asia', 'value': 34960075, 'percentage': 0.1 },
	{ 'id': 'Asia_BGD', 'name': 'Bangladesh', 'namefr': 'Bangladesh', 'parent': 'Asia', 'value': 92841625, 'percentage': 0.27 },
	{ 'id': 'NorthAmerica_BRB', 'name': 'Barbados', 'namefr': 'Barbade', 'parent': 'NorthAmerica', 'value': 1086743, 'percentage': 0 },
	{ 'id': 'Europe_BLR', 'name': 'Belarus', 'namefr': 'Biélorussie', 'parent': 'Europe', 'value': 57445417, 'percentage': 0.17 },
	{ 'id': 'Europe_27_BEL', 'name': 'Belgium', 'namefr': 'Belgique', 'parent': 'Europe_27', 'value': 83748962, 'percentage': 0.24 },
	{ 'id': 'NorthAmerica_BLZ', 'name': 'Belize', 'namefr': 'Belize', 'parent': 'NorthAmerica', 'value': 582795, 'percentage': 0 },
	{ 'id': 'Africa_BEN', 'name': 'Benin', 'namefr': 'Bénin', 'parent': 'Africa', 'value': 6702765, 'percentage': 0.02 },
	{ 'id': 'NorthAmerica_BMU', 'name': 'Bermuda', 'namefr': 'Bermudes', 'parent': 'NorthAmerica', 'value': 624448, 'percentage': 0 },
	{ 'id': 'Asia_BTN', 'name': 'Bhutan', 'namefr': 'Bhoutan', 'parent': 'Asia', 'value': 1925367, 'percentage': 0.01 },
	{ 'id': 'SouthAmerica_BOL', 'name': 'Bolivia', 'namefr': 'Bolivie', 'parent': 'SouthAmerica', 'value': 20700023, 'percentage': 0.06 },
	{ 'id': 'NorthAmerica_BES', 'name': 'Bonaire Sint Eustatius and Saba', 'namefr': 'Pays-Bas caribéens', 'parent': 'NorthAmerica', 'value': 300654, 'percentage': 0 },
	{ 'id': 'Europe_BIH', 'name': 'Bosnia and Herzegovina', 'namefr': 'Bosnie-Herzégovine', 'parent': 'Europe', 'value': 21417961, 'percentage': 0.06 },
	{ 'id': 'Africa_BWA', 'name': 'Botswana', 'namefr': 'Botswana', 'parent': 'Africa', 'value': 6518934, 'percentage': 0.02 },
	{ 'id': 'SouthAmerica_BRA', 'name': 'Brazil', 'namefr': 'Brésil', 'parent': 'SouthAmerica', 'value': 467383500, 'percentage': 1.34 },
	{ 'id': 'NorthAmerica_VGB', 'name': 'British Virgin Islands', 'namefr': 'Îles Vierges britanniques', 'parent': 'NorthAmerica', 'value': 139250, 'percentage': 0 },
	{ 'id': 'Asia_BRN', 'name': 'Brunei', 'namefr': 'Brunei', 'parent': 'Asia', 'value': 10158494, 'percentage': 0.03 },
	{ 'id': 'Europe_27_BGR', 'name': 'Bulgaria', 'namefr': 'Bulgarie', 'parent': 'Europe_27', 'value': 37444110, 'percentage': 0.11 },
	{ 'id': 'Africa_BFA', 'name': 'Burkina Faso', 'namefr': 'Burkina Faso', 'parent': 'Africa', 'value': 3969636, 'percentage': 0.01 },
	{ 'id': 'Africa_BDI', 'name': 'Burundi', 'namefr': 'Burundi', 'parent': 'Africa', 'value': 602181, 'percentage': 0 },
	{ 'id': 'Asia_KHM', 'name': 'Cambodia', 'namefr': 'Cambodge', 'parent': 'Asia', 'value': 15325618, 'percentage': 0.04 },
	{ 'id': 'Africa_CMR', 'name': 'Cameroon', 'namefr': 'Cameroun', 'parent': 'Africa', 'value': 6889318, 'percentage': 0.02 },
	{ 'id': 'NorthAmerica_CAN', 'name': 'Canada', 'namefr': 'Canada', 'parent': 'NorthAmerica', 'value': 535822990, 'percentage': 1.54 },
	{ 'id': 'Africa_CPV', 'name': 'Cape Verde', 'namefr': 'Cap-Vert', 'parent': 'Africa', 'value': 549930, 'percentage': 0 },
	{ 'id': 'Africa_CAF', 'name': 'Central African Republic', 'namefr': 'République centrafricaine', 'parent': 'Africa', 'value': 187906, 'percentage': 0 },
	{ 'id': 'Africa_TCD', 'name': 'Chad', 'namefr': 'Tchad', 'parent': 'Africa', 'value': 912301, 'percentage': 0 },
	{ 'id': 'SouthAmerica_CHL', 'name': 'Chile', 'namefr': 'Chili', 'parent': 'SouthAmerica', 'value': 81171490, 'percentage': 0.23 },
	{ 'id': 'Asia_CHN', 'name': 'China', 'namefr': 'Chine', 'parent': 'Asia', 'value': 10667887453, 'percentage': 30.65 },
	{ 'id': 'SouthAmerica_COL', 'name': 'Colombia', 'namefr': 'Colombie', 'parent': 'SouthAmerica', 'value': 89104941, 'percentage': 0.26 },
	{ 'id': 'Africa_COM', 'name': 'Comoros', 'namefr': 'Comores', 'parent': 'Africa', 'value': 258456, 'percentage': 0 },
	{ 'id': 'Africa_COG', 'name': 'Congo', 'namefr': 'république du Congo', 'parent': 'Africa', 'value': 3116760, 'percentage': 0.01 },
	{ 'id': 'Oceania_COK', 'name': 'Cook Islands', 'namefr': 'Îles Cook', 'parent': 'Oceania', 'value': 79423, 'percentage': 0 },
	{ 'id': 'NorthAmerica_CRI', 'name': 'Costa Rica', 'namefr': 'Costa Rica', 'parent': 'NorthAmerica', 'value': 7907389, 'percentage': 0.02 },
	{ 'id': 'Africa_CIV', 'name': 'Cote d\'Ivoire', 'namefr': 'Côte d\'Ivoire', 'parent': 'Africa', 'value': 10070733, 'percentage': 0.03 },
	{ 'id': 'Europe_27_HRV', 'name': 'Croatia', 'namefr': 'Croatie', 'parent': 'Europe_27', 'value': 16982010, 'percentage': 0.05 },
	{ 'id': 'NorthAmerica_CUB', 'name': 'Cuba', 'namefr': 'Cuba', 'parent': 'NorthAmerica', 'value': 20152280, 'percentage': 0.06 },
	{ 'id': 'NorthAmerica_CUW', 'name': 'Curacao', 'namefr': 'Curaçao', 'parent': 'NorthAmerica', 'value': 3335066, 'percentage': 0.01 },
	{ 'id': 'Europe_27_CYP', 'name': 'Cyprus', 'namefr': 'Chypre Chy', 'parent': 'Europe_27', 'value': 6496162, 'percentage': 0.02 },
	{ 'id': 'Europe_27_CZE', 'name': 'Czechia', 'namefr': 'Tchéquie', 'parent': 'Europe_27', 'value': 87974706, 'percentage': 0.25 },
	{ 'id': 'Africa_COD', 'name': 'Democratic Republic of Congo', 'namefr': 'république démocratique du Congo', 'parent': 'Africa', 'value': 2477334, 'percentage': 0.01 },
	{ 'id': 'Europe_27_DNK', 'name': 'Denmark', 'namefr': 'Danemark', 'parent': 'Europe_27', 'value': 26194912, 'percentage': 0.08 },
	{ 'id': 'Africa_DJI', 'name': 'Djibouti', 'namefr': 'Djibouti', 'parent': 'Africa', 'value': 351464, 'percentage': 0 },
	{ 'id': 'NorthAmerica_DMA', 'name': 'Dominica', 'namefr': 'Dominique', 'parent': 'NorthAmerica', 'value': 139250, 'percentage': 0 },
	{ 'id': 'NorthAmerica_DOM', 'name': 'Dominican Republic', 'namefr': 'République dominicaine', 'parent': 'NorthAmerica', 'value': 27769310, 'percentage': 0.08 },
	{ 'id': 'SouthAmerica_ECU', 'name': 'Ecuador', 'namefr': 'Équateur', 'parent': 'SouthAmerica', 'value': 30931763, 'percentage': 0.09 },
	{ 'id': 'Africa_EGY', 'name': 'Egypt', 'namefr': 'Égypte', 'parent': 'Africa', 'value': 213456746, 'percentage': 0.61 },
	{ 'id': 'NorthAmerica_SLV', 'name': 'El Salvador', 'namefr': 'Salvador', 'parent': 'NorthAmerica', 'value': 6123716, 'percentage': 0.02 },
	{ 'id': 'Africa_GNQ', 'name': 'Equatorial Guinea', 'namefr': 'Guinée équatoriale', 'parent': 'Africa', 'value': 10265267, 'percentage': 0.03 },
	{ 'id': 'Africa_ERI', 'name': 'Eritrea', 'namefr': 'Érythrée', 'parent': 'Africa', 'value': 722332, 'percentage': 0 },
	{ 'id': 'Europe_27_EST', 'name': 'Estonia', 'namefr': 'Estonie', 'parent': 'Europe_27', 'value': 10452414, 'percentage': 0.03 },
	{ 'id': 'Africa_SWZ', 'name': 'Eswatini', 'namefr': 'Eswatini', 'parent': 'Africa', 'value': 955776, 'percentage': 0 },
	{ 'id': 'Africa_ETH', 'name': 'Ethiopia', 'namefr': 'Éthiopie', 'parent': 'Africa', 'value': 14664773, 'percentage': 0.04 },
	{ 'id': 'NorthAmerica', 'name': 'North America', 'namefr': 'Amérique du Nord', 'value': 5775158655, 'percentage': 16.59, color: Highcharts.getOptions().colors[1] },
	{ 'id': 'Europe_FRO', 'name': 'Faeroe Islands', 'namefr': 'Îles Féroé', 'parent': 'Europe', 'value': 683898, 'percentage': 0 },
	{ 'id': 'Oceania_FJI', 'name': 'Fiji', 'namefr': 'Fidji', 'parent': 'Oceania', 'value': 1393413, 'percentage': 0 },
	{ 'id': 'Europe_27_FIN', 'name': 'Finland', 'namefr': 'Finlande', 'parent': 'Europe_27', 'value': 39287631, 'percentage': 0.11 },
	{ 'id': 'Europe_27_FRA', 'name': 'France', 'namefr': 'France', 'parent': 'Europe_27', 'value': 276633893, 'percentage': 0.79 },
	{ 'id': 'SouthAmerica_GUF', 'name': 'French Guiana', 'namefr': 'Guyane', 'parent': 'SouthAmerica', 'value': 728379, 'percentage': 0 },
	{ 'id': 'Oceania_PYF', 'name': 'French Polynesia', 'namefr': 'Polynésie française', 'parent': 'Oceania', 'value': 828267, 'percentage': 0 },
	{ 'id': 'Africa_GAB', 'name': 'Gabon', 'namefr': 'Gabon', 'parent': 'Africa', 'value': 4298177, 'percentage': 0.01 },
	{ 'id': 'Africa_GMB', 'name': 'Gambia', 'namefr': 'Gambie', 'parent': 'Africa', 'value': 499912, 'percentage': 0 },
	{ 'id': 'Asia_GEO', 'name': 'Georgia', 'namefr': 'Géorgie', 'parent': 'Asia', 'value': 9968094, 'percentage': 0.03 },
	{ 'id': 'Europe_27_DEU', 'name': 'Germany', 'namefr': 'Allemagne', 'parent': 'Europe_27', 'value': 644310352, 'percentage': 1.85 },
	{ 'id': 'Africa_GHA', 'name': 'Ghana', 'namefr': 'Ghana', 'parent': 'Africa', 'value': 16001330, 'percentage': 0.05 },
	{ 'id': 'Europe_27_GRC', 'name': 'Greece', 'namefr': 'Grèce', 'parent': 'Europe_27', 'value': 52235141, 'percentage': 0.15 },
	{ 'id': 'NorthAmerica_GRL', 'name': 'Greenland', 'namefr': 'Groenland', 'parent': 'NorthAmerica', 'value': 514413, 'percentage': 0 },
	{ 'id': 'NorthAmerica_GRD', 'name': 'Grenada', 'namefr': 'Grenade', 'parent': 'NorthAmerica', 'value': 294834, 'percentage': 0 },
	{ 'id': 'NorthAmerica_GLP', 'name': 'Guadeloupe', 'namefr': 'Guadeloupe', 'parent': 'NorthAmerica', 'value': 2561883, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_GTM', 'name': 'Guatemala', 'namefr': 'Guatemala', 'parent': 'NorthAmerica', 'value': 18937908, 'percentage': 0.05 },
	{ 'id': 'Africa_GIN', 'name': 'Guinea', 'namefr': 'Guinée', 'parent': 'Africa', 'value': 3394049, 'percentage': 0.01 },
	{ 'id': 'Africa_GNB', 'name': 'Guinea-Bissau', 'namefr': 'Guinée-Bissau', 'parent': 'Africa', 'value': 286774, 'percentage': 0 },
	{ 'id': 'SouthAmerica_GUY', 'name': 'Guyana', 'namefr': 'Guyana', 'parent': 'SouthAmerica', 'value': 2212691, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_HTI', 'name': 'Haiti', 'namefr': 'Haïti', 'parent': 'NorthAmerica', 'value': 2919510, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_HND', 'name': 'Honduras', 'namefr': 'Honduras', 'parent': 'NorthAmerica', 'value': 9659570, 'percentage': 0.03 },
	{ 'id': 'Asia_HKG', 'name': 'Hong Kong', 'namefr': 'Hong Kong', 'parent': 'Asia', 'value': 31238788, 'percentage': 0.09 },
	{ 'id': 'Europe_27_HUN', 'name': 'Hungary', 'namefr': 'Hongrie', 'parent': 'Europe_27', 'value': 48275451, 'percentage': 0.14 },
	{ 'id': 'Europe_ISL', 'name': 'Iceland', 'namefr': 'Islande', 'parent': 'Europe', 'value': 2935990, 'percentage': 0.01 },
	{ 'id': 'Asia_IND', 'name': 'India', 'namefr': 'Inde', 'parent': 'Asia', 'value': 2441792313, 'percentage': 7.02 },
	{ 'id': 'Asia_IDN', 'name': 'Indonesia', 'namefr': 'Indonésie', 'parent': 'Asia', 'value': 589500368, 'percentage': 1.69 },
	{ 'id': 'Europe', 'name': 'Europe', 'namefr': 'Europe', 'value': 4946034489, 'percentage': 14.21, color: Highcharts.getOptions().colors[2] },
	{ 'id': 'Asia_IRN', 'name': 'Iran', 'namefr': 'Iran', 'parent': 'Asia', 'value': 745035109, 'percentage': 2.14 },
	{ 'id': 'Asia_IRQ', 'name': 'Iraq', 'namefr': 'Irak', 'parent': 'Asia', 'value': 210829146, 'percentage': 0.61 },
	{ 'id': 'Europe_27_IRL', 'name': 'Ireland', 'namefr': 'Irlande', 'parent': 'Europe_27', 'value': 33348699, 'percentage': 0.1 },
	{ 'id': 'Asia_ISR', 'name': 'Israel', 'namefr': 'd’Israë', 'parent': 'Asia', 'value': 56350861, 'percentage': 0.16 },
	{ 'id': 'Europe_27_ITA', 'name': 'Italy', 'namefr': 'Italie', 'parent': 'Europe_27', 'value': 303815294, 'percentage': 0.87 },
	{ 'id': 'NorthAmerica_JAM', 'name': 'Jamaica', 'namefr': 'Jamaïque', 'parent': 'NorthAmerica', 'value': 7429454, 'percentage': 0.02 },
	{ 'id': 'Asia_JPN', 'name': 'Japan', 'namefr': 'Japon', 'parent': 'Asia', 'value': 1030775384, 'percentage': 2.96 },
	{ 'id': 'Asia_JOR', 'name': 'Jordan', 'namefr': 'Jordanie', 'parent': 'Asia', 'value': 25487430, 'percentage': 0.07 },
	{ 'id': 'Asia_KAZ', 'name': 'Kazakhstan', 'namefr': 'Kazakhstan', 'parent': 'Asia', 'value': 291335929, 'percentage': 0.84 },
	{ 'id': 'Africa_KEN', 'name': 'Kenya', 'namefr': 'Kenya', 'parent': 'Africa', 'value': 16146074, 'percentage': 0.05 },
	{ 'id': 'Oceania_KIR', 'name': 'Kiribati', 'namefr': 'Kiribati', 'parent': 'Oceania', 'value': 68077, 'percentage': 0 },
	{ 'id': 'Europe_OWID_KOS', 'name': 'Kosovo', 'namefr': 'Kosovo', 'parent': 'Europe', 'value': 7890151, 'percentage': 0.02 },
	{ 'id': 'Asia_KWT', 'name': 'Kuwait', 'namefr': 'Koweït', 'parent': 'Asia', 'value': 88935077, 'percentage': 0.26 },
	{ 'id': 'Asia_KGZ', 'name': 'Kyrgyzstan', 'namefr': 'Kirghizistan', 'parent': 'Asia', 'value': 11507817, 'percentage': 0.03 },
	{ 'id': 'Asia_LAO', 'name': 'Laos', 'namefr': 'Laos', 'parent': 'Asia', 'value': 33846818, 'percentage': 0.1 },
	{ 'id': 'Europe_27_LVA', 'name': 'Latvia', 'namefr': 'Lettonie', 'parent': 'Europe_27', 'value': 6772778, 'percentage': 0.02 },
	{ 'id': 'Asia_LBN', 'name': 'Lebanon', 'namefr': 'Liban', 'parent': 'Asia', 'value': 25969298, 'percentage': 0.07 },
	{ 'id': 'Africa_LSO', 'name': 'Lesotho', 'namefr': 'Lesotho', 'parent': 'Africa', 'value': 2183421, 'percentage': 0.01 },
	{ 'id': 'Africa_LBR', 'name': 'Liberia', 'namefr': 'Libéria', 'parent': 'Africa', 'value': 1008984, 'percentage': 0 },
	{ 'id': 'Africa_LBY', 'name': 'Libya', 'namefr': 'Libye', 'parent': 'Africa', 'value': 50720577, 'percentage': 0.15 },
	{ 'id': 'Europe_LIE', 'name': 'Liechtenstein', 'namefr': 'Liechtenstein', 'parent': 'Europe', 'value': 141012, 'percentage': 0 },
	{ 'id': 'Europe_27_LTU', 'name': 'Lithuania', 'namefr': 'Lituanie', 'parent': 'Europe_27', 'value': 13799480, 'percentage': 0.04 },
	{ 'id': 'Europe_27_LUX', 'name': 'Luxembourg', 'namefr': 'Luxembourg', 'parent': 'Europe_27', 'value': 8174648, 'percentage': 0.02 },
	{ 'id': 'Asia_MAC', 'name': 'Macao', 'namefr': 'Macao', 'parent': 'Asia', 'value': 1262755, 'percentage': 0 },
	{ 'id': 'Africa_MDG', 'name': 'Madagascar', 'namefr': 'Madagascar', 'parent': 'Africa', 'value': 3679618, 'percentage': 0.01 },
	{ 'id': 'Africa_MWI', 'name': 'Malawi', 'namefr': 'Malawi', 'parent': 'Africa', 'value': 1394983, 'percentage': 0 },
	{ 'id': 'Asia_MYS', 'name': 'Malaysia', 'namefr': 'Malaisie', 'parent': 'Asia', 'value': 272607434, 'percentage': 0.78 },
	{ 'id': 'Asia_MDV', 'name': 'Maldives', 'namefr': 'Maldives', 'parent': 'Asia', 'value': 1796469, 'percentage': 0.01 },
	{ 'id': 'Africa_MLI', 'name': 'Mali', 'namefr': 'Mali', 'parent': 'Africa', 'value': 3390011, 'percentage': 0.01 },
	{ 'id': 'Europe_27_MLT', 'name': 'Malta', 'namefr': 'Malte', 'parent': 'Europe_27', 'value': 1594903, 'percentage': 0 },
	{ 'id': 'Oceania_MHL', 'name': 'Marshall Islands', 'namefr': 'Îles Marshall', 'parent': 'Oceania', 'value': 151282, 'percentage': 0 },
	{ 'id': 'NorthAmerica_MTQ', 'name': 'Martinique', 'namefr': 'Martinique', 'parent': 'NorthAmerica', 'value': 2348393, 'percentage': 0.01 },
	{ 'id': 'Africa_MRT', 'name': 'Mauritania', 'namefr': 'Mauritanie', 'parent': 'Africa', 'value': 3377180, 'percentage': 0.01 },
	{ 'id': 'Africa_MUS', 'name': 'Mauritius', 'namefr': 'Maurice', 'parent': 'Africa', 'value': 3979358, 'percentage': 0.01 },
	{ 'id': 'Africa_MYT', 'name': 'Mayotte', 'namefr': 'Mayotte', 'parent': 'Africa', 'value': 305584, 'percentage': 0 },
	{ 'id': 'NorthAmerica_MEX', 'name': 'Mexico', 'namefr': 'Mexique', 'parent': 'NorthAmerica', 'value': 356968119, 'percentage': 1.03 },
	{ 'id': 'Oceania_FSM', 'name': 'Micronesia (country)', 'namefr': 'États fédérés de Micronésie', 'parent': 'Oceania', 'value': 147500, 'percentage': 0 },
	{ 'id': 'Europe_MDA', 'name': 'Moldova', 'namefr': 'Moldavie', 'parent': 'Europe', 'value': 5146876, 'percentage': 0.01 },
	{ 'id': 'Asia_MNG', 'name': 'Mongolia', 'namefr': 'Mongolie', 'parent': 'Asia', 'value': 88441761, 'percentage': 0.25 },
	{ 'id': 'Europe_MNE', 'name': 'Montenegro', 'namefr': 'Monténégro', 'parent': 'Europe', 'value': 2309894, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_MSR', 'name': 'Montserrat', 'namefr': 'Montserrat', 'parent': 'NorthAmerica', 'value': 25318, 'percentage': 0 },
	{ 'id': 'Africa_MAR', 'name': 'Morocco', 'namefr': 'Maroc', 'parent': 'Africa', 'value': 64536253, 'percentage': 0.19 },
	{ 'id': 'Africa_MOZ', 'name': 'Mozambique', 'namefr': 'Mozambique', 'parent': 'Africa', 'value': 6570936, 'percentage': 0.02 },
	{ 'id': 'Asia_MMR', 'name': 'Myanmar', 'namefr': 'Birmanie', 'parent': 'Asia', 'value': 36325546, 'percentage': 0.1 },
	{ 'id': 'Africa_NAM', 'name': 'Namibia', 'namefr': 'Namibie', 'parent': 'Africa', 'value': 3877243, 'percentage': 0.01 },
	{ 'id': 'Oceania_NRU', 'name': 'Nauru', 'namefr': 'Nauru', 'parent': 'Oceania', 'value': 56731, 'percentage': 0 },
	{ 'id': 'Asia_NPL', 'name': 'Nepal', 'namefr': 'Népal', 'parent': 'Asia', 'value': 16957668, 'percentage': 0.05 },
	{ 'id': 'Europe_27_NLD', 'name': 'Netherlands', 'namefr': 'Pays-Bas', 'parent': 'Europe_27', 'value': 138100074, 'percentage': 0.4 },
	{ 'id': 'Oceania_NCL', 'name': 'New Caledonia', 'namefr': 'Nouvelle-Calédonie', 'parent': 'Oceania', 'value': 8692686, 'percentage': 0.02 },
	{ 'id': 'Oceania_NZL', 'name': 'New Zealand', 'namefr': 'Nouvelle-Zélande', 'parent': 'Oceania', 'value': 33475158, 'percentage': 0.1 },
	{ 'id': 'NorthAmerica_NIC', 'name': 'Nicaragua', 'namefr': 'Nicaragua', 'parent': 'NorthAmerica', 'value': 5073650, 'percentage': 0.01 },
	{ 'id': 'Africa_NER', 'name': 'Niger', 'namefr': 'Niger', 'parent': 'Africa', 'value': 1690423, 'percentage': 0 },
	{ 'id': 'Africa_NGA', 'name': 'Nigeria', 'namefr': 'Nigeria', 'parent': 'Africa', 'value': 125462961, 'percentage': 0.36 },
	{ 'id': 'Oceania_NIU', 'name': 'Niue', 'namefr': 'Niue', 'parent': 'Oceania', 'value': 11346, 'percentage': 0 },
	{ 'id': 'Africa', 'name': 'Africa', 'namefr': 'Afrique', 'value': 1326043539, 'percentage': 3.81, color: Highcharts.getOptions().colors[3] },
	{ 'id': 'Asia_PRK', 'name': 'North Korea', 'namefr': 'Corée du Nord', 'parent': 'Asia', 'value': 29311104, 'percentage': 0.08 },
	{ 'id': 'Europe_MKD', 'name': 'North Macedonia', 'namefr': 'Macédoine du Nord', 'parent': 'Europe', 'value': 7146509, 'percentage': 0.02 },
	{ 'id': 'Europe_NOR', 'name': 'Norway', 'namefr': 'Norvège', 'parent': 'Europe', 'value': 41283000, 'percentage': 0.12 },
	{ 'id': 'Internationaltransport', 'name': 'International transport', 'namefr': 'Transport international', 'value': 1004232513, 'percentage': 2.89, color: Highcharts.getOptions().colors[4] },
	{ 'id': 'Asia_OMN', 'name': 'Oman', 'namefr': 'Oman', 'parent': 'Asia', 'value': 62162570, 'percentage': 0.18 },
	{ 'id': 'Asia_PAK', 'name': 'Pakistan', 'namefr': 'Pakistan', 'parent': 'Asia', 'value': 234754740, 'percentage': 0.67 },
	{ 'id': 'Oceania_PLW', 'name': 'Palau', 'namefr': 'Palaos', 'parent': 'Oceania', 'value': 219358, 'percentage': 0 },
	{ 'id': 'Asia_PSE', 'name': 'Palestine', 'namefr': 'Palestine', 'parent': 'Asia', 'value': 2898754, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_PAN', 'name': 'Panama', 'namefr': 'Panama', 'parent': 'NorthAmerica', 'value': 10779522, 'percentage': 0.03 },
	{ 'id': 'Oceania_PNG', 'name': 'Papua New Guinea', 'namefr': 'Papouasie-Nouvelle-Guinée', 'parent': 'Oceania', 'value': 6652121, 'percentage': 0.02 },
	{ 'id': 'SouthAmerica_PRY', 'name': 'Paraguay', 'namefr': 'Paraguay', 'parent': 'SouthAmerica', 'value': 7569706, 'percentage': 0.02 },
	{ 'id': 'SouthAmerica_PER', 'name': 'Peru', 'namefr': 'Pérou', 'parent': 'SouthAmerica', 'value': 44706055, 'percentage': 0.13 },
	{ 'id': 'Asia_PHL', 'name': 'Philippines', 'namefr': 'Philippines', 'parent': 'Asia', 'value': 136017950, 'percentage': 0.39 },
	{ 'id': 'Europe_27_POL', 'name': 'Poland', 'namefr': 'Pologne', 'parent': 'Europe_27', 'value': 299592767, 'percentage': 0.86 },
	{ 'id': 'Europe_27_PRT', 'name': 'Portugal', 'namefr': 'Portugal', 'parent': 'Europe_27', 'value': 40387817, 'percentage': 0.12 },
	{ 'id': 'Asia_QAT', 'name': 'Qatar', 'namefr': 'Qatar', 'parent': 'Asia', 'value': 106654967, 'percentage': 0.31 },
	{ 'id': 'Africa_REU', 'name': 'Reunion', 'namefr': 'Réunion L', 'parent': 'Africa', 'value': 4587948, 'percentage': 0.01 },
	{ 'id': 'Europe_27_ROU', 'name': 'Romania', 'namefr': 'Roumanie', 'parent': 'Europe_27', 'value': 71475046, 'percentage': 0.21 },
	{ 'id': 'Europe_RUS', 'name': 'Russia', 'namefr': 'Russie', 'parent': 'Europe', 'value': 1577136041, 'percentage': 4.53 },
	{ 'id': 'Africa_RWA', 'name': 'Rwanda', 'namefr': 'Rwanda', 'parent': 'Africa', 'value': 1032737, 'percentage': 0 },
	{ 'id': 'Africa_SHN', 'name': 'Saint Helena', 'namefr': 'Sainte-Hélène, Ascension et Tristan da Cunha', 'parent': 'Africa', 'value': 9494, 'percentage': 0 },
	{ 'id': 'NorthAmerica_KNA', 'name': 'Saint Kitts and Nevis', 'namefr': 'Saint-Christophe-et-Niévès', 'parent': 'NorthAmerica', 'value': 212040, 'percentage': 0 },
	{ 'id': 'NorthAmerica_LCA', 'name': 'Saint Lucia', 'namefr': 'Sainte-Lucie', 'parent': 'NorthAmerica', 'value': 439905, 'percentage': 0 },
	{ 'id': 'NorthAmerica_SPM', 'name': 'Saint Pierre and Miquelon', 'namefr': 'Saint-Pierre-et-Miquelon', 'parent': 'NorthAmerica', 'value': 50636, 'percentage': 0 },
	{ 'id': 'NorthAmerica_VCT', 'name': 'Saint Vincent and the Grenadines', 'namefr': 'Saint-Vincent-et-les-Grenadines', 'parent': 'NorthAmerica', 'value': 208876, 'percentage': 0 },
	{ 'id': 'Oceania_WSM', 'name': 'Samoa', 'namefr': 'Samoa', 'parent': 'Oceania', 'value': 245833, 'percentage': 0 },
	{ 'id': 'Africa_STP', 'name': 'Sao Tome and Principe', 'namefr': 'Sao Tomé-et-Principe', 'parent': 'Africa', 'value': 112744, 'percentage': 0 },
	{ 'id': 'Asia_SAU', 'name': 'Saudi Arabia', 'namefr': 'Arabie saoudite', 'parent': 'Asia', 'value': 625507882, 'percentage': 1.8 },
	{ 'id': 'Africa_SEN', 'name': 'Senegal', 'namefr': 'Sénégal', 'parent': 'Africa', 'value': 10451209, 'percentage': 0.03 },
	{ 'id': 'Europe_SRB', 'name': 'Serbia', 'namefr': 'Serbie', 'parent': 'Europe', 'value': 43135397, 'percentage': 0.12 },
	{ 'id': 'Africa_SYC', 'name': 'Seychelles', 'namefr': 'Seychelles', 'parent': 'Africa', 'value': 491067, 'percentage': 0 },
	{ 'id': 'Africa_SLE', 'name': 'Sierra Leone', 'namefr': 'Sierra Leone', 'parent': 'Africa', 'value': 877190, 'percentage': 0 },
	{ 'id': 'Asia_SGP', 'name': 'Singapore', 'namefr': 'Singapour', 'parent': 'Asia', 'value': 45503904, 'percentage': 0.13 },
	{ 'id': 'NorthAmerica_SXM', 'name': 'Sint Maarten (Dutch part)', 'namefr': 'Saint-Martin (royaume de', 'parent': 'NorthAmerica', 'value': 623462, 'percentage': 0 },
	{ 'id': 'Europe_27_SVK', 'name': 'Slovakia', 'namefr': 'Slovaquie', 'parent': 'Europe_27', 'value': 30730385, 'percentage': 0.09 },
	{ 'id': 'Europe_27_SVN', 'name': 'Slovenia', 'namefr': 'Slovénie', 'parent': 'Europe_27', 'value': 12562986, 'percentage': 0.04 },
	{ 'id': 'Oceania_SLB', 'name': 'Solomon Islands', 'namefr': 'Îles Salomon', 'parent': 'Oceania', 'value': 298781, 'percentage': 0 },
	{ 'id': 'Africa_SOM', 'name': 'Somalia', 'namefr': 'Somalie', 'parent': 'Africa', 'value': 562143, 'percentage': 0 },
	{ 'id': 'Africa_ZAF', 'name': 'South Africa', 'namefr': 'Afrique du Sud', 'parent': 'Africa', 'value': 451957087, 'percentage': 1.3 },
	{ 'id': 'SouthAmerica', 'name': 'South America', 'namefr': 'Amérique du Sud', 'value': 994160327, 'percentage': 2.86, color: Highcharts.getOptions().colors[5] },
	{ 'id': 'Asia_KOR', 'name': 'South Korea', 'namefr': 'Corée du Sud', 'parent': 'Asia', 'value': 597605055, 'percentage': 1.72 },
	{ 'id': 'Africa_SSD', 'name': 'South Sudan', 'namefr': 'Soudan du Sud', 'parent': 'Africa', 'value': 1179207, 'percentage': 0 },
	{ 'id': 'Europe_27_ESP', 'name': 'Spain', 'namefr': 'Espagne', 'parent': 'Europe_27', 'value': 208914968, 'percentage': 0.6 },
	{ 'id': 'Asia_LKA', 'name': 'Sri Lanka', 'namefr': 'Sri Lanka', 'parent': 'Asia', 'value': 21106254, 'percentage': 0.06 },
	{ 'id': 'Africa_SDN', 'name': 'Sudan', 'namefr': 'Soudan', 'parent': 'Africa', 'value': 18859244, 'percentage': 0.05 },
	{ 'id': 'SouthAmerica_SUR', 'name': 'Suriname', 'namefr': 'Suriname', 'parent': 'SouthAmerica', 'value': 2224178, 'percentage': 0.01 },
	{ 'id': 'Europe_27_SWE', 'name': 'Sweden', 'namefr': 'Suède', 'parent': 'Europe_27', 'value': 38634794, 'percentage': 0.11 },
	{ 'id': 'Europe_CHE', 'name': 'Switzerland', 'namefr': 'Suisse', 'parent': 'Europe', 'value': 32298333, 'percentage': 0.09 },
	{ 'id': 'Asia_SYR', 'name': 'Syria', 'namefr': 'Syrie', 'parent': 'Asia', 'value': 30531928, 'percentage': 0.09 },
	{ 'id': 'Asia_TWN', 'name': 'Taiwan', 'namefr': 'Taïwan', 'parent': 'Asia', 'value': 273174653, 'percentage': 0.78 },
	{ 'id': 'Asia_TJK', 'name': 'Tajikistan', 'namefr': 'Tadjikistan', 'parent': 'Asia', 'value': 9447656, 'percentage': 0.03 },
	{ 'id': 'Africa_TZA', 'name': 'Tanzania', 'namefr': 'Tanzanie', 'parent': 'Africa', 'value': 10938632, 'percentage': 0.03 },
	{ 'id': 'Asia_THA', 'name': 'Thailand', 'namefr': 'Thaïlande', 'parent': 'Asia', 'value': 257765782, 'percentage': 0.74 },
	{ 'id': 'Asia_TLS', 'name': 'Timor', 'namefr': 'Timor oriental', 'parent': 'Asia', 'value': 525704, 'percentage': 0 },
	{ 'id': 'Africa_TGO', 'name': 'Togo', 'namefr': 'Togo', 'parent': 'Africa', 'value': 2191571, 'percentage': 0.01 },
	{ 'id': 'Oceania_TON', 'name': 'Tonga', 'namefr': 'Tonga', 'parent': 'Oceania', 'value': 143718, 'percentage': 0 },
	{ 'id': 'NorthAmerica_TTO', 'name': 'Trinidad and Tobago', 'namefr': 'Trinité-et-Tobago', 'parent': 'NorthAmerica', 'value': 35509414, 'percentage': 0.1 },
	{ 'id': 'Africa_TUN', 'name': 'Tunisia', 'namefr': 'Tunisie', 'parent': 'Africa', 'value': 28126702, 'percentage': 0.08 },
	{ 'id': 'Asia_TUR', 'name': 'Turkey', 'namefr': 'Turquie', 'parent': 'Asia', 'value': 392794051, 'percentage': 1.13 },
	{ 'id': 'Asia_TKM', 'name': 'Turkmenistan', 'namefr': 'Turkménistan', 'parent': 'Asia', 'value': 75337709, 'percentage': 0.22 },
	{ 'id': 'NorthAmerica_TCA', 'name': 'Turks and Caicos Islands', 'namefr': 'Îles Turques-et-Caïques', 'parent': 'NorthAmerica', 'value': 202546, 'percentage': 0 },
	{ 'id': 'Oceania_TUV', 'name': 'Tuvalu', 'namefr': 'Tuvalu', 'parent': 'Oceania', 'value': 7564, 'percentage': 0 },
	{ 'id': 'Africa_UGA', 'name': 'Uganda', 'namefr': 'Ouganda', 'parent': 'Africa', 'value': 4892203, 'percentage': 0.01 },
	{ 'id': 'Europe_UKR', 'name': 'Ukraine', 'namefr': 'Ukraine', 'parent': 'Europe', 'value': 213908873, 'percentage': 0.61 },
	{ 'id': 'Asia_ARE', 'name': 'United Arab Emirates', 'namefr': 'Émirats arabes unis', 'parent': 'Asia', 'value': 150268152, 'percentage': 0.43 },
	{ 'id': 'Europe_GBR', 'name': 'United Kingdom', 'namefr': 'Royaume-Uni', 'parent': 'Europe', 'value': 329578911, 'percentage': 0.95 },
	{ 'id': 'NorthAmerica_USA', 'name': 'United States', 'namefr': 'États-Unis', 'parent': 'NorthAmerica', 'value': 4712770573, 'percentage': 13.54 },
	{ 'id': 'SouthAmerica_URY', 'name': 'Uruguay', 'namefr': 'Uruguay', 'parent': 'SouthAmerica', 'value': 5840060, 'percentage': 0.02 },
	{ 'id': 'Asia_UZB', 'name': 'Uzbekistan', 'namefr': 'Ouzbékistan', 'parent': 'Asia', 'value': 112784345, 'percentage': 0.32 },
	{ 'id': 'Oceania_VUT', 'name': 'Vanuatu', 'namefr': 'Vanuatu', 'parent': 'Oceania', 'value': 181538, 'percentage': 0 },
	{ 'id': 'SouthAmerica_VEN', 'name': 'Venezuela', 'namefr': 'Venezuela', 'parent': 'SouthAmerica', 'value': 84609478, 'percentage': 0.24 },
	{ 'id': 'Asia_VNM', 'name': 'Vietnam', 'namefr': 'République socialiste', 'parent': 'Asia', 'value': 254303169, 'percentage': 0.73 },
	{ 'id': 'Oceania_WLF', 'name': 'Wallis and Futuna', 'namefr': 'Wallis-et-Futuna', 'parent': 'Oceania', 'value': 26474, 'percentage': 0 },
	{ 'id': 'Oceania', 'name': 'Oceania', 'namefr': 'Océanie', 'value': 444397224, 'percentage': 1.28, color: Highcharts.getOptions().colors[6] },
	{ 'id': 'Asia_YEM', 'name': 'Yemen', 'namefr': 'Yémen', 'parent': 'Asia', 'value': 9768313, 'percentage': 0.03 },
	{ 'id': 'Africa_ZMB', 'name': 'Zambia', 'namefr': 'Zambie', 'parent': 'Africa', 'value': 6572938, 'percentage': 0.02 },
	{ 'id': 'Africa_ZWE', 'name': 'Zimbabwe', 'namefr': 'Zimbabwe', 'parent': 'Africa', 'value': 10531342, 'percentage': 0.03 },
	{ 'id': 'Europe_27', 'name': 'European Union', 'namefr': 'Union Européenne', 'parent': 'Europe', 'value': 2598575259, 'percentage': 7.47 }
];


var title = 'Who emits the most CO₂?';
var subtitle = 'Global carbon dioxide (CO₂) emissions were 34.8 billion tonnes in 2020';
var pointFormat = '<b>{point.name}</b><br>' +
			'Emissions: {point.value} tonnes CO₂<br>' +
			'{point.percentage}% global emissions'

if (language == 'fr') {
	points.forEach(x => x.name = x.namefr);
	title = 'Qui émet le plus de CO₂ ?';
	subtitle = 'Les émissions globales de dioxyde de carbone (CO₂) en 2020 on été de 34,8 milliard de tonnes';
	pointFormat = '<b>{point.name}</b><br>' +
				'Émissions: {point.value} tonnes CO₂<br>' +
				'{point.percentage}% des émissions globales';
}

Highcharts.chart('container-annual-ghg', {  
	chart: {
		height: '75%', // 16:9 ratio
	},

    /*responsive: {
        rules: [{
            condition: {
                maxWidth: 550
            },
            chartOptions: {
                chart: {
                    height: '95%'
                }
            }
        }]
    },*/

	series: [{
		name: 'Regions',
		type: 'treemap',
		layoutAlgorithm: 'squarified',
		allowDrillToNode: true,
		animationLimit: 1000,
		dataLabels: {
			enabled: false
		},
		tooltip: {
			useHTML: true,
			pointFormat: pointFormat,
			followPointer: true
		},
		levels: [{
			level: 1,
			dataLabels: {
				enabled: true
			},
			borderWidth: 3,
			levelIsConstant: false
		}, {
			level: 1,
			dataLabels: {
				formatter: function () {
					return  '<em>' + this.point.name + '</em><br>'
					  + Math.round(this.point.value/100000000)/10 + ' Gt CO₂<br>' 
					  + this.point.percentage + '%';
				  },
				style: {
					fontSize: '1.3rem'
				}
			}
		}, {
			level: 2,
			dataLabels: {
				enabled: true
			},
			levelIsConstant: false
		}, {
			level: 2,
			dataLabels: {
				formatter: function () {
					return this.point.value > 5000000 ? '<em>' + this.point.name + ':</em><br>' +
					  Math.round(this.point.value/100000)/10 + ' Mt CO₂<br>' + this.point.percentage + '%' : '<em>' + this.point.name + ':</em>';
				  },
				//format: '{point.name}\r\n{point.value} tonnes CO2',
				style: {
					fontSize: '0.5rem'
				}
			}
		}],
		data: points
	}],
	subtitle: {
		text: subtitle
	},
	title: {
		text: title,
        style: {
            fontSize: '2em'
        }
	}
});
