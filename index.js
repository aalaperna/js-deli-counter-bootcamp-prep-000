var katzDeli = [];
var number = []

function takeANumber (katzDeliLine, number) {
  katzDeliLine.push(number);
  return (`You are number ${number} in line.`)
}


function nowServing (katzDeliLine) {
  if (katzDeliLine.length < 1) {
  return ("There is nobody waiting to be served!")
} else {
var firstPersonInLine = katzDeliLine.shift()
return (`Currently serving ${firstPersonInLine}.`)
}
}


function currentLine (katzDeliLine) {
  var currentLine = []
  for (let i = 0; i < katzDeliLine.length; i++) {
   currentLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
if (katzDeliLine.length === 0) {
  return ("The line is currently empty.")
} else {
  return (`The line is currently:${currentLine}`)
}
}