import drawElement  from '../modules_js/drawElement.js';
import getElementFromTemplate  from '../modules_js/getElementFromTemplate.js';
import joinDateStr from '../modules_js/joinDateStr.js';
import joinString from '../modules_js/joinString.js';
import drawUsersBlock from '../modules_js/drawUsersBlock.js';
import showBlock from '../modules_js/showBlock.js';
import totalResult from '../modules_js/totalResult.js';

export default function drawRaw(data_1, data_2, data_3){
    let contentBlock = document.getElementById('tbody');
    
    contentBlock.innerHTML = "";

    for(let i = 0; i < data_1.length; i++) {
        let currentUser = [];
        let userName = [];
    
        data_2.map(function(item){
            if(item.id === data_1[i].user_id) {
                currentUser.push(item)
            }
        });
    
        currentUser.forEach(function(item){
            joinString(item, item.gender,'Male', 'Mr. ', 'Ms. ',userName)
        });
    
        let element = `<tr class="data_1__row  border-bottom text-center" id='order__${data_1[i].id}'>
                            <td class="row__item">${data_1[i].transaction_id}</td>
                            <td class="row__item data_1_user">
                                <a  class="data_1_userName" href="#">${userName}</a>
                                <div class="user-details d-none">
                                </div>
                            </td>
                            <td class="row__item data_create">${joinDateStr(data_1[i].created_at)}</td>
                            <td class="row__item"> <span class="data_total">${data_1[i].total} </span> <span>USD</span></td>
                            <td class="row__item">${data_1[i].card_number}</td>
                            <td class="row__item">${data_1[i].card_type}</td>
                            <td class="row__item">${data_1[i].order_country} (${data_1[i].order_ip})</td>
                        </tr>`;
        
        drawElement(getElementFromTemplate(element), '#tbody');
        drawUsersBlock(data_3, currentUser, `#order__${data_1[i].id} .user-details`);
        
        document.querySelector(`#order__${data_1[i].id} .data_1_userName`).addEventListener('click', function(event) {
            showBlock(event, '.user-details')
        });
        
    };

    totalResult(data_1, data_2, data_3)
}

