/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let fare = 800;
let age = 55;
let isStudent = false;
let isSeniorCitizen = true;

if (age < 10) {
    console.log("Free");
}
else if (isStudent) {
    discount = fare * 50 / 100;
    fare = fare - discount;
    console.log("You get 50% discount and you're fare is :", fare, "Taka");
}
else if (isSeniorCitizen && age >= 60) {
    discount = fare * 15 / 100;
    fare = fare - discount;
    console.log("You get 15% discount and you're fare is :", fare, "Taka");
}
else {
    console.log("yor're fare is :", fare, "Taka");
}