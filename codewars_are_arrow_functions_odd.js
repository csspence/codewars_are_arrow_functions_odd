/*
Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]
*/

const odds = (values) => {
  const modulo = (value) => {
    return value % 2 !== 0 ? true : false;
  }
  return values.filter(modulo);
}