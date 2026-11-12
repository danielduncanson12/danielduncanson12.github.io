
async function getQuote(requestedDay){
    const response = await fetch('quotes.json');
    const jsonQuotes = await response.json();
    const QuoteObj = jsonQuotes[requestedDay % jsonQuotes.length]

    return QuoteObj;
}


async function displayQuote(dayIndex){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let month = months[d.getMonth()];
    const todaysQuote = await getQuote(d.getDate() + dayIndex);

    document.getElementById("quoteheader").textContent = `${dayLabels.at(dayIndex)}'s ${todaysQuote.type}`;
    document.getElementById("quotetext").textContent = `"${todaysQuote.quote}"`;
    document.getElementById("quoteauthor").textContent = ` - ${todaysQuote.author}`
    yesterdayButton.style.display = "";
    tomorrowButton.style.display = "";

    if (dayIndex === 0){ 
        document.getElementById("quoteheader").textContent = `A ${todaysQuote.type} for ${month} ${d.getDate()}`;
    }
    if (dayIndex < -2){
        document.getElementById("quoteheader").textContent=""
        document.getElementById("quotetext").textContent = '"One can only exist in this present moment.\nStop looking at quotes from the past."';
        document.getElementById("quoteauthor").textContent = "- Me."
        yesterdayButton.style.display = "none";
    }
    if (dayIndex >2){
        document.getElementById("quoteheader").textContent=""
        document.getElementById("quotetext").textContent = '"No spoilers!"';
        document.getElementById("quoteauthor").textContent = "- Matilde"
        tomorrowButton.style.display = "none";
    }
}

const dayLabels = ["today", "tomorrow", "overmorrow", "ereyesterday", "yesterday"];
let dayIndex = 0;
// -3: error, -2: ereyesterday, -1: yesterday, 0:today, 1:tmrw, 2:overmorrow, 3:error

displayQuote(dayIndex);

const yesterdayButton = document.getElementById("yesterday");
const tomorrowButton = document.getElementById("tomorrow");


document.getElementById("yesterday").addEventListener("click", () => {
    dayIndex = dayIndex - 1;
    displayQuote(dayIndex)
});

document.getElementById("tomorrow").addEventListener("click", () => {
    dayIndex = dayIndex + 1;
    displayQuote(dayIndex)
});


