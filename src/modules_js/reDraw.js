import sort from '../modules_js/sort.js';
import drawRaw from '../modules_js/drawRaw.js';

export default function reDraw(data_1, data_2, data_3, key, array){
    // let currentArray = sort(array, key);
    let currentArray = sort(array, key);

    if(array === data_1) {
        drawRaw(currentArray, data_2, data_3)
    } else {
        let newData_1 = [];

        currentArray.forEach(function(it){
            data_1.map(function(item){
                if(it.id === item.user_id) {
                    newData_1.push(item)
                }
            })  
        })
        drawRaw(newData_1, data_2, data_3)
    }
}