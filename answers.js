///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES
var temperature = 98.6;
temperature +=5;
temperature *=3;
temperature -=20;
console.log(temperature)

///2. DATA STRUCTURES
var Days_of_the_Week = ["Sunday", "Monday", "Thusday",  "Wednesday", "Thursday", "Friday", "Saturday"];
Days_of_the_Week[0] = "domingo";
Days_of_the_Week[1] = "lunes";
Days_of_the_Week[2] = "martes";
Days_of_the_Week[3] = "miercoles";
Days_of_the_Week[4] = "Jueves";
Days_of_the_Week[5] = "viernes";
Days_of_the_Week[6] = "sabado";

var Ice_cream_flavors = {'Vanilla' : '$1.99', 'Chocolate' : '$2.49', 'Strawberry;' : '$2.25'};
Ice_cream_flavors['Chocolate'] = '$2.99';
Ice_cream_flavors['Pistachio'] = '$10.97';
delete Ice_cream_flavors['Strawberry'];

///3. FUNCTIONS & CONDITIONAL STATEMENTS
function DoIHaveToGoToSchoolToday(index){
	if (index == 0|| index == 1|| index == 2|| index==3||index==4){
		console.log("i need to go to school, today is " + Days_of_the_Week[index]);
	}else{ if (index == 5||index == 6){
		console.log("i dont need to go to school, today is " + Days_of_the_Week[index] + " :)))");
}}}
///4.  LOOPS
var sum = 1;
var price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52];
for (i=0; i<12; i++){
	sum=sum+price_of_Gasoline[i]*40;
}
  sum/=12;
console.log("on average you spend " + sum + " dollars on 40 liters of gasoline per month");

//the command deleted the e-mail address submission field