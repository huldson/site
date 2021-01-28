/* enqueue -> Enfileirar, adicionar itens na fila, no final
dequeue -> Desinfileirar, remover o primeiro item da fila e o retorna
size -> Retorna o tamanho da fila
isEmpty -> Retornar se a fila está ou não vazia
front -> Retorna o primeiro elemento da fila sem removê-lo */
class Fila{
    constructor(){
        this.vetor= []
        this.contador = 0
    }



enqueue(elemento){
 this.vetor.push(elemento)
 this.contador++

}
dequeue(){
 this.contador--
return   this.vetor.shift()

}
size(){
return this.contador
}
isEmpty(){
return this.contador === 0

}
front(){
return this.vetor[0]

}
}



let fila2 = new Fila()
/* 
fila2.enqueue(3)
fila2.enqueue(2)
fila2.enqueue(4)
console.log(fila2.size())
 console.log(fila2.size())
let x = fila2.dequeue()
 console.log(fila2.size())
 console.log( fila2.isEmpty())
 console.log( fila2.front())  
 fila2.dequeue()
 console.log( fila2.front())
console.log(fila2)
 */


class Filap extends Fila{
    constructor(){
        super()


    }
    enqueue(elemento,prioridade){
        
        this.vetor.push(elemento)
        this.contador++
     
       } 
}


let y = new Filap()

y.enqueue(2)
y.enqueue(3)
console.log(y)


