function paveBox(boxes) {
  // TODO: 여기에 코드를 작성합니다.
  let count,
    number = 1;
  let now = boxes[0];
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i] <= now) {
      // box2 번째가 box1번째보다 작다 = 첫번째 손님이 나가야 두번째 손님도 나간다.
      count += 1;
    } else if (boxes[i] > now) {
      //첫번째가 제일 크다 = 나가는 사람은 box.length
      count = 1;
      now = boxes[i];
    }
    if (number < count) {
      number = count;
    }
  }
  return number;
}
