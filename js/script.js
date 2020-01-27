function addBola(){
    var bola = document.createElement('div');
    bola.setAttribute("class" , "bola");
    var p1 = Math.floor(Math.random() * 900);
    var p2 = Math.floor(Math.random() * 300);
    
    if(p2<100){
        p2=p2+100;
    }
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    bola.setAttribute("onClick", "estourar(this)");

    document.body.appendChild(bola);

}
function estourar(elemento){
    document.body.removeChild(elemento);

}
function inicial(){
    setInterval(addBola , 1000);

}