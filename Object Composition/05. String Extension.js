(function (solve){
    String.prototype.ensureStart = function(str) {
        if(!this.startsWith(str)){            
            let outputStr = '';
            outputStr += str;
            outputStr += this;
            return outputStr;
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function(str) {
        if(!this.toString().endsWith(str)){            
            let outputStr = '';
            outputStr += this;
            outputStr += str;
            return outputStr;
        }
        return this.toString();
    }
    String.prototype.isEmpty = function() {
        return this.length === 0;
    }
    String.prototype.truncate = function(n) {
        if(n < 4){
            return '.'.repeat(n);
        }
        if(this.length <= n){
            return this.toString();
        }
        let lastIndexOfSpace = this.toString().substr(0, n-2).lastIndexOf(' ');
        if(lastIndexOfSpace > 0){
            return this.substr(0, lastIndexOfSpace) + '...';
        }else{
            return this.substr(0, n - 3) + '...';
        }        
    }
    String.format = function(str, ...placeholders) {
        let regex = /{[0-9]}/gm;
        let matches = str.match(regex);        
        let output = str;
        let strArr = str.split(' ');
        let matchesCounter = 0;        
        for(let i = 0; i < strArr.length; i++){
            if(strArr[i] == matches[matchesCounter]){
                if(placeholders.length > matchesCounter){
                    output = output.replace(strArr[i], placeholders[matchesCounter]);   
                   matchesCounter++;
                }
            }
        }
        return output
    }
})();