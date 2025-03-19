// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.


//My solution
const cleanArray = (args) => {
    const arrayCleaned = args.reduce((array, arg) => {
      let validArray = [];
  
      arg.forEach(el => {
        const existInNewArray = validArray.find(newElement => newElement == el);
        if(!existInNewArray){
          validArray.push(el);
        }
      });
      
      array.push(validArray);
      return array
    }, []);
  
    return arrayCleaned
  }
  
  const cleanArrayUnique = (arrayTogether) => {
    let temporalArray = [];
  
    arrayTogether.forEach(el => {
      const elementsFiltered = arrayTogether.filter(temporal => temporal === el);
        
      if(elementsFiltered.length === 1) temporalArray.push(elementsFiltered[0]);  
    });
  
    return temporalArray;
  }
  
  function sym(...args) {  
    const arrayCleaned = cleanArray(args);
    let finalArray;
  
    arrayCleaned.forEach((_, index) => {
      if(index === 0){
        const arrayTogether = arrayCleaned[0].concat(arrayCleaned[1]);
          
        finalArray = cleanArrayUnique(arrayTogether);
        return
      }
      
      const nextArray = arrayCleaned[index + 1];
      
      if(!nextArray) return finalArray;
  
      const newArrayTogether = nextArray.concat(finalArray);
  
      finalArray = cleanArrayUnique(newArrayTogether);
    });
  
    return finalArray.sort();
  }
  

  
  
//Optimization