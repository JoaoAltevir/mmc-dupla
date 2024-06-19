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
        numB = numA;//eu queria ter mudado pra maior e menor q era mais facil de ver mas não vou mexer
        numA = aux;
//-------------------------------------------------
//processo mmc;
    } else {
        mmc = numB
        while(!(mmc % numA == 0 && mmc % numB == 0)){
            mmc++;
        }
        pronto = 1;
    }
//-------------------------------------------------
//processo MDC
    let mdc;
    if(numA > numB){
        let maior = numA;
    } else{
        maior = numB;
        menor = numA;
    }
    for(let i = 1; i <= menor; i++){
        if(menor % i === 0 && maior % i === 0){
            mdc = i;
        }
    }
//para aparecer apenas quando terminar os processos
    if(pronto == 1){
        console.log("O mmc entre", numA, "e", numB, "=", mmc);
        console.log("O mdc entre", numA, "e", numB, "=", mdc);
        process.exit();
    }
})