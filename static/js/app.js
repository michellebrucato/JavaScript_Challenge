const input = d3.select("input")
const button = d3.select("button")
const tbody = d3.select("tbody")

// Display the full table at home page
data.filter(dataRow => dataRow).forEach(dataRow => {
  let row = tbody.append("tr")
  row.append("td").text(dataRow.datetime)
  row.append("td").text(dataRow.city)
  row.append("td").text(dataRow.state)
  row.append("td").text(dataRow.country)
  row.append("td").text(dataRow.shape)
  row.append("td").text(dataRow.durationMinutes)
  row.append("td").text(dataRow.comments)
})

// Assign function to handler
const handler = function(){

  tbody.html("")
  let filterCond = input.property("value")
  data.filter(dataRow => dataRow.datetime === filterCond).forEach(dataRow => {
    let row = tbody.append("tr")
    row.append("td").text(dataRow.datetime)
    row.append("td").text(dataRow.city)
    row.append("td").text(dataRow.state)
    row.append("td").text(dataRow.country)
    row.append("td").text(dataRow.shape)
    row.append("td").text(dataRow.durationMinutes)
    row.append("td").text(dataRow.comments)
  })
}

input.on("change", handler)
button.on("click", handler)