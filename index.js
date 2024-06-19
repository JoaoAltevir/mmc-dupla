let numA;
let numB;
let pronto = 0;
let mmc;


console.log("Informe o primeiro número para fazer o mmc:");
process.stdin.on("data", function (data){
    if(!numA){
        numA = Number(data.toString().trim());
        console.log("Agora, informe o segundo:");
//-----------------------------------------------------
    }else if(!numB){
        numB = Number(data.toString().trim());
        console.log("Aperte ENTER para aparecer o resultado.")
//-----------------------------------------------------
//definindo numA sempre como o menor número
    } else if(numA > numB){
        let aux = numB;
        numB = numA;
        numA = aux;
//-------------------------------------------------
//processo mmc;
    } else {
        mmc = numB
        while(!(mmc % numA == 0 && mmc % numB == 0)){
            mmc++;
        }
        pronto = 1
    }
//para aparecer apenas quando terminar os processos
    if(pronto == 1){
        console.log("O mmc entre", numA, "e", numB, "=", mmc);
    }
})