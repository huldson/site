
let botao = document.querySelector("#add_nota")



botao.addEventListener("click", function(){
    let cedula = document.querySelector("#reais")
    let cedul = cedula.value
    let nota = +cedul
   
     let print = document.querySelector("#qw")
    console.log( typeof nota)
    
   
    if(typeof nota === 'number'){
    let nota1=0,nota5=0,nota10=0,nota20=0,nota50=0,nota100=0
    console.log(nota)
     while(nota>=100){
        nota100++
        nota=nota-100
   
    }
    if(nota100!=0){
   print.innerHTML = nota100 +' notas de R$100'+'<br>'+ print.innerHTML
    }

    while(nota>=50){
   
       nota50++
       nota=nota-50
    }
    if(nota50!=0){
     print.innerHTML =  nota50+' notas de R$50'+'<br>' + print.innerHTML
    
    }
    while(nota>=20){
   
        nota20++
        nota=nota-20 
    }  
    if(nota20!=0){
      print.innerHTML = nota20+' notas de R$20' +'<br>'+ print.innerHTML
    
    }  
    while(nota>=10){
        nota10++
        nota=nota-10
     
    }
    if(nota10!=0){
      print.innerHTML = nota10+' notas de R$10'+'<br>' + print.innerHTML
    
    }
    while(nota>=05){
        nota5++
        nota=nota-05
    } 
    if(nota5!=0){
        print.innerHTML = nota5+' notas de R$5'+'<br>' + print.innerHTML
    
    }
   while(nota>=01){
       nota1++       
       nota=nota-01 
    }
       if(nota1!=0){
     print.innerHTML= nota1+' moedas de R$1' +'<br>' + print.innerHTML
    
    }
    //print.innerHTML = nota100 +' notas de R$100 '+'<br>' + nota50+' notas de R$50 '+'<br>' + nota20+' notas de R$20'+'<br>' + nota10+' notas de R$10'+'<br>'+nota5+' notas de R$5'+'<br>' +  nota1+' moedas de R$1'
}
    else{

        print.innerHTML= "digite um valor valido" 
    }
    
    

    
}
    
    
    
    
    )
   