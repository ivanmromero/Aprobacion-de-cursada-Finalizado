"use strict"

// Validacion de datos
document.getElementById("aceptar").onclick=function (){
    
    var nombre=document.getElementById("nom").value;
    var apellido=document.getElementById("ape").value;
    var DNI=document.getElementById("dni").value;
    var mail=document.getElementById("mail").value;
       
    document.getElementById("advertenciadatos").innerHTML="";
    document.getElementById("advertenciadatos").style.display="none";
    var advertencia=document.getElementById("advertenciadatos");
    
    var datoscorrectos=0;
        
        // Validacion Nombre
        var letra="";
        var cont=0;

        for(var i=0;i<nombre.length;i++){
            letra=nombre.substr(i,1);
            if(!isNaN(parseInt(letra))){
                cont++;
            }
        }

        if(nombre.length<3 || cont>=1) {
            advertencia.innerHTML+="*INGRESE NOMBRE CORRECTO"+"<br/>";
            document.getElementById("advertenciadatos").style.display="block";
            var letra;
            var cont=0;
        }
        else datoscorrectos++;

        // validacion Apellido
        letra="";
        cont=0;

        for(var i=0;i<apellido.length;i++){
            letra=apellido.substr(i,1);
            if(!isNaN(parseInt(letra))){
                cont++;
            }
        }
        
        if(apellido.length<3 || cont>=1){
            advertencia.innerHTML+="*INGRESE APELLIDO CORRECTO"+"<br/>";
            document.getElementById("advertenciadatos").style.display="block";
        }
        else datoscorrectos++;

        // Validacion DNI
        letra="";
        cont=0;

        for(var i=0;i<DNI.length;i++){
            letra=DNI.substr(i,1);
            if(isNaN(parseInt(letra))){
                cont++;
            }
        }

        if(DNI.length<7 || cont>=1){
            advertencia.innerHTML+="*INGRESE DNI CORRECTO"+"<br/>";
            document.getElementById("advertenciadatos").style.display="block";
        }
        else datoscorrectos++;

        // Validacion Mail

        letra="";
        cont=0;
        
            for(var i=0;i<mail.length;i++){
                letra=mail.substr(i,1);
                if(letra=="@" || letra=="."){
                    cont++;
                }
            }
            
        if(cont<2){
            advertencia.innerHTML+="*INGRESE MAIL CORRECTO"+"<br/>";
            document.getElementById("advertenciadatos").style.display="block";
        }
        else datoscorrectos++;

        // Display Block        
        if (datoscorrectos==4){
            document.getElementById("caja1").style.display="none";
            document.getElementById("caja2").style.display="block";
        }
}

//Validacion de formulario
document.getElementById("finalizar").onclick=function (){

       var puntaje=0;

        //pregunta 1
        var fechaformu=new Date(document.getElementById("fecha").value);
        var fechacorrecta=new Date(1999,11,18);
        fechaformu.setHours(fechaformu.getHours()+3);

        if(fechaformu.getTime()==fechacorrecta.getTime()){
             puntaje++;
             document.getElementById("preg1").style.background="#2ECC71";
        }
        else {document.getElementById("preg1").style.background="#A93226";
        }

        //pregunta 2
        if(document.getElementById("c1").checked==true  && document.getElementById("c2").checked==false && document.getElementById("c3").checked ==false  &&  document.getElementById("c4").checked ==true  && document.getElementById("c5").checked ==true){
             puntaje++;
             document.getElementById("preg2").style.background="#2ECC71";
        }
        else document.getElementById("preg2").style.background="#A93226";

        //pregunta 3
        if(document.getElementById("r2").checked==true ){
             puntaje++;
             document.getElementById("preg3").style.background="#2ECC71";
        }
        else document.getElementById("preg3").style.background="#A93226";

        //pregunta 4
        if(document.getElementById("UIF").value.toLowerCase()=="unidad de informacion financiera" || document.getElementById("UIF").value.toLowerCase()=="unidad de información financiera" || document.getElementById("UIF").value.toLowerCase()=="unidad informacion financiera" || document.getElementById("UIF").value.toLowerCase()=="unidad información financiera" ){
             puntaje++;
             document.getElementById("preg4").style.background="#2ECC71";
        }
        else document.getElementById("preg4").style.background="#A93226";

        //pregunta 5
        if(document.getElementById("r4").checked==true ){
             puntaje++;
             document.getElementById("preg5").style.background="#2ECC71";
        }
        else document.getElementById("preg5").style.background="#A93226";

        //pregunta 6
        if(document.getElementById("s1").selectedIndex==2 && document.getElementById("s2").selectedIndex==1 && document.getElementById("s3").selectedIndex==3 && document.getElementById("s4").selectedIndex==3 ){
             puntaje++;
             document.getElementById("preg6").style.background="#2ECC71";
        }
        else document.getElementById("preg6").style.background="#A93226";
        //pregunta 7
        if(document.getElementById("BBVA").value.toLowerCase()=="banco bilbao vizcaya argentaria"){
             puntaje++;
             document.getElementById("preg7").style.background="#2ECC71";
        }
        else document.getElementById("preg7").style.background="#A93226"

        //pregunta 8
        if(document.getElementById("c6").checked==false  && document.getElementById("c7").checked==false && document.getElementById("c8").checked ==true  &&  document.getElementById("c9").checked ==false  && document.getElementById("c10").checked ==true){
             puntaje++;
             document.getElementById("preg8").style.background="#2ECC71";
        }
        else document.getElementById("preg8").style.background="#A93226";

        //pregunta 9
        if(document.getElementById("s5").selectedIndex==4 && document.getElementById("s6").selectedIndex==1 && document.getElementById("s7").selectedIndex==1 && document.getElementById("s8").selectedIndex==1 && document.getElementById("s9").selectedIndex==4){
             puntaje++;
             document.getElementById("preg9").style.background="#2ECC71";
        }
        else document.getElementById("preg9").style.background="#A93226";

        //pregunta 10
        if(document.getElementById("comision").value=="835"){
             puntaje++;
             document.getElementById("preg10").style.background="#2ECC71";
        }
        else document.getElementById("preg10").style.background="#A93226";

        document.getElementById("resultado").innerHTML="";
        document.getElementById("resultado").style.display="none";


        var resultado=document.getElementById("resultado");

       if(puntaje>=7){
            document.getElementById("resultado").style.display="block";
            resultado.innerHTML+="<h4><em>*** ¡¡¡felicidades contesto correctamente!!! ***</em></h4>";
            resultado.innerHTML+="<strong><em>puntaje: </em></strong>"+"<strong>"+puntaje+"</strong>"+"<br>"+"<br>";
            resultado.innerHTML+="<strong><em>¡Gracias por participar!</em></strong>";
            document.getElementById("resultado").style.color="rgb(28, 158, 158)";
       }    
       else {document.getElementById("resultado").style.display="block";
            resultado.innerHTML+="<h4><em>*** lamentablemente no llego al puntaje esperado ***</em></h4>";
            resultado.innerHTML+="<strong><em>puntaje: </em></strong>"+"<strong>"+puntaje+"</strong>"+"<br>"+"<br>";
            resultado.innerHTML+="<strong><em>¡Gracias por participar!</em></strong>";
            document.getElementById("resultado").style.display="block";
            document.getElementById("resultado").style.color="darkred";
        }

        document.getElementById("finalizar").style.display="none";
  
}