function mensagem(event){
    event.preventDefault()

    let name = document.getElementById("inputName").value;
    let years = document.getElementById("inputYears").value;
    let height = document.getElementById("inputHeight").value;
    let contentResult = document.getElementById("result");
    let mensagem = document.getElementById("message");



    mensagem.innerHTML = "meu nome e " + name + " tenho " + years + " anos e " + height + " de altura";

    contentResult.classList.remove("hide")

    


}
