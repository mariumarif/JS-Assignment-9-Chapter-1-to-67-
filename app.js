//// ================================================
//// ASSIGNMENT OF CHAPTER NO. 1 (JAVASCRIPT)
//// ================================================
//// (ALERT)


//// QUESTION NO. 1 : 
//// Write a script to greet your website visitor using JS alert box.

//// SOLUTION :
//alert("Hello! Welcome To My Website");
//// ******************************************************************************************

//// QUESTION NO. 2 : 
//// Write a script to display following message on your web page:

//// SOLUTION :
//alert("Error! Please enter a valid password.");
//// ******************************************************************************************

//// QUESTION NO. 3 : 
//// Write a script to display following message on your web page: (Hint : Use line break)

//// SOLUTION :
// alert("Welcome to JS Land... \nHappy Coding!");
//// ******************************************************************************************

//// QUESTION NO. 4 : 
//// Write a script to display following messages in sequence:

//// SOLUTION :
// alert("Welcome to JS Land");
// alert("Happy Coding");
//// ******************************************************************************************

//// QUESTION NO. 5 : 
//// Generate the following message through browser’s developer console:

//// SOLUTION :
//alert("Hello... I can run JS through my web browser's console");
//// ******************************************************************************************

//// QUESTION NO. 6 : 
//// Make use of alerts in your new/existing HTML & CSS project.

//// SOLUTION :
//alert("Use of alerts !");
//// ******************************************************************************************

//// QUESTION NO. 7 : 
//// Practice placement of <script></script> element in following sections of your project in exercise 6:
//// a. Head
//// b. Body (before your page’s HTML)
//// c. Body (inside your page’s HTML)
//// d. Body (after your page’s HTML)

//// SOLUTION :
//alert("Practice of Script");
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTER NO. 2 (JAVASCRIPT)
//// ================================================
//// (VARIABLES FOR STRINGS)

//// QUESTION NO. 1 : 
//// Declare a variable called username.

//// SOLUTION :
// var username;
//// ******************************************************************************************

//// QUESTION NO. 2 : 
//// Declare a variable called myName & assign to it a string that represents your Full Name.

//// SOLUTION :
// var fullName = "MARIUM ARIF";
// document.write(fullName);
//// ******************************************************************************************

//// QUESTION NO. 3 : 
//// Write script to
////a) Declare a JS variable, titled message.
////b) Assign “Hello World” to variable message
////c) Display the message in alert box.

//// SOLUTION :
// var message;
// message = "Hello World";
// alert(message);
//// ******************************************************************************************

//// QUESTION NO. 4 : 
//// Write a script to save student’s bio data in JS variables and show the data in alert boxes.

//// SOLUTION :
// var studentName = "MARIUM ARIF";
// var studentAge = 20;
// var studentQualification = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentQualification);
//// ******************************************************************************************

//// QUESTION NO. 5 : 
//// Write a script to display the following alert using one JS variable:

//// SOLUTION :
// var a="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(a);
//// ******************************************************************************************

//// QUESTION NO. 6 : 
//// Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the below mentioned message in an alert box.(Hint: use string concatenation)

//// SOLUTION :
// var a = "mariumarif1999@gmail.com";
// var email = a;
// alert("My email address is " + email);
//// ******************************************************************************************

//// QUESTION NO. 7 : 
//// Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

//// SOLUTION :
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+ book);
//// ******************************************************************************************

//// QUESTION NO. 8 : 
//// Write a script to display this in browser through JS

//// SOLUTION :
// document.write("Yah! I can write HTML content through JavaScript");
//// ******************************************************************************************

//// QUESTION NO. 9 : 
//// Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

//// SOLUTION :
// var a="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(a);
// document.write(a);
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTER NO. 3 (JAVASCRIPT)
//// ================================================
//// (VARIABLES FOR NUMBERS)


//// QUESTION NO. 1 : 
//// Declare a variable called age & assign to it your age. Show your age in an alert box.

//// SOLUTION :
// var age = 20;
// alert("My age is " + age);
//// ******************************************************************************************

//// QUESTION NO. 2 : 
//// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

//// SOLUTION :
// var n = 1;
// alert("You have visited this site "+ n +" times");
//// ******************************************************************************************

//// QUESTION NO. 3 : 
//// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

//// SOLUTION :
// var birthYear = 1999;
// document.write("My birth year is " + birthYear);
// document.write("<br>"+"Data type of my declared variable is " + typeof(birthYear));
//// ******************************************************************************************

//// QUESTION NO. 4 : 
//// A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
////a. Visitor’s name
////b. Product title
////c. Quantity i.e. how many products a visitor wants to order
////Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

//// SOLUTION :
// var name = "Marium";
// var prodTitle = "T-shirts";
// var quantity = "10";
// document.write('"' + name.bold() +  " ordered " + quantity.bold() + ' ' +prodTitle.bold() +" on XYZ Clothing store" +'"' +".");
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTER NO. 4 (JAVASCRIPT)
//// ================================================
//// (VARIABLE NAMES: Legal & Illegal)


//// QUESTION NO. 1 : 
//// Declare 3 variables in one statement.

//// SOLUTION :
// var a,b,c;
//// ******************************************************************************************

//// QUESTION NO. 2 : 
//// Declare 5 legal & 5 illegal variable names.

//// SOLUTION :
// var _myName;
// var myName;
// var Myname;
// var $myName;
// var e = my_Name;

// var 2myName;
// var @myName;
// var break;
// var !;
// var null; 
//// ******************************************************************************************

//// QUESTION NO. 3 : 
//// Display this in your browser
////a) A heading stating “Rules for naming JS variables”
////b) Variable names can only contain ______, ______,______ and ______.
////For example $my_1stVariable
////c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
////d) Variable names are case _________
////e) Variable names should not be JS _________

//// SOLUTION :
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br>");
// document.write("Variables names can only contain numbers,$ and _. For example: $my_1stVariable"+"<br>");
// document.write("Variable must begin with a leter,$ or _. For example: $name, _name or name"+"<br>");
// document.write("Variable names are case sensitive"+"<br>");
// document.write("Variable names should not be JS keywords"+"<br>");
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTER NO. 5 (JAVASCRIPT)
//// ================================================
//// (MATH EXPRESSIONS)


//// QUESTION NO. 1 : 
//// Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//// SOLUTION :
// var a = +prompt("Enter 1st number");
// var b = +prompt("Enter 2nd number");
// var c = a + b;
// document.write("Sum of " + a + " and " + b + " is " + c);
//// ******************************************************************************************

//// QUESTION NO. 2 : 
//// Repeat task1 for subtraction, multiplication, division & modulus.

//// SOLUTION :
// var a=+prompt("Enter 1st number");
// var b=+prompt("Enter 2nd number");
// var c=a-b;
// document.write("Substraction of "+ a +" and " +b +" is "+c);

// var a=+prompt("Enter 1st number");
// var b=+prompt("Enter 2nd number");
// var c=a*b;
// document.write("Multiplication of "+ a +" and " +b +" is "+c);

// var a=+prompt("Enter 1st number");
// var b=+prompt("Enter 2nd number");
// var c=a/b;
// document.write("Division of "+ a +" and " +b +" is "+c);

// var a=+prompt("Enter 1st number");
// var b=+prompt("Enter 2nd number");
// var c=a%b;
// document.write("Modulus of "+ a +" and " +b +" is "+c);
//// ******************************************************************************************

//// QUESTION NO. 3 : 
//// Do the following using JS Mathematic Expressions
////a. Declare a variable.
////b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
////c. Initialize the variable with some number.
////d. Show the value of variable in your browser like “Initial value: 5”.
////e. Increment the variable.
////f. Show the value of variable in your browser like “Value after increment is: 6”.
////g. Add 7 to the variable.
////h. Show the value of variable in your browser like “Value after addition is: 13”.
////i. Decrement the variable.
////j. Show the value of variable in your browser like “Value after decrement is: 12”.
////k. Show the remainder after dividing the variable’s value by 3.
////l. Output : “The remainder is : 0”.

