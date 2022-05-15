// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");
// trackFilters={datetime:" ", city:" ", state:" ", country:" ", shape:" "}
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
    });
  });
}
  
  // Build the table when the page loads
  buildTable(tableData);

// 1. Create a variable to keep track of all the filters as an object.
let trackFilters={}

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // elementChange=d3.select(this)

    // 4b. Save the value that was changed as a variable.
    // let elementValue = elementChange.property("value");
    let date_value = d3.select("#datetime").property("value");
    let city_value = d3.select("#city").property("value");
    let state_value = d3.select("#state").property("value");
    let country_value = d3.select("#country").property("value");
    let shape_value = d3.select("#shape").property("value");

    // 4c. Save the id of the filter that was changed as a variable.
  date_ID=date_value.property("id");
  city_ID=city_value.property("id");
  state_ID=state_value.property("id");
  country_ID=country_value.property("id");
  shape_ID=shape_value.property("id");

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
 if (date_value !=""){
   trackFilters[date_ID]=date_value
 }
 else {delete trackFilters[date_ID]}

 if (city_value !=" "){
  trackFilters[city_ID]=city_value
}
else {delete trackFilters[city_ID]}

if (state_value !=" "){
  trackFilters[state_ID]=state_value
}
else {delete trackFilters[state_ID]}

if (country_value !=" "){
  trackFilters[country_ID]=country_value
}
else {delete trackFilters[country_ID]}

if (shape_value !=" "){
  trackFilters[shape_ID]=shape_value
}
else {delete trackFilters[shape_ID]}

    // 6. Call function to apply all filters and rebuild the table
    // filterTable();
    $("#tbody").empty();
    let tData = tableData;
    d3.event.preventDefault();
    Object.entries(trackFilters).forEach(([key,value])=>{
      filterData=tData.filter(row => row[key] === value)
  });
  buildTable(filterData)
  $("#datetime").val(" ")
}

  
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  // d3.selectAll("#filter-btn").on("click", updateFilters);
  
  
  // Build the table when the page loads
  // buildTable(tableData);

// // 7. Use this function to filter the table when data is entered.
  // function filterTable() {
  
  //   // 8. Set the filtered data to the tableData.
  //   let tData = tableData;
  
  //   // 9. Loop through all of the filters and keep any data that
  //   // matches the filter values
  //   Object.entries(trackFilters).forEach(([key,value])=>{
  //     filterData=tData.filter(row=>row[key]===value)
  //   })
  
  //   // 10. Finally, rebuild the table using the filtered data
  //   buildTable(filterData)
  // }
  