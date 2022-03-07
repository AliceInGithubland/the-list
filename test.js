// function solution(A) {
var A = [1, 2, 3, 4, -2, -1, -0];
var startIndex = 0;
var findStartNumber = A[startIndex];
var newIndex = startIndex + findStartNumber;

for (let index = 0, counter = 0; index < A.length; counter++) {
  var findStartNumber = A[index];
  var nextIndex = index + findStartNumber;
  index = nextIndex;
  console.log(counter);
  console.log(newIndex);
}
