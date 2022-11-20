const { CharCount } = require("./v1/CharCount/CharCount");
const { collectOddValues } = require("./v1/CollectOddValues/collectOddValues");
const { CollectStrings } = require("./v1/CollectStrings/CollectStrings");
const { countUnique } = require("./v1/CountUnique/countUnique");
const { factorial } = require("./v1/Factorials/factorial");
const { fibonacci } = require("./v1/fibonacys/fibonacy");
const {
  findLongestSubstring,
} = require("./v1/FindLongestSubstring/findLongestSubstring");
const { flatten } = require("./v1/flattens/flatten");
const { isSubsequence } = require("./v1/IsSubsequence/isSubsequence");
const { maxSubarraySums } = require("./v1/MaxSubarraySum/maxSubarraySum");
const { nestedEvenSum } = require("./v1/NestedEvenSum/nestedEvenSum");
const { Power } = require("./v1/Powers/Power");
const { productOfArray } = require("./v1/ProductOfArray/productOfArray");
const { CapitalizeFirst } = require("./v1/Recursion/CapitalizeFirst");
const { CapitalizeWord } = require("./v1/Recursion/CapitalizeWord");
const { recursiveRanges } = require("./v1/RecursiveRange/RecursiveRange");
const { Reverse } = require("./v1/Reverses/Reverse");
const { sameFrequency } = require("./v1/SameFrequency/sameFrequency");
const { sameNaive } = require("./v1/sameNaive/sameNaive");
const { binarySearch } = require("./v1/Search/BinarySearch");
const { linearSearch } = require("./v1/Search/linearsearch");
const { NaiveStringSearch } = require("./v1/Search/NaiveStringSearch");
const { someRecursive } = require("./v1/SomeRecursive/someRecursive");
const { BubbleSort } = require("./v1/Sort/Sort");
const { sumZero } = require("./v1/sumZero/sumZero");
const { validAnagram } = require("./v1/validAnagram/validAnagram");

//!Sort ( sắp xếp theo thứ tự)
BubbleSort();

//!CharCount ( Tính các từ xuất hiện bao nhiêu lần)
CharCount();

//!Search binary (Tìm kiếm nhị phân trong mảng)
binarySearch();

//!NaiveStringSearch (tìm kiếm xem kí tự đó hay chữ đó xuất hiện bao nhiêu lần)
NaiveStringSearch();

//! CapitalizeFirst ( Viết hoa chữ cái đầu tiên trong mảng )
CapitalizeFirst();

//! Capitalize word( Viết in hoa hết tất cả mảng)
CapitalizeWord();

//! collectOddValues (Tim giá trị lẻ trong mảng)
collectOddValues();

//!  =CollectStrings ( Lấy các giá trị string trong một object phức tạp đưa vào arr)
CollectStrings();

//! factorial ( Giải pháp tính đệ quy tính ra giai thừa ví dụ !5=120 =>1*2*3*4*5)
factorial();

//! fibonacci ( F(n >= 2) = F(n - 1) + F(n - 2) )
fibonacci();
//! flatten ( làm phẳng mảng phức tạp )
flatten();

//!nestedEvenSum ( Lấy các giá trị Number Phức tạp trong mảng để tính tổng lại)
nestedEvenSum();

//! Power Giống hàm Math.pow() trong javascript
Power();

//! productOfArray ( Tính tích trong mảng arr đó)
productOfArray();

//! recursiveRange (Tính đệ quy phép cộng 6=6+5+4+3+2+1)
recursiveRanges();

//! Reverse (thuật toán Đảo ngược)
Reverse();

//! someRecursive ( viết một hàm đệ quy tính xem có phần tử nào trong mảng có lớn hơn k)
someRecursive();
//!countUnique ( Đếm các giá trị duy nhất trong mảng đã được sắp xếp ví dụ [1,2,4,1,1,4] => kết quả:3)
countUnique();

//! findLongestSubstring ( tìm kiếm xem trong chuỗi đó có bao nhiêu chữ cái và là duy nhất nếu trùng bỏ qua )
findLongestSubstring();

//! isSubsequence ( xem trong chuổi string đó có các chữ cái đó không )
isSubsequence();

//! maxSubarraySum ( Tìm giá trị lớn nhất và nhỏ nhất)
maxSubarraySums();

//!sameFrequency (Check xem hai số có bằng nhau không)
sameFrequency();

//!linearSearch (Tìm kiếm gần)
linearSearch();

//!sumZero ( Công tổng lại bằng 0)
sumZero();

//! validAnagram (Kiếm tra tính hợp lệ hai tham số với nhau )
validAnagram();

//! sameNaive
sameNaive();
