// ? conditional logic. It can be less than, less than or equal,  grater than, grater than or equal and equals to .

var time = 5 ;
if (time >= 5 ) {
    console.log("I will go for pray.");
}
else {
    console.log("I won't go.");
}


// !  Grade system in javascript.

var marks = 65;

if (marks>=80 && marks<=100){
    console.log("You have got A+.");
}
else if (marks<80 && marks>=70){
    console.log("You have got A.");
}
else if(marks<70 && marks>=60){
    console.log("You have got A-.");

}
else if(marks<60 && marks>=50){
    console.log("You have got B.");

}
else if(marks<50 && marks>=40){
    console.log("You have got C.");

}
else if(marks<40 && marks>=33){
    console.log("You have got D.");

}
else{
    console.log("You are failed.");
}