Nov 30, 2018

·7 min read

Recreate That Graph
===================

Water Quality Violations
------------------------

**Introduction**
================

For Boston University’s Public Health Post, I was tasked to create a graphic for the comprehensive study “National trends in drinking water quality violations”, [published by PNAS](http://www.pnas.org/content/115/9/2078). When I reached out to the researchers for their complete data set, I unfortunately did not get a response in time for our deadline. So, I read their methods and recreated their study the best I could. This articles details that process. The tools used include Python, Jupyter Notebooks, Google Maps Geocoding API, QGIS, and D3. Links to all of the resources used are all the way down.

**Collecting Data**
===================

The aim is to create a table for each water system, for every year : how many violations occurred and what are the characteristics of the community the water system serves when the violation occurred. If there is no violation for a given system in a given year, we assume one was not reported:

> _We define the year in which the violation occurred as the year of the compliance period start date. We assume that if a CWS does not have a violation entry for a given year, then no violation occurred._

_\- Supporting Information_

Water Systems and Violations
----------------------------

The graph to reproduce compares the demographics and average violations of water systems over time:

![](https://miro.medium.com/max/1400/1*0qxJMgNPUurDrqktx0Aw8w.png)The graph to recreate, Fig. 3 from National trends in water quality violations

The criteria for which water sources to include were as follows:

> _… a public water system must be classified as a CWS, serve over 500 people, begin reporting violations in 1982 or prior, and be located within the continental United States._

_— National trends in drinking water quality violations_

To further specify their criteria, the study only looks at health based violations. [The SDWIS Federal Reports Advanced Search](https://ofmpub.epa.gov/apex/sfdw/f?p=108:1:::NO:1::) feature allows us to query for systems and violations:

![](https://miro.medium.com/max/1400/1*r3w40SXpf2kAuLp0yfsC9w.png)Systems Query![](https://miro.medium.com/max/1400/1*4wQiabBR49eOybNcSfr0bA.png)Violations Query

Of the 87,061 records violations that meet the criteria, 350 were filtered out for not having a city name. All of the records without a city name had no other address data. That leaves us with 86,711 violations. This figure does not align with the 95,754 records used in the study, but without the exact query the researchers made, I am unlikely to find the discrepancy.

Income
------

Here’s how the researchers got their income data and defined income categories:

> _Community characteristics are county-level US census variables and represent annual values for each year of the study period. The decennial census data (1970, 1980, 1990, 2000, 2010) and the American Community Survey data in the year of 2006, 2008, and 2012 were obtained via Social Explorer._

_— Supporting Information_

> _Low-income counties have median household income below 75% of national median household income. In year 2015, national median household income was $55,775…_

_— National trends in drinking water quality violations_

Since Social Explorer is a paid service, I did things differently. For the decennial income census data in 69, 79, and 89, there’s a table from the Census Bureau’s [Historical Income Tables: Counties](https://www.census.gov/data/tables/time-series/dec/historical-income-counties.html). [Here](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=DEC_00_SF3_HCT012&prodType=table) for 2000 data (Census 2000 Summary File 3). And finally, for between [2009 and 2015 (S1901)](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=bkmk), the American Community Survey has the complete data set for all geographies.

**Historical Income Data**
--------------------------

To properly categorize a county’s median income as low or high throughout the decades, I had to find historical national median incomes and bring the incomes to 2015 dollars. The Federal Reserve Bank of St.Louis (FRED) has a convenient data set [here](https://fred.stlouisfed.org/series/MEHOINUSA646N). For the missing years 1982 and 1983, I took data from the 2012 [Income, Poverty, and Health Insurance Coverage in the United States](https://www.census.gov/prod/2013pubs/p60-245.pdf) report and adjusted the values manually with the Bureau of Labor Statistic’s [CPI](https://data.bls.gov/cgi-bin/cpicalc.pl?cost1=45%2C760&year1=201201&year2=198301) inflation calculator.

**Housing Density**
-------------------

Housing unit data for the decennial census 1990, 2000 and 2010 are tough, but possible to find. However, units in 1980 are in a cryptic format with no meaningful guidelines for extraction. Without 1980 data, its hard to interpolate between the years. So, I will take a different approach and look at density of housing from the most recent decennial census data in 2010, the [GCT-PH1](https://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=bkmk) to categorize counties intro rural, suburban and urban. I believe the researchers did the same as they give only a single definition and make no mention of interpolation. In the Supporting Information, it reads:

> _…housing density categories are defined for rural \[ < 16 units per square mile (sq. mi.)\], sub-urban (16–380.7 units per sq. mi.), and urban (>380.7 units per sq. mi.)_
\- _Supporting Information_

Wrangling
=========

**Geocoding**
-------------

The violations from the EPA data does not specify the county a water system serves. In order to join the violations data with county-level demographic data, I geocoded all of the unique Community Watery Systems:

```
#extract all unique ids
ids = list(set(violations\['PWS ID'\].tolist()))#get address data:
for row in violations.itertuples(index=True, name='Pandas'):
  \_city\_name = getattr(row, '\_16')
  \_state = getattr(row, '\_3')
  \_zip = getattr(row, '\_13')
  address\_table\[\_id\]\['address'\] = \_city\_name + ', ' + \_state + ', ' + \_zipfor id in ids:
   address = address\_table\[id\]\['address'\]
   loc = gmaps.geocode(address)
   address\_table\[id\]\['location'\] = loc\[0\]\['geometry'\]\['location'\]
```

The community water systems without violations were also geocoded. Next, in QGIS I did a spatial join to get the county in which a Community Water System falls. I downloaded GEOJSON U.S. county polygons from [here](http://eric.clst.org/tech/usgeojson/). After adding the geocoded water systems and county polygons as layers in QGIS, I used SAGA’s Vector Point Tools to get the county a system is contained in.

![](https://miro.medium.com/max/1400/1*jQ2UZPS3g_OCTdNgWeG93Q.png)Adding a “County” column to Public Water Systems in QGIS

Normalizing Currency
--------------------

Next is to interpolate the counties’ median incomes for missing years. But first, the existing years have to be put in the same units as 2015 dollars. The easymoney package can make it so:

```
income\['1979'\] = income\['1979'\].apply(lambda val: ep.normalize(amount=make\_num(val), region="USA", from\_year=1979, to\_year=2015))
...income\['2014'\] = income\['2014'\].apply(lambda val: ep.normalize(amount=make\_num(val), region="USA", from\_year=2014, to\_year=2015))
```

Interpolating Missing Years
---------------------------

> _All annual data from 1980 to 2011 are interpolated by the method of monotone piecewise cubic interpolation._

\- _Supporting Information_

Scipy’s PchipInterpolator will do just the trick:

```
def interpolate\_vals(row):
    fips = row\['FIPS'\]
    full\_income\_data\_set\[fips\] = {}
    values = get\_values(row)
    years = sorted(list(values.keys()))
    years\_to\_interp = range(1979, 2009)
    y = \[\]
    for year in years:
        y.append(values\[year\])
    interpolator = interpolate.PchipInterpolator(years, y)
    for year in years\_to\_interp:
        full\_income\_data\_set\[fips\]\[str(year)\] = interpolator(year)#interpolate values
normalized\_income.apply(interpolate\_vals, axis=1)
interp\_income = pd.DataFrame.from\_dict(full\_income\_data\_set).transpose()
interp\_income.index.names = \['FIPS'\]
cols\_to\_use = interp\_income.columns.difference(normalized\_income.columns)
full\_income = pd.merge(normalized\_income, interp\_income\[cols\_to\_use\], on='FIPS')
year\_cols = range(1979, 2016)
year\_cols = sorted(list(map(lambda y: str(y), year\_cols)))
full\_income\_sorted = full\_income\[\['county', 'FIPS', \*year\_cols\]\]
for col in cols\_to\_use:
    full\_income\_sorted\[col\] = full\_income\_sorted\[col\].astype(float).round(2)
```

Violation Counts per Year
-------------------------

To quickly compute how many violations happened per system in a year, one can group the year and ID columns and then find then length of the groups.

```
vio\_year = vio\_year\[\['PWS ID', 'year'\]\]
vio\_year = vio\_year.groupby(\['PWS ID', 'year'\]).size().reset\_index(name='counts')
```

Joining
=======

The key by which all of the data was joined is the county FIPS (Federal Information Processing Standards) code. The target data set has for each community water system, for each year, how many health-based violations occurred, the household median income and the housing density of the county the system served.

```
years = list(map(lambda y : str(y), range(1982, 2016)))csv\_writer = None
with open(‘full\_water\_quality\_dataset.csv’, ‘w’) as csvfile:
 csv\_writer = csv.writer(csvfile, delimiter=’,’, quotechar=’”’, quoting=csv.QUOTE\_MINIMAL)for pws in water\_geo.itertuples():
 \_id = getattr(pws, ‘\_1’)
 \_fips = getattr(pws, ‘FIPS’)
 for i, \_year in enumerate(years):
 \_total\_violations = 0
 \_median\_income = float(‘nan’)
 \_housing\_density = float(‘nan’)
 if (\_id, \_year) in vio\_year.index:
 \_total\_violations = vio\_year.loc\[(\_id, \_year)\]\[‘counts’\]
 if (\_fips) in income.index:
 \_median\_income = income.loc\[(\_fips)\]\[\_year\]
 if (\_fips) in housing.index:
 \_housing\_density = housing.loc\[(\_fips)\]\[‘housing\_density’\]
 row = \[\_id,\_year,\_total\_violations,\_median\_income,\_housing\_density\]
 csv\_writer.writerow(row)
```

Querying
========

With the full data set produced, it’s time to ask it ‘What is the average violations per community water systems that served high income rural areas in 1993’? Given the definitions of rural and high income from the study, with pandas this can be expressed as:

```
high\_income\_rural\_1993 = ws\[((ws\['median\_hh\_income'\] >= 41931.25) & (ws\['housing\_unit\_density'\] < 16)) & (ws\['year'\] == 1995)\]observations = len(high\_income\_rural\_1993.index)
total = high\_income\_rural\_1993\['total\_violations'\].sum()
total / observations
```

Results
=======

There are of course discrepancies, however the main trends are similar: Rural-low income areas have an especially hard time of keeping up with new regulations.

![](https://miro.medium.com/max/750/1*mrVWPzWeEtDGD2Uov7AgmA.png)Trendlines from Jupyter Notebook

Let’s stylize these trends with D3:

![](https://miro.medium.com/max/1400/1*ABV_Cln4xavQcB8qt1NlFw.png)Average water quality violations in the United States between 1982 and 2015 per county-level demographics

**Closing Remarks**
===================

Acknowledgements
----------------

I’d be remiss not to give credit to Nadja Popovich for the inspiration from her graphic a [New York Time’s article](https://www.nytimes.com/2018/02/12/climate/drinking-water-safety.html) about this very study. Also, I am grateful to the personnel at the Bureau of Labor Statistics for patiently explaining to me the inner-workings of census and income data. Thank you to the team at Public Health Post for the collaboration.

External Links:
---------------

*   [Published graphic and article by Erin Polka](https://www.publichealthpost.org/databyte/rural-water-quality-violations/)
*   [National trends in drinking water quality violations and Supporting Information](http://www.pnas.org/content/115/9/2078)
*   [Source code and datasets on github](https://github.com/dgaitsgo/PublicHealthPost)