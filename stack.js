const isValid = (str) => {
  if (str.length === 0) return false;

  let stack = [];
  //닫힌 케이스일때, 더하고, 열린 케이스일때 제거한다
  const mapCase = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  //value값을 찾는다
  const openCase = Object.values(mapCase); //'({['
  let arr = str.split("");
  //값을 돌리면서 닫힌괄호랑 열린괄호를 찾는다
  for (let el in arr) {
    if (openCase.includes(arr[el]))
      stack.push(
        arr[el]
      ); //openCase의 value에 해당하는값에 arr[el]이 있으면 빈 stack에 집어넣는다.
    else {
      //openCase의 value가 있지 않을때 => )}] 의 경우
      if (stack.includes(mapCase[arr[el]])) {
        stack.pop(mapCase[arr[el]]);
      } //쌍으로 맞는 여는 괄호가 있을때 pop으로 빼낸다.
      else {
        return false;
      } //여는괄호가 포함되지 않았으면 false를 바로 리턴한다.
    }
  }
  if (stack.length === 0) return true;
  else return false;
};
