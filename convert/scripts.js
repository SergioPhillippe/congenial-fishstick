//Cotação de moedas do dia
const USD = 5.18
const EUR = 5.91
const GBP = 6.86
const JPY = 0.032
const ARS = 0.035

//obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Colocando o input amount para receber somente números.
amount.addEventListener("input", () => {
  
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Pegando o evento de submit (enviar) do formulário
form.onsubmit = () => {
  event.preventDefault()

  switch(currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
    case "JPY":
      convertCurrency(amount.value, JPY, "¥")
      break
    case "ARS":
      convertCurrency(amount.value, ARS, "$")
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    //Exibindo a cotação da moeda seleciondada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`
    
    //Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)

    //Remove a classe do footer, removendo ele da tela
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente")
  }
}
// Formata a moeda para o real brasileiro (BRL)
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}