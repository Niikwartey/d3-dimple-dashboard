/***************************************************************************
 shared variables
+***************************************************************************/
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var 
  chartWidth = 1020,
  chartHeight = 650;

/***************************************************************************
 helper functions
+***************************************************************************/
function avgFromObject(objArray, key){
  let validData = getValidData(objArray, key);
  let sum = objArray.map(d => d[key]).reduce((sum, n) => sum + n);
  let length = objArray.length;

  return sum / length;
}

function getValidData(objArray, key, validType = "number") {
  return objArray.filter(d => typeof d[key] === validType && d.year !== 2006);
}