//// SOLUTION :
// var a;
// document.write("Value after variable declaration is " + a +"<br>");
// a=5;
// document.write("Initial value:" + a+"<br>");
// a++;
// document.write("Value after increment is:" + a+"<br>");
// a+=7;
// document.write("Value after addition is:" + a+"<br>");
// a--;
// document.write("Value after decrement is:" + a+"<br>");
// var b=a%3;
// document.write("The remainder is "+ b+"<br>");
//// ******************************************************************************************

//// QUESTION NO. 4 : 
//// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

//// SOLUTION :
// var ticketPrice=600;
// var cost=ticketPrice*5;
// document.write("Total cost to buy 5 tickets to a movie is " + cost+"PKR");
//// ******************************************************************************************

//// QUESTION NO. 5 : 
//// Write a script to display multiplication table of any number in your browser. E.g

//// SOLUTION :
// var num = 4;
// var i = 1;
// for(i = 1; i <= 10; i++){
//     var a = num * i;
//     document.write(num + " x " + i + " = " + a + "<br>");
// }
//// ******************************************************************************************

//// QUESTION NO. 6 : 

//// SOLUTION :
// var celsius = 25;
// var farenheit = (celsius*(9/5))+32;
// document.write(celsius + "oC is "+ farenheit + "oF"+"<br>");
// var f = 70;
// var c = (f-32)*5/9;
// document.write(f+ "oF is "+c+"oC")
//// ******************************************************************************************

//// QUESTION NO. 7 : 

//// SOLUTION :
// var item1=650;
// var item2=100;
// var quantity1=3;
// var quantity2=7;
// var shippingCharges=100;
// var cost=item1*quantity1+item2*quantity2+shippingCharges;
// document.write("Price of item 1 is " + item1 + "<br>");
// document.write("Quantity of item 1 is " + quantity1 + "<br>");
// document.write("Price of item 2 is " + item2 + "<br>");
// document.write("Quantity of item 2 is " + quantity2 + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br>");
// document.write("<br>");
// document.write("Total cost of your order is " +cost+ "<br>");
//// ******************************************************************************************

//// QUESTION NO. 8 : 

//// SOLUTION :
// var totalMarks=980;
// var studentMarks=804;
// var percentage=(studentMarks/totalMarks)*100;
// document.write("Total marks: " + totalMarks +"<br>");
// document.write("Marks obtained: "+ studentMarks +"<br>");
// document.write("Percentage: " +percentage+"%" +"<br>");
//// ******************************************************************************************

//// QUESTION NO. 9 : 

//// SOLUTION :
// var a=(10*104.80)+(25*28);
// document.write(a);
//// ******************************************************************************************

//// QUESTION NO. 10 : 

//// SOLUTION :
// var a=3;
// a=(((a+5)*10)/2);
// document.write(a);
//// ******************************************************************************************

//// QUESTION NO. 11 : 

//// SOLUTION :
// var curYear=2020;
// var birthYear=1999;
// var age1=curYear-birthYear;
// var age2=curYear-birthYear-1;
// document.write("They are either " +age1+"or " + age2 +" years old");
//// ******************************************************************************************


//// QUESTION NO. 12 : 

//// SOLUTION :
// var radius=5;
// var cir=2*Math.PI*radius;
// document.write("The circumference is " + cir +"<br>");
// var area=Math.PI*radius**2;
// document.write("The area is "+ area);
//// ******************************************************************************************

//// QUESTION NO. 13 : 

//// SOLUTION :
// var snack="Burger";
// var age=20;
// var maxAge=50;
// var amount=4;
// var total=(maxAge-age)*amount;
// document.write("You will need "+total+ " to last you until the ripe old age of " + maxAge);
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 6 to 9 (JAVASCRIPT)
//// ================================================
//// (MATH EXPRESSIONS)


//// QUESTION NO. 1 : 

//// SOLUTION :
// var a=10;
// document.write("Result:" + "<br>");
// document.write("The value of a is :" + a + "<br>");
// document.write("<br>");
// document.write("The value of ++a is :" ,++a + "<br>");
// document.write("Now the value of a is :" , a + "<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("The value of a++ is :" , a++ +"<br>");
// document.write("Now the value of a is :" , a + "<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("The value of --a is :" , --a +"<br>");
// document.write("Now the value of a is :" , a + "<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("The value of a-- is :" , a-- +"<br>");
// document.write("Now the value of a is :" , a + "<br>");
//// ******************************************************************************************

//// QUESTION NO. 2 : 

//// SOLUTION :
// var a=2;
// var b=1;
// var result=--a - --b + ++b + b--;
// console.log(result);
//// ******************************************************************************************

//// QUESTION NO. 3 : 

//// SOLUTION :
// var name= prompt("what is your name?");
// document.write("Hello "+name);
//// ******************************************************************************************

//// QUESTION NO. 4 : 

//// SOLUTION :
//// Misprinted
//// ******************************************************************************************

//// QUESTION NO. 5 : 

//// SOLUTION :
// var num=prompt("Enter Number to print multiplication table: ","5");
// var number=parseInt(num);
// if(number===1){
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// }
// else if (number===2) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===3) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===4) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===5) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===6) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===7) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===8) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===9) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// } 
// else if (number===10) {
//     console.log(number + " x 1 =" + number);
//     console.log(number + " x 2 =" + number*2);
//     console.log(number + " x 3 =" + number*3);
//     console.log(number + " x 4 =" + number*4);
//     console.log(number + " x 5 =" + number*5);
//     console.log(number + " x 6 =" + number*6);
//     console.log(number + " x 7 =" + number*7);
//     console.log(number + " x 8 =" + number*8);
//     console.log(number + " x 9 =" + number*9);
//     console.log(number + " x 10 =" + number*10);
// }
//// ******************************************************************************************

//// QUESTION NO. 6 : 

//// SOLUTION :
// var sub1 = prompt("Subject 1: ");
// var sub2 = prompt("Subject 2: ");
// var sub3 = prompt("Subject 3: ");
// var total =100;
// var mark1 = +prompt("Marks of subject1: ");
// var mark2 = +prompt("Marks of subject 2: ");
// var mark3 = +prompt("Marks of subject 3: ");
// var t=(mark1+mark2+mark3);
// var per=(t/300)*100;
// console.log("Percentage is: ", per);
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 9 to 11 (JAVASCRIPT)
//// ================================================
//// (User Input & Conditional Statement )


//// QUESTION NO. 1 : 

//// SOLUTION :
// var cityName=prompt("Enter the city name");
// if(cityName=="Karachi"){
//     document.write("Welcome To City Of  Lights");
// }
// else{
//     document.write("Bye!");
// }
//// ******************************************************************************************

//// QUESTION NO. 2 : 

//// SOLUTION :
// var gender=prompt("Enter the gender");
// if(gender=="Male"){
//     document.write("Good Morning Sir!");
// }
// else{
//     document.write("Good Morning Ma'am!");
// }
//// ******************************************************************************************

//// QUESTION NO. 3 : 

//// SOLUTION :
// var inputColor=prompt("Enter the color ");
// if(inputColor=="Red"){
//     document.write("Must Stop");
// }
// else if(inputColor=="Yellow"){
//     document.write("Ready To Move");
// }
// else if(inputColor=="Green"){
//     document.write("Move Now");
// }
//// ******************************************************************************************

//// QUESTION NO. 4 : 

//// SOLUTION :
// var fuel=+prompt("Remaining fuel in car:");
// if (fuel<0.25){
//     document.write("Please refill the fuel in your car");
// }
//// ******************************************************************************************

//// QUESTION NO. 5 : 

//// SOLUTION :
////a. displayed
////b. not displayed
////c. 2 and 4 are displayed
////d. displayed 
////e. not displayed
////f. displayed
//// ******************************************************************************************

//// QUESTION NO. 6 : 

