module.exports = {
  fibonacci: () => {
    //Todo => Công thức: F(n >= 2) = F(n - 1) + F(n - 2)
    //Todo => Nó là một dãy số nguyên trong đó hai số hạng đầu tiên là 0 và 1 số hạng tiếp theo được định nghĩa là
    //todo => tổng của số hang trước đó.

    function fib(position) {
      if (position === 1 || position === 2) return 1;

      return fib(position - 1) + fib(position - 2);
    }
    return fib(9);
  },
};
