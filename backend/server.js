const { CharCount } = require("./CharCount/CharCount");
const { collectOddValues } = require("./CollectOddValues/collectOddValues");
const { CollectStrings } = require("./CollectStrings/CollectStrings");
const { factorial } = require("./Factorials/factorial");
const { fibonacci } = require("./fibonacys/fibonacy");
const { flatten } = require("./flattens/flatten");
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

//! collectOddValues (Tim giá trị lẻ trong mảng)
collectOddValues();

//!  CollectStrings ( Lấy các giá trị string trong một object phức tạp đưa vào arr)
CollectStrings();

//! factorial ( Giải pháp tính đệ quy tính ra giai thừa ví dụ !5=120 =>1*2*3*4*5)
factorial();

//! fibonacci ( F(n >= 2) = F(n - 1) + F(n - 2) )
fibonacci();

//! flatten ( làm phẳng mảng phức tạp )
flatten();
