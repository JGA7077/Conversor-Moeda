function getData() {
    fetch('https://economia.awesomeapi.com.br/all/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let currencyUSD = parseFloat((data.USD.high))
        
        function converter() {
            let message = document.querySelector(".message")
            let valueUser = parseFloat(document.querySelector('#valueUser').value)
            let USDtoBRL = valueUser * currencyUSD
            
            message.innerHTML = `
            ${valueUser.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
             em Real é: 
             ${USDtoBRL.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        }

        converter()
    })
}

