const button = document.getElementById("botao")
const select = document.getElementById("seletorDeMoeda")

const dolar = 5.2
const euro = 5.9
const bitcoin = 103000.00

const cambioExchange = () => {
    const inputReais = document.getElementById("inputR").value
    const textoDoValorReal = document.getElementById('valor-do-real')
    const TextoDoDolar = document.getElementById ('valor-do-dolar')

        textoDoValorReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
        ).format(inputReais)

        if (select.value === 'US$ Dólar americano' ) {
            TextoDoDolar.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(inputReais/dolar)    
        }
        
        if (select.value === '€ Euro' ) {
        TextoDoDolar.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
        ).format(inputReais/euro)
        }  

        if (select.value === '₿ Bitcoin') 
        { TextoDoDolar.innerHTML = (inputReais/bitcoin) }
        
        
    

}

const mudançaMoeda =  () => {
const legendaMoeda = document.getElementById('descriçãoMoeda')
const   imgPais = document.getElementById('img-pais')

    if (select.value === '€ Euro'  ) 
    { legendaMoeda.innerHTML = 'euro'  
    imgPais.src="./img/euro1.png"}
    
    if (select.value === 'US$ Dólar americano') 
    {legendaMoeda.innerHTML = 'Dólar americano'  
    imgPais.src="./img/Sem título.png"}
    
    if (select.value === '₿ Bitcoin') 
    {legendaMoeda.innerHTML = '₿ bitcoin'  
      imgPais.src ="./img/Design sem nome (1) 1 (1).png"}

    

     mudançaMoeda ()

} 



button.addEventListener('click',cambioExchange)
select.addEventListener ('change',mudançaMoeda)