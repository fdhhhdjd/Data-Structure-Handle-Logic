module.exports = {
  CapitalizeFirst: () => {
    var arr = ["tai", "heo", "fa"];
    let newArr = [];
    if (arr.length === 0) return newArr;
    // ! CharAt()  là một phương thức dùng để lấy một ký tự bất kỳ trong chuỗi đã biết trước.
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    newArr = newArr.concat(arr.slice(1));
    return newArr;
  },
};
