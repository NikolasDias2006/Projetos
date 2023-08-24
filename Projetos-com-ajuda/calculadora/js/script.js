/* PreviousOperationText */
const preoutex =  document.querySelector("#previous-operation")
/*  CurrentOPerationText */
const cuoptext = document.querySelector("#current-operation")
/* há varios botoes por isso queryselectorALL */
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    /* o constructor add items que sera obrigatorio colocar ao usa as variaveis que está no constructor sem precisar poluir o codigo*/
     constructor(preoutex,cuoptext) {
        this.preoutex = preoutex
        this.cuoptext = cuoptext
        this.currentoperation = ""
     }

     //adicionando digito para a tela da calculadora
    adddigit(digit) {
        this.currentoperation = digit
        this.uptadescreen()
 }

 //trocando/atualizando valores da tela da calculadora

    uptadescreen() {
        this.cuoptext.innerText += this.currentoperation
 }
}


   // add novos elementos...
   const calc = new Calculator(preoutex,cuoptext)


   /* Adicionando os eventos */
   buttons.forEach((btn) => {
        btn.addEventListener("click",(e) => { 
         const value = e.target.innerText

         /* + para converter para numero */
        if(+value >=0 || value === ".") {
           calc.adddigit(value)
        } else {
            console.log("OP: "+value)
        }
        })
})

/* parei no minuto  29:55*/
