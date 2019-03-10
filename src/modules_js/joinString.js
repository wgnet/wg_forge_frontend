export default function joinString(item, itemKey, condition, str1, str2, array){
    let string = item.first_name + ' ' + item.last_name;

    if(itemKey === condition){
        array.push(str1 + string) 
    } else {
        array.push(str2 + string) 
    }
}