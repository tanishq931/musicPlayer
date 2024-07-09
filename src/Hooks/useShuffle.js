export function useShuffle(list) {
  const secondList = [...list];
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  secondList.forEach((val, index) => {
    if (index !== list.length - 1) {
      let randomIndex = getRandomNumber(index, list.length - 1);
      let temp = secondList[index];
      secondList[index] = secondList[randomIndex];
      secondList[randomIndex] = temp;
    }
  });
  return secondList;
}

export function removeElement(list, index) {
  const secondList = [...list];
  secondList.splice(index, 1);
  return secondList;
}
