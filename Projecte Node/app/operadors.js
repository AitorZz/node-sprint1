

    const sum = (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('All input data should be a number')
          }
            return a + b
        
    };

    const rest = (a, b) => {    
        if (isNaN(a) || isNaN(b)) {
            throw new Error('All input data should be a number')
          }
            return a - b
       
    };

    const mult = (a, b) => {    
        if (isNaN(a) || isNaN(b)) {
            throw new Error('All input data should be a number')
          }
           
            return a * b
     
    };

    const div = (a, b) => {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('All input data should be a number')
          }
        else if ( b === 0) {
            throw new Error('You can not divide between 0')
        }
            return a / b
      
    }

    module.exports.sum = sum
    module.exports.rest = rest
    module.exports.mult = mult
    module.exports.div = div



