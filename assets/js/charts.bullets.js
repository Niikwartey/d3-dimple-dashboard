/***************************************************************************
 MONTHLY BULLET
+***************************************************************************/

function drawMonthlyTrendBullet(data) {
  /* 
  takes data with which to render a bullet chart
  */

  // retreive only readings with valid prediction error value
  let modifiedData = data.map(d => {
    let dateObj = new Date(d.Date);
    d.year = dateObj.getFullYear();
    d.month = monthNames[dateObj.getMonth()];
    return d;
  });

  var validMonthData = getValidData(modifiedData, "glb_act_pwr_forecast_error");

  var svg = dimple.newSvg("#chartContainer", chartWidth, chartHeight);
  svg.attr('class', 'yearly-trend-chart')
  svg.attr('id', 'monthly-chart');

  let myChart = new dimple.chart(svg, validMonthData);
  myChart.setBounds(60, 30, 900, 500);

  let x = myChart.addCategoryAxis("x", "month");
  x.title = "Month";

  let y = myChart.addMeasureAxis("y", "glb_act_pwr_mean");
  y.overrideMax = 50;
  y.title = "Power Consumed  (kw)";

  let bY = myChart.addMeasureAxis("y", "glb_act_pwr_forecast");
  bY.title = "Predicted Power Consumption  (kw)";
  bY.overrideMax = y.overrideMax;

  let bars = myChart.addSeries("month", dimple.plot.bar, [x, y]);

  let bullets = myChart.addSeries("month", dimple.plot.bar, [x, bY]);
  bullets.lineMarkers = true;
  bullets.barGap = 0.75;

  let storyboard = myChart.setStoryboard("year");
  storyboard.frameDuration = 5000;
  storyboard.fontSize = "16px";
  myChart.draw();
}

/***************************************************************************
 SHORT-TERM BULLET
+***************************************************************************/

function drawShortTermTrendBullet(data) {
  /* 
  takes data with which to render a bullet chart
  */

  // select latest 10 readouts
  let smallerDataset = data.splice(1432, 10);

  var svg = dimple.newSvg('#chartContainer', chartWidth, chartHeight);
  svg.attr('class', 'short-term-chart');
  svg.attr('id', 'daily-chart');

  let myChart = new dimple.chart(svg, smallerDataset);
  myChart.setBounds(60, 30, 900, 500);

  let x = myChart.addCategoryAxis("x", "Date");
  x.addOrderRule("Date");

  let y = myChart.addMeasureAxis("y", "glb_act_pwr_mean");
  y.title = "Power Consumed  (kw)";

  let bY = myChart.addMeasureAxis("y", "glb_act_pwr_forecast");
  bY.title = "Predicted Power Consumption  (kw)";
  bY.overrideMax = 1.6;
  
  let bars = myChart.addSeries(null, dimple.plot.bar, [x, y]);

  let bullets = myChart.addSeries(null, dimple.plot.bar, [x, bY]);
  bullets.lineMarkers = true;
  bullets.barGap = 0.75;

  myChart.draw();
}