module.exports = {
  Power: () => {
    //! Công thức:(x,y)=x^y
    function power(base, exp) {
      if (exp === 0) return 1;

      return base * power(base, exp - 1);
    }

    return power(7, 3);
  },
};
