
export default function sort(array, key) {
    let currentArray = array;
    switch(key){
        case 'total':  
            currentArray.sort(function(a, b){
                return a.total - b.total
            })
            break;
            transaction_id

        case 'created_at':
            currentArray.sort(function(a, b){
                return a.created_at - b.created_at
            })
            break;

        case 'card_type':
            currentArray.sort(function(a, b) {
                if (a.card_type > b.card_type) {
                    return 1;
                }
                if (a.card_type < b.card_type) {
                    return -1;
                }
            })
            break;

            case 'transaction_id':
            currentArray.sort(function(a, b) {
                if (a.transaction_id > b.transaction_id) {
                    return 1;
                }
                if (a.transaction_id < b.transaction_id) {
                    return -1;
                }
            })
            break;

        case 'order_country':
            currentArray.sort(function(a, b) {
                return (b.order_country < a.order_country) - (a.order_country < b.order_country) || (b.order_ip < a.order_ip) - (a.order_ip < b.order_ip)
            });

            break;

        case 'first_name':
            currentArray.sort(function(a, b) {
                return  (b.last_name < a.last_name) - (a.last_name < b.last_name) ||  (b.first_name < a.first_name) - (a.first_name < b.first_name)
            });
            
            break;
    }

    return currentArray;
    
}