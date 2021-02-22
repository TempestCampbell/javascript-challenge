var tableInfo = data;

var tbody = d3.select("tbody");
function createTable(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    var row = tbody.append("tr");

    Object.values(dataRow).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

function handleClick() {
  var date = d3.select("#datetime").property("value");
  let filterInfo = tableInfo;

  if (date) {
    filterInfo = filterInfo.filter((row) => row.datetime === date);
  }
  createTable(filterInfo);
}

d3.selectAll("#filter-btn").on("click", handleClick);
createTable(tableInfo);