//// SOLUTION :
// var sub1=+prompt("Enter marks1 :");
// var sub2=+prompt("Enter marks2 :");
// var sub3=+prompt("Enter marks3 :");
// var marksObt=(sub1+sub2+sub3);
// var totalMarks=+prompt("Enter totalMarks :");
// var percentage=((marksObt)/(totalMarks)*100);
// document.write("Total marks: " , totalMarks+ "<br>");
// document.write("Marks obtained: " ,marksObt+ "<br>");
// document.write("Percentage: ",percentage+"%" +"<br>");
// if(percentage>=80){
//     document.write("Grade: A-one" +"<br>"+"Remarks: Excellent");
// }
// else if (percentage>=70){
//     document.write("Grade: A" +"<br>"+"Remarks: Good");
// }
// else if(percentage>=60){
//     document.write("Grade: b" +"<br>"+"Remarks: you need to improve");
// }
// else if(percentage<60){
//     document.write("Grade: Fail" +"<br>"+"Remarks: Sorry");
// }
//// ******************************************************************************************

//// QUESTION NO. 7 : 

//// SOLUTION :
// var secnum=6;
// var a=+prompt("Guess the secret number");
// if(a===secnum){
//     document.write("Bingo! Correct answer");
// }
// else if(a+1===secnum){
//     document.write("Close enough to the correct answer");
// }
// else{
//     document.write("Sorry");
// }
//// ******************************************************************************************

//// QUESTION NO. 8 : 

//// SOLUTION :
// var number=60;
// if(number%3==0){
//     document.write("Number is divisible by 3");
// }
//// ******************************************************************************************

//// QUESTION NO. 9 : 

//// SOLUTION :
// var a=+prompt("Enter the number");
// if(a%2==0){
//     document.write("Its an even number");
// }
// else{
//     document.write("Its an odd number");
// }
//// ******************************************************************************************

//// QUESTION NO. 10 : 

//// SOLUTION :
// var temp=+prompt("Enter temp");
// if(temp>40){
//     document.write("It is too hot outside.");
// }
// else if(temp>30){
//     document.write("The weather today is normal.");
// }
// else if(temp>20){
//     document.write("Today's weather is cool.");
// }

// else if(temp>10){
//         document.write("OMG!Today's weather is so cool.");
// }
//// ******************************************************************************************

//// QUESTION NO. 11 : 

//// SOLUTION :
// var first=+prompt("Enter first num:");
// var second=+prompt("Enter sec num:");
// var operation=prompt("Enter operation:");
// if(operation==="+"){
//     var third=first+second;
//     document.write(third);
// }
// else if(operation==="-"){
//     var third=first-second;
//     document.write(third);
// }
// else if(operation==="*"){
//     var third=first*second;
//     document.write(third);
// }
// else if(operation==="/"){
//     var third=first/second;
//     document.write(third);
// }
// else if(operation==="%"){
//     var third=first%second;
//     document.write(third);
// }
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 12 to 13 (JAVASCRIPT)
//// ================================================
//// (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION)


//// QUESTION NO. 1 : 

//// SOLUTION :
// var str = prompt("Write any string");
// for (var i = 0; i < str.length; i++) {
//     var char = str.charCodeAt(i);
//     if (char >= 65 && char<= 90) {
//         document.write(str, " is uppercase")
//     }
//     else if (char >= 97 && char <= 122) {
//         document.write(str, " is lowercase")
//     }
//     else {
//         document.write(str, " is a number")
//     } 
// }
//// ******************************************************************************************

//// QUESTION NO. 2 : 

//// SOLUTION :
// var a=+prompt('enter value');
// var b=+prompt('enter value');
// if(a>b){
//     alert(a +" "+'is bigger')
// }
// else{
//     alert(b+" "+'is bigger')
// }
//// ******************************************************************************************

//// QUESTION NO. 3 : 

//// SOLUTION :
// var a=+prompt("Enter the number: ");
// if(a>=0){
//    document.write("Number is positive");
// }
// else if(a<=0){
//     document.write("Number is negative");
// }
// else if(a===0){
//     document.write("Number is equal to zero");
// }
// else{
//     document.write("Enter valid number");
// }
//// ******************************************************************************************

//// QUESTION NO. 4 : 

//// SOLUTION :
// var a=prompt('enter a string value')
// if(a=="a"|| a=="e" || a=="i"|| a=="o"|| a=="u"){
//     alert('its is a vowel')
// }
// else{
//     alert('not a vowel')
// }
//// ******************************************************************************************

//// QUESTION NO. 5 : 

//// SOLUTION :
// var corPas="marium123";
// var userPas=prompt("Enter his/her password");
// if(userPas==""){
//     document.write("Please enter your password");
// }
// if(corPas==userPas){
//     document.write("Correct! The password you entered matches the original password");
// }
// else{
//     document.write("Incorrect password!");
// }
//// ******************************************************************************************

//// QUESTION NO. 6 : 

//// SOLUTION :
// var greeting
// var hour = 13;
//  if (hour < 18) 
//  { document.write(greeting = "Good day");
//  }
//   else{
//        document.write(greeting = "Good evening"); }
//// ******************************************************************************************

//// QUESTION NO. 7 : 

//// SOLUTION :
// var time=+prompt('enter your time','like 1900');
// if(time>=0000 && time<1200){
//     alert('good morning')
// }

// if(time>=1200 && time<1700){
//     alert('good afternoon')
// }
// if(time>=1700 && time<2100){
//     alert('good evening')
// }
// if(time>=2100 && time<2359){
//     alert('good night')
// }
// else{
//     alert('enter a corret time')
// }
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 14 to 16 (JAVASCRIPT)
//// ================================================
//// (ARRAY)


//// QUESTION NO. 1 : 

//// SOLUTION :
// var studentNames =[];
//// ******************************************************************************************

//// QUESTION NO. 2 : 

//// SOLUTION :
// var studentNames = new Array();
//// ******************************************************************************************

//// QUESTION NO. 3 : 

//// SOLUTION :
// var stringArray = ["one", "two", "three"];
//// ******************************************************************************************

//// QUESTION NO. 4 : 

//// SOLUTION :
// var numberArray = [1,2,3,4,5];
//// ******************************************************************************************

//// QUESTION NO. 5 : 

//// SOLUTION :
// var booleanArray = [true,false,true,false];
//// ******************************************************************************************

//// QUESTION NO. 6 : 

//// SOLUTION :
// var mixedArray = ["one", 2, "three", 4];
//// ******************************************************************************************

//// QUESTION NO. 7 : 

//// SOLUTION :
// document.write('Qualifications:')
// document.write('<br>')
// document.write('<br>')
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// var number = [1,2,3,4,5,6,7,8]
// for (var i=0; i<qual.length;i++){
//     document.write(number[i]+")"+qual[i]+"<br>")
// }
//// ******************************************************************************************

//// QUESTION NO. 8 : 

//// SOLUTION :
// var names = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var totalMarks = 500;
// for (var i=0; i<names.length; i++){
//     document.write("Score of "+ names[i]+" is "+ scores[i]+". Percentage:"+ scores[i]/totalMarks*100+"%"+"<br>")
// }
//// ******************************************************************************************

//// QUESTION NO. 9 : 

//// SOLUTION :
// var colors = ["Red", "Pink","Blue","Black"];
// document.write("Colors are: ",colors, "<br>")
//// (a)
// var addBeg = prompt("What color do you want to add?");
// colors.unshift(addBeg)
// document.write("Updated array of colors are: ",colors)
//// (b)
// var addEnd = prompt("What color do you want to add?");
// colors.push(addEnd)
// document.write("Updated array of colors are: ",colors)
//// (c)
// colors.unshift("White","Orange")
// document.write("Updated array of colors are: ",colors)
//// (d)
// colors.shift(colors)
// document.write("Updated array of colors are: ",colors)
//// (e)
// colors.pop(colors)
// document.write("Updated array of colors are: ",colors)
//// (f)
// var a = prompt("At which index you want to add color?");
// var b =prompt("What color do you want to add?");
// colors.splice(a,0,b)
// document.write("Updated array of colors are: ",colors)
//// (g)
// var a = prompt("From which index you want to delete color?");
// var b =prompt("How many colors you want to delete?");
// colors.splice(a,b)
// document.write("Updated array of colors are: ",colors)
//// ******************************************************************************************

//// QUESTION NO. 10 : 

