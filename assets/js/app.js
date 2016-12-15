$.getScript("assets/js/charts.js", function() {
  // grab data and visualize them
  d3.json('../data/power_consumption.json', visualizeData);
})