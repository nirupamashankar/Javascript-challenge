 // from data.js
var tableData = data;
var tbody = d3.select("tbody");
// check the data
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
  
// Setting up sorting with button click

  // Getting a reference to the button on the page with the id set to "filter-btn"
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html(" ");
    // Getting a reference to the input element on the page with the id property set to "datetime"
    var inputfield = d3.select("#datetime");
    // Set the input element and get the HTML node
    var inputelement = inputelement.property("value");
    // Print the input value
    console.log(inputvalue);
    // Filter Data to get rows with input value date
    var filtereddata = tableData.filter(sighting=> sighting.datettime ===inputvalue);
    //print value of filtered values
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