export default function two_crystal_balls(breaks: boolean[]): number {
  const step = Math.floor(Math.sqrt(breaks.length));
  let hi = Math.min(step, breaks.length - 1);
  let lo = 0;

  do  {
    if(breaks[hi]) {
      for(let i = lo; i <= hi; i++) {
        if(breaks[i]) {
          return i
        }
      }
    } else {
      lo = hi + 1
      hi = Math.min(hi + step, breaks.length - 1);
    }
  } while(lo < breaks.length)

  return -1;
}

function course_two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j <= jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}