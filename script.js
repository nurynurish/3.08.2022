document.getElementById("btn-tax").addEventListener("click", taxCalculator)

function taxCalculator(){
    event.preventDefault();
    var price;
    var tax;
    var total;
    const tax_rate = 18;
    price = document.getElementById("price").value;
    tax = (price * tax_rate) /100;
    total = parseInt(price) + parseInt(tax);
    resultText = "Starting price of the product: " +"<strong>" + price +"</strong>" + "<br>"
                +"The tax amount of the product: " +"<strong>" + tax +"</strong>" + "<br>"
                + "Selling price of the product: " +"<strong>" + total + "</strong>";
    document.getElementById("result").innerHTML = resultText;
}