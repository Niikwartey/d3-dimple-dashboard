function drawStackedLine(data, key, className = "", axisHidden = true) {
  /* 
  takes data with which to render a line chart
  */

  // retreive only readings with valid prediction error value
  let modifiedData = data.map(d => {
    let dateObj = new Date(d.Date);
    d.year = dateObj.getFullYear();
    d.month = monthNames[dateObj.getMonth()];
    return d;
  });

  // var monthlyData = buildMonthlyData(modifiedData);
  const validMonthData = getValidData(modifiedData, key);
  
  let svg = dimple.newSvg('#chartContainer', 1020, 650);
  svg.attr('class', 'yearly-trend-chart stacked-chart ' + className);
  svg.attr('id', 'yearly-chart');
  
  let myChart = new dimple.chart(svg, validMonthData);
  myChart.setBounds(60, 30, 900, 500);
          

  let x = myChart.addCategoryAxis("x", "month");
  x.title = "Month";
  x.hidden = axisHidden;

  let y = myChart.addMeasureAxis("y", key);
  y.title = "Standard Deviation of Predict Error";
  y.hidden = axisHidden;

  let lines = myChart.addSeries(null, dimple.plot.line);
  lines.lineWeight = 1;
  lines.lineMarkers = false;
  lines.circle = false;

  let storyboard = myChart.setStoryboard("year");
  storyboard.frameDuration = 8000;
  storyboard.fontSize = "16px";
  myChart.draw();
}
