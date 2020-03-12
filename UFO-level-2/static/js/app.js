// from data.js
const tableData = data;

// YOUR CODE HERE!

const dateInput = d3.select("#datetime")
const cityInput = d3.select("#city")
const stateInput = d3.select("#state")
const countryInput = d3.select("#country")
const shapeInput = d3.select("#shape")

const button = d3.select("button")

const handler = function(){

    d3.event.preventDefault()

    let dateCond = dateInput.property("value")
    let cityCond = cityInput.property("value")
    let stateCond = stateInput.property("value")
    let countryCond = countryInput.property("value")
    let shapeCond = shapeInput.property("value")

    const table = d3.select("table")
    
    d3.select("tbody").remove()
    const tbody = table.append('tbody')
  
    data.filter(dataRow => dateCond ? dataRow.datetime === dateCond : true)
        .filter(dataRow => cityCond ? dataRow.city === cityCond : true)
        .filter(dataRow => stateCond ? dataRow.state === stateCond : true)
        .filter(dataRow => countryCond ? dataRow.country === countryCond : true)
        .filter(dataRow => shapeCond ? dataRow.shape === shapeCond : true)
        .forEach(dataRow => {
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

dateInput.on("change", handler)
cityInput.on("change", handler)
stateInput.on("change", handler)
countryInput.on("change", handler)
shapeInput.on("change", handler)
button.on("click", handler)