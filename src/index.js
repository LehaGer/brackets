module.exports = function check(str, bracketsConfig) {
  
    let CurrOpenBracket = str.charAt(0);
    let CurrCloseBracket = "";

    let CountOpnBrkt = 0;
    let CountCloseBrkt = 0;

    let LastIndex = 0;
    let CurrLastIndx = LastIndex;
    let Result = true;
    let isSucsessSearching = false;

    while(LastIndex < str.length){

        if(str.length%2 === 0){

            if(str.length === 0) return true;
            if(str.length === 1) return false;
    
            for(let i = 0; i < bracketsConfig.length; i++){
                if(CurrOpenBracket === bracketsConfig[i][0]){
                    CurrCloseBracket = bracketsConfig[i][1];
                    isSucsessSearching = true;
                }
            }
            if(!isSucsessSearching) return false;
    
            if(CurrOpenBracket !== CurrCloseBracket){

                for(let i = CurrLastIndx; i < str.length; i++){
    
                    if(str.charAt(i) === CurrOpenBracket){
                        CountOpnBrkt++;
                    }
                    if(str.charAt(i) === CurrCloseBracket){
                        CountCloseBrkt++;
                    }
                    if(CountOpnBrkt == CountCloseBrkt){
                        Result = check(str.slice(CurrLastIndx+1, i), bracketsConfig);
                        LastIndex = i+1;
                        break;
                    }
                }
        
                if(CountOpnBrkt != CountCloseBrkt) return false;

            }else{
                
                for(let i = CurrLastIndx; i < str.length; i++){
    
                    if(str.charAt(i) === CurrOpenBracket
                    || str.charAt(i) === CurrCloseBracket){
                        CountOpnBrkt++;
                        CountCloseBrkt++;
                    }
                    if(CountOpnBrkt === 2 || CountCloseBrkt === 2){
                        Result = check(str.slice(CurrLastIndx+1, i), bracketsConfig);
                        LastIndex = i+1;
                        break;
                    }
                }
        
                if(CountOpnBrkt % 2 !== 0) return false;

            }
    
        }else{
            return false;
        }

        if(Result === false) return false;

        CountOpnBrkt = 0;
        CountCloseBrkt = 0;

        CurrOpenBracket = str.charAt(LastIndex);
        CurrCloseBracket = "";

        CurrLastIndx = LastIndex;
        
    }

    return Result;
    
}
