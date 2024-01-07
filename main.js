
async function fetchData(){ 
    const drugOne = 'tylenol';
    const drugTwo = 'adivil'; 
    const response = await fetch('https://api.respell.ai/v1/run', {
    method: 'POST',
    headers: {
        // This is your API key
        authorization: 'Bearer 9787c818-b0db-45a1-a6f0-8b8386b9cc0e',
        accept: 'application/json',
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        spellId: 'encQaTX94iDzu6WnW-XRU',
        // This field can be omitted to run the latest published version
        spellVersionId: 'yNRUrndVuU04sHUr2WvTr',
            // Fill in values for each of your 2 dynamic input blocks
        inputs: {
        drug_1: drugOne,
        drug_2: drugTwo,
        },
    }),
    });
    const data = await response.json();
    document.getElementById("drug-interaction").innerHTML = JSON.stringify(data.outputs);
    console.log(data); // Do something with the response data
}
