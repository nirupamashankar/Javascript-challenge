// Get data from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Inspect the data
console.log(tableData)

// Loop Through `data` and console.log each UFO sighting object
data.forEach(function(ufosighting) {
    console.log(ufosighting);
});

//Use d3 to append ONE table row `tr` for each UFO sighting object

    var row = tbody.append("tr");

//Create function for loading data
function loaddata() {

  // Use d3 to update each cell's text with UFO sighting values 

    data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");
    Object.entries(ufosighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

//Call the function to load
loaddata()

// Setting up sorting with button click

// Get reference for each imput element with the appropriate id property

var inputdate = d3.select("#datetime")
var inputcity = d3.select("#city")
var inputstate = d3.select("#state")
var inputcountry = d3.select("#country")
var inputshape = d3.select("#shape")

// Get reference to the button on the page with the id set to "filter-btn"
var filterbutton = d3.select("#filter-btn");

// Get reference to reset button with appropriate id
var resetbutton = d3.select("#reset-btn");

// create a function for filtering the data with the given input
function filterdata(){

//Prevent webpage from refreshing
d3.event.preventDefault();

// Extract input value for fields
var datevalue = inputdate.property("value");
var cityvalue = inputcity.property("value").toLowerCase().trim();

//Check if it is translating to lower case
console.log(cityvalue)

var statevalue = inputstate.property("value").toLowerCase().trim();
var countryvalue = inputcountry.property("value").toLowerCase().trim();
var shapevalue = inputshape.property("value").toLowerCase().trim();

    
// Filter Data to get rows with input value date
var filtereddata = tableData.filter(function(sighting) {
  return ((sighting.datetime === datevalue ||datevalue == "" ) &&
  (sighting.city === cityvalue ||cityvalue == "") &&
  (sighting.state === statevalue ||statevalue == "")&&
  (sighting.country === countryvalue ||countryvalue == "")&&
  (sighting.shape === shapevalue ||shapevalue== "")
  )
})

//Print value of filtered values
    console.log(filtereddata);

// Clear data to append only filtered info
tbody.text("")
   
// Input the filtered data
filtereddata.forEach(function(selections) {
      console.log(selections);
      var row = tbody.append("tr");
      Object.entries(selections).forEach(function([key, value]) {
      console.log(key, value);
// Append a cell to the row for each value in the weather report object
      var cell = row.append("td");
      cell.text(value);    
      });
    });
  }
  // Add event handler for the click button to filter the table with the given input
filterbutton.on("click",filterdata)

//Create a function for resetting the table 

function resetdata(){
  tbody.text("")
  loaddata()
  }
  
// Add event handler for the reset button to reset the table to original data 
resetbutton.on("click", resetdata)
