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
        /* if para checar se o . ja foi colocado para nao repiti-lo */
      if(digit === "." && this.cuoptext.innerText.includes(".")) {
         return;
      }
        this.currentoperation = digit
        this.uptadescreen()
 }

 /* processa todos os operadores
    proop = processOperation
 */
   proop(operation) {
      //obtendo valores anterioes e recentes
      let operationvalue
      const previus = +this.preoutex.innerText
      const current = +this.cuoptext.innerText

      switch(operation) {
          case "+":
             operationvalue = previus + current
             this.uptadescreen(operationvalue,
              operation,current,previus)       
         break
         default:
         return
      }
   }               

  //trocando ou atualizando valores da tela da calculadora
    uptadescreen(
      operationvalue = null
      ,operation = null
      ,current = null
      ,previus = null
      ) {
        this.cuoptext.innerText += this.currentoperation

        console.log(operationvalue, operation, previus ,current)
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
            calc.proop(value)
        }
        })
})

// parei no minuto  37:34 
