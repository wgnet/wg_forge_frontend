export default function totalResult(orders, users) {
    let tableContent = document.getElementById('tbody');
    let valueTotal = document.querySelector('#cost-value');
    let nodeCost = tableContent.querySelectorAll('.data_total');
    let nodeCostLength = nodeCost.length;
    let nodeCostArray = [];

    for (let i = 0; i < nodeCostLength; i++){
        nodeCostArray.push(+nodeCost[i].textContent)
    }

    console.log(nodeCostArray)
    
    function totalCost (nodeArray, nodeTotal){
       let result = nodeArray.reduce(function(a,b) {
            return a + b
        })

        nodeTotal.innerText = '$ ' + result.toFixed(2);
        return result
    };


    function totalCount() {
        let valueCount = document.getElementById('cell-value');
        let nodeCount= document.querySelectorAll('.data_1__row');
        
        valueCount.innerText = nodeCount.length;
        return nodeCount.length
    };

    function mediumValue() {
        let valueMedium = document.getElementById('medium-value')
        valueMedium.innerText ='$ ' + (totalCost(nodeCostArray, valueTotal)/totalCount()).toFixed(2)
    };

    function sum(purchase, node) {
        let sumChack = purchase.reduce(function(a, b){
            return +a + +b
        });

        node.innerText = '$ ' + (sumChack/purchase.length).toFixed(2)
    }

    function averageCheck() {
        let purchase = [];
        let averageCheck = document.getElementById('average-value');
       
        users.forEach(function(it){
            
            let currentOrderList = [];
            orders.map(function(item) {
                if(item.user_id === it.id) {
                    currentOrderList.push(item)
                }
            });

            currentOrderList.forEach(function(item) {
                let date = new Date(+item.created_at);
                item.created_at = date.getFullYear() + '' + date.getMonth() + '' + date.getDate();
            });

            let totalOld = 0 ;
            currentOrderList.map(function(it) {
            
                let total = currentOrderList.filter(function(param){
                        return param.created_at === it.created_at
                    } 
                )

                if(totalOld === total || totalOld === 0 ){
                    let sum = 0;
                    for(let k in total) {
                        sum = sum + +total[k].total
                    }
                    let averageChack = (sum/total.length)
                    purchase.push(sum/total.length)
                }
                totalOld = total;
            });
        });
        sum(purchase,averageCheck)
    };

    function averageCheckFemale() {
        let purchase = [];
        let averageCheck = document.getElementById('averageFemale-value');
       
        users.forEach(function(it){
            
            let currentOrderList = [];
            orders.map(function(item) {
                if(item.user_id === it.id && it.gender === "Female") {
                    currentOrderList.push(item)
                }
            });

            currentOrderList.forEach(function(item) {
                let date = new Date(+item.created_at);
                item.created_at = date.getFullYear() + '' + date.getMonth() + '' + date.getDate();
            });

            let totalOld = 0 ;
            currentOrderList.map(function(it) {
            
                let total = currentOrderList.filter(function(param){
                        return param.created_at === it.created_at
                    } 
                )

                if(totalOld === total || totalOld === 0 ){
                    let sum = 0;
                    for(let k in total) {
                        sum = sum + +total[k].total
                    }
                    let averageChack = (sum/total.length)
                    purchase.push(sum/total.length)
                }
                totalOld = total;
            });
        });
        sum(purchase,averageCheck)
    };

    function averageCheckMale() {
        let purchase = [];
        let averageCheck = document.getElementById('averageMale-value');
       
        users.forEach(function(it){
            
            let currentOrderList = [];
            orders.map(function(item) {
                if(item.user_id === it.id && it.gender === "Male") {
                    currentOrderList.push(item)
                }
            });

            currentOrderList.forEach(function(item) {
                let date = new Date(+item.created_at);
                item.created_at = date.getFullYear() + '' + date.getMonth() + '' + date.getDate();
            });

            let totalOld = 0 ;
            currentOrderList.map(function(it) {
            
                let total = currentOrderList.filter(function(param){
                        return param.created_at === it.created_at
                    } 
                )

                if(totalOld === total || totalOld === 0 ){
                    let sum = 0;
                    for(let k in total) {
                        sum = sum + +total[k].total
                    }
                    let averageChack = (sum/total.length)
                    purchase.push(sum/total.length)
                }
                totalOld = total;
            });
        });
        sum(purchase,averageCheck)
    };


    totalCount();
    totalCost(nodeCostArray, valueTotal);
    mediumValue();
    averageCheck();
    averageCheckFemale();
    averageCheckMale()
}
    