// Here I am printing my personal details 
/* var name = "talukder.tamim"
alert("Tamim Talukder")
document.write(name)
company = "Isharaak solutions"
document.write(company)
console.log("Ishraak Solutions ")

//Change data type
var num = 20
string = toString(num)
console.log(typeof(num))
console.log(typeof(string))

//Number method
var num = 2.567
console.log(num.toFixed(2))
console.log(num.toPrecision(2))
console.log(typeof(Number("20")))

//String concatenation
var first_name = "Tamim"
last_name = " Talukder"
full_name = first_name + last_name
document.write("My name is " + full_name)

//Library function for string
var text = prompt("Enter your name: ")
sliceText = text.slice(0, 2)
document.write("Number of letter is " + text.length + ' ' + text.charAt(1)
                + " uppercase: " + text.toUpperCase(text) + ' slice: ' + sliceText)

//Make your own calculator
var num1 = parseInt(prompt("Enter first number: "));
num2 = parseInt(prompt("Enter second number: "));
var num, sub;
num = num1 + num2
sub = num1 - num2
document.write(num1, " + ", num2, " = " , num, "<br>")
document.write(num1, " - ", num2, " = ", sub)
*/

//Temperature converter
var farn = parseInt(prompt("Enter farenhite scale: "))
var cels = (farn-32) * (5/9)

document.write("Temperature is: " + cels.toFixed(2) + "°C")

