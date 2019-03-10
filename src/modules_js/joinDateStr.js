export default function joinDateStr(date_number) {
    // let date = new Date(+orders[i].created_at);
    let date = new Date(+date_number);
    let currentDate;
    
    currentDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ',' + ' ' + (date.getHours() + 1) + ':' + (date.getMinutes() + 1 ) + ':' + (date.getSeconds() + 1);

    return currentDate
}