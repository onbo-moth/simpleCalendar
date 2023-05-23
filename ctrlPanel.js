const ctrlPanel = document.getElementById("ctrlpanel")

const yearInput  = ctrlPanel.getElementsByTagName("input")[0]
const monthInput = ctrlPanel.getElementsByTagName("input")[1]

const eraInput = ctrlPanel.getElementsByTagName("select")[0]

let dateObj = new Date();

var year = dateObj.getFullYear()
var month = dateObj.getMonth() - 1

function parseYearAD(){
  let year = yearInput.value
  if(eraInput.value == "AD"){
    return year
  } else {
    return -year + 1
  }
}

function prevMonthClick(){
  month--
  if(month < 0){
    month = 11
    year--
  }
  updateTable(year, month)
  forceInputValueChange()
}

function nextMonthClick(){
  month++
  if(month > 11){
    month = 0
    year++
  }
  updateTable(year, month)
  forceInputValueChange()
}

function updateTable(year, month){
  removeNumberRows()
  generateDays(year, month)
}

function forceInputValueChange(){
  if(year < 1){
    yearInput.value = -year + 1
    eraInput.value = "BC"
  } else {
    yearInput.value = year
    eraInput.value = "AD"
  }
  monthInput.value = month + 1
}

function parseInputs(){
  if(yearInput.value == "0"){
    yearInput.value = 1
    eraInput.value = (eraInput.value == "AD" ? "BC" : "AD")
  }

  if(eraInput.value == "AD"){
    year = parseInt(yearInput.value)
  } else {
    year = -parseInt(yearInput.value) + 1
  }

  month = parseInt(monthInput.value)

  updateTable(year, month)
}

document.getElementById("leftarrow").addEventListener("click", prevMonthClick)
document.getElementById("rightarrow").addEventListener("click", nextMonthClick)

yearInput.addEventListener("change", parseInputs)
monthInput.addEventListener("change", parseInputs)
eraInput.addEventListener("change", parseInputs)

addEventListener("load", function(){
  updateTable(year, month)
  forceInputValueChange()
})