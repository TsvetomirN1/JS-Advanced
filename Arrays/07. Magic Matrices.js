function solve(input){
    for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < input.length; k++) {
 
            let rowSum = input[i].reduce((a,b)=> a+b);//sum row at[i][k];
            let colSum = 0;
            //traverse and sum  column at [i][k]
            for (let q = 0; q < input.length; q++) {
                colSum += input[q][k];
            }
            if(rowSum !== colSum){
                return false;
            }
           
        }//end k
    }//end i
 
    return true;
}