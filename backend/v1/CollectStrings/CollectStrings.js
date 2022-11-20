module.exports = {
  CollectStrings: () => {
    const CollectStrings = (obj) => {
      let arr = [];
      for (const key in obj) {
        if (typeof obj[key] === "string") {
          arr.push(obj[key]);
        } else if (typeof obj[key] === "object") {
          arr = arr.concat(CollectStrings(obj[key]));
        }
      }
      return arr;
    };
    const obj = {
      stuff: "Tai",
      data: {
        val: {
          thing: {
            info: "Dep",
            moreInfo: {
              evenMoreInfo: {
                weMadeIt: "Trai",
              },
            },
          },
        },
      },
    };
    return CollectStrings(obj);
  },
};
