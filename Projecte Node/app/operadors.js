
export const operadors = {

    sum(a, b) {
        if (typeof a && typeof b == 'number') {
            return a + b
        }
        else {
            return 'All input data should be a number'
        }
    },

    rest(a, b) {
        if (typeof a && typeof b == 'number') {
            return a - b
        }
        else {
            return 'All input data should be a number'
        }
    },

    mult(a, b) {
        if (typeof a && typeof b == 'number') {
            return a * b
        }
        else {
            return 'All input data should be a number'
        }
    },

    div(a, b) {
        if ( b === 0) {
            return 'You can not divide between 0'
        }
        else if (typeof a == 'number' && typeof b == 'number') {
            return a / b
        }
        else {
            return 'All input data should be a number'
        } 
    }
}




