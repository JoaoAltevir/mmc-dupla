let numA;
let numB;
let numAtual;

console.log("Informe o primeiro número para fazer o mmc:");
process.stdin.on("data", function (data){
    if(!numA){
        numA = Number(data.toString().trim());
        console.log("Agora, informe o segundo:");
    }else if(!numB){
        numB = Number(data.toString().trim());
    } else {
        while(numA != numB){
            
        }
    }
})