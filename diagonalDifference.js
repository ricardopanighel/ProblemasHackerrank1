function diagonalDifference(arr) {
    
    let right = 0;
    let left = 0;

        for (let i = 0; i < arr.length; i++) {
                right = right + arr[i][i];
        }
        for (let j = 0; j < arr.length; j++) {
                left = left + arr[j][arr.length - 1 - j];
        }
            let result = Math.abs(right - left);
                    
            return result;
        }
