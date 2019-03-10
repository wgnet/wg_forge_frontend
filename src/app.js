// this is an example of improting data_1 from JSON
import orders from '../data/orders.json';
import companies from '../data/companies.json';
import users from '../data/users.json';

import drawRaw from '../src/modules_js/drawRaw.js';
import reDraw from '../src/modules_js/reDraw.js';


// import closeBlock from '../src/modules_js/closeBlock.js';

export default (function () {
    let usersList = users;
    let ordersList = orders;
    let companiesList = companies;
    let sortBlocks = document.querySelectorAll('.row__item');
    let sortBlocksLength = sortBlocks.length;

    // function appendArrow(parentnode, ) {

    // }

    drawRaw(ordersList, usersList, companiesList);

    for(let i = 0; i < sortBlocksLength; i++) {
        sortBlocks[i].addEventListener('click', function(evt){
            evt.preventDefault;
            let span = `<span>&#8595;</span>`;
            console.log(evt.target)
            switch(evt.target.id) {
                case 'transaction':
                    reDraw(ordersList, usersList, companiesList, 'transaction_id',ordersList)  
                break;

                case 'card-type':
                    reDraw(ordersList, usersList, companiesList, 'card_type',ordersList)  
                    break;

                case 'user-info':
                    reDraw(ordersList, usersList, companiesList, 'first_name', usersList)  
                    break;

                case 'order-date':
                    reDraw(ordersList, usersList, companiesList, 'created_at',ordersList)  
                    break;

                case 'order-amount':
                    reDraw(ordersList, usersList, companiesList, 'total',ordersList)  
                    break;
                
                case 'card_type':
                    reDraw(ordersList, usersList, companiesList, 'card_type',ordersList)  
                break;
        
                case 'location':
                    reDraw(ordersList, usersList, companiesList, 'order_country',ordersList)  

                    break;
        
               
            }
            
        })
    }
    
    // reDraw(ordersList, usersList, companiesList, 'first_name', usersList)

    console.log(ordersList)
    
}());
