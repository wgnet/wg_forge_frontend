export default function totalResult(){
    let tableContent = document.getElementById('tbody');
    let valueTotal = document.querySelector('#cost-value');
    let nodeCost = tableContent.querySelectorAll('.data_total');
    let nodeCostLength = nodeCost.length;
    let nodeCostArray = [];

    for (let i = 0; i < nodeCostLength; i++){
        nodeCostArray.push(+nodeCost[i].textContent)
    }
    
    function totalCost (nodeArray, nodeTotal){
       let result = nodeArray.reduce(function(a,b) {
            return a + b
        })

        nodeTotal.innerText = '$' + result.toFixed(2);
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
        console.log(valueMedium)
        valueMedium.innerText ='$' + (totalCost(nodeCostArray, valueTotal)/totalCount()).toFixed(2)
    }

    function averageCheck(total) {
        
    }

    totalCount();
    totalCost(nodeCostArray, valueTotal);
    mediumValue()
}
    