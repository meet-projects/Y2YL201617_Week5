///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES
var temperature=98.6;
temperature+=5;
temperature=temperature*3;
temperature=temperature-20;
console.log(temperature);
///2. DATA STRUCTURES
var Days_Of_The_Week=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(Days_Of_The_Week);
Days_Of_The_Week[0]="domingo";
Days_Of_The_Week[1]="lunes";
Days_Of_The_Week[2]="martes";
Days_Of_The_Week[3]="miercoles";
Days_Of_The_Week[4]="Jueves";
Days_Of_The_Week[5]="viernes";
Days_Of_The_Week[6]="sabado";
console.log(Days_Of_The_Week);
var IceCream={"Vanilla" : "$1.99", "Chocolate":"$2.49", "Strawberry":"$2.25"};
console.log(IceCream);
IceCream["Chocolate"]="$.99";
IceCream["Pistacio"]="$2.99";
delete IceCream["Strawberry"];
console.log(IceCream);
///3. FUNCTIONS & CONDITIONAL STATEMENTS
function DoIHaveToGoToSchoolToday(index)
{
	if (index==0)
  	console.log("No, today is "+Days_Of_The_Week[index]);
  else
  	console.log("Yes, today is "+Days_Of_The_Week[index]);
}
DoIHaveToGoToSchoolToday(1);
///4.  LOOPS
price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52];
var sum=0;
for (var i=0; i<price_of_Gasoline.length; i++)
{
	sum+=price_of_Gasoline[i]*40;
}
console.log("The sum is "+sum);


///PART 2
The line of javascript code that we were told to put into the console changed the display style of the div tag of the newsletter sign-up field to none, thus causing it to disappear off the page.

