module.exports = {
  Reverse: () => {
    function reverse(str) {
      if (str.length <= 1) return str;
      return reverse(str.slice(1)) + str[0];
    }

    return reverse("ioT al iaT");
  },
};
