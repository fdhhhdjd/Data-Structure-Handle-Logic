const { CharCount } = require("./CharCount/CharCount");
const { CapitalizeFirst } = require("./Recursion/CapitalizeFirst");
const { CapitalizeWord } = require("./Recursion/CapitalizeWord");
const { binarySearch } = require("./Search/BinarySearch");
const { NaiveStringSearch } = require("./Search/NaiveStringSearch");
const { BubbleSort } = require("./Sort/Sort");

//!Sort ( sắp xếp theo thứ tự)
BubbleSort();

//!CharCount ( Tính các từ xuất hiện bao nhiêu lần)
CharCount();

//!Search binary (Tìm kiếm nhị phân trong mảng)
binarySearch();

//!NaiveStringSearch (tìm kiếm xem kí tự đó hay chữ đó xuất hiện bao nhiêu lần)
// NaiveStringSearch();

//! CapitalizeFirst ( Viết hoa chữ cái đầu tiên trong mảng )
CapitalizeFirst();

//! Capitalize word( Viết in hoa hết tất cả mảng)
CapitalizeWord();
