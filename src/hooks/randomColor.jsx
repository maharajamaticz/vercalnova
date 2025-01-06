const useRandomColor = () => {
  const colorList = ["#FF6F31", "#5988E2", "#FC66C5", "#F0DC61", "#7DE259"];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    const colorCode=colorList[randomIndex];
    return colorCode;
  };
  return {getRandomColor};
};
export default useRandomColor;