//// SOLUTION :
// var score = [320,230,480,120];
// document.write("Score of Students : ",score, "<br>")
// score.sort()
// document.write("Ordered Scores of Students : ",score)
//// ******************************************************************************************

//// QUESTION NO. 11 : 

//// SOLUTION :
// var cities = ["Karachi", "Lahore","Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list:","<br>",cities,"<br>")
// var copycities = cities.slice(2,4)
// document.write("Selected cities list:", "<br>", copycities)
//// ******************************************************************************************

//// QUESTION NO. 12 : 

//// SOLUTION :
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:","<br>", arr,"<br>")
// var arr1= arr.join(' ')
// document.write("String:", "<br>", arr1)
//// ******************************************************************************************

//// QUESTION NO. 13 : 

//// SOLUTION :
// var phone =["Apple", "Samsung", "Motorola", "Nokia", "Sony","Haier"];
// document.write("Select Menu: ","<br>")
// for(var i=0; i<phone.length; i++){
//     document.write(phone[i],"<br>")
// }
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 17 to 20 (JAVASCRIPT)
//// ================================================
//// (Arrays and loop )


//// QUESTION NO. 1 : 

//// SOLUTION :
// var arr1 = ["ABC", 1]; 
// var arr2 = ["EFG", 2]; 
// var arr3 = ["IJK", 3];  
// var multi = [arr1, arr2, arr3]; 
//// ******************************************************************************************

//// QUESTION NO. 2 : 

//// SOLUTION :
// var arr1 = [0,1,2,3]; 
// var arr2 = [1,0,1,2]; 
// var arr3 = [2,1,0,1]; 
// var multi = [arr1, arr2, arr3];  
// for(var i = 0; i < multi.length; i++) { 
//     document.write(multi[i].join(' ') + "<br>");
// }
//// ******************************************************************************************

//// QUESTION NO. 3 : 

//// SOLUTION :
// for (var i=1; i<=10; i++){
//     document.write(i,"<br>")
// }
//// ******************************************************************************************

//// QUESTION NO. 4 : 

//// SOLUTION :
// var a = prompt("Enter a number to show its multiplication table");
// var b = prompt("Enter length of multiplication table");
// document.write("Multiplication Table of ",a, "<br>")
// document.write("Length ", b, "<br>")
// for (var i=1; i<=b; i++){
//     document.write(a, " x", i, " =", a*i, "<br>")
// }
//// ******************************************************************************************

//// QUESTION NO. 5 : 

