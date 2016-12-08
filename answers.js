///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES

///2. DATA STRUCTURES

///3. FUNCTIONS & CONDITIONAL STATEMENTS

///4.  LOOPS

var myString= "hello";
var myInteger= 1;
var myDictionary= {name: 'Lorenzo'};
var temperature= 98.6;
temperature+=5;
temperature*=3;
temperature-=20;
console.log(temperature);

var days_of_the_week=["monday", "tuesday","wednesday", "thursday", "friday", "saturday", "sunday"];
days_of_the_week[0]="lunes";
days_of_the_week[1]="martes";
days_of_the_week[2]="miercoles";
days_of_the_week[3]="jueves";
days_of_the_week[4]="viernes";
days_of_the_week[5]="sabado";
days_of_the_week[6]="domingo";

var icecream={Vanilla : 1.99, Chocolate : 2.49, Strawberry : 2.25};
console.log(icecream);
icecream['Chocolate']=0.99;
icecream['Pistacio']=  1.5;
delete icecream['Strawberry'];

console.log(days_of_the_week);
console.log(icecream);

function DoIHaveToGoToSchoolToday(day){
if(day>=0 && day<=4) return "Yes";
else if (day==5 || day==6) return "No";
else return "It's not a day of the week"
}

console.log(DoIHaveToGoToSchoolToday(1))

var price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52]
var gasoline_total_budget=0; var gasoline_monthly_budget=0;
for(var i=0; i<12;i++){
gasoline_monthly_budget=40*price_of_Gasoline[i];
console.log("Month"+ i+1+ ": "+ gasoline_monthly_budget);
gasoline_total_budget+=gasoline_monthly_budget;
}
Part 2!!
That code deleted the div container that holds the form for signing up for the newsletter

