// secretly theres a tbody in table so watch out
const table = document.getElementsByTagName('tbody')[0]

function removeNumberRows(){
  let rows = table.childElementCount
  if(rows < 2) return;

  for(let i=2; i<rows; i++){
    table.lastElementChild.remove();
  }
}

function generateDays(year, month){
  let firstWeekday = zellersCongruence(year, month, 1)
  let monthLength = getMonthLength(year, month)

  let prevMonthLength = getMonthLength(year, month-1)

  let rowCellCount = 0;
  let row = null;

  for(let i=0 - firstWeekday; i < monthLength | rowCellCount != 0; i++){
    if(rowCellCount == 0){
      row = document.createElement("tr")
    }

    let cell = document.createElement("td")

    cell.classList.add("calendarDay")

    if(i < 0 | i >= monthLength){
      cell.classList.add("oobDay")
      if(i < 0){
        cell.innerText = prevMonthLength + i + 1
      } else {
        cell.innerText = i - monthLength + 1
      }
    } else {
      cell.innerText = i + 1
    }

    row.appendChild(cell)
    rowCellCount = (rowCellCount + 1) % 7
    if(rowCellCount == 0) table.appendChild(row)
  }
}