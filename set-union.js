let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

function union(set1, set2) {
  let newSet = new Set(set1);
  for (let elem of set2) {
      newSet.add(elem);
  }
  return newSet;
}

console.log(union(setA, setC));