//// SOLUTION :
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i=0; i<fruits.length; i++){
//     document.write(fruits[i], "<br>")
// }
// document.write("<br>")
// for (var i=0; i<fruits.length; i++){
//     document.write("Element at index ",i, " is ",fruits[i],"<br>")
// }
//// ******************************************************************************************

//// QUESTION NO. 6 : 

//// SOLUTION :


//// QUESTION NO. 7 : 

//// SOLUTION :
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to Our Bakery. What do you want to order?");
// for (var i=0; i<A.length; i++) {
//     if (b==A[i]){
//         document.write(b, " is available at index ", i, " in our bakery")
//     }
//     else {
//         document.write("We are sorry. ", b, " is not available in our bakery")
//     }
// }
//// ******************************************************************************************


//// QUESTION NO. 8 : 

//// SOLUTION :
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ", A,"<br>")
// var largest = 0
// for (var i=0; i<A.length; i++){
//     if (A[i]>largest){
//         var largest= A[i];
//     }
// }
// document.write("The largest number is: ", largest)
//// ******************************************************************************************


//// QUESTION NO. 9 : 

//// SOLUTION :
// var A = [24, 53, 78, 91, 12];
// document.write("Array items: ", A,"<br>")
// var smallest = A[0];
// for (var i=0; i<A.length; i++){
//     if (A[i]<smallest){
//         var smallest= A[i];
//     }
// }
// document.write("The smallest number is: ", smallest)
//// ******************************************************************************************

//// QUESTION NO. 10 : 

//// SOLUTION :
// var b = [];
// for (var a=1; a<=100; a++){
//     if (a%5===0){
//         b.push(a)
//     }
// }
// document.write(b)
//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 21 - 25 (JAVASCRIPT)
//// ================================================
//// (STRING METHODS)


//// QUESTION NO. 1 : 
//// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

//// SOLUTION :

// var firstName = prompt("Enter your first name","Your first name");
// var lastName = prompt("Enter your last name", "Your last name");
// var fullName = firstName + " " + lastName;
// alert("Assalam-o-Alaikum" + " " + fullName + "!");

//// ******************************************************************************************

//// QUESTION NO. 2 :
//// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

//// SOLUTION :

// var str = prompt("Enter your favorite mobile phone model");
// var numOfCharsInStr = str.length;
// document.write("My favorite phone is: " + str + "<br>")
// document.write("Length of string: " + numOfCharsInStr)

//// ******************************************************************************************

//// QUESTION NO. 3 :
//// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

//// SOLUTION :

// var str = "Pakistani";
// var indexOfN = str.indexOf("n");
// document.write("String: Pakistani" + "<br>")
// document.write("Index of 'n': " + indexOfN)

//// ******************************************************************************************

////  QUESTION NO. 4 :
//// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

//// SOLUTION :

// var str = "Hello World";
// var lastIndexOfN = str.lastIndexOf("l");
// document.write("String: Hello World" + "<br>")
// document.write("Last index of 'l': " + lastIndexOfN)

//// ******************************************************************************************

////  QUESTION NO. 5 :
//// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

//// SOLUTION :

// var str = "Pakistani";
// var charAt3 =str.charAt(3);
// document.write("String: Pakistani" + "<br>")
// document.write("Character at index 3: " + charAt3)

//// ******************************************************************************************

//// QUESTION NO. 6:
//// Repeat Q1 using string concat() method.

//// SOLUTION : 

// var firstName = prompt("Enter your first name","Your first name");
// var lastName = prompt("Enter your last name", "Your last name");
// var fullName = firstName.concat(" " , lastName);
// alert("Assalam-o-Alaikum" + " " + fullName + "!");

//// ******************************************************************************************

//// QUESTION NO.7:
//// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

//// SOLUTION :

// var city = "Hyderabad";
// var replacedCity = city.replace("Hyder", "Islam");
// document.write("City: " + city+ "<br>");
// document.write("After replacement: " + replacedCity)

//// ******************************************************************************************

//// QUESTION NO. 8:
//// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

//// SOLUTION:

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMsg = message.replace(/and/g, "&");
// document.write("Original Message: " + message + "<br>");
// document.write("Modified Message: " + replacedMsg);

//// ******************************************************************************************

//// QUESTION NO. 9:
//// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

//// SOLUTION:

// var numStr = "472";
// var a = typeof(numStr);
// var numInt = parseInt(numStr);
// var b = typeof(numInt);
// document.write("Value: " + numStr + "<br>");
// document.write("Type: " + a + "<br>");
// document.write("Value: " + numInt + "<br>");
// document.write("Type: " + b);

//// ******************************************************************************************

//// QUESTION NO. 10:
//// Write a program that takes user input. Convert and show the input in capital letters.

//// SOLUTION:

// var inp = prompt("Enter any noun in lower case");
// var inpUpperCase = inp.toUpperCase();
// alert("Upper Case: " + inpUpperCase);

//// ******************************************************************************************

//// QUESTION NO. 11:
//// Write a program that takes user input. Convert and show the input in title case.

//// SOLUTION:

// var x = prompt("Enter any noun in lower case");
// var firstChar = x.slice(0,1);
// var remainingChars = x.slice(1);
// var upperCase = firstChar.toUpperCase();
// var lowerCase = remainingChars.toLowerCase();
// var finalCase = upperCase + lowerCase;
// alert("Title Case: " + finalCase);

//// ******************************************************************************************

//// QUESTION NO. 12:
//// Write a program that converts the variable num to string.
//// Remove the dot to display “3536” display in your browser.

//// SOLUTION:

// var num = 35.36 ;
// var numToString = num.toString();
// var a1 = numToString.split(".")[0]; ///before
// var a2 = numToString.split(".")[1]; ///after
// var a = a1 + a2;
// document.write("Number : ", num, "<br>");
// document.write("Type : ", typeof(num), "<br>");
// document.write("Number : ", numToString, "<br>");
// document.write("Type : ", typeof(numToString), "<br>");
// document.write("Number after removing dot : ", a);

//// ******************************************************************************************

//// QUESTION NO. 13:
//// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.

//// SOLUTION:

// var username = prompt("Enter your username");
// var check = "n";
// var whileVar = 0;
// while(whileVar != 1){
//     for (var i = 0; i <= username.length; i++){
//         var a = username.charCodeAt(i);
//         if(a === 44){
//             check = "y";
//         }
//         if(a === 33){
//             check = "y";
//         }
//         if(a === 46){
//             check = "y";    
//         }
//         if(a === 64){
//             check = "y";    
//         }
//     }
//     if(check === "y"){
//         alert("Please enter a valid username");
//         var username = prompt("Enter your username");
//         whileVar = 0;
//     }
//     else{
//         whileVar = 1;
//     }
// }
// alert(username)

//// ******************************************************************************************

//// QUESTION NO. 14:
//// You have an array
//// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
//// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

//// SOLUTION:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?", "Write it down here")
// var inputLowerCase = input.toLowerCase();
// for (var i = 0; i <= A.length ; i++){
//     if(inputLowerCase == A[i]){
//         alert(input.toUpperCase() + ' is available at index ' + i + ' in our bakery.');
//         var check = 'y';
//     }
// }
// if(check != 'y'){
//     alert('We are sorry! ' + input.toUpperCase() + ' is not available in our bakery.');
// }

//// ******************************************************************************************

//// QUESTION NO. 15:
//// Write a program to take password as an input from user. The password must qualify these requirements:
//// a. It should contain alphabets and numbers
//// b. It should not start with a number
//// c. It must at least 6 characters long
//// If the password does not meet above requirements, prompt the user to enter a valid password.
//// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

//// SOLUTION:

// var pas=prompt("Enter Password ");
// var s=pas.length;
  
// if(s<6){
//     alert("Password should be atleast 6 characters long");
// }
// else if(pas[0]>='0' && pas[0] <='9'){
//     alert("Password should not start with a number");
// }

//// ******************************************************************************************

//// QUESTION NO. 16:
//// Write a program to convert the following string to an array using string split method. Display the elements of array in your browser.

//// SOLUTION:

// var university = "University of Karachi";
// var splitted = university.split("");
// for(var i = 0; i < splitted.length; i++){
//     document.write(splitted[i] + "<br>");
// }

//// ******************************************************************************************

//// QUESTION NO. 17:
//// Write a program to display the last character of a user input.

//// SOLUTION:

// var userInput = prompt("Write something");
// var lengthOfInput = userInput.length;
// var lastCharOfInput = userInput.slice(lengthOfInput-1 , lengthOfInput);
// document.write('User input: ' + userInput + '<br>')
// document.write('Last character of input: ' + lastCharOfInput);

//// ******************************************************************************************

//// QUESTION NO. 18:
//// You have a string “The quick brown fox jumps over the lazy dog”. 
////Write a program to count number of occurrences of word “the” in given string.

//// SOLUTION:

// var str = "The quick brown fox jumps over the lazy dog";
// var strToLowerCase = str.toLowerCase();
// var count = 0;
// for(var i = 0; i < str.length; i++){
//     var a = strToLowerCase.slice(i, i+3);
//     if(a === "the"){
//         count++;
//     }
// }
// document.write('Text: The quick brown fox jumps over the lazy dog. <br>');
// document.write("There are " + count + " occurence(s) of word 'the'.");

//// ******************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 26 - 30 (JAVASCRIPT)
//// ================================================
//// (MATH METHODS)

//// QUESTION NO. 1 : 
//// Write a program that takes a positive integer from user & display the following in your browser.
//// a. number
//// b. round off value of the number 
//// c. floor value of the number
//// d. ceil value of the number

//// SOLUTION :

// var inputNum = prompt("Enter a positive integer number");
// var check = 'n'
// while(check != 'y'){
//     if(inputNum > 0){
//         check = 'y';
//         var roundOff = Math.round(inputNum)
//         // // var roundOff = parseInt(inputNum);
//         var floorValue = Math.floor(inputNum);
//         var ceilValue = Math.ceil(inputNum);
//         document.write('number: ' + inputNum + '<br>');
//         document.write('round off value: ' + roundOff + '<br>')
//         document.write('floor value: ' + floorValue + '<br>')
//         document.write('ceil value: ' + ceilValue)
//     }
//     else{
//         alert("You have entered an invalid number, please enter a positive integer number")
//         var inputNum = prompt("Enter a positive integer number");
//     }
// }

//// ***************************************************************************************** 

//// QUESTION NO. 2 :
//// Write a program that takes a negative floating point number from user & display the following in your browser.
//// a. number
//// b. round off value of the number
//// c. floor value of the number
//// d. ceil value of the number

//// SOLUTION:

// var inputNum = prompt("Enter a negative floating point number");
// var check = 'n'
// while(check != 'y'){
//     if(inputNum < 0){
//         check = 'y';
//         var roundOff = Math.round(inputNum)
//         var floorValue = Math.floor(inputNum);
//         var ceilValue = Math.ceil(inputNum);
//         document.write('number: ' + inputNum + '<br>');
//         document.write('round off value: ' + roundOff + '<br>')
//         document.write('floor value: ' + floorValue + '<br>')
//         document.write('ceil value: ' + ceilValue)
//     }
//     else{
//         alert("You have entered an invalid number, please enter a negative floating point number")
//         var inputNum = prompt("Enter a negative floating point number");
//     }
// }

//// ***************************************************************************************** 

//// QUESTION NO. 3 :
//// Write a program that displays the absolute value of a number.

//// SOLUTION:

// var anyValue = prompt("Enter any +ve or -ve number");
// var absoluteValue = Math.abs(anyValue);
// document.write('The absolute value of ' + anyValue + ' is ' + absoluteValue);

//// ***************************************************************************************** 

//// QUESTION NO. 4:
//// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

//// SOLUTION:

// var diceRoll = Math.floor( Math.random() * 6 ) + 1;
// document.write('random dice value: ' + diceRoll);

//// ***************************************************************************************** 

//// QUESTION NO. 5:
//// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

//// SOLUTION:

// var coinToss = Math.floor( Math.random() * 2 ) + 1;
// if(coinToss === 1){
//     document.write(coinToss + '<br>' + 'random coin value: TAILS')
// }
// if(coinToss === 2){
//     document.write(coinToss + '<br>' + 'random coin value: HEADS')
// }

//// ***************************************************************************************** 

//// QUESTION NO. 6:
//// Write a program that shows a random number between 1 and 100 in your browser.

//// SOLUTION:

// var randomNo = Math.floor( Math.random() * 100 ) + 1;
// document.write('random number between 1 and 100: ' + randomNo);

//// ***************************************************************************************** 

//// QUESTION NO. 7:
//// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.

//// SOLUTION:

// var inp= prompt("Enter weight in kgs");
// var input= parseInt(inp);
// alert("The weight of user is " + input + " kilograms");

//// ***************************************************************************************** 

//// QUESTION NO. 8:
//// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

//// SOLUTION:

// var randomSecretNumber = Math.floor( Math.random() * 10 ) + 1;
// var num1 = +prompt("Enter a number between 1 and 10");
// if(num1 === randomSecretNumber){
//     alert("Congratulations!")
// }
// else{
//     alert("Oops! Try again.")
// }

//// ***************************************************************************************** 

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 31 - 34 (JAVASCRIPT)
//// ================================================
//// (DATE METHODS)

//// QUESTION NO. 1 :
//// Write a program that displays current date and time in your browser.

//// SOLUTION: 

// var rightNow = new Date();
// document.write(rightNow);

//// ***************************************************************************************** 

//// QUESTION NO. 2 :
//// Write a program that alerts the current month in words. For example December.

//// SOLUTION:

// var monthNames = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var monthInWords = monthNames[theMonth];
// document.write('Current Month: ' + monthInWords);

//// ***************************************************************************************** 

//// QUESTION NO. 3 :
//// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

//// SOLUTION:

// var today = new Date();
// var todayString = today.toString();
// var day = todayString.slice(0,3);
// document.write('Today is '+ day);

//// ***************************************************************************************** 

//// QUESTION NO. 4 :
//// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//// SOLUTION:

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var today= new Date();
// var todayDay = today.getDay();
// var todayDayName = dayNames[todayDay];
// if(todayDay === 0 || todayDay === 6){
//     alert("It's Fun day");
// }
// else{
//     alert('Today is ' + todayDayName);
// }

//// ***************************************************************************************** 

//// QUESTION NO. 5 :
//// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

//// SOLUTION:

// var today = new Date();
// var todayDate = today.getDate();
// if(todayDate >= 1 && todayDate <= 15){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//// ***************************************************************************************** 

//// QUESTION NO. 6:
//// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

//// SOLUTION:

// var d = new Date();
// var millsSince = d.getTime();
// var minsSince = millsSince / (1000 * 60);
// document.write('Current Date: ',d, '<br>');
// document.write('Elapsed milliseconds since January 1, 1970: ',millsSince , '<br>');
// document.write('Elapsed minutes since January 1, 1970: ',minsSince);

//// ***************************************************************************************** 

//// QUESTION NO. 7:
//// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

//// SOLUTION:

// var d = new Date();
// var hour = d.getHours();
// if(hour >= 0 && hour <= 11){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }

//// ***************************************************************************************** 

//// QUESTION NO. 8:
//// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

//// SOLUTION:

// var laterDate = new Date("December 31, 2020");
// document.write(laterDate);

//// ***************************************************************************************** 

//// QUESTION NO. 9:
//// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//// Note: 1st Ramadan was on Friday, 24 April 2020

//// SOLUTION:

// var date = new Date();
// var ramzaanDate = new Date("April 24, 2020");
// var msDate = date.getTime();
// var msRamzaanDate = ramzaanDate.getTime();
// var msDiff = msDate - msRamzaanDate;
// var dayDiff = msDiff / (1000*60*60*24);
// dayDiff = Math.floor(dayDiff);
// document.write(dayDiff + ' days have passed since 1st Ramadan, 2020.');

//// ***************************************************************************************** 

//// QUESTION NO. 10:
//// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

//// SOLUTION:

// var d = new Date();
// var beginningOf2015 = new Date("January 1, 2015 00:00:00");
// var msDiff = d.getTime() - beginningOf2015.getTime();
// var seconds = Math.floor(msDiff / 1000);
// document.write("On reference date " + d + ", " + seconds + " seconds had passed since beginning of 2015");

//// ***************************************************************************************** 

//// QUESTION NO. 11:
//// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

//// SOLUTION:

// var d = new Date(); //current date and time
// document.write("Current date and time is : " + d + "<br>" + "<br>");
// var hour = d.getHours(); //current hour number
// d.setHours(++hour); //resetting the date obj an hour ahead
// document.write("After resetting the date object an hour ahead : " + d);

//// ***************************************************************************************** 

//// QUESTION NO. 12:
//// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

//// SOLUTION:

// var d = new Date();
// document.write("Current date : " + d + "<br>" + "<br>");
// var a = d.getFullYear();
// var a = a - 100;
// d.setFullYear(a);
// document.write("100 years back, it was : " + d);

//// ***************************************************************************************** 

//// QUESTION NO. 13:
//// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

//// SOLUTION: 

// var today = new Date();
// var year = today.getFullYear();
// var age = +prompt("What's your age?");
// var diff = year - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + diff);

//// ***************************************************************************************** 

//// QUESTION NO. 14:
//// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
//// a. Customer Name
//// b. Current Month
//// c. Number of units
//// d. Charges per unit
//// e. Net Amount Payable (within Due Date)
//// f. Late Payment Surcharge
//// g. Gross Amount Payable (after Due Date)
//// Where,
//// Net Amount Payable (within Due Date) = Number of units * Charges per unit
//// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//// SOLUTION:

// var numOfUnits = 500;
// var chargesPerUnit = 18.83;
// var latePayment = 500;
// var netAmount = numOfUnits * chargesPerUnit;
// var grossAmount = netAmount + latePayment;

// document.write("<h2>K-Electric Bill</h2>");

// document.write("Customer Name: <b>Marium Arif</b> </br>");
// document.write("Month: <b>June</b> </br>");
// document.write("Number of units: <b>" + numOfUnits + "</b> </br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b></br></br>");
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b></br>");
// document.write("Late Payment Surcharge: <b>" + latePayment + "</b> </br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b></br>");

//// ***************************************************************************************** 

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 35 - 38 (JAVASCRIPT)
//// ================================================
//// (FUNCTIONS)

//// QUESTION NO. 1 :
//// Write a function that displays current date & time in your browser.

//// SOLUTION: 

// function tellTime() {
//     var now = new Date();
//     document.write(now);
// }

// tellTime();

//// ***************************************************************************************** 

//// QUESTION NO. 2 :
//// Write a function that takes first & last name and then it greets the user using his full name.

//// SOLUTION:

// function name(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     document.write("Hello " + firstName + " " + lastName + "!");
// }

// name();

//// ***************************************************************************************** 

//// QUESTION NO. 3 :
//// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

//// SOLUTION:

// function add(){
//     var num1 = Number(prompt("Enter first number"));
//     var num2 = Number(prompt("Enter second number"));
//     var sum = num1 + num2 ;
//     return sum;
// }

// var a = add();
// document.write("The sum of the two numbers is " + a);

//// ***************************************************************************************** 

//// QUESTION NO. 4 :
//// Calculator:
//// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

//// SOLUTION:

// function Calculator(num1,num2,operator){
//     var result = 0;
//     switch(operator){
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             alert("You have entered an invalid operator");
//     }
//     return result;
// }

// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter operation to be performed on both numbers e.g +,-,*,/");
// var num2 = +prompt("Enter second number");

// var result = Calculator(num1,num2,operator);
// document.write(num1 + " " + operator + " " + num2 + " = " + result);

//// ***************************************************************************************** 

//// QUESTION NO. 5 :
//// Write a function that squares its argument.

//// SOLUTION:

// function square(x){
//     var squareOfNum = Math.pow(x , 2)
//     return squareOfNum;
// }

// var anyNum = +prompt("Enter a number");
// var b = square(anyNum);
// document.write("Square of " + anyNum + " is " + b);

//// ***************************************************************************************** 

//// QUESTION NO. 6 :
//// Write a function that computes factorial of a number.

//// SOLUTION : 

// function factorial(n){
//     var result = 1;
//     for(var i = 2; i <= n; i++){
//         result = result * i ;
//     }
//     return result;
// }

// var number = +prompt("Enter any +ve number");
// var factorialOfNumber = factorial(number);
// document.write(factorialOfNumber);

//// ***************************************************************************************** 

//// QUESTION NO. 7:
//// Write a function that take start and end number as inputs& display counting in your browser.

//// SOLUTION:

// function counting(start,end){
//     if(start < end){
//         for(var i = start; i <= end ; i++){
//         document.write(i + "<br>");
//         }
//     }
//     else{
//         for(var i = end; i <= start ; i++){
//             document.write(i + "<br>");
//         }
//     }
// }

// var num1 = +prompt("Enter start number");
// var num2 = +prompt("Enter end number");
// counting(num1, num2);

//// ***************************************************************************************** 

//// QUESTION NO. 8:
//// Write a nested function that computes hypotenuse of a right angle triangle.
//// Hypotenuse2 = Base2 + Perpendicular2
//// Take base and perpendicular as inputs.
//// Outer function : calculateHypotenuse()
//// Inner function: calculateSquare()

//// SOLUTION:

// function calculateHypotenuse(base, perp){

//     var base = calculateSquare(base);
//     var perp = calculateSquare(perp);
//     var hyp = Math.sqrt(base + perp);
//     return hyp;

//     function calculateSquare(num){
//         var sq = num * num;
//         return sq;
//     }
// }

// var x = +prompt("Enter value of Base");
// var y = +prompt("Enter value of Perpendicular");
// var ans = calculateHypotenuse(x,y);
// document.write("Base is " + x + "<br>");
// document.write("Perpendicular is " + y + "<br>");
// document.write("Hypotenuse is " + ans);

//// ***************************************************************************************** 

//// QUESTION NO. 9:
//// Write a function that calculates the area of a rectangle.
////  A = width * height
////  Pass width and height in following manner:
//// i. Arguments as value
//// ii. Arguments as variables

//// SOLUTION:

//// i)

// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var a = areaOfRectangle(10,10);
// document.write("Area of the rectangle is: " + a + "<br>");

///// ii)

// function areaOfRectangle(w,h){
//     var area = w * h;
//     return area;
// }
// var width = +prompt("Enter width of the rectangle");
// var height = +prompt("Enter height of the rectangle");
// var a = areaOfRectangle(width,height);
// document.write("Area of the rectangle is: " + a);

//// ***************************************************************************************** 

//// QUESTION NO. 10:
//// Write a JavaScript function that checks whether a passed string is palindrome or not?

//// SOLUTION:

// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// var str = prompt("Enter any string");
// var a = palindrome(str);
// if(a === true){
//     document.write(str + " is a palindrome word.");
// }
// else{
//     document.write(str + " is not a palindrome word.");
// }

//// ***************************************************************************************** 

//// QUESTION NO. 11:
//// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//// EXAMPLE STRING : 'the quick brown fox'
//// EXPECTED OUTPUT : 'The Quick Brown Fox'

//// SOLUTION:

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// var str = prompt("Enter any string in lower case");
// document.write(uppercase(str));

                           ///// Another ////

// function titleCase(str) {

//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 

//  }

//   document.write("<br>")
//   document.write(titleCase("I'm a little tea pot"));

//// ***************************************************************************************** 

//// QUESTION NO. 12:
//// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//// EXAMPLE STRING : 'Web Development Tutorial'
//// EXPECTED OUTPUT : 'Development'

//// SOLUTION:

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }

