//(quotes) is an array of object.
let quotes=[
    {
        text:"“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
        author:"― J.K. Rowling",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg",
        bgImg: "url('images/svg1.png')",
    },
    {
        text:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1216826209i/114059._CR0,24,200,200_.jpg",
        bgImg:"url('images/svg2.png')"
    },
    {
        text:"“We accept the love we think we deserve.”",
        author:"― Stephen Chbosky",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1599132962i/12898._UX200_CR0,25,200,200_.jpg",
        bgImg:"url('images/svg15.png')"
    },
    {
        text:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author:"― Ralph Waldo Emerson",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1393555704i/12080._UX200_CR0,34,200,200_.jpg",
        bgImg:"url('images/svg4.png')"
    },
    {
        text:"“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
        author:"― Bill Keane",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1320885123i/3230608._UY200_CR21,0,200,200_.jpg",
        bgImg:"url('images/svg5.png')"
    },
    {
        text:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author:"― Ralph Waldo Emerson",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1393555704i/12080._UX200_CR0,34,200,200_.jpg",
        bgImg:"url('images/svg6.png')"
    },
    {
        text:"“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”",
        author:"― Dr. Seuss",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg",
        bgImg:"url('images/svg7.png')"
    },
    {
        text:"“That which does not kill us makes us stronger.”",
        author:"― Friedrich Nietzsche",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1651474065i/1938._UX200_CR0,35,200,200_.jpg",
        bgImg:"url('images/svg8.png')"
    },
    {
        text:"“It is never too late to be what you might have been”",
        author:"― George Eliot",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596202587i/173._UX200_CR0,2,200,200_.jpg",
        bgImg:"url('images/svg9.png')"
    },
    {
        text:"“If you judge people, you have no time to love them.”",
        author:"― Mother Teresa",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1263888735i/838305._UX200_CR0,7,200,200_.jpg",
        bgImg:"url('images/svg10.png')"
    },
    {
        text:"“If you can't explain it to a six year old, you don't understand it yourself.”",
        author:"― Albert Einstein",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg",
        bgImg:"url('images/svg11.png')"
    },
    {
        text:"“Everything you can imagine is real.”",
        author:"― Pablo Picasso",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1684536524i/3253._UX200_CR0,40,200,200_.jpg",
        bgImg:"url('images/svg12.png')"
    },
    {
        text:"“We don't see things as they are, we see them as we are.”",
        author:"― Anaïs Nin",
        img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1585811222i/7190._UX200_CR0,18,200,200_.jpg",
        bgImg:"url('images/svg13.png')"
    }
];
//Initialize DOM
const generateQuote=document.getElementById("generateQuote");
const quoteText=document.getElementById("quoteText");
const quoteAuthor=document.getElementById("quoteAuthor");
const authorImg=document.getElementById("authorImg");
const quoteCaption=document.getElementById("quoteCaption");
generateQuote.addEventListener("click", generateQuoteFunc);
//default value before firing the click event
setProperties(0);
function setProperties(index){
    authorImg.innerHTML=`<img src="${quotes[index].img}" alt="${quotes[index].author}-img" class="rounded-circle"></img>`
    quoteText.innerHTML=quotes[index].text;
    quoteAuthor.innerHTML=quotes[index].author;
    quoteCaption.style.backgroundImage=quotes[index].bgImg;
    quoteCaption.style.backgroundSize='100% 100%';
    quoteCaption.style.backgroundRepeat='no-repeat';
    quoteCaption.style.backgroundPosition='bottom center';
}

let previousIndex=0;
function generateQuoteFunc(){
        let randomIndex=Math.floor(Math.random()*quotes.length);
        while(previousIndex === randomIndex)
            randomIndex=Math.floor(Math.random()*quotes.length);
        previousIndex=randomIndex;
        //set properties right after firing the click event
        setProperties(randomIndex);
}