// Declarando o objeto com as cotações
const cotacoes = {
    rates:{
        CAD:1.5567,HKD:9.1428,ISK:162.2,PHP:57.167,
        DKK:7.4396,HUF:361.16,CZK:26.747,AUD:1.6152,
        RON:4.86,SEK:10.408,IDR:17501.07,INR:86.861,
        BRL:6.2117,RUB:88.6075,HRK:7.5418,JPY:123.38,
        THB:36.801,CHF:1.0742,SGD:1.6039,PLN:4.4579,
        BGN:1.9558,TRY:8.9037,CNY:7.9861,NOK:10.7238,
        NZD:1.7533,ZAR:19.2673,USD:1.1797,MXN:24.8461,
        ILS:4.0382,GBP:0.9153,KRW:1383.16,MYR:4.8822
    },
    base:"EUR",
    date:"2020-09-17"
}

const carregaCotacoes = async () => {
    let response = await fetch('https://api.exchangeratesapi.io/latest');
    let cotacoes = await response.json();
    console.log(cotacoes);
}

function mostraCotacoes(rates){

    let moedas = Object.keys(rates);
    let valores = Object.values(rates);
    
    let conteudo = '';
    for (let i = 0; i < moedas.length; i++) {
        
        conteudo = conteudo + `
            <article>
                <h2>${moedas[i]}</h2>
                <span>${valores[i]}</span>
            </article>`
    }
    document.getElementById("outrasCotacoes").innerHTML = conteudo;
}

// carregaCotacoes();