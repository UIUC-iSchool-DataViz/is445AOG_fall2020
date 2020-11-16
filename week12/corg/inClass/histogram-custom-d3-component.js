// node-module libraries (installed via npm install idyll)
const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

// setting the size of this canvas
const size = 400;

var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// equivalent to a print statement in Python
console.log("I am here printing!!!");
console.log(margin);

// I want to add my own component
class HistogramCustomD3Component extends D3Component {

    // draw the initial SVG
    initialize(node, props) {

	// Parse the date / time
	var parseDate = d3.isoParse

	var x = d3.scaleBand().rangeRound([0, width], .05).padding(0.1);

	var y = d3.scaleLinear().range([height, 0]);

	var xAxis = d3.axisBottom()
	    .scale(x)
	    .tickFormat(d3.timeFormat("%b"));

	var yAxis = d3.axisLeft()
	    .scale(y)
	    .ticks(10);


	
    // actual drawing
    const svg = (this.svg = d3.select(node).append('svg'))
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");
	//svg
    //  .attr('viewBox', `0 0 ${size} ${size}`) // background canvas
    //  .style('width', '100%')
    //  .style('height', 'auto');

    //svg
    //  .append('circle') // append a circle object
    //  .attr('r', 50) // radius
    //  .attr('cx', Math.random() * size) // start randomly in x
	//  .attr('cy', Math.random() * size); // and y


d3.csv("https://raw.githubusercontent.com/UIUC-iSchool-DataViz/spring2020/master/week14/bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });

  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis.ticks(null).tickSize(0))
    .selectAll("text")
      .style("text-anchor", "middle")

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis.ticks(null).tickSize(0))
    .append("text")
      .attr("y", 6)
      .style("text-anchor", "middle")
      .text("Value");

  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .style("fill", function(d){ return d.value < d.target ? '#EF5F67': '#3FC974'})
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.value); })
	.attr("height", function(d) { return height - y(d.value); });

    // These are horizontal dashed lines that we don't want in our final plot
//  svg.selectAll("lines")
//      .data(data)
//    .enter().append("line")
//      .style("fill", 'none')
//  		.attr("x1", function(d) { return x(d.date) + x.bandwidth()+5; })
//      .attr("x2", function(d) { return x(d.date)-5; })
//   .attr("y1", function(d) { return y(d.target); })
//      .attr("y2", function(d) { return y(d.target); })
//  		.style("stroke-dasharray", [2,2])
//  		.style("stroke", "#000000")
//  .style("stroke-width", 2)

});
	
  } // end initialize


}

module.exports = HistogramCustomD3Component;
