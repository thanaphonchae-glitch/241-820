/*
&& และ
|| หรือ
! not หรือ ไม่
*//
Grade
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
< 50 เป็นเกรด F
*/
let score = 75;

if (score >= 80) {
    console.log(‘Grade A’);
} else if (score >= 70) {
    console.log(‘Grade B’);
} else if (score >= 60) {
    console.log(‘Grade C’);
} else if (score >= 50) {
    console.log(‘Grade D’);
} else {
    console.log(‘Grade F’);
}


let number2 = 10;
//true && false
let condition1 = !(number1 >= 3 || number2 >= 10);
console.log(“condition1:”, condition1);

let age = 30;
let gender = “ชาย”;

//true && true
if(age >= 20 && gender == “ชาย”) {
    console.log(“ผู้ชายที่มีอายุ 20 ปีขึ้นไป”);
}

let number =21;

if (number % 2  != 0) {
    console.log(“เป็นจำนวนคู่”);
}

let counter = 0;
while(counter < 10) {
    console.log(‘Hello World’);
    //counter = counter + 1;
    counter = counter + 1;
}

for(let i = 0; i < 5; i++) {
    console.log(‘Hello World from for loop’);
}