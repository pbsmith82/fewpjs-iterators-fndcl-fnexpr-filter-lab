// Code your solution here
function findMatching(array, name){
    return array.filter(x => new RegExp(name, 'i').test(x))
}

function fuzzyMatch(array, term){
   
    return array.filter(x => (x.startsWith(term)))
}

function matchName(array, name){
    return array.filter(x => (x.name === name) )  
}