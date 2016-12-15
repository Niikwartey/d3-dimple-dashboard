function drawYearlyTrendBubble(data) {
  /* 
  takes data with which to render a bubble chart
  */

  // retreive only readings with valid prediction error value
  let validData = getValidData(data, "glb_act_pwr_forecast_error");
  let modifiedData = validData.map(d => {
    let dateObj = new Date(d.Date);
    d.year = dateObj.getFullYear();
    d.month = monthNames[dateObj.getMonth()];
    return d;
  });

  var validMonthData = getValidData(modifiedData, "glb_act_pwr_forecast_error");

  var svg = dimple.newSvg("#chartContainer", chartWidth, chartHeight);
  svg.attr('class', 'yearly-trend-chart')

  let myChart = new dimple.chart(svg, validMonthData);
  myChart.setBounds(60, 30, 900, 500);

  let x = myChart.addCategoryAxis("x", "month");
  x.title = "Month";
  x.addOrderRule("month");

  let y = myChart.addMeasureAxis("y", 'glb_act_pwr_forecast_error');
  y.overrideMax = 4;
  y.title = "Average Predict Error";

  let z = myChart.addMeasureAxis("z", "glb_act_pwr_sd");

  let bubbles = myChart.addSeries("month", dimple.plot.bubble, [x, y, z]);

  // animate through all the years
  let storyboard = myChart.setStoryboard("year");
  storyboard.frameDuration = 5000;
  storyboard.fontSize = "16px";
  myChart.draw();
}