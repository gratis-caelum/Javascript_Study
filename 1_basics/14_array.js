// Array Search
let arr = [1, 2, 3];

// 배열에서 원소 검색
console.log(arr.indexOf(3));

// 조건에 맞는 원소 검색
console.log(arr.find(function(element) {
    return element > 1;
})) // 2 (1보다 큰 첫 번째 원소 반환)
// find 대신 filter 를 쓰면 1보다 큰 모든 숫자 반환