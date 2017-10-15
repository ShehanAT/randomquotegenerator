
const quotes = [//list of quote objects with source, citation, year and tag properties
    //four tag types: life, motivational, funny, and love
    {
        "quote":"Two roads diverged in a yellow wood, and I took the one less traveled by, And that has made all the difference",
        "source":"Robert Frost",
        "citation":"Mountain Interval",
        "year":"1916",
        "tags":"life"
    },
    {
        "quote":"Life is really simple, but we insist on making it complicated",
        "source":"Confucius",
        "citation":"",
        "year":"500BC",
        "tags":"life"
    },
    {
        "quote":"You miss 100% of the shots you don't take",
        "source":"Wayne Gretzky",
        "citation":"interview in 1996",
        "year":"1996",
        "tags":"motivational"
    },
    {
        "quote":"Only thing we have to fear is fear itself",
        "source":"Theodore Roosevelt",
        "citation":"Inaugral speech",
        "year":"1933",
        "tags":"motivational"
    },
    {
        "quote":"The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart",
        "source":"Helen Keller",
        "citation":"Book",
        "year":"1921",
        "tags":"love"
    },
    {
        "quote":"True love stories never have endings",
        "source":"Richard Bach",
        "tags":"love"
    },
    {
        "quote":"Wine is constant proof that God loves us and loves to see us happy",
        "source":"Benjamin Franklin",
        "citation":"Bizarre:An Original, Literary Gazette",
        "year":"1854",
        "tags":"funny"
    },
    {
        "quote":"Behind every great man is a woman rolling her eyes",
        "source":"Jim Carrey",
        "tags":"funny"
    }

];
const colors = ["#0431B4","#04B4AE","#01DF74","#FFBF00","#FF0000","#DF01A5","#848484","#151515"];//background colors for the page
var checkArr = [];//array to check if all quotes have been displayed at least once before reseting

function getRandomQuote(){//generates random quotes using Math.random()
    var random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}
function changeBackground(){//changes background color using Math.random()
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function checkRepeat(quoteObject){//checks if each quote has been displayed once before reseting
    if (checkArr.length === 8){//reseting the array if all 8 quotes have been displayed
        console.log(checkArr);
        checkArr = [];
    }
    if (checkArr.indexOf(quoteObject.quote) === -1){//checking  for repeats in the array
        checkArr.push(quoteObject.quote);
        return true;
    }
    else{
        return false;
    }
}
function printQuote(){//prints out a random quote and changes the background color
    var quote = getRandomQuote();
    if (checkRepeat(quote) == true){
        var backColor = changeBackground();
        var htmlString = "<p class='quote'>";
        htmlString += quote.quote;
        htmlString += "</p>";
        htmlString += "<p class='source'>";
        htmlString += quote.source;
        if (quote.citation){
            htmlString += "<span class='citation'>" + quote.citation + "</span>";
        }
        if (quote.year){
            htmlString += "<span class='year'>" + quote.year + ", " +quote.tags+"</span>";
        }
        htmlString += "</p>";
        console.log(quote.quote);//prints out the quotes to check for repeats
        $('#quote-box').html(htmlString);
        document.querySelector('body').style.backgroundColor = backColor;
    }
    else{
        printQuote();//recurses the function if the generated quote has been display once in a span of 8 quotes
    }
    
}

setInterval(printQuote, 30000);//timer that prints a new quote every 30 seconds


