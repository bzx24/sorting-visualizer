export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
    return animations
}

function mergeSortHelper(
    array,
    startIdx,
    endIdx,
    auxArray,
    animations
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArray, startIdx, middleIdx, array, animations);
    mergeSortHelper(auxArray, middleIdx + 1, endIdx, array, animations);
    doMerge(auxArray, startIdx, middleIdx, endIdx, array, animations);
}

function doMerge(
    array,
    startIdx,
    middleIdx,
    endIdx,
    auxArray,
    animations
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);

        if (auxArray[i] <= auxArray[j]) {
            animations.push([k, auxArray[i]]);
            array[k++] = auxArray[i++];
        } else {
            animations.push([k, auxArray[j]]);
            array[k++] = auxArray[j++];
        }
    }

    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        
        animations.push([k, auxArray[i]]);
        array[k++] = auxArray[i++];
      }
      while (j <= endIdx) {
        
        animations.push([j, j]);
        animations.push([j, j]);
        
        animations.push([k, auxArray[j]]);
        array[k++] = auxArray[j++];
      }
}