---
layout: week
visible: true
visible_lec: true
visible_n: true
---

# Week 1 - Introduction

This week, we went over the structure of the course, as well as some basics of
why we visualize, who we visualize for, and how to think about our relationship
with our data.

 * [Mark Newman's Election Maps](http://www-personal.umich.edu/~mejn/election/2008/)
 * [Lilo & Stitch](https://www.netflix.com/title/60022989)
 * [Peg + Cat: The Three Friends Problem](http://www.pbs.org/parents/peg/episode-119-the-big-dog-problem-the-three-friends-problem/)
 * [FRED](https://fred.stlouisfed.org)
 * [Example Vega-Lite plot](https://vega.github.io/editor/#/gist/vega-lite/matthewturk/e3808b4172b7f80141788b45236831ca/dc65ec026c5cedc267a2da47d6fa4268d2b18bcb/movies-hconcat.json)

## Downloads

 * <a href="data/GDP.csv" download>FRED GDP.csv file</a>
 * <a href="https://uiuc-ischool-dataviz.github.io/spring2019online/week01/images/stitch_reworked.png" download>Reworked Stitch Image</a>
 
## Installation instructions

### 1. Install Anaconda with Python 3
HERE

### 2. Create an Anaconda Environment

Now we will make a "stand-alone" envirnoment to do our data-viz stuff in.  This is useful to make sure we install packages in a way that will not cause bad interactions.

#### 2.1 Conda environment
 1. On a Mac search for the "Terminal" prompt/on Windows search for the Anaconda prompt (NOT the navigator)
 2. In the terminal window type: `conda create -n DataViz python=3.7 matplotlib numpy jupyter pillow pandas scipy ipywidgets palettable bqplot h5py requests traitlets geopandas contextily ipyvolume ffmpeg descartes basemap cartopy webcolors ipyleaflet yt wordcloud nltk -c conda-forge`
 3. When prompted, enter y and press return to install stuff (this can take a while!)

#### 2.2 Pip install remaining packages
HERE

### 3. Run your environment

**YOU WILL NEED TO DO THIS EVERY TIME YOU OPEN UP JUPYTER NOTEBOOK**

 1. after all installs are done type `conda activate DataViz` in the terminal window/anaconda prompt
 2. then type `jupyter notebook` to open the notebook from the command line
 

## Optional Reading List (See syllabus for acronyms)

 1. VAD, Ch. 1: What's Viz, and Why Do It? 
 2. <a href="https://serialmentor.com/dataviz/introduction.html">FDV, Ch. 1: Introduction</a> & <a href="https://serialmentor.com/dataviz/proportional-ink.html">FDV, Ch. 17: The principle of proportional ink</a> 
 3. <a href="https://medium.com/multiple-views-visualization-research-explained/same-data-multiple-perspectives-curse-of-knowledge-in-visual-data-communication-d827c381f936">Same Data, Multiple Perspectives</a> 
 4. [Intro to Jupyter Notebook Video](https://www.youtube.com/watch?v=3C9E2yPBw7s)
