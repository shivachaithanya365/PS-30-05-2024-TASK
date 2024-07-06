/* Write a program to print the reverse of a number
input: 218     output: 812
input:-210     output: -12 */
var num = prompt("Enter positive/negative number to reverse it : ");
// var num = "-124";
var originalNum = num;
var negative = false;
if (num[0] == "-") {
    negative = true;
    num = Number(num) * -1;
}
else {
    num = Number(num);
}
var rev = 0;
while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
};
if (negative) {
    var rev = String(rev * -1);
    // rev = "-"+String(rev)
}
console.log(`Reverse of input (${originalNum}) is ${rev}`);
document.write(`<h3>Reverse of input (${originalNum}) is ${rev}</h3><hr>`);

//method 2 - using methods
var num = prompt("Enter positive/negative number to reverse it : ");
// var num = "-124";
var originalNum = num;
var negative = false;
if (num[0] == "-") {
    negative = true;
    num = String(Number(num) * -1);
}
var rev = Number(num.split("").reverse().join(""));
if (negative) {
    console.log(`Reverse of input (${originalNum}) is -${rev}`);
    document.write(`<h3>Reverse of input (${originalNum}) is -${rev}</h3><hr>`);
}
else {
    console.log(`Reverse of input (${originalNum}) is ${rev}`);
    document.write(`<h3>Reverse of input (${originalNum}) is ${rev}</h3><hr>`);
}

/*Write a program to print min,max and followed by rest of the numbers
input: 13675      output: 17365*/
var num = prompt("Enter a multi digit number : ");
// var num = "1294";
var min = num[0];
var max = num[0];
var rem = "";

for (let i = 1; i < num.length; i++) {
    if (num[i] < min) {
        min = num[i];
    }
    if (num[i] > max) {
        max = num[i];
    }
}
for (let i = 0; i < num.length; i++) {
    if (num[i] !== min && num[i] !== max) {
        rem += num[i];
    }
}
console.log(`Smallest number from input (${num}) is : ${min}`);
console.log(`Largest number from input (${num}) is : ${max}`);
console.log(`Remaining digits are : ${rem}`);
console.log(`combined : ${min}${max}${rem} `);

document.write(`<h3>Smallest number from input (${num}) is : ${min}</h3>`);
document.write(`<h3>Largest number from input (${num}) is : ${max}</h3>`);
document.write(`<h3>remaining digits are : ${rem}<h3>`);
document.write(`<h3>combined : ${min}${max}${rem}</h3><hr>`);

//method 2 - using for of
var num = prompt("Enter a multi digit number : ");
//var num = "1294";
var min = num[0];
var max = num[0];
var rem = "";
for (let i of num) {
    if (i < min)
        min = i
    if (i > max)
        max = i
}
console.log(`Smallest number from input (${num}) is : ${min}`);
console.log(`Largest number from input (${num}) is : ${max}`);
document.write(`<h3>Smallest number from input (${num}) is : ${min}</h3>`);
document.write(`<h3>Largest number from input (${num}) is : ${max}</h3>`);
for (let i of num) {
    if (i !== min && i !== max)
        rem += i;
}
console.log(`remaining digits are : ${rem}`);
console.log(`combined : ${min}${max}${rem} `);
document.write(`<h3>remaining digits are : ${rem}<h3>`);
document.write(`<h3>combined : ${min}${max}${rem}</h3><hr>`);

// min max including duplicates
var num = prompt("Enter a multi digit number : ");
//var num = "1294";
var min = num[0];
var max = num[0];
var rem = "";
var minCount = 0;
var maxCount = 0;
for (let i of num) {
    if (i < min)
        min = i
    if (i > max)
        max = i
}
console.log(`Smallest number from input (${num}) is : ${min}`);
console.log(`Largest number from input (${num}) is : ${max}`);
document.write(`<h3>Smallest number from input (${num}) is : ${min}</h3>`);
document.write(`<h3>Largest number from input (${num}) is : ${max}</h3>`);
for (let i of num) {
    if (i !== min && i !== max)
        rem += i;
    if (i == min) {
        minCount++;
        if (minCount > 1)
            rem += i;
    }
    if (i == max) {
        maxCount++;
        if (maxCount > 1)
            rem += i;
    }
}
console.log(`remaining numbers are : ${rem}`);
console.log(`combined : ${min}${max}${rem} `);
document.write(`<h3>remaining numbers are : ${rem}<h3>`);
document.write(`<h3>combined : ${min}${max}${rem}</h3><hr>`);

/*Write a program to check whether a number is palindrome or not.
input: 121    output: 121 is palindrome
input: 467    output: 467 is not a palindrome*/
var num = prompt("Enter a multi digit number to check palindrome : ");
var rev = num.split("").reverse().join("");
if (num === rev) {
    console.log(`The given input (${num}) is a palindrome`);
    document.write(`<h3>The given input (${num}) is a palindrome</h3>`);
}
else {
    console.log(`The given input (${num}) is not a palindrome`);
    document.write(`<h3>The given input (${num}) is not a palindrome</h3><hr>`);
}