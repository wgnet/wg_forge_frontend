export default  function createUserBlock(array, currentArray1, currentArray2){

    if(currentArray1[0].birthday !== null ) {
        array.push(`<p>Birthday: ${currentArray1[0].birthday}</p>`)
    }
    if(currentArray1[0].avatar !== null ) {
        array.push(`<p><img src="${currentArray1[0].avatar}" width="100px"></p>`)
    }
    if(currentArray1[0].company_id !== null) {
        array.push(`Company: <a href="${currentArray2[0].url}">${currentArray2[0].title}</a>`)
        array.push(`<p>Industry: ${currentArray2[0].sector}</p>`)
    } 
};


