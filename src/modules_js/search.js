import drawRaw from '../modules_js/drawRaw.js';

export default function search(users, orders, companies) {
    let radio = document.querySelector('#radioBox input:checked');
    let searchInput = document.getElementById('search-input');
    let currentInput = searchInput.value.toLowerCase();
    let currentOrder = [];

    if(currentInput === '' && radio !== null) {
        return
    } else {
        function getNewOrderList(key, value, array) {
            if( radio.id === 'first_name' || radio.id === 'last_name'){
                let currentUsers = []
                users.forEach(function(item){
                   if(item[radio.id].toLowerCase().includes(value)){
                    currentUsers.push(item.id)
                   }
                })
                
                currentUsers.forEach(function(item){
                    array.forEach(function(it){
                        if(it.user_id === item) {
                            currentOrder.push(it)
                        }
                    })
                })
               
            } else {
                for(let i in array) {
                    if(typeof array[i][key] === 'string') {
                        (array[i][key].toLowerCase().includes(value)) ? currentOrder.push(array[i]) : array[i][key]
                        
                    } else if(typeof array[i][key] === 'number') {
                        (array[i][key] == value) ? currentOrder.push(array[i]) : array[i][key]
                    }
                }
            }
        }

        getNewOrderList(radio.id, currentInput, orders);
        
        drawRaw(currentOrder, users, companies); 
    }
}