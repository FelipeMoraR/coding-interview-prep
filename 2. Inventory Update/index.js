// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

//My solution 

function updateInventory(arr1, arr2) {
    const duplicates = arr1.map(el1 => {
        const finded = arr2.find(el2 => el1[1] === el2[1]);
        if(!finded) return el1;

        const newArray = [finded[0] + el1[0], el1[1]]
        
        return newArray
    }); 

    arr2.forEach(el => {
        const isNotNew = duplicates.find(el2 => el[1] === el2[1]);
        
        if(isNotNew) return;

        duplicates.push(el);
        return
    })

    const ordered = duplicates.sort((a, b) => {
        if (a[1] > b[1]) { //I extracted this from mdn web docs
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        
        return 0;
    })
    
    return ordered;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
// Optimal solition using new Map
function updateInventory(arr1, arr2) {
    const newMap = new Map();

    for (const [nElement, name] of arr1) {
        //key(any) - value(any)
        newMap.set(name, nElement);
    }

    for (const [nElement, name] of arr2) {
        const exist = newMap.get(name);
        
        if(exist){
            const newSum = exist + nElement;
            newMap.set(name, newSum);
        } 
        else {
            newMap.set(name, nElement);
        }
    }

    const ordered = Array.from(newMap)
        .map(([name, nElement]) => [nElement, name])
        .sort((a, b) => a[1].localeCompare(b[1]));
    
    return ordered;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);