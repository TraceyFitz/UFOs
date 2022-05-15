// from data.js
const tableData = data;
var tbody = d3.select("tbody");
// Keep track of filters
var filters = {datetime: "", city: "", state: "", country: "", shape: ""};
///////////////////////////////////////////////////////////////////////////////
// Build the table to display all of the UFO sightings
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}
// Build the table when the page loads
buildTable(tableData);
// //1. Create a variable to keep track of all the filters as an object.
let trackFilters={}
// 3. Use this function to update the filters.
function updateFilters() {
  let datefilter = d3.select("#datetime").property("value")
  let date_Id = d3.select("#datetime").property("id")
  let statefilter = d3.select("#state").property("value")
  let state_Id = d3.select("#state").property("id")
  let countryfilter = d3.select("#country").property("value")
  let country_Id = d3.select("#country").property("id")
  let cityfilter = d3.select("#city").property("value")
  let city_Id = d3.select("#city").property("id")
  let shapefilter = d3.select("#shape").property("value")
  let shape_Id = d3.select("#shape").property("id")
  if (datefilter != ""){
    trackFilters[date_Id] = datefilter;
  }
  else {
    delete trackFilters.datetime;
  }
  if (cityfilter != ""){
    trackFilters[city_Id] = cityfilter;
  }
  else {
    delete trackFilters.city;
  }
  if (statefilter != ""){
    trackFilters[state_Id] = statefilter;
  }
  else {
    delete trackFilters.state;
  }
  if (countryfilter != ""){
    trackFilters[country_Id] = countryfilter;
  }
  else {
    delete trackFilters.country;
  }
  if (shapefilter != ""){
    trackFilters[shape_Id] = shapefilter;
    }
  else {
    delete trackFilters.shape;
    }
    // 6. Call function to apply all trackFilters and rebuild the table or just have the code of the function here
    //filterTable();
    $("#tbody").empty();
    // 8. Set the filtered data to the tableData.
    let tData = tableData;
    //filter_Keys.forEach(applyTrackFilters);
    d3.event.preventDefault();
       // 9. Loop through all of the trackfilters and keep any data that
    // matches the filter values
    Object.entries(trackFilters).forEach(([key, value]) => {
      filteredData = tData.filter(row => row[key] === value);
    });
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    //     // jQuery method for emptying the input field after click
     $("#datetime").val('');
     $("#city").val('');
     $("#state").val('');
     $("#country").val('');
     $("#shape").val('');
  };
  // Attach an event to listen for the form button
//2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);