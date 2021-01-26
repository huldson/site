let button = document.querySelector("#add_nome")// pega oque tiver no arquiovo do button
button.addEventListener("click",function(evento){
    let nome = document.querySelector("#nome")//são as tudo que tem nesse documento as id tem que ser igual a do html
    let ultimonome = document.querySelector("#ultimonome")
    let idade = document.querySelector("#idade")
    let nometeste = nome.value // value da o valor que tem no documento 
    let ultimonometeste = ultimonome.value
    let idadeteste = idade.value
    console.log(nometeste,ultimonometeste,idadeteste)
    let x = document.querySelector("#log")
   // let lista = document.querySelector("#list")
   // lista.innerHTML = "<br>"+ "<h4>"+input.value+"</h4>" + lista.innerHTML 
  x.innerHTML = "<br>"+"<h1>"+nometeste+"  "+ultimonometeste+idadeteste
})