///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES
var temperature = 98.6
temperature += 5
temperature = temperature *3
temperature -= 20
alert(temperature)
console.log(temperature)
290.79999999999995

///2. DATA STRUCTURES
var days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
days_of_the_week[0] = "domingo"
days_of_the_week[1] = "lunes"
days_of_the_week[2] = "martes"
days_of_the_week[3] = "miercoles"
days_of_the_week[4] = "jueves"
days_of_the_week[5] = "viernes"
days_of_the_week[6] = "sabado"

console.log(days_of_the_week)
Array [ "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado" ]




var prices = {"vanilla" : 1.99, "chocolate" : 2.49, "strawberry" :2.45}
prices["chocolate"] = 0.99
console.log("the price of chocolate is " + prices["chocolate"])
prices["pistacio"] = 100.99999
alert("the price of pistacio "+prices["pistacio"])
delete prices["strawberry"]
console.log(prices)

object { vanilla: 1.99, chocolate: 0.99, pistacio: 100.99999 }

///3. FUNCTIONS & CONDITIONAL STATEMENTS

index = 0
function doihaveschooltoday(index){
	if (index == 1){
  	console.log("yes,today is a school day");
  } else{
  	console.log("no,better stay in bed and play video games");
  }

}
	
console.log(doihaveschooltoday(index));


///4.  LOOPS


