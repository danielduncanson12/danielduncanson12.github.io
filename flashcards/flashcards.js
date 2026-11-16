const form = document.getElementById("pgnrForm");

async function translator(event) {
    event.preventDefault();

    const pgnrReq = document.getElementById("pgnr");
    const pgnr = parseInt(pgnrReq.value);
    const worker = `https://translator-proxy.danielduncanson12.workers.dev/?pgnr=${pgnr}`;
    const output = document.getElementById("translator-prototype");
    output.textContent = "Vocabulary extraction initiated...";

    try {
        const response = await fetch(worker)
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } 
    catch (err) {
        output.textContent = `An error occurred (I can't code). Error type: ${err.message}`;
    }

    const jsonRes = await fetch("https://raw.githubusercontent.com/danielduncanson12/Website/main/flashcards/book_pages.json");
    const allPages = await jsonRes.json();
    const text = allPages[pgnr] || "Page not found.";

    document.getElementById("translator-prototype2").textContent = text;
}

form.addEventListener("submit", translator);