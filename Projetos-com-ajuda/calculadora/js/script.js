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
      //checando se o valor do curret está vazio:
      if(cuoptext.innerText === "" && operation !== "C"){
         //troca de operaçao
         if(this.preoutex.innerText !== "") {
            this.changeoperation(operation)
         }
         return
      }

      //obtendo valores anterioes e recentes
      let operationvalue
      const previus = +this.preoutex.innerText.split(" ")[0]
      const current = +this.cuoptext.innerText

      switch(operation) {
          case "+":
             operationvalue = previus + current
             this.uptadescreen(operationvalue,
              operation,current,previus)       
         break

         case "-":
             operationvalue = previus - current
             this.uptadescreen(operationvalue,
              operation,current,previus)       
         break

         case "/":
             operationvalue = previus / current
             this.uptadescreen(operationvalue,
              operation,current,previus)       
         break

         case "*":
             operationvalue = previus * current
             this.uptadescreen(operationvalue,
              operation,current,previus)       
         break

         case "DEL":
             /*ProcessDelOperator*/
             this.prodelop()       
         break

         case "CE":
            /*ProcessCeOperator*/ 
             this.proceop()       
         break

         case "C":
            /*ProcessClearAll*/ 
             this.proclear()       
         break

         case "=":
            /*ProcessEqualOPerator*/ 
             this.proequalop()       
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
        console.log(operationvalue, operation, previus ,current)

        if(operationvalue === null) {
         this.cuoptext.innerText += this.currentoperation
        } else {
          // checando se o valor é zero,apenas adicionando value
          if(previus === 0) {
            operationvalue = current
          }
         //adicionando o valor de current para previus
         this.preoutex.innerText =`${operationvalue} ${operation}`
         this.cuoptext.innerText = ""
         }
 }

   //troca de operadores matematicos
    changeoperation(operation) {
      //math Operation
      const mathop = ["*","/","+","-"]
      
      if(!mathop.includes(operation)) {
         return 
       }

      this.preoutex.innerText = this.preoutex.innerText.slice(0,-1)+operation
   }
   /*funcao para deletar o ultimo digito*/
   prodelop() {
      this.cuoptext.innerText = this.cuoptext.innerText.slice(0,-1)
   }
   /*Limpar todos os numeros do curret*/
   proceop(){
      this.cuoptext.innerText = ""
   }
   /*Limpa todos os numeros que digitou*/
   proclear() {
      this.preoutex.innerText = ""
      this.cuoptext.innerText = ""
      
   }

   /*function para mostrar o resultado*/
   proequalop(){
      /*Procurando a operaçao*/
      const operation = preoutex.innerText.split(" ")[1]
         /*Fazer resultado final*/
       this.proop(operation)
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

// parei no minuto  48:24
