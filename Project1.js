//variables and constants
let button_1=document.querySelector("#button-1");
let quote=document.querySelector(".quote");
let quote_author=document.querySelector(".quote-author");
const quotes=["The only way to do great work is to love what you do.","In the end, it's not the years in your life that count. It's the life in your years.","The greatest glory in living lies not in never falling, but in rising every time we fall.","Believe you can and you're halfway there.","The only impossible journey is the one you never begin.","Life is 10% what happens to us and 90% how we react to it.","Success is not final, failure is not fatal: It is the courage to continue that counts.","The only limit to our realization of tomorrow will be our doubts of today.","The best way to predict the future is to create it.","The purpose of our lives is to be happy.","Success is not final, failure is not fatal: It is the courage to continue that counts."];
const quotes_author=["Steve Jobs","Abraham Lincoln","Nelson Mandela","Theodore Roosevelt","Tony Robbins","Charles R. Swindoll","Winston Churchill","Franklin D. Roosevelt","Peter Drucker"," Dalai Lama"," Winston Churchill"];
var random;
//Javascript DOM
button_1.addEventListener("click",skip);
function skip(){
    random=Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[random];
    quote_author.innerHTML=quotes_author[random];
    i++;
}