// document.write(find_longest_word('Web Development Tutorial'));

                              //// Another ////

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length ; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var str = prompt("Enter any sentence");
// document.write("<br>")
// document.write(longestWord(str));

//// ***************************************************************************************** 

//// QUESTION NO. 13:
//// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//// Sample arguments : 'JSResourceS.com', 'o'

//// SOLUTION:

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

//// ***************************************************************************************** 

//// QUESTION NO. 14:
//// The Geometrizer
//// Create 2 functions that calculate properties of a circle, using the definitions here.
//// Create a function called calcCircumference:
//// • Pass the radius to the function.
//// • Calculate the circumference based on the radius, and output
//// "The circumference is NN".
//// Create a function called calcArea:
//// • Pass the radius to the function.
//// • Calculate the area based on the radius, and output "The area is NN".
//// Circumference of circle = 2πr
//// Area of circle = πr2

//// SOLUTION:

// function calcCircumference(radius) {
//     var c = 2 * Math.PI * radius;
//     document.write("The radius is " + radius + ". ");
//     document.write("The circumfrence is " + c + "." + "<br>");
//   }
//   function calcArea(radius) {
//     var a = Math.PI * (radius * radius);
//     document.write("The radius is " + radius + ". ");
//     document.write("The area is " + a + ".");
//   }
  
