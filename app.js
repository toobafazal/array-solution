// **************************** chapter 14 to 16 *********************
// 1. Declare an empty array using JS literal notation to store student names in future.
// var empty_arry = ['','','',''];


// 2. Declare an empty array using JS object notation to store student names in future.
//  var empty_array = [{$obj["","",""]} ];


// 3. Declare and initialize a strings array.
// var string = ["apple","mango","banana","orange","peach"];
// document.write(string);


// 4. Declare and initialize a numbers array.
// var number = [5,6,7,88,100];
// document.write(number);


// 4. Declare and initialize a boolean array.
// var bool = [true,false,true ,false ,false];
// document.write(bool);


// 6. Declare and initialize a mixed array.
// var mixedarray = ["apple", 567 , true];
// document.write(mixedarray);


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
//     BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

//  var education = ["SSC <br>","HSC <br>" , "BCS <br>", "BS <br>" , "BCOM <br>", "MS <br>","M.PHIL <br>", "PHD"];
//  document.write(" <h1> Qualification <br> </h1>" + education);


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var std_name = ["Michel","John","Tony"];
// var score  = [320,200,350];
// document.write("Score Of " + std_name[0] + " is " + score[0] + " Percentage  : 64 <br>");
// document.write("Score Of " + std_name[1] + " is " + score[1] + " Percentage  : 64 <br>");
// document.write("Score Of " + std_name[2] + " is " + score[2] + " Percentage  : 64");

// 9. Initialize an array with color names. Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to  color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
/***************  9 a ************* */
// var color = ["yellow","green","Purple","white","black"];

// /***************  9 b ************* */
//  var color = ["yellow","green","Purple","white","black"];
// var add_array = prompt("what is your favourite color");
// document.write(color.splice(0,0, add_array));
/***************  9 c ************* */
// var color = ["yellow","green","Purple","white","black"];
// var add_array = prompt("what is your favourite color");
// color.splice(5,0, add_array);
// document.write(color);

/***************  9 d ************* */
//  var color = ["yellow","green","Purple","white","black"];
// color.shift(0);
// document.write(color);


/***************  9 e ************* */
//  var color = ["yellow","green","Purple","white","black"];
// color.pop(0);
// document.write(color);

/***************  9 f ************* */
//  var color = ["yellow","green","Purple","white","black"];
//  var add_array = prompt("what is your favourite color");
//  var add_index = +prompt("desired location");
//  color.splice(add_index , 0 ,add_array);
//  document.write(color);

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort 
// // method.
// var score =[340,450,300,190,379,345];
// document.write("Score Of " + score + " is <br><br>");
// document.write("Score Of " + score.sort() + " is <br>");


// // 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// var cities = ["Karachi","Lahore" ,"Quetta", "Peshawer","Multan"];
//  document.write("cities is " +cities + " is <br><br>");
// cities.slice(1,3);
//  document.write("cities is " +cities + " is <br><br>");




//  12. Write a program to create a single string from the below mentioned array:
//  var arr = ["this", "is","my", " cat"];
//  document.write("list of fruits is <br> " + arr.join() + " is <br><br>");


// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
// var hardware = [];
// hardware.push("monitor");
// hardware.push("keyboard");
// hardware.push("mouse");
// hardware.push("printer");
// hardware.push("cpu");
// document.write(hardware);


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
// var hardware = [];
// var store = [];
// hardware.push("monitor");
// hardware.push("keyboard");
// hardware.push("mouse");
// hardware.push("printer");
// hardware.push("cpu");
// document.write(hardware);
// hardware.pop("");


// document.write(store);





// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your 
// browser using document.write() method:

// var mobiles = ["samsung","nokia","Haier","sony","Motorola"];
// document.write(`<select>
// <option>${mobiles[0]}</option>
// <option>${mobiles[1]}</option>
// <option>${mobiles[2]}</option>
// <option>${mobiles[3]}</option>
// <option>${mobiles[4]}</option>
// <select>`)















