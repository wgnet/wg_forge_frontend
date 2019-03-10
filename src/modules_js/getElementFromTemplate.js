export default function getElementFromTemplate (element) {
    let temp = document.createElement('template');
    
    temp.innerHTML = element;
    return temp.content;
};