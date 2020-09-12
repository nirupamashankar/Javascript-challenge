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
data.forEach(function(ufosighting) {
    console.log(ufosighting);
    var row = tbody.append("tr");
});

//Create a function to load data 
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

  // Getting a reference to the button on the page with tappropriate id
var filterbutton = d3.select("#filter-btn");

// Get reference to reset button with appropriate id
var resetbutton = d3.select("#reset-btn");

// Define and describe function when button is clicked
filterbutton.on("click", function() {

    tbody.html(" ");
    // Getting a reference to the input element on the page with the id property set to "datetime"
    var inputfield = d3.select("#datetime");
    // Set the input element and get the HTML node
    var inputelement = inputfield.property("value");
    // Print the input value
    console.log(inputfield);
    // Filter Data to get rows with input value date
    var filtereddata = tableData.filter(sighting=> sighting.datetime ===inputelement);
    //Print value of filtered values
    console.log(filtereddata);

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
    });

    // Create a function for resetting the table 
function resetdata(){
  tbody.text("")
  loaddata()
  }
  
// Add event handler for the reset button to reset the table to original data 
resetbutton.on("click", resetdata)