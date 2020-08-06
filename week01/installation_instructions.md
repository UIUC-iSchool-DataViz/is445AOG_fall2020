---
layout: week
visible: true
visible_lec: true
visible_n: true
---
 
# Installation instructions

## 1. Install Anaconda with Python 3

To install the packages and libraries we need for this course we will be using the Anaconda package manager, so you'll need to install this first.  First, navigate to the [individual edition page](https://www.anaconda.com/products/individual) and scroll down until you see the download links and select either a 32 or 64 bit installation, depending on your machine (if you're not sure if you are on a 32/64 bit machine the easiest is probably to google your computer's name and date along with "32 or 64").:

<img src="https://raw.githubusercontent.com/UIUC-iSchool-DataViz/is445AOG_fall2020/master/week01/images/anacondaInstallers.png">

**NOTE:** You will need the Python 3.X version (the version might be different than listed on the conda webpage).

Next, follow these installation steps to install anaconda on your computer:
 * [Install on a Windows](https://docs.anaconda.com/anaconda/install/windows/)
 * [Install on a Mac](https://docs.anaconda.com/anaconda/install/mac-os/)
 

## 2. Create an Anaconda Environment

Now we will make a "stand-alone" envirnoment to do our data-viz stuff in.  This is useful to make sure we install packages in a way that will not cause bad interactions.

Here is a ~2 minute movie of how this process looks on my Mac (it may take longer on your machine!)

<iframe width="560" height="315" src="https://www.youtube.com/embed/fEO9KEHCkwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 2.1 Conda environment
 1. On a Mac search for the "Terminal" prompt/on Windows search for the Anaconda prompt (NOT the navigator)
 2. In the terminal window type: `conda create -n DataViz python=3.7 matplotlib numpy jupyter pillow pandas scipy ipywidgets palettable bqplot h5py requests traitlets geopandas contextily ipyvolume ffmpeg descartes basemap cartopy webcolors ipyleaflet yt wordcloud nltk -c conda-forge`
 3. When prompted, enter y and press return to install stuff (this can take a while!)

### 2.2 Pip install remaining packages
 1. Follow the prompt to "activate" this environment with: `conda activate DataViz`
 1. Still in terminal window do: `pip install PyGEL3D`

## 3. Run your environment

**YOU WILL NEED TO DO THIS EVERY TIME YOU OPEN UP JUPYTER NOTEBOOK**

 1. after all installs are done type `conda activate DataViz` in the terminal window/anaconda prompt
 2. then type `jupyter notebook` to open the notebook from the command line
 

