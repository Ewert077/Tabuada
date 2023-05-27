function tabuada (){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
    window.alert('Por favor, digite um numero!')
     
    } else { 
        let n = Number(num.value)
        let c = 1
        tab.innerHTML ='' //isso serve para limpar a tela//
        while (c <= 10) {
            let item = document.createElement('option')//serve para criar um botão de opção direto no JS//
             item.text = `${n} x ${c} = ${n*c}`// (item.text)parte de dentro do option acima//
             item.value = `tab ${c}`            //selector de item//
             tab.appendChild(item)                //tab.appendchild significa adicionar um elemeto filho//
             c++                                  // resultado MAIS o numero somado//
        }
      
    }
}








