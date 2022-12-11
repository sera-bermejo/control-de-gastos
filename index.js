function createInput() {
    const newCantidad = document.createElement("input")
    newCantidad.setAttribute("type", "number")
    newCantidad.setAttribute("placeholder", "Cantidad")
    newCantidad.setAttribute("id", "cantidad")

    const newConcepto = document.createElement("input")
    newConcepto.setAttribute("type", "text")
    newConcepto.setAttribute("placeholder", "Concepto")
    newConcepto.setAttribute("id", "concepto")

   
    const button = document.querySelector("#button")
    button.addEventListener("click", getInputValue)


    const target = document.querySelector("body")
    target.appendChild(newConcepto)
    target.appendChild(newCantidad)

    target.appendChild(button)

}

function getInputValue() {
	const valueCantidad = parseInt(document.getElementById("cantidad").value)
    const valueConcepto = document.getElementById("concepto").value
    updateAhorro(valueCantidad)
    if(valueCantidad < 0) {
        updateGasto(valueCantidad)
    } else {
        updateIngreso(valueCantidad)
    }
  
    updateHistorial(valueConcepto, valueCantidad)
    
    document.querySelector("#concepto").value = "";
    document.querySelector("#cantidad").value = "";
    
}

function updateAhorro(integer) {
    const newP = document.getElementById("p-ahorro")
    let value = parseInt(newP.textContent)
  
    // hacemos un if para no mostrar ahorros en negativo, pues no serían ahorros
    if (value + integer < 0) {
        newP.textContent = 0
    } else {
        newP.textContent = value + integer
    }
}

function updateIngreso(integer) {
    const newP = document.getElementById("p-ingreso")
    let value = parseInt(newP.textContent)
    newP.textContent = value + integer         
}

function updateGasto(integer) {
    const newP = document.getElementById("p-gasto")
    let value = parseInt(newP.textContent)
    newP.textContent = value + integer   
  
}

function updateHistorial(concepto, cantidad) {
    const newP = document.createElement("p")
    newP.textContent = concepto + " " + cantidad
    const target = document.getElementById("Historial")
    
    target.appendChild(newP) 

}

createInput();

