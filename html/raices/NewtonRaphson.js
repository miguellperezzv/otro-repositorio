function derivar(grado, coeficientes){
    var resultado = double[grado+1];
    resultado[0]=grado-1;
    for(i=1;i<grado+1;i++){
        resultado[i]=(grado-i+1)*coeficientes[i];
    }
    return resultado;
}

function evaluar(grado, coeficientes, valor){
    var resultado=0;
    for(i=1;i<grado+1;i++){
                valor+= coeficientes[i]* Math.pow(valor, grado-i+1);
            }
    return valor+coeficientes[grado+1];
}

function newtonraphson(grado,coeficientes) {
    xi=0
    do{
        iteraciones=0
        do{
            y1 = evaluar(grado,coeficientes,xi);
            derivado=derivar(grado,coeficientes);
            y2 = evaluar(grado,derivado)
            x2=xi-(y1/y2);
            temp=x2-xi;
            xi=x2;
            iteraciones=iteraciones+1;
        }while(Math.abs(temp)>0.001&& iteraciones<100)
    if(iteraciones==100){
        alert("No se encontraron raices reales");
        break;
    }

    //DIVISION SINTETICA
    polinomio = divSintetica(xi,y2,grado-1)
    
    if(polinomio[0]==2){
        
    }

    }while(true)
}

function divSintetica(raiz, coeficientes, grado){
    gradoNuevoPol=0;
    raiz=-raiz;
    var resultado= double[ 3][grado+1];
    resultado[0][0]=coeficientes[1];
    resultado[1][0]=coeficientes[1];
    resultado[2][0]=coeficientes[1];
    for(i=1;i<grado+1;i++){
        resultado[0][i]=coeficientes[i+1]
    }
    for(i=1;i<grado+1;i++){
        resultado[1][i]=resultado[2][i-1]*raiz;
        resultado[2][i]=resultado[0][i]+resultado[1][i];
    }
    
    nuevoPol= double[grado]; 
    
    for(i=0;resultado[0].length;i++){
        nuevoPol[i+1]=resultado[2][i];
        gradoNuevoPol++;
    }
    nuevoPol[0]=gradoNuevoPol-1;
    return  nuevoPol;
}