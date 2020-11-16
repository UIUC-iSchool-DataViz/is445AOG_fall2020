---
layout: week
visible: true
visible_lec: true
visible_n: true
---

# Week 13 - A few more Idyll+d3 things, Starting SciViz 

A few more things in Idyll and d3.js.


## Downloads & Links

### Idyll Files & Example pages

 1. We'll be building toward a webpage like [this](https://jnaiman.github.io/) today using [Idyll](https://idyll-lang.org/)'s built-in components.
 1. Last week, we got to [this index.idyll file right here](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/inClass/index.idyll) and [this custom histogram component](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week12/corg/inClass/histogram-custom-d3-component.js) and we'll start from there this week.
 1. Full Markdown code for this week [available right here](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/index.idyll).
 1. We'll also build a few histogram components like:
    * starting with [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/histogram-custom-d3-component.js)
    * then [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/histogram-button-custom-d3-component.js)
    * and finally [this one](https://github.com/UIUC-iSchool-DataViz/is445AOG_fall2020/blob/master/week13/corg/prepIdyll/histogram-button-slider-custom-d3-component.js)
	

Further examples include:
 * Website from [Spring 2020](https://jnaiman.github.io/items_dataviz_spring2020/) which focuses on using [d3.js](https://d3js.org/) to do many plots since vega-lite was not working well at that time.  The index.idyll file, along with example d3 components and a styles.css file for the final map are in [this subdirectory from that course page here](https://github.com/UIUC-iSchool-DataViz/spring2020/tree/master/week15/corg).



### Data

 1. <a href="corg/corgs_per_country_over_time_columns_2020.csv" download>Corgis per country over time (corgs_per_country_over_time_columns_2020.csv)</a>
 1. <a href="corg/corgiData_countries_subset_2020.json" download>Subset of full Corgi database (corgiData_countries_subset_2020.json)</a>
     * Full dataset available [here](corg/corgiData_countries_full_2020.json)
	 
This dataset is from the [Cardigan Archives](http://cardiped.net/) and [scraped using Beautiful Soup in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/grabCorgData_subpages.py) and [further processed in Python](https://github.com/UIUC-iSchool-DataViz/spring2020/blob/master/week12/corg/calc_corgData.ipynb) into this form.


## Optional reading list

  1. <a href="https://github.com/d3/d3/wiki">d3.js docs</a> 

**d3.js examples (v4)**
 1. [Simple time-bar chart](https://bl.ocks.org/vikkya/75bda04cd0c00e49cbda6cfee8d97aba) (we used this one to start with)
 1. [Grouped bar chart](https://observablehq.com/@d3/grouped-bar-chart)
 1. [Animated side-bar chart](https://observablehq.com/@d3/bar-chart-race)
 1. [Histogram, binning of data](https://www.d3-graph-gallery.com/graph/histogram_basic.html)


Also, here is a slightly more in-depth explanation of path/ray tracing which we'll talk about more in Week 15:

<iframe width="560" height="315" src="https://www.youtube.com/embed/frLwRLS_ZR0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
