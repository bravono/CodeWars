const sequenceSum = (begin, end, step) => {
  // Understanding the question
  // I want a function that returns the sum of a sequence of integers.
  // Begin must not be greater than end
  // I cannot add end if, when we add step to begin, it doesn't equal end
  //
  // How to solve
  // 1. Return immediately if begin is greater than end
  // 3. Add step to begin and add step to the result until the result is equals to end
  // 4. We cannot allow result to be begger than end so we return the smallest sum

  if (begin > end) return 0;

  let result = 0;

  for (let i = begin; i <= end; i = i + step) {
    console.log(i);
    result += i;
  }

  return result;
};

console.log(sequenceSum(1, 5, 3));
