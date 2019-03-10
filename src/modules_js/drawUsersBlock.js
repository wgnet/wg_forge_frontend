import createUserBlock from '../modules_js/userBlock.js';
import drawElement  from '../modules_js/drawElement.js';
import getElementFromTemplate  from '../modules_js/getElementFromTemplate.js';

export default function drawUsersBlock(companies, currentUser, node) {
    let currentCompani = [];
    let userInform =[];

    for(let item in companies) {
        if(item.id === currentUser.company_id) {
            currentCompani.push(item)
        }
    }
    createUserBlock(userInform, currentUser, currentCompani);
    
    let userInformBlock = getElementFromTemplate(userInform.join(" "));

    drawElement(userInformBlock, node);
}