//   calcCircumference(10);
//   calcArea(10);

//// ***************************************************************************************** 


//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 38 - 42 (JAVASCRIPT)
//// ================================================
//// (FUNCTIONS, switch statements, while… do-while loops)


//// QUESTION NO. 1 : 

//// SOLUTION :
// function power(a, b) {
    //     document.write("Value of a is: " + a + "<br><br>");
    //     document.write("Value of b is: " + b + "<br><br>");
    //     var product = 1;
    //     for(var j = 1; j <= b; j++){
        //         product = product * a ;
        //     } 
        //     document.write("The value of " + a + " raised to " + b + " is: " + product);
        // }
        // var num1 = +prompt("Enter first number")
        // var num2 = +prompt("Enter second number")
        // power(num1, num2);

//// *****************************************************************************************
        
//// QUESTION NO. 2 : 

//// SOLUTION :
        // function LeapYear() {
            //     document.write("<h2>Checking Leap Year</h2>")
            //     var year = +prompt("Please enter year");
            //     document.write("Entered year is : " + year + "<br>")
            //     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                //         document.write(year + " is a leap year");
                //     }else {
                    //         document.write(year + " is not a leap year");
                    //     }
                    // }
                    // LeapYear();

//// *****************************************************************************************

//// QUESTION NO. 3 : 

//// SOLUTION :
 // document.write("<h1>Calculating the area of triangle</h1>");
 // var side1 = +prompt("Enter the value of first side");
 // var side2 = +prompt("Enter the value of second side");
 // var side3 = +prompt("Enter the value of third side");
 // var S;
 // var area;
 
 // function calculateS(a, b, c) {
     //     x = (a + b + c) / 2;
     //     return x
     // }
     
 // function calculatingArea(a, b, c) {
     //     S = calculateS(a, b, c);
     //     area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
     //     return document.write("Area of triangle is : " + area);
     // }
         
// calculatingArea(side1, side2, side3);

//// *****************************************************************************************

//// QUESTION NO. 4 : 

//// SOLUTION :                         
// document.write("<h1>Mark Sheet</h1>");
// var sub1 = +prompt("Enter first subject marks");
// var sub2 = +prompt("Enter second subject marks");
// var sub3 = +prompt("Enter third subject marks");
// var totalMarks = 300;
// var obtainedMarks = sub1 + sub2 + sub3;
// var average;
// var percentage;
                            
// function mainFunction(a, b, c) {
//     document.write("Marks of first subject is : " + a + "<br>");
//     document.write("Marks of second subject is : " + b + "<br>");
//     document.write("Marks of third subject is : " + c + "<br>");
//     percentage()
// }
// function average() {
//     average = obtainedMarks / 3;
//     document.write("Average is : " + average + "<br>");
//     return average;
// }
// function percentage() {
//     return document.write("Percentage is : " + average() + "%");
// }
        
// mainFunction(sub1, sub2, sub3);

//// *****************************************************************************************

//// QUESTION NO. 5 : 

