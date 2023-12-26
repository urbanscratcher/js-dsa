/*

function Swap (vector, i , j)
  x <- vector[j]
  vector[j] <- vector [i]
  vector[i] <- x
  return vector
end function

function BubbleSort(vector)
  for 1<= i <= n-1 do
    count <- 0
    for 1 <= j <= n-1 do
      if vector[j+1] < vector[j]
        Swap(vector, j, j+1)
        count <- count + 1
      end if
    end for
    if count = 0 then
      break
    end if
  end for
  return vector
end function

*/

const vector = [8, 7, 2, 1, 9];
console.log(BubbleSort(vector));
// accumulated sum of counts are the total n of swaps

function Swap(array, idx1, idx2) {
  let x = array[idx2];
  array[idx2] = array[idx1];
  array[idx1] = x;
  return array;
}

function BubbleSort(array) {
  const n = array.length;
  let sortedArray = [...array];

  for (let i = 0; i <= n - 2; i++) {
    let count = 0;

    for (let j = 0; j <= n - 2; j++) {
      if (sortedArray[j + 1] < sortedArray[j]) {
        sortedArray = Swap(sortedArray, j, j + 1);
        count++;
      }
    }

    if (count === 0) {
      break;
    }

    console.log("swap count:", count);
  }

  return sortedArray;
}
