// Execute 'draw' functions
function visualizeData(data) {
  /* 
  recieves data and visualizes them
  */

  // run draw-functions after necessary script-files are ready
  $.when(
    // import all necessary scripts
    $.getScript("assets/js/charts.helpers.js"),
    $.getScript("assets/js/charts.bubbles.js"),
    $.getScript("assets/js/charts.bullets.js"),
    $.getScript("assets/js/charts.stackedLines.js"),
    $.Deferred(function( deferred ){
      $( deferred.resolve );
    })
  ).done(function(){
    // draw the charts
    drawStackedLine(data, 'glb_act_pwr_sd', 'placeholder');
    drawStackedLine(data, 'glb_act_pwr_sd', 'main', false);
    drawStackedLine(data, 'sub1_sd', 'sub1');
    drawStackedLine(data, 'sub2_sd', 'sub2');
    drawStackedLine(data, 'sub3_sd', 'sub3');
    drawMonthlyTrendBullet(data);
    drawYearlyTrendBubble(data);
    drawShortTermTrendBullet(data);
  });
  
}