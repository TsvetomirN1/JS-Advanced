function solve(){
    let collection = (() => {
        let arr = [];
        let size = 0;

        let add = function(element) {            
            arr.push(element);  
            arr.sort((a, b) => a - b);
            this.size++;
        }
        let remove = function(index) {            
            if(index >= 0 && index < arr.length){
                arr.splice(index, 1);
                arr.sort((a, b) => a - b);
                this.size--;
            }else{
                throwRangeError();
            }            
        }
        let get = function(index) {
            if(+index >= 0 && +index < arr.length){
                return arr[index];
            }else{
                throwRangeError();
            }
        }
        let throwRangeError = function(){
            throw RangeError('Invalid index');
        }         
        return{
            add, remove, get, size
        }
    })();
    return collection;
}
let list = solve();
list.add(12);
list.add(12);
list.remove(-81);
console.log(list);