//// SOLUTION :
// function checkIndexOf(word, character) {
//     word = prompt("Please enter word");
//     document.write("Entered word is : " + word + "<br><br>");
//     character = prompt("Please enter character to find indexOF");
//     document.write("Character to find the indexOf : " + character + "<br><br>")
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === character) {
//             return document.write("indexOf " + character + " is : " + i);
//         }
//     }
//     return -1;
// }
// checkIndexOf();

//// *****************************************************************************************

//// QUESTION NO. 6 : 

//// SOLUTION :
// function removingVowels() {
//     var string = prompt("Please enter your sentence", "The quick brown fox jumps over the lazy dog");
//     string = string.replace(/^(.{25}[^\s]*).*/, "$1") + "\n";
//     document.write("Entered sentence is: " + string + "<br>");
//     return document.write("After removing vowels: " + string.replace(/[aeiou]/gi, ''));
// }
// removingVowels();

//// *****************************************************************************************

//// QUESTION NO. 7 : 

//// SOLUTION :
// function findOccurrences() {
//     var str = "Please read this application and give me gratuity";
//     document.write("Sentence is: " + str + "<br><br>")
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (haveSeenVowel) {
//                         count++;
//                         haveSeenVowel = false;
//                     } else {
//                         haveSeenVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 haveSeenVowel = false
//         }
//     }

//     return document.write("The number of occurrences is: " + count);
// }
// findOccurrences();

//// *****************************************************************************************

//// QUESTION NO. 8 : 

//// SOLUTION :                                                
// var distance = +prompt("Please enter distance in km");
// document.write("Entered distance in km is: " + distance + "<br><br>")
// var distance, meters, feet, inches, centimeters;
// function findingCentimeters() {
     
//     function findingInches() {
         
//         function findingFeet() {

//             function findingMeters() {
//                 meters = distance * 1000;
//                 return document.write("Distance in meters is: " + meters + " m <br><br>");
//             }
//             findingMeters();

//             feet = meters * 3.28;
//             return document.write("Distance in feet is: " + feet + " feet <br><br>");
//         }
//         findingFeet();

//         inches = feet * 12;
//         return document.write("Distance in inches is: " + inches + " inches <br><br>");
//     }
//     findingInches();

//     centimeters = inches * 30;
//     return document.write("Distance in centimeters is: " + centimeters + " cm <br><br>");
// }
// findingCentimeters();
    
//// *****************************************************************************************

//// QUESTION NO. 9 : 

//// SOLUTION :
// var workingHours;
// function overtimePay() {
//     workingHours = +prompt("Please enter the working hours of an emplyee");
//     document.write("Entered the working hours of an employee is " + workingHours + " hr <br><br>");
//     document.write("Per hour overtime rate is Rs." + 12.00 + "<br><br>");
//     if (workingHours > 40) {
//         var overTime = workingHours - 40;
//         var overTimePay = overTime * 12.00;
//         document.write("Employee overtime pay is Rs." + overTimePay + "<br>");
//     } else {
//         document.write("You have to work for more than 40 hours to get over time pay <br>");
//     }
// }
// overtimePay();
    
//// *****************************************************************************************

//// QUESTION NO. 10 : 

//// SOLUTION :
// var hundreds, fifties, tens;
// var amount = +prompt("Please enter amount for withdraw");
// document.write("Entered withdraw amount is: " + amount + "<br><br>");
// function currencyDenominations() {
//     hundreds = Math.floor(amount / 100);
//     document.write("Required notes of Rs. 100 is: " + hundreds + "<br><br>");
//     fifties = Math.floor((amount % 100) / 50);
//     document.write("Required notes of Rs. 50 is: " + fifties + "<br><br>");
//     tens = Math.floor(((amount % 100) % 50) / 10);
//     document.write("Required notes of Rs. 10 is: " + tens + "<br><br>");
//     document.write("Amount still remaining Rs: " + (((amount % 100) % 50) % 10) + "<br><br>");
//     document.write("You will have " + hundreds + " hundred notes " + fifties + " fifty notes " + tens + " ten notes")
// }
// currencyDenominations();
    
//// *****************************************************************************************
            
//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 43 - 48 (JAVASCRIPT)
//// ================================================
//// (Events)


//// QUESTION NO. 1 : 

//// SOLUTION :
// function alertBox() {
//     alert("Hello!");
// }
    
//// *****************************************************************************************

//// QUESTION NO. 2 : 

//// SOLUTION :
// function purchased() {
//     alert("Thank you for purchasing a mobile phone from us");
// }
    
//// *****************************************************************************************

//// QUESTION NO. 3 : 

//// SOLUTION :
// function delRow(x) {
//     var dr = document.getElementById(x);
//     var a = dr.getAttribute("class")
//     document.getElementsByClassName(a)[0].remove();
// }
    
//// *****************************************************************************************

//// QUESTION NO. 4 : 

//// SOLUTION :
// function secondImage() {
//     var img = document.getElementById("image");
//     img.src = "harrypotter2.jpg";
// }
// function firstImage() {
//     var img = document.getElementById("image");
//     img.src = "harrypotter1.jpg";
// }
    
//// *****************************************************************************************

//// QUESTION NO. 5 : 

//// SOLUTION :                 
// var increase =  0
// function countUp() {
//     increase += 1;
//     document.getElementById("count").innerHTML = increase;
// }
// function countDown() {
//    var decrease = increase--;
//     document.getElementById("count").innerHTML = decrease;
// }

//// *****************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 49 - 52 (JAVASCRIPT)
//// ================================================
//// (Events)


//// QUESTION NO. 1 : 

//// SOLUTION :
// function submitForm() {
//     var name = document.getElementById("name").value;
//     var pasteName = document.getElementById("pasteName");
//     pasteName.innerHTML = name;
//     var email = document.getElementById("email").value;
//     var pasteEmail = document.getElementById("pasteEmail");
//     pasteEmail.innerHTML = email;
//     var password = document.getElementById("password").value;
//     var pastePassword = document.getElementById("pastePassword");
//     pastePassword.innerHTML = password;
//     var confirmPassword = document.getElementById("confirmPassword").value;
//     var pasteConfirmPassword = document.getElementById("pasteConfirmPassword");
//     pasteConfirmPassword.innerHTML = confirmPassword;
// }

//// *****************************************************************************************
                                            
//// QUESTION NO. 2 : 

//// SOLUTION :
// function moreParagraph() {
//     var paragraph = 'Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals. Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.'
//     document.getElementById('paragraph').innerHTML = paragraph;
// }

//// *****************************************************************************************
                                            
//// QUESTION NO. 3 : 

//// SOLUTION :
// function delEntry() {
//     document.getElementsByTagName("tr")[1].remove();
// }
// function editEntry() {
//     document.getElementsByTagName("tr");
// }

//// *****************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 53 - 58 (JAVASCRIPT)
//// ================================================


//// QUESTION NO. 1 : 

//// SOLUTION :
// var modal = document.getElementById('modal');
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("modal-img");
// function showImage(image) {
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display = "block";
//     modalImg.src = image;
// }
// function onClosedImagModal() {
//     modal.classList.add('modal-close');
//     modal.classList.remove('modal-open');
//     setTimeout(()=>{ modal.style.display = "none"; }, 550) 
// }

//// *****************************************************************************************
               
//// QUESTION NO. 2 : 

//// SOLUTION :
// var max = 100;
// function zoomIn() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize >= max) {
//         alert("Maximum zoom in limit reached");
//     } else if (currentFontSize < max) {
//         paragraph.style.fontSize = 10 + currentFontSize + 'px';
//     }
// }
// var min = 20;
// function zoomOut() {
//     var paragraph = document.getElementById("paragraph"),
//         currentFontSize = parseFloat(window.getComputedStyle(paragraph, null).fontSize);
//     if (currentFontSize <= min) {
//         alert("Maximum zoom out limit reached");
//     } else if (currentFontSize > min) {
//         paragraph.style.fontSize = currentFontSize - 10 + 'px';
//     }
// }

//// *****************************************************************************************

//// ================================================
//// ASSIGNMENT OF CHAPTERS NO. 58 - 67 (JAVASCRIPT)
//// ================================================
//// (DOM)

//// QUESTION NO. 1 : 

//// SOLUTION :

// // part i
// var mainContent = document.getElementById("main-content");

// // part ii
// console.log(mainContent.childNodes);

// // part iii
// var elements = document.getElementsByClassName("render");
// for (var i = 0; i < elements.length; i++) {
//     var showElements = document.getElementById("show-elements");
//     var p = document.createElement("p");
//     var text = document.createTextNode(elements[i].innerHTML);
//     p.appendChild(text);
//     showElements.appendChild(p);
// }

// // part iv
// var firstName = document.getElementById("first-name");
// firstName.value = "MARIUM";

// // part v
// var lastName = document.getElementById("last-name");
// lastName.value = "ARIF";
// var email = document.getElementById("email");
// email.value = "mariumarif1999@gmail.com";

//// *****************************************************************************************

//// QUESTION NO. 2 : 

//// SOLUTION :

// // part i
// var checkType = document.getElementById("form-content");
// console.log(checkType.nodeType);

// // part ii
// var checkType2 = document.getElementById("lastName");
// console.log(checkType2.nodeType);
// console.log(checkType2.childNodes[0].nodeType);

// // part iii
// var checkType3 = document.getElementById("lastName");
// checkType3.innerHTML = "Last Name: Arif"

// // part iv
// var check = document.getElementById("main-content");
// console.log(check.firstChild);
// console.log(check.lastChild);

// // part v
// var check2 = document.getElementById("lastName");
// console.log(check2.nextSibling);
// console.log(check2.previousSibling);

// // part vi
// var check3 = document.getElementById("email");
// console.log(check3.parentNode);
// console.log(check3.nodeType);

////////////////////////////////////      END      ////////////////////////////////////