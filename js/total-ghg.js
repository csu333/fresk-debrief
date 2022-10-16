var points =[
	{ 'id': 'Asia', 'name': 'Asia', 'namefr': 'Asie', 'value': 532916154970, 'percentage': 31.41, color: Highcharts.getOptions().colors[0] },
	{ 'id': 'Europe', 'name': 'Europe', 'namefr': 'Europe', 'value': 531155790621, 'percentage': 31.31, color: Highcharts.getOptions().colors[2] },
	{ 'id': 'NorthAmerica', 'name': 'North America', 'namefr': 'Amérique du Nord', 'value': 477801968292, 'percentage': 28.16, color: Highcharts.getOptions().colors[1] },
	{ 'id': 'NorthAmerica_USA', 'name': 'United States', 'namefr': 'États-Unis', 'parent': 'NorthAmerica', 'value': 416723089020, 'percentage': 24.56 },
	{ 'id': 'Asia_CHN', 'name': 'China', 'namefr': 'Chine', 'parent': 'Asia', 'value': 235564012528, 'percentage': 13.89 },
	{ 'id': 'Europe_RUS', 'name': 'Russia', 'namefr': 'Russie', 'parent': 'Europe', 'value': 115344149534, 'percentage': 6.8 },
	{ 'id': 'Europe_27_DEU', 'name': 'Germany', 'namefr': 'Allemagne', 'parent': 'Europe_27', 'value': 92635615097, 'percentage': 5.46 },
	{ 'id': 'Europe_GBR', 'name': 'United Kingdom', 'namefr': 'Royaume-Uni', 'parent': 'Europe', 'value': 78161145636, 'percentage': 4.61 },
	{ 'id': 'Asia_JPN', 'name': 'Japan', 'namefr': 'Japon', 'parent': 'Asia', 'value': 65625166916, 'percentage': 3.87 },
	{ 'id': 'Asia_IND', 'name': 'India', 'namefr': 'Inde', 'parent': 'Asia', 'value': 54416488997, 'percentage': 3.21 },
	{ 'id': 'Africa', 'name': 'Africa', 'namefr': 'Afrique', 'value': 47610744693, 'percentage': 2.81, color: Highcharts.getOptions().colors[3] },
	{ 'id': 'SouthAmerica', 'name': 'South America', 'namefr': 'Amérique du Sud', 'value': 43288718797, 'percentage': 2.55, color: Highcharts.getOptions().colors[5] },
	{ 'id': 'Internationaltransport', 'name': 'International transport', 'namefr': 'Transport international', 'value': 42242540325, 'percentage': 2.49, color: Highcharts.getOptions().colors[4] },
	{ 'id': 'Europe_27_FRA', 'name': 'France', 'namefr': 'France', 'parent': 'Europe_27', 'value': 38728680794, 'percentage': 2.28 },
	{ 'id': 'NorthAmerica_CAN', 'name': 'Canada', 'namefr': 'Canada', 'parent': 'NorthAmerica', 'value': 33576743330, 'percentage': 1.98 },
	{ 'id': 'Europe_UKR', 'name': 'Ukraine', 'namefr': 'Ukraine', 'parent': 'Europe', 'value': 30559156342, 'percentage': 1.8 },
	{ 'id': 'Europe_27_POL', 'name': 'Poland', 'namefr': 'Pologne', 'parent': 'Europe_27', 'value': 27863876203, 'percentage': 1.64 },
	{ 'id': 'Europe_27_ITA', 'name': 'Italy', 'namefr': 'Italie', 'parent': 'Europe_27', 'value': 24739056768, 'percentage': 1.46 },
	{ 'id': 'Africa_ZAF', 'name': 'South Africa', 'namefr': 'Afrique du Sud', 'parent': 'Africa', 'value': 21164298479, 'percentage': 1.25 },
	{ 'id': 'Oceania', 'name': 'Oceania', 'namefr': 'Océanie', 'value': 20977077645, 'percentage': 1.24, color: Highcharts.getOptions().colors[6] },
	{ 'id': 'NorthAmerica_MEX', 'name': 'Mexico', 'namefr': 'Mexique', 'parent': 'NorthAmerica', 'value': 20075005664, 'percentage': 1.18 },
	{ 'id': 'Asia_IRN', 'name': 'Iran', 'namefr': 'Iran', 'parent': 'Asia', 'value': 18914438734, 'percentage': 1.11 },
	{ 'id': 'Oceania_AUS', 'name': 'Australia', 'namefr': 'Australie', 'parent': 'Oceania', 'value': 18635749770, 'percentage': 1.1 },
	{ 'id': 'Asia_KOR', 'name': 'South Korea', 'namefr': 'Corée du Sud', 'parent': 'Asia', 'value': 18335706556, 'percentage': 1.08 },
	{ 'id': 'SouthAmerica_BRA', 'name': 'Brazil', 'namefr': 'Brésil', 'parent': 'SouthAmerica', 'value': 16238506431, 'percentage': 0.96 },
	{ 'id': 'Asia_SAU', 'name': 'Saudi Arabia', 'namefr': 'Arabie saoudite', 'parent': 'Asia', 'value': 15936377001, 'percentage': 0.94 },
	{ 'id': 'Europe_27_ESP', 'name': 'Spain', 'namefr': 'Espagne', 'parent': 'Europe_27', 'value': 14853332896, 'percentage': 0.88 },
	{ 'id': 'Asia_IDN', 'name': 'Indonesia', 'namefr': 'Indonésie', 'parent': 'Asia', 'value': 14399959936, 'percentage': 0.85 },
	{ 'id': 'Asia_KAZ', 'name': 'Kazakhstan', 'namefr': 'Kazakhstan', 'parent': 'Asia', 'value': 13908240442, 'percentage': 0.82 },
	{ 'id': 'Europe_27_BEL', 'name': 'Belgium', 'namefr': 'Belgique', 'parent': 'Europe_27', 'value': 12543142370, 'percentage': 0.74 },
	{ 'id': 'Europe_27_CZE', 'name': 'Czechia', 'namefr': 'Tchéquie', 'parent': 'Europe_27', 'value': 11917740163, 'percentage': 0.7 },
	{ 'id': 'Europe_27_NLD', 'name': 'Netherlands', 'namefr': 'Pays-Bas', 'parent': 'Europe_27', 'value': 11739971671, 'percentage': 0.69 },
	{ 'id': 'Asia_TUR', 'name': 'Turkey', 'namefr': 'Turquie', 'parent': 'Asia', 'value': 10839787738, 'percentage': 0.64 },
	{ 'id': 'Asia_TWN', 'name': 'Taiwan', 'namefr': 'Taïwan', 'parent': 'Asia', 'value': 9046735646, 'percentage': 0.53 },
	{ 'id': 'SouthAmerica_ARG', 'name': 'Argentina', 'namefr': 'Argentine', 'parent': 'SouthAmerica', 'value': 8431213004, 'percentage': 0.5 },
	{ 'id': 'Europe_27_ROU', 'name': 'Romania', 'namefr': 'Roumanie', 'parent': 'Europe_27', 'value': 8493293608, 'percentage': 0.5 },
	{ 'id': 'SouthAmerica_VEN', 'name': 'Venezuela', 'namefr': 'Venezuela', 'parent': 'SouthAmerica', 'value': 7854691960, 'percentage': 0.46 },
	{ 'id': 'Asia_THA', 'name': 'Thailand', 'namefr': 'Thaïlande', 'parent': 'Asia', 'value': 7364298189, 'percentage': 0.43 },
	{ 'id': 'Africa_EGY', 'name': 'Egypt', 'namefr': 'Égypte', 'parent': 'Africa', 'value': 6314498289, 'percentage': 0.37 },
	{ 'id': 'Asia_UZB', 'name': 'Uzbekistan', 'namefr': 'Ouzbékistan', 'parent': 'Asia', 'value': 6310349345, 'percentage': 0.37 },
	{ 'id': 'Asia_MYS', 'name': 'Malaysia', 'namefr': 'Malaisie', 'parent': 'Asia', 'value': 6071963519, 'percentage': 0.36 },
	{ 'id': 'Europe_27_AUT', 'name': 'Austria', 'namefr': 'Autriche', 'parent': 'Europe_27', 'value': 5505508535, 'percentage': 0.32 },
	{ 'id': 'Europe_27_HUN', 'name': 'Hungary', 'namefr': 'Hongrie', 'parent': 'Europe_27', 'value': 5010790354, 'percentage': 0.3 },
	{ 'id': 'Asia_PRK', 'name': 'North Korea', 'namefr': 'Corée du Nord', 'parent': 'Asia', 'value': 5049468225, 'percentage': 0.3 },
	{ 'id': 'Asia_PAK', 'name': 'Pakistan', 'namefr': 'Pakistan', 'parent': 'Asia', 'value': 5162288599, 'percentage': 0.3 },
	{ 'id': 'Europe_BLR', 'name': 'Belarus', 'namefr': 'Biélorussie', 'parent': 'Europe', 'value': 4907842258, 'percentage': 0.29 },
	{ 'id': 'Europe_27_SWE', 'name': 'Sweden', 'namefr': 'Suède', 'parent': 'Europe_27', 'value': 4987955651, 'percentage': 0.29 },
	{ 'id': 'Asia_ARE', 'name': 'United Arab Emirates', 'namefr': 'Émirats arabes unis', 'parent': 'Asia', 'value': 4695477307, 'percentage': 0.28 },
	{ 'id': 'Africa_DZA', 'name': 'Algeria', 'namefr': 'Algérie', 'parent': 'Africa', 'value': 4587131635, 'percentage': 0.27 },
	{ 'id': 'Asia_IRQ', 'name': 'Iraq', 'namefr': 'Irak', 'parent': 'Asia', 'value': 4656535636, 'percentage': 0.27 },
	{ 'id': 'Europe_27_DNK', 'name': 'Denmark', 'namefr': 'Danemark', 'parent': 'Europe_27', 'value': 4082633409, 'percentage': 0.24 },
	{ 'id': 'Europe_27_GRC', 'name': 'Greece', 'namefr': 'Grèce', 'parent': 'Europe_27', 'value': 4073671400, 'percentage': 0.24 },
	{ 'id': 'Europe_27_BGR', 'name': 'Bulgaria', 'namefr': 'Bulgarie', 'parent': 'Europe_27', 'value': 3831210012, 'percentage': 0.23 },
	{ 'id': 'Africa_NGA', 'name': 'Nigeria', 'namefr': 'Nigeria', 'parent': 'Africa', 'value': 3914990643, 'percentage': 0.23 },
	{ 'id': 'Europe_27_SVK', 'name': 'Slovakia', 'namefr': 'Slovaquie', 'parent': 'Europe_27', 'value': 3869881084, 'percentage': 0.23 },
	{ 'id': 'Asia_VNM', 'name': 'Vietnam', 'namefr': 'République socialiste', 'parent': 'Asia', 'value': 3977272058, 'percentage': 0.23 },
	{ 'id': 'SouthAmerica_COL', 'name': 'Colombia', 'namefr': 'Colombie', 'parent': 'SouthAmerica', 'value': 3399102674, 'percentage': 0.2 },
	{ 'id': 'Asia_PHL', 'name': 'Philippines', 'namefr': 'Philippines', 'parent': 'Asia', 'value': 3390273723, 'percentage': 0.2 },
	{ 'id': 'Europe_27_FIN', 'name': 'Finland', 'namefr': 'Finlande', 'parent': 'Europe_27', 'value': 3191080737, 'percentage': 0.19 },
	{ 'id': 'Europe_CHE', 'name': 'Switzerland', 'namefr': 'Suisse', 'parent': 'Europe', 'value': 3022784713, 'percentage': 0.18 },
	{ 'id': 'SouthAmerica_CHL', 'name': 'Chile', 'namefr': 'Chili', 'parent': 'SouthAmerica', 'value': 2903063180, 'percentage': 0.17 },
	{ 'id': 'Asia_KWT', 'name': 'Kuwait', 'namefr': 'Koweït', 'parent': 'Asia', 'value': 2877515699, 'percentage': 0.17 },
	{ 'id': 'Europe_NOR', 'name': 'Norway', 'namefr': 'Norvège', 'parent': 'Europe', 'value': 2632393609, 'percentage': 0.16 },
	{ 'id': 'Europe_SRB', 'name': 'Serbia', 'namefr': 'Serbie', 'parent': 'Europe', 'value': 2734456327, 'percentage': 0.16 },
	{ 'id': 'Asia_AZE', 'name': 'Azerbaijan', 'namefr': 'Azerbaïdjan', 'parent': 'Asia', 'value': 2503755644, 'percentage': 0.15 },
	{ 'id': 'Europe_27_PRT', 'name': 'Portugal', 'namefr': 'Portugal', 'parent': 'Europe_27', 'value': 2614595359, 'percentage': 0.15 },
	{ 'id': 'Asia_ISR', 'name': 'Israel', 'namefr': 'd’Israë', 'parent': 'Asia', 'value': 2379692524, 'percentage': 0.14 },
	{ 'id': 'Asia_TKM', 'name': 'Turkmenistan', 'namefr': 'Turkménistan', 'parent': 'Asia', 'value': 2434765662, 'percentage': 0.14 },
	{ 'id': 'Europe_27_IRL', 'name': 'Ireland', 'namefr': 'Irlande', 'parent': 'Europe_27', 'value': 2224060565, 'percentage': 0.13 },
	{ 'id': 'Africa_LBY', 'name': 'Libya', 'namefr': 'Libye', 'parent': 'Africa', 'value': 2136290401, 'percentage': 0.13 },
	{ 'id': 'Asia_SGP', 'name': 'Singapore', 'namefr': 'Singapour', 'parent': 'Asia', 'value': 2157027728, 'percentage': 0.13 },
	{ 'id': 'Asia_QAT', 'name': 'Qatar', 'namefr': 'Qatar', 'parent': 'Asia', 'value': 2094572227, 'percentage': 0.12 },
	{ 'id': 'Oceania_NZL', 'name': 'New Zealand', 'namefr': 'Nouvelle-Zélande', 'parent': 'Oceania', 'value': 1886568514, 'percentage': 0.11 },
	{ 'id': 'SouthAmerica_PER', 'name': 'Peru', 'namefr': 'Pérou', 'parent': 'SouthAmerica', 'value': 1941850252, 'percentage': 0.11 },
	{ 'id': 'Asia_SYR', 'name': 'Syria', 'namefr': 'Syrie', 'parent': 'Asia', 'value': 1867933805, 'percentage': 0.11 },
	{ 'id': 'NorthAmerica_CUB', 'name': 'Cuba', 'namefr': 'Cuba', 'parent': 'NorthAmerica', 'value': 1614249235, 'percentage': 0.1 },
	{ 'id': 'Europe_27_EST', 'name': 'Estonia', 'namefr': 'Estonie', 'parent': 'Europe_27', 'value': 1630194295, 'percentage': 0.1 },
	{ 'id': 'Asia_HKG', 'name': 'Hong Kong', 'namefr': 'Hong Kong', 'parent': 'Asia', 'value': 1620287883, 'percentage': 0.1 },
	{ 'id': 'Africa_MAR', 'name': 'Morocco', 'namefr': 'Maroc', 'parent': 'Africa', 'value': 1737595218, 'percentage': 0.1 },
	{ 'id': 'Asia_BGD', 'name': 'Bangladesh', 'namefr': 'Bangladesh', 'parent': 'Asia', 'value': 1562305907, 'percentage': 0.09 },
	{ 'id': 'Europe_27_LTU', 'name': 'Lithuania', 'namefr': 'Lituanie', 'parent': 'Europe_27', 'value': 1557847258, 'percentage': 0.09 },
	{ 'id': 'NorthAmerica_TTO', 'name': 'Trinidad and Tobago', 'namefr': 'Trinité-et-Tobago', 'parent': 'NorthAmerica', 'value': 1569561122, 'percentage': 0.09 },
	{ 'id': 'Europe_MDA', 'name': 'Moldova', 'namefr': 'Moldavie', 'parent': 'Europe', 'value': 1379218804, 'percentage': 0.08 },
	{ 'id': 'SouthAmerica_ECU', 'name': 'Ecuador', 'namefr': 'Équateur', 'parent': 'SouthAmerica', 'value': 1197709388, 'percentage': 0.07 },
	{ 'id': 'Asia_OMN', 'name': 'Oman', 'namefr': 'Oman', 'parent': 'Asia', 'value': 1251111021, 'percentage': 0.07 },
	{ 'id': 'Europe_BIH', 'name': 'Bosnia and Herzegovina', 'namefr': 'Bosnie-Herzégovine', 'parent': 'Europe', 'value': 954784301, 'percentage': 0.06 },
	{ 'id': 'Europe_27_HRV', 'name': 'Croatia', 'namefr': 'Croatie', 'parent': 'Europe_27', 'value': 1078544258, 'percentage': 0.06 },
	{ 'id': 'Europe_27_LVA', 'name': 'Latvia', 'namefr': 'Lettonie', 'parent': 'Europe_27', 'value': 950274908, 'percentage': 0.06 },
	{ 'id': 'Asia_BHR', 'name': 'Bahrain', 'namefr': 'Bahreïn', 'parent': 'Asia', 'value': 926303201, 'percentage': 0.05 },
	{ 'id': 'Asia_KGZ', 'name': 'Kyrgyzstan', 'namefr': 'Kirghizistan', 'parent': 'Asia', 'value': 861769602, 'percentage': 0.05 },
	{ 'id': 'Asia_MNG', 'name': 'Mongolia', 'namefr': 'Mongolie', 'parent': 'Asia', 'value': 787436563, 'percentage': 0.05 },
	{ 'id': 'Europe_27_SVN', 'name': 'Slovenia', 'namefr': 'Slovénie', 'parent': 'Europe_27', 'value': 851099602, 'percentage': 0.05 },
	{ 'id': 'Africa_TUN', 'name': 'Tunisia', 'namefr': 'Tunisie', 'parent': 'Africa', 'value': 901511537, 'percentage': 0.05 },
	{ 'id': 'Africa_ZWE', 'name': 'Zimbabwe', 'namefr': 'Zimbabwe', 'parent': 'Africa', 'value': 779383468, 'percentage': 0.05 },
	{ 'id': 'Africa_AGO', 'name': 'Angola', 'namefr': 'Angola', 'parent': 'Africa', 'value': 682260326, 'percentage': 0.04 },
	{ 'id': 'NorthAmerica_DOM', 'name': 'Dominican Republic', 'namefr': 'République dominicaine', 'parent': 'NorthAmerica', 'value': 747716929, 'percentage': 0.04 },
	{ 'id': 'Asia_GEO', 'name': 'Georgia', 'namefr': 'Géorgie', 'parent': 'Asia', 'value': 659381464, 'percentage': 0.04 },
	{ 'id': 'Asia_JOR', 'name': 'Jordan', 'namefr': 'Jordanie', 'parent': 'Asia', 'value': 701302305, 'percentage': 0.04 },
	{ 'id': 'Asia_LBN', 'name': 'Lebanon', 'namefr': 'Liban', 'parent': 'Asia', 'value': 733434438, 'percentage': 0.04 },
	{ 'id': 'Europe_27_LUX', 'name': 'Luxembourg', 'namefr': 'Luxembourg', 'parent': 'Europe_27', 'value': 753685965, 'percentage': 0.04 },
	{ 'id': 'Asia_MMR', 'name': 'Myanmar', 'namefr': 'Birmanie', 'parent': 'Asia', 'value': 611490849, 'percentage': 0.04 },
	{ 'id': 'Europe_MKD', 'name': 'North Macedonia', 'namefr': 'Macédoine du Nord', 'parent': 'Europe', 'value': 636095994, 'percentage': 0.04 },
	{ 'id': 'Asia_YEM', 'name': 'Yemen', 'namefr': 'Yémen', 'parent': 'Asia', 'value': 624654156, 'percentage': 0.04 },
	{ 'id': 'SouthAmerica_BOL', 'name': 'Bolivia', 'namefr': 'Bolivie', 'parent': 'SouthAmerica', 'value': 530154964, 'percentage': 0.03 },
	{ 'id': 'NorthAmerica_CUW', 'name': 'Curacao', 'namefr': 'Curaçao', 'parent': 'NorthAmerica', 'value': 559292713, 'percentage': 0.03 },
	{ 'id': 'NorthAmerica_GTM', 'name': 'Guatemala', 'namefr': 'Guatemala', 'parent': 'NorthAmerica', 'value': 444931134, 'percentage': 0.03 },
	{ 'id': 'NorthAmerica_JAM', 'name': 'Jamaica', 'namefr': 'Jamaïque', 'parent': 'NorthAmerica', 'value': 452855654, 'percentage': 0.03 },
	{ 'id': 'Africa_KEN', 'name': 'Kenya', 'namefr': 'Kenya', 'parent': 'Africa', 'value': 467027394, 'percentage': 0.03 },
	{ 'id': 'Asia_LKA', 'name': 'Sri Lanka', 'namefr': 'Sri Lanka', 'parent': 'Asia', 'value': 500280693, 'percentage': 0.03 },
	{ 'id': 'Africa_SDN', 'name': 'Sudan', 'namefr': 'Soudan', 'parent': 'Africa', 'value': 446154339, 'percentage': 0.03 },
	{ 'id': 'Asia_TJK', 'name': 'Tajikistan', 'namefr': 'Tadjikistan', 'parent': 'Asia', 'value': 489613510, 'percentage': 0.03 },
	{ 'id': 'Europe_ALB', 'name': 'Albania', 'namefr': 'Albanie', 'parent': 'Europe', 'value': 285502507, 'percentage': 0.02 },
	{ 'id': 'Asia_ARM', 'name': 'Armenia', 'namefr': 'Arménie', 'parent': 'Asia', 'value': 383336064, 'percentage': 0.02 },
	{ 'id': 'Asia_BRN', 'name': 'Brunei', 'namefr': 'Brunei', 'parent': 'Asia', 'value': 360375192, 'percentage': 0.02 },
	{ 'id': 'NorthAmerica_CRI', 'name': 'Costa Rica', 'namefr': 'Costa Rica', 'parent': 'NorthAmerica', 'value': 255062078, 'percentage': 0.02 },
	{ 'id': 'Africa_CIV', 'name': 'Cote d\'Ivoire', 'namefr': 'Côte d\'Ivoire', 'parent': 'Africa', 'value': 333932355, 'percentage': 0.02 },
	{ 'id': 'Europe_27_CYP', 'name': 'Cyprus', 'namefr': 'Chypre Chy', 'parent': 'Europe_27', 'value': 293026004, 'percentage': 0.02 },
	{ 'id': 'Africa_ETH', 'name': 'Ethiopia', 'namefr': 'Éthiopie', 'parent': 'Africa', 'value': 258571415, 'percentage': 0.02 },
	{ 'id': 'Africa_GAB', 'name': 'Gabon', 'namefr': 'Gabon', 'parent': 'Africa', 'value': 258407162, 'percentage': 0.02 },
	{ 'id': 'Africa_GHA', 'name': 'Ghana', 'namefr': 'Ghana', 'parent': 'Africa', 'value': 371318619, 'percentage': 0.02 },
	{ 'id': 'NorthAmerica_HND', 'name': 'Honduras', 'namefr': 'Honduras', 'parent': 'NorthAmerica', 'value': 256321315, 'percentage': 0.02 },
	{ 'id': 'NorthAmerica_PAN', 'name': 'Panama', 'namefr': 'Panama', 'parent': 'NorthAmerica', 'value': 309251109, 'percentage': 0.02 },
	{ 'id': 'SouthAmerica_URY', 'name': 'Uruguay', 'namefr': 'Uruguay', 'parent': 'SouthAmerica', 'value': 371228927, 'percentage': 0.02 },
	{ 'id': 'Asia_AFG', 'name': 'Afghanistan', 'namefr': 'Afghanistan', 'parent': 'Asia', 'value': 192848747, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_BHS', 'name': 'Bahamas', 'namefr': 'Bahamas', 'parent': 'NorthAmerica', 'value': 169518999, 'percentage': 0.01 },
	{ 'id': 'Africa_BEN', 'name': 'Benin', 'namefr': 'Bénin', 'parent': 'Africa', 'value': 111665117, 'percentage': 0.01 },
	{ 'id': 'Africa_BWA', 'name': 'Botswana', 'namefr': 'Botswana', 'parent': 'Africa', 'value': 150401660, 'percentage': 0.01 },
	{ 'id': 'Asia_KHM', 'name': 'Cambodia', 'namefr': 'Cambodge', 'parent': 'Asia', 'value': 158243753, 'percentage': 0.01 },
	{ 'id': 'Africa_CMR', 'name': 'Cameroon', 'namefr': 'Cameroun', 'parent': 'Africa', 'value': 215091700, 'percentage': 0.01 },
	{ 'id': 'Africa_COD', 'name': 'Democratic Republic of Congo', 'namefr': 'république démocratique du Congo', 'parent': 'Africa', 'value': 193183879, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_SLV', 'name': 'El Salvador', 'namefr': 'Salvador', 'parent': 'NorthAmerica', 'value': 231869645, 'percentage': 0.01 },
	{ 'id': 'Africa_GNQ', 'name': 'Equatorial Guinea', 'namefr': 'Guinée équatoriale', 'parent': 'Africa', 'value': 179475703, 'percentage': 0.01 },
	{ 'id': 'Africa_GIN', 'name': 'Guinea', 'namefr': 'Guinée', 'parent': 'Africa', 'value': 86235079, 'percentage': 0.01 },
	{ 'id': 'SouthAmerica_GUY', 'name': 'Guyana', 'namefr': 'Guyana', 'parent': 'SouthAmerica', 'value': 100590486, 'percentage': 0.01 },
	{ 'id': 'Europe_ISL', 'name': 'Iceland', 'namefr': 'Islande', 'parent': 'Europe', 'value': 151823753, 'percentage': 0.01 },
	{ 'id': 'Europe_OWID_KOS', 'name': 'Kosovo', 'namefr': 'Kosovo', 'parent': 'Europe', 'value': 105636749, 'percentage': 0.01 },
	{ 'id': 'Asia_LAO', 'name': 'Laos', 'namefr': 'Laos', 'parent': 'Asia', 'value': 178015424, 'percentage': 0.01 },
	{ 'id': 'Africa_MDG', 'name': 'Madagascar', 'namefr': 'Madagascar', 'parent': 'Africa', 'value': 96770039, 'percentage': 0.01 },
	{ 'id': 'Europe_27_MLT', 'name': 'Malta', 'namefr': 'Malte', 'parent': 'Europe_27', 'value': 104591398, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_MTQ', 'name': 'Martinique', 'namefr': 'Martinique', 'parent': 'NorthAmerica', 'value': 88273861, 'percentage': 0.01 },
	{ 'id': 'Africa_MUS', 'name': 'Mauritius', 'namefr': 'Maurice', 'parent': 'Africa', 'value': 115756507, 'percentage': 0.01 },
	{ 'id': 'Europe_MNE', 'name': 'Montenegro', 'namefr': 'Monténégro', 'parent': 'Europe', 'value': 103621056, 'percentage': 0.01 },
	{ 'id': 'Africa_MOZ', 'name': 'Mozambique', 'namefr': 'Mozambique', 'parent': 'Africa', 'value': 177092206, 'percentage': 0.01 },
	{ 'id': 'Asia_NPL', 'name': 'Nepal', 'namefr': 'Népal', 'parent': 'Asia', 'value': 165884135, 'percentage': 0.01 },
	{ 'id': 'Oceania_NCL', 'name': 'New Caledonia', 'namefr': 'Nouvelle-Calédonie', 'parent': 'Oceania', 'value': 157007197, 'percentage': 0.01 },
	{ 'id': 'NorthAmerica_NIC', 'name': 'Nicaragua', 'namefr': 'Nicaragua', 'parent': 'NorthAmerica', 'value': 177396735, 'percentage': 0.01 },
	{ 'id': 'Oceania_PNG', 'name': 'Papua New Guinea', 'namefr': 'Papouasie-Nouvelle-Guinée', 'parent': 'Oceania', 'value': 169499159, 'percentage': 0.01 },
	{ 'id': 'SouthAmerica_PRY', 'name': 'Paraguay', 'namefr': 'Paraguay', 'parent': 'SouthAmerica', 'value': 177914443, 'percentage': 0.01 },
	{ 'id': 'Africa_REU', 'name': 'Reunion', 'namefr': 'Réunion L', 'parent': 'Africa', 'value': 123867607, 'percentage': 0.01 },
	{ 'id': 'Africa_SEN', 'name': 'Senegal', 'namefr': 'Sénégal', 'parent': 'Africa', 'value': 243298685, 'percentage': 0.01 },
	{ 'id': 'SouthAmerica_SUR', 'name': 'Suriname', 'namefr': 'Suriname', 'parent': 'SouthAmerica', 'value': 115203031, 'percentage': 0.01 },
	{ 'id': 'Africa_TZA', 'name': 'Tanzania', 'namefr': 'Tanzanie', 'parent': 'Africa', 'value': 243841497, 'percentage': 0.01 },
	{ 'id': 'Africa_UGA', 'name': 'Uganda', 'namefr': 'Ouganda', 'parent': 'Africa', 'value': 105594979, 'percentage': 0.01 },
	{ 'id': 'Africa_ZMB', 'name': 'Zambia', 'namefr': 'Zambie', 'parent': 'Africa', 'value': 247987833, 'percentage': 0.01 },
	{ 'id': 'Europe_AND', 'name': 'Andorra', 'namefr': 'Andorre', 'parent': 'Europe', 'value': 15070878, 'percentage': 0 },
	{ 'id': 'NorthAmerica_AIA', 'name': 'Anguilla', 'namefr': 'Anguilla', 'parent': 'NorthAmerica', 'value': 3421269, 'percentage': 0 },
	{ 'id': 'Antarctica_ATA', 'name': 'Antarctica', 'namefr': 'Antarctique', 'parent': 'Antarctica', 'value': 153888, 'percentage': 0 },
	{ 'id': 'NorthAmerica_ATG', 'name': 'Antigua and Barbuda', 'namefr': 'Antigua-et-Barbuda', 'parent': 'NorthAmerica', 'value': 21526783, 'percentage': 0 },
	{ 'id': 'NorthAmerica_ABW', 'name': 'Aruba', 'namefr': 'Aruba', 'parent': 'NorthAmerica', 'value': 75920840, 'percentage': 0 },
	{ 'id': 'NorthAmerica_BRB', 'name': 'Barbados', 'namefr': 'Barbade', 'parent': 'NorthAmerica', 'value': 54874937, 'percentage': 0 },
	{ 'id': 'NorthAmerica_BLZ', 'name': 'Belize', 'namefr': 'Belize', 'parent': 'NorthAmerica', 'value': 19062872, 'percentage': 0 },
	{ 'id': 'NorthAmerica_BMU', 'name': 'Bermuda', 'namefr': 'Bermudes', 'parent': 'NorthAmerica', 'value': 29205480, 'percentage': 0 },
	{ 'id': 'Asia_BTN', 'name': 'Bhutan', 'namefr': 'Bhoutan', 'parent': 'Asia', 'value': 19193093, 'percentage': 0 },
	{ 'id': 'NorthAmerica_BES', 'name': 'Bonaire Sint Eustatius and Saba', 'namefr': 'Pays-Bas caribéens', 'parent': 'NorthAmerica', 'value': 30353912, 'percentage': 0 },
	{ 'id': 'NorthAmerica_VGB', 'name': 'British Virgin Islands', 'namefr': 'Îles Vierges britanniques', 'parent': 'NorthAmerica', 'value': 5499486, 'percentage': 0 },
	{ 'id': 'Africa_BFA', 'name': 'Burkina Faso', 'namefr': 'Burkina Faso', 'parent': 'Africa', 'value': 64321172, 'percentage': 0 },
	{ 'id': 'Africa_BDI', 'name': 'Burundi', 'namefr': 'Burundi', 'parent': 'Africa', 'value': 13057139, 'percentage': 0 },
	{ 'id': 'Africa_CPV', 'name': 'Cape Verde', 'namefr': 'Cap-Vert', 'parent': 'Africa', 'value': 13286506, 'percentage': 0 },
	{ 'id': 'Africa_CAF', 'name': 'Central African Republic', 'namefr': 'République centrafricaine', 'parent': 'Africa', 'value': 10543960, 'percentage': 0 },
	{ 'id': 'Africa_TCD', 'name': 'Chad', 'namefr': 'Tchad', 'parent': 'Africa', 'value': 26057722, 'percentage': 0 },
	{ 'id': 'Asia_CXR', 'name': 'Christmas Island', 'namefr': 'Île Christmas', 'parent': 'Asia', 'value': 1330032, 'percentage': 0 },
	{ 'id': 'Africa_COM', 'name': 'Comoros', 'namefr': 'Comores', 'parent': 'Africa', 'value': 5301846, 'percentage': 0 },
	{ 'id': 'Africa_COG', 'name': 'Congo', 'namefr': 'république du Congo', 'parent': 'Africa', 'value': 78480734, 'percentage': 0 },
	{ 'id': 'Oceania_COK', 'name': 'Cook Islands', 'namefr': 'Îles Cook', 'parent': 'Oceania', 'value': 2195919, 'percentage': 0 },
	{ 'id': 'Africa_DJI', 'name': 'Djibouti', 'namefr': 'Djibouti', 'parent': 'Africa', 'value': 18909622, 'percentage': 0 },
	{ 'id': 'NorthAmerica_DMA', 'name': 'Dominica', 'namefr': 'Dominique', 'parent': 'NorthAmerica', 'value': 4806990, 'percentage': 0 },
	{ 'id': 'Africa_ERI', 'name': 'Eritrea', 'namefr': 'Érythrée', 'parent': 'Africa', 'value': 17898960, 'percentage': 0 },
	{ 'id': 'Africa_SWZ', 'name': 'Eswatini', 'namefr': 'Eswatini', 'parent': 'Africa', 'value': 40689810, 'percentage': 0 },
	{ 'id': 'Europe_FRO', 'name': 'Faeroe Islands', 'namefr': 'Îles Féroé', 'parent': 'Europe', 'value': 30636678, 'percentage': 0 },
	{ 'id': 'Oceania_FJI', 'name': 'Fiji', 'namefr': 'Fidji', 'parent': 'Oceania', 'value': 49428747, 'percentage': 0 },
	{ 'id': 'SouthAmerica_GUF', 'name': 'French Guiana', 'namefr': 'Guyane', 'parent': 'SouthAmerica', 'value': 27490057, 'percentage': 0 },
	{ 'id': 'Oceania_PYF', 'name': 'French Polynesia', 'namefr': 'Polynésie française', 'parent': 'Oceania', 'value': 28783631, 'percentage': 0 },
	{ 'id': 'Africa_GMB', 'name': 'Gambia', 'namefr': 'Gambie', 'parent': 'Africa', 'value': 13966136, 'percentage': 0 },
	{ 'id': 'NorthAmerica_GRL', 'name': 'Greenland', 'namefr': 'Groenland', 'parent': 'NorthAmerica', 'value': 33050491, 'percentage': 0 },
	{ 'id': 'NorthAmerica_GRD', 'name': 'Grenada', 'namefr': 'Grenade', 'parent': 'NorthAmerica', 'value': 8262881, 'percentage': 0 },
	{ 'id': 'NorthAmerica_GLP', 'name': 'Guadeloupe', 'namefr': 'Guadeloupe', 'parent': 'NorthAmerica', 'value': 83818362, 'percentage': 0 },
	{ 'id': 'Africa_GNB', 'name': 'Guinea-Bissau', 'namefr': 'Guinée-Bissau', 'parent': 'Africa', 'value': 10094254, 'percentage': 0 },
	{ 'id': 'NorthAmerica_HTI', 'name': 'Haiti', 'namefr': 'Haïti', 'parent': 'NorthAmerica', 'value': 76215378, 'percentage': 0 },
	{ 'id': 'Oceania_KIR', 'name': 'Kiribati', 'namefr': 'Kiribati', 'parent': 'Oceania', 'value': 2085306, 'percentage': 0 },
	{ 'id': 'Africa_LSO', 'name': 'Lesotho', 'namefr': 'Lesotho', 'parent': 'Africa', 'value': 63982252, 'percentage': 0 },
	{ 'id': 'Africa_LBR', 'name': 'Liberia', 'namefr': 'Libéria', 'parent': 'Africa', 'value': 52517064, 'percentage': 0 },
	{ 'id': 'Europe_LIE', 'name': 'Liechtenstein', 'namefr': 'Liechtenstein', 'parent': 'Europe', 'value': 6111118, 'percentage': 0 },
	{ 'id': 'Asia_MAC', 'name': 'Macao', 'namefr': 'Macao', 'parent': 'Asia', 'value': 56560635, 'percentage': 0 },
	{ 'id': 'Africa_MWI', 'name': 'Malawi', 'namefr': 'Malawi', 'parent': 'Africa', 'value': 50701387, 'percentage': 0 },
	{ 'id': 'Asia_MDV', 'name': 'Maldives', 'namefr': 'Maldives', 'parent': 'Asia', 'value': 24911241, 'percentage': 0 },
	{ 'id': 'Africa_MLI', 'name': 'Mali', 'namefr': 'Mali', 'parent': 'Africa', 'value': 63318974, 'percentage': 0 },
	{ 'id': 'Oceania_MHL', 'name': 'Marshall Islands', 'namefr': 'Îles Marshall', 'parent': 'Oceania', 'value': 3416752, 'percentage': 0 },
	{ 'id': 'Africa_MRT', 'name': 'Mauritania', 'namefr': 'Mauritanie', 'parent': 'Africa', 'value': 75632597, 'percentage': 0 },
	{ 'id': 'Africa_MYT', 'name': 'Mayotte', 'namefr': 'Mayotte', 'parent': 'Africa', 'value': 6517460, 'percentage': 0 },
	{ 'id': 'Oceania_FSM', 'name': 'Micronesia (country)', 'namefr': 'États fédérés de Micronésie', 'parent': 'Oceania', 'value': 3713305, 'percentage': 0 },
	{ 'id': 'NorthAmerica_MSR', 'name': 'Montserrat', 'namefr': 'Montserrat', 'parent': 'NorthAmerica', 'value': 1618456, 'percentage': 0 },
	{ 'id': 'Africa_NAM', 'name': 'Namibia', 'namefr': 'Namibie', 'parent': 'Africa', 'value': 76039286, 'percentage': 0 },
	{ 'id': 'Oceania_NRU', 'name': 'Nauru', 'namefr': 'Nauru', 'parent': 'Oceania', 'value': 4858262, 'percentage': 0 },
	{ 'id': 'Africa_NER', 'name': 'Niger', 'namefr': 'Niger', 'parent': 'Africa', 'value': 46523337, 'percentage': 0 },
	{ 'id': 'Oceania_NIU', 'name': 'Niue', 'namefr': 'Niue', 'parent': 'Oceania', 'value': 290148, 'percentage': 0 },
	{ 'id': 'Oceania_PLW', 'name': 'Palau', 'namefr': 'Palaos', 'parent': 'Oceania', 'value': 10562041, 'percentage': 0 },
	{ 'id': 'Asia_PSE', 'name': 'Palestine', 'namefr': 'Palestine', 'parent': 'Asia', 'value': 59437670, 'percentage': 0 },
	{ 'id': 'NorthAmerica_PRI', 'name': 'Puerto Rico', 'namefr': 'Porto Rico', 'parent': 'NorthAmerica', 'value': 208848, 'percentage': 0 },
	{ 'id': 'Africa_RWA', 'name': 'Rwanda', 'namefr': 'Rwanda', 'parent': 'Africa', 'value': 28684439, 'percentage': 0 },
	{ 'id': 'Africa_SHN', 'name': 'Saint Helena', 'namefr': 'Sainte-Hélène, Ascension et Tristan da Cunha', 'parent': 'Africa', 'value': 379295, 'percentage': 0 },
	{ 'id': 'NorthAmerica_KNA', 'name': 'Saint Kitts and Nevis', 'namefr': 'Saint-Christophe-et-Niévès', 'parent': 'NorthAmerica', 'value': 6339698, 'percentage': 0 },
	{ 'id': 'NorthAmerica_LCA', 'name': 'Saint Lucia', 'namefr': 'Sainte-Lucie', 'parent': 'NorthAmerica', 'value': 14365567, 'percentage': 0 },
	{ 'id': 'NorthAmerica_SPM', 'name': 'Saint Pierre and Miquelon', 'namefr': 'Saint-Pierre-et-Miquelon', 'parent': 'NorthAmerica', 'value': 3676592, 'percentage': 0 },
	{ 'id': 'NorthAmerica_VCT', 'name': 'Saint Vincent and the Grenadines', 'namefr': 'Saint-Vincent-et-les-Grenadines', 'parent': 'NorthAmerica', 'value': 6966830, 'percentage': 0 },
	{ 'id': 'Oceania_WSM', 'name': 'Samoa', 'namefr': 'Samoa', 'parent': 'Oceania', 'value': 6782410, 'percentage': 0 },
	{ 'id': 'Africa_STP', 'name': 'Sao Tome and Principe', 'namefr': 'Sao Tomé-et-Principe', 'parent': 'Africa', 'value': 3360735, 'percentage': 0 },
	{ 'id': 'Africa_SYC', 'name': 'Seychelles', 'namefr': 'Seychelles', 'parent': 'Africa', 'value': 13379536, 'percentage': 0 },
	{ 'id': 'Africa_SLE', 'name': 'Sierra Leone', 'namefr': 'Sierra Leone', 'parent': 'Africa', 'value': 36096233, 'percentage': 0 },
	{ 'id': 'NorthAmerica_SXM', 'name': 'Sint Maarten (Dutch part)', 'namefr': 'Saint-Martin (royaume de', 'parent': 'NorthAmerica', 'value': 67703530, 'percentage': 0 },
	{ 'id': 'Oceania_SLB', 'name': 'Solomon Islands', 'namefr': 'Îles Salomon', 'parent': 'Oceania', 'value': 10434984, 'percentage': 0 },
	{ 'id': 'Africa_SOM', 'name': 'Somalia', 'namefr': 'Somalie', 'parent': 'Africa', 'value': 32889848, 'percentage': 0 },
	{ 'id': 'Africa_SSD', 'name': 'South Sudan', 'namefr': 'Soudan du Sud', 'parent': 'Africa', 'value': 38352164, 'percentage': 0 },
	{ 'id': 'Asia_TLS', 'name': 'Timor', 'namefr': 'Timor oriental', 'parent': 'Asia', 'value': 6543008, 'percentage': 0 },
	{ 'id': 'Africa_TGO', 'name': 'Togo', 'namefr': 'Togo', 'parent': 'Africa', 'value': 66128454, 'percentage': 0 },
	{ 'id': 'Oceania_TON', 'name': 'Tonga', 'namefr': 'Tonga', 'parent': 'Oceania', 'value': 4383586, 'percentage': 0 },
	{ 'id': 'NorthAmerica_TCA', 'name': 'Turks and Caicos Islands', 'namefr': 'Îles Turques-et-Caïques', 'parent': 'NorthAmerica', 'value': 3930547, 'percentage': 0 },
	{ 'id': 'Oceania_TUV', 'name': 'Tuvalu', 'namefr': 'Tuvalu', 'parent': 'Oceania', 'value': 278925, 'percentage': 0 },
	{ 'id': 'Oceania_VUT', 'name': 'Vanuatu', 'namefr': 'Vanuatu', 'parent': 'Oceania', 'value': 4752294, 'percentage': 0 },
	{ 'id': 'Oceania_WLF', 'name': 'Wallis and Futuna', 'namefr': 'Wallis-et-Futuna', 'parent': 'Oceania', 'value': 507247, 'percentage': 0 },
	{ 'id': 'Europe_27', 'name': 'European Union', 'namefr': 'Union Européenne', 'parent': 'Europe', 'value': 290125360364, 'percentage': 17.1 }
];

var title = 'Who emited the most CO₂ so far?';
var subtitle = 'Global carbon dioxide (CO₂) emissions from 1751 until 2020 were 1 696,5 billion tonnes';
var pointFormat = '<b>{point.name}</b><br>' +
			'Emissions: {point.value} tonnes CO₂<br>' +
			'{point.percentage}% global emissions'

if (language == 'fr') {
	points.forEach(x => x.name = x.namefr);
	title = 'Qui a émis le plus de CO₂ jusqu\'à aujourd\'hui';
	subtitle = 'Les émissions globales de dioxyde de carbone (CO₂) de 1751 jusqu\'en 2020 on été de 1 696,5 milliard de tonnes';
	pointFormat = '<b>{point.name}</b><br>' +
				'Émissions: {point.value} tonnes CO₂<br>' +
				'{point.percentage}% des émissions globales';
}

Highcharts.chart('container-total-ghg', {  
	chart: {
	    height: '75%' // 16:9 ratio
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 550
            },
            chartOptions: {
                chart: {
                    height: '95%'
                },
                title: {
                    style: {
                        fontSize: '12px'
                    }
                },
                subtitle: {
                    style: {
                        fontSize: '9px',
                        lineHeight: '8px'
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            fontSize: '9px'
                        }
                    }
                }
            }
        }]
    },

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
					return this.point.value > 500000 ? '<em>' + this.point.name + ':</em><br>' +
					  Math.round(this.point.value/100000000)/10 + ' Gt CO₂<br>' + this.point.percentage + '%' : '<em>' + this.point.name + ':</em>';
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
