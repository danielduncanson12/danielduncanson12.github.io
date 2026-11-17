const form = document.getElementById("pgnrForm");

async function translator(event) {
    event.preventDefault();

    const pgnrReq = document.getElementById("pgnr");
    const pgnr = parseInt(pgnrReq.value);
    const worker = `https://translator-proxy.danielduncanson12.workers.dev/?pgnr=${pgnr}`;
    const output = document.getElementById("vocab-cards");
    output.textContent = "Vocabulary extraction initiated...";

    try {
        const response = await fetch(worker)
        const data = await response.json();
        output.textContent = ""
        data.vocabulary_list.forEach(element => {
            const card = document.createElement("div");
            card.innerHTML = `
            <a id="${element.word_in_text}" translation="${element.english_translation}"> ${element.word_in_text} </a>
            `;

            output.appendChild(card);
            let isOpen = false;

            card.addEventListener("click", () =>{
                isOpen = !isOpen;
                if (isOpen) {
                    card.innerHTML = `
                    <a id="${element.word_in_text}"> ${element.word_in_text} </a>
                    <p> English: ${element.english_translation} <br>
                    Base: ${element.base_form} <br>
                    Type: ${element.part_of_speech} <br>
                    Notes: ${element.notes} </p>
                `;}
                else {
                  card.innerHTML =
                  `<a id=${element.word_in_text} translation="${element.english_translation}"> ${element.word_in_text} </a>`
                }
            })
        });

    } 
    catch (err) {
        output.textContent = `It appears that I cannot code. Error type: ${err.message}`;
    }

    const jsonRes = await fetch("https://raw.githubusercontent.com/danielduncanson12/Website/main/flashcards/book_pages.json");
    const allPages = await jsonRes.json();
    const text = allPages[pgnr] || "Page not found.";
    document.getElementById("vocab-title").textContent = `Tricky vocabulary for page ${pgnr}`

    document.getElementById("page-text").textContent = text;
}

form.addEventListener("submit", translator);

