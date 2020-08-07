---
layout: week
visible: false
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
 
**NOTE:** If you already have Anaconda installed you might get an error.  You can simply make sure Anaconda is the most recent version by opening a Terminal (Mac) or the Anaconda Prompt (Windows) and typing `conda update anaconda`.
 

## 2. Create an Anaconda Environment

Now we will make a "stand-alone" envirnoment to do our data-viz stuff in.  This is useful to make sure we install packages in a way that will not cause bad interactions.

Here is a ~2 minute movie of how this process looks on my Mac (it may take longer on your machine!) which covers the instructions in section 2.1 and 2.2 of the installation process:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2iPGcTBHPGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 2.1 Conda environment
 1. On a Mac search for the "Terminal" prompt/on Windows search for the Anaconda prompt (NOT the navigator)
 2. In the terminal window type: `conda create -n DataViz python=3.8 matplotlib=3.2.2 numpy jupyter pillow pandas scipy ipywidgets palettable bqplot h5py requests traitlets geopandas contextily ipyvolume ffmpeg descartes basemap cartopy webcolors ipyleaflet wordcloud nltk xlrd libpng pip yt -c conda-forge`
 3. When prompted, enter y and press return to install stuff (this can take a while!)
 
**Note:** Right now we need a special version of `matplotlib` to work with `yt`, but this might change in the future.

### 2.2 Pip install remaining packages
 1. Follow the prompt to "activate" this environment with: `conda activate DataViz`
 1. Still in terminal window do: `pip install PyGEL3D`

## 3. Run & Test your environment

**NOTE: Here I am assuming your default browser is either Chrome or Firefox.  If not, change it to one of these browsers for the duration of this class.**

### 3.1 Run a jupyter notebook from the environment

**YOU WILL NEED TO DO THIS EVERY TIME YOU OPEN UP JUPYTER NOTEBOOK**

 1. after all installs are done type `conda activate DataViz` in the terminal window/anaconda prompt
 2. then type `jupyter notebook` to open the notebook from the command line
 
### 3.1. Test the installs (this is part of the first HW, do once)

 1. [Download the test install script - test_imports_week01](https://uiuc-ischool-dataviz.github.io/is445AOG_fall2020/week01/test_imports_week01.ipynb), open it with your jupyter notbeook and run it cell-by-cell
 
A movie of this process is shown below (~5 minutes):

<iframe width="560" height="315" src="https://www.youtube.com/embed/J2GWtnoQrnI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A few things of note:
 * When the little `*` is showing in the `In[]` part to the left of each cell this means your computer is thinking.  Its best to wait until its done with one cell before moving onto the next one.
 * There is a tip for the `PyGEL3D` install near the end in case you get an error, but you might not.  If you do get this error, the process is:
    1. Open the terminal (Mac) or Anaconda Prompt (Windows)
	1. Activate your data viz environment with:  `conda activate DataViz`
	1. Find where PyGEL3D is installed with: `pip show PyGEL3D`
	1. Copy the address and uncomment the lines as show to paste it into your jupyter notebook
 * If nothing shows up for the `bqplot` plot or the `ipyvolume` plot there are a few tips listed -- try refreshing your browser, try installing the extensions (uncomment those lines and run the cell and try running the plotting cells again), or completely close and completely re-open your jupyter notebook as discussed in section 3.1
