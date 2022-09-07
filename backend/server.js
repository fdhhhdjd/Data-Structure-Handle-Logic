const { CharCount } = require("./CharCount/CharCount");
const { collectOddValues } = require("./CollectOddValues/collectOddValues");
const { CollectStrings } = require("./CollectStrings/CollectStrings");
const { countUnique } = require("./CountUnique/countUnique");
const { factorial } = require("./Factorials/factorial");
const { fibonacci } = require("./fibonacys/fibonacy");
const {
  findLongestSubstring,
} = require("./FindLongestSubstring/findLongestSubstring");
const { flatten } = require("./flattens/flatten");
const { isSubsequence } = require("./IsSubsequence/isSubsequence");
const { nestedEvenSum } = require("./NestedEvenSum/nestedEvenSum");
const { Power } = require("./Powers/Power");
const { productOfArray } = require("./ProductOfArray/productOfArray");
const { CapitalizeFirst } = require("./Recursion/CapitalizeFirst");
const { CapitalizeWord } = require("./Recursion/CapitalizeWord");
const { recursiveRanges } = require("./RecursiveRange/RecursiveRange");
const { Reverse } = require("./Reverses/Reverse");
const { binarySearch } = require("./Search/BinarySearch");
const { NaiveStringSearch } = require("./Search/NaiveStringSearch");
const { someRecursive } = require("./SomeRecursive/someRecursive");
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

//!nestedEvenSum (chưa hiểu )
nestedEvenSum();

//! Power Giống hàm Math.pow() trong javascript
Power();

//! productOfArray ( Tính tích trong mảng arr đó)
productOfArray();

//! recursiveRange (Tính đệ quy phép cộng 6=6+5+4+3+2+1)
recursiveRanges();

//! Reverse (thuật toán Đảo ngược)
Reverse();

//! someRecursive ( viết một hàm đệ quy tính xem các phần tử trong mảng có lớn hơn k)
someRecursive();

//!countUnique ( Đếm các giá trị duy nhất trong mảng đã được sắp xếp ví dụ [1,2,4,1,1,4] => kết quả:3)
countUnique();

//! findLongestSubstring ( tìm kiếm xem trong chuỗi đó có bao nhiêu chữ cái và là duy nhất nếu trùng bỏ qua )
findLongestSubstring();

//! isSubsequence ( xem trong chuổi string đó có các chữ cái đó không )
isSubsequence();
