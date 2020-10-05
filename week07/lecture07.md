---
title: Lecture 7
layout: lecture
visible_lec: true
visible_n: true
---

<!-- .slide: class="titleslide" -->

# Data Visualization
<div style="height: 6.0em;"></div>

## Jill P. Naiman
## Fall 2020
## Lecture 7

---

## Announcement: Office Hours Nov 3

In accordance with the UIUC/Illinois holiday, office hours Tuesday, Nov 3 will be by appointment only (so, email me if you want to chat!).  

There will be additional office hours on Thursday, Nov 5, 5-6pm.

---

## Where we are: Last week

<img src="images/dataviz_map_lastweek_take2.png">

notes: last week  we started playing with dashboarding using some randomly generated data in bqplot

we also started working with the Grammer of Graphics and used bqplot declaritively to start "painting" scales and axis on our canvas

we also talked about different viz engines and you got to look at this in the HW

---

## Where we are: Today

<img src="images/dataviz_map_thisweek.png">

notes: Today we'll continue building up dashboards

if we have time we'll also start talking about map projections this week (but we might only get to it next week)

---

## Today's Main Topics

 1. More dashboarding
 2. Dashboards with maps
 3. Map projections (if we have time)

---

<br>
<br>
<br>

# TOPIC 1: Dashboarding

---

## Recall: HW 6 this week

Build a dashboard for the buildings data.
 * Left component:
    * Grid heat map
    * Rows are congressional district
    * Columns are the governmental department (Agency Name)
    * Values are sum of total square footage for that set of criteria
 * Right component:
    * line plot
    * x is the year
    * y is total square footage acquired that year
 * These two should be linked so that you can select cells and that will update the square footage plot.
 * Things to think about:
    * Can you keep the x and y ranges static on the line plot?
    * Can you change the style?

---

## Today's Python Programming:

Starting with these ideas, we'll progressively enhance.

 * Create heat maps of the sightings in the UFO dataset
 * Select based on states (do not use map marks yet)
 * Manually create "bins" for aggregation
 * Use different scales for dates, times, locations

We'll use these to build up a _dashboard_ for our data.

---

## Dashboards: Tableau
![](images/Tableau-Sample-Training-Dashboard-Original.png)

notes: so here is an example of a dashboard, I *think* from Tableau.  Here we see a linked view which
displays data in several different ways to give the user the ability to visualize what their data
means spatially (with the map & region bargraph) and temporally (with the calendar/bar view at the bottom)

---

## Dashboards: Glueviz
![](images/histogram.png)

note: aside, there are opensource dashboarding type software, this is an example of glueviz that is
used a lot in astronomy and built on python

This is an example of binning light (dark or bright pixels) in an image of a star forming region (I think),
and linking this with a histogram which responds to a selection tool (in red) in the image.

---

## Dashboards: Building our own in Python

# TOPIC 2: To Python for an intro to map dashboards!

notes: today we will get more experience building up these sorts of interfaces ourselves!
