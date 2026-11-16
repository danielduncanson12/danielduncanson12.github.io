const form = document.getElementById("pgnrForm");

async function translator(event) {
    event.preventDefault();

    const pgnrReq = document.getElementById("pgnr");
    const pgnr = parseInt(pgnrReq.value);
    const worker = "https://translator-proxy.danielduncanson12.workers.dev/";
    const output = document.getElementById("translator-prototype")
    output.textContent = "Extracting vocabulary...";

    try{
        const response = await fetch(worker, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({pgnr: pgnr})
            })
        const data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);
    } 
    catch (err){output.textContent = `An error occurred (I can't code). Error type: ${err.message}`};

    document.getElementById("translator-prototype2").textContent = 
};
    
form.addEventListener("submit", translator)