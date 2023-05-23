// Months and days start at 0 BTW

/**
 * Gets the weekday index for specified date, using Zeller's Congruence
 * Math equation used: https://en.wikipedia.org/wiki/Zeller%27s_congruence#Common_simplification
 * 
 * @param {Number} year 
 * @param {Number} month 
 * @param {Number} day 
 * 
 * @returns {Number} the weekday index
 */

function zellersCongruence(year, month, day){
  month++ // line 1

  let yearofcentury = year % 100
  let century = Math.floor(year / 100);

  let result = (day + Math.floor((13 * (month + 1))/5) + yearofcentury + Math.floor(yearofcentury/4) + Math.floor(century/4) + (5 * century)) % 7

  return (result + 5) % 7
}


function isLeap(year){
  return ((year % 4 == 0) & (year % 100 != 0)) | (year % 400 == 0)
}


const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function getMonthLength(year, month){
  if(month < 0){
    year -= Math.floor(month / 12)
    month = -month % 12
  }

  return monthLengths[month] + ((month == 1 & isLeap(year)) ? 1 : 0)
}