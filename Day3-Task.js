
// ============================================================
// Creative Practice — Loops & Functions (Day 2)
// You now know: console.log, data types, string methods,
// arrays (no map/filter/forEach), objects (assign/create/keys/values),
// if / else if / else, logical operators (&&, ||, !),
// AND: while loops, for loops, functions with parameters.
// ------------------------------------------------------------
// Rules:
// - Prefer while / for loops. Do NOT use map/filter/forEach/reduce.
// - You may use: push/pop/shift/unshift/slice/splice/concat/indexOf/includes/sort
// - Use string methods (trim, toLowerCase, toUpperCase, includes, slice, split, etc.).
// - Keep each solution inside the function body marked with TODO.
// - Use the demo calls at the bottom to test your work.
// ============================================================


// ------------------------------------------------------------
// Task 1 — countVowels(str)
// Return how many vowels are inside str (a, e, i, o, u).
// Make it case-insensitive (e.g., "A" counts). Use a loop, no regex.
// ------------------------------------------------------------
function countVowels(str) {
    let vowels = ["A","a","E","e","I","i","O","o","U","u"]
    let total = 0
    for (let i of str){
        if (vowels.includes(i)){
            total += 1
        }
    }
    return total
}
console.log(countVowels("Hassan Mohamed Hussien"))

// ------------------------------------------------------------
// Task 2 — invertCase(str)
// Build and return a new string where each letter changes case:
// 'Hello' -> 'hELLO'. Use a loop and string methods, not regex.
// ------------------------------------------------------------
function invertCase(str) {
    let phrase = ""
    for (let i of str){
        if (i === i.toUpperCase()){
            i = i.toLowerCase()
            phrase += i
        }
        else if (i === i.toLowerCase()){
            i = i.toUpperCase()
            phrase += i
        }
        else{
            phrase += i
            continue
        }
    }
   
    return phrase; // replace
}
console.log(invertCase("Hassan 123!"))

// ------------------------------------------------------------
// Task 3 — uniqueMerge(a, b)
// Merge arrays a and b into a single array without duplicates,
// preserving the order of first appearance. No Set, no map/filter/forEach.
// ------------------------------------------------------------
function uniqueMerge(a, b) {
 
    let final = []
    for (let i of a){
        if (!final.includes(i)){
            final.push(i)
        }
    }
    for (x of b){
        if (!final.includes(x)){
            final.push(x)
        }
    }
    
    return final 
}

console.log(uniqueMerge([1,2,2,3,4,5,3,6,7,8,9],[1,9,10,15,12,4,3,17,9]))
// ------------------------------------------------------------
// Task 4 — findFirstIndexDivisibleBy(nums, x, y)
// Return the INDEX of the first number divisible by BOTH x and y.
// If none, return -1. Use a for loop and logical operators.
// ------------------------------------------------------------
function findFirstIndexDivisibleBy(nums, x, y) {
    // TODO
    // let nums = []
    for (let i = 0;i < nums.length;i++){
        if (nums[i] % x === 0 && nums[i] % y ===0 ){
            return i
            
        }
    }
    return -1// replace
}

console.log(findFirstIndexDivisibleBy([1,2,24,8,12],2,4))

// ------------------------------------------------------------
// Task 5 — allTruthy(values)
// Return true only if EVERY element in 'values' is truthy.
// Use a loop and logical operators (no .every).
// ------------------------------------------------------------
function allTruthy(values) {
    for (i of values){
        if (!i){
            return false
        }
    }
    return true; // replace
}
console.log(allTruthy([1,"Hassan",0]))

// ------------------------------------------------------------
// Task 6 — pickEveryNth(arr, n)
// Return a NEW array containing items at indices 0, n, 2n, 3n, ...
// Stop when you pass the end of the array. Use a for loop (step by n).
// ------------------------------------------------------------
function pickEveryNth(arr, n) {
    newarr = []
    for (let i = 0; i < arr.length; i+=n){
        newarr.push(i)
    }

    return newarr; // replace
}

console.log(pickEveryNth([1,2,3,4,5,6,7,8,9,10,11,12,13],4))

// ------------------------------------------------------------
// Task 7 — ticketPrice(customer)
// customer = { age, isStudent (bool), hasCoupon (bool) }
// Rules (in order):
//   1) If age < 6: price = 0
//   2) Else if age <= 18 OR isStudent is true: price = 8
//   3) Else if age >= 65: price = 6
//   4) Else: price = 12
// After that, if hasCoupon is true, subtract 2 (but not below 0).
// Return the final price.
// ------------------------------------------------------------
function ticketPrice(customer) {
    let price = ""

    if (customer.age < 6) {
    price = 0
    } else if (customer.age <= 18 || customer.isStudent === true) {
    price = 8
    } else if (customer.age >= 65) {
    price = 6
    } else {
    price = 12
    }

    if (customer.hasCoupon === true) {
    price = price - 2
    if (price < 0) {
        price = 0
    }
    }
    
    return price; // replace
}

console.log("Price = ",ticketPrice({ age: 21, isStudent: true, hasCoupon: false }))
// ------------------------------------------------------------
// Task 8 — normalizeNames(names)
// Given an array of messy names, return a NEW array in the same order
// where each name is trimmed and converted to: First-letter uppercase + rest lowercase.
// Example: "   aMMaR massOUD " -> "Ammar massoud"
// Use loops + basic string methods. No map.
// ------------------------------------------------------------
function normalizeNames(names) {
    let finalName = []
    for (i of names){
        let rawNameTrimmed = i.trim()
        let lowercase = rawNameTrimmed.slice(1).toLowerCase()
        let displayName = rawNameTrimmed[0].toUpperCase() + lowercase
        finalName.push(displayName)
    }
    
    // Hint: build result with push. For each name: trim -> split(" ") optional ->
    // lower the string -> uppercase the first character of the first word only is OK.
    return finalName // replace
}

console.log(normalizeNames(["  hAssan MOhamed","mohamed Hussien"]))

// ------------------------------------------------------------
// Task 9 — buildProductCatalog(rawItems)
// rawItems: [{name:"Mouse", brand:"Logi", stock:10}, {name:"SSD", stock:0}, ...]
// Use Object.create to make each product inherit from 'productProto' below.
// productProto provides two methods:
//   - isAvailable(): returns true if this.stock > 0
//   - label(): returns (this.brand || "Generic") + " " + this.name
// Return an array of product instances. Use a loop (no map).
// ------------------------------------------------------------
const productProto = {
    isAvailable: function () { return this.stock > 0; },
    label: function () { return (this.brand || "Generic") + " " + this.name; }
};

function buildProductCatalog(rawItems) {
    
    // TODO
    // Hint: for each item, create obj = Object.create(productProto);
    // copy properties (name/brand/stock) into it; push into result.
    return []; // replace
}

// ------------------------------------------------------------
// Task 10 (while challenge) — sumUntilLimit(nums, limit)
// Add numbers from 'nums' in order using a WHILE loop until
// the running sum would EXCEED 'limit' — then stop and return the sum that
// does NOT exceed the limit. Example: nums=[5,7,4], limit=12 => 5+7=12 (stop) -> 12
// ------------------------------------------------------------
function sumUntilLimit(nums, limit) {
    // TODO (while loop)
    return 0; // replace
}

// ------------------------------------------------------------
// Task 11 (logic puzzle) — safeLogin(user, policy)
// user = { email, password }
// policy = { minLen, mustIncludeNumber (bool), blockWord } // blockWord example: "password"
// Return true if ALL rules pass:
//   - password length >= minLen
//   - if mustIncludeNumber is true, password must contain any digit 0-9
//   - password lowercased DOES NOT include blockWord lowercased
// Use loops, string methods, and logical operators (no regex).
// ------------------------------------------------------------
function safeLogin(user, policy) {
    // TODO
    return false; // replace
}


// ============================================================
// DEMO CALLS (Uncomment to test as you solve)
// ============================================================

// console.log("\n--- Task 1 ---");
// console.log(countVowels("Ammar Massoud")); // expect > 0

// console.log("\n--- Task 2 ---");
// console.log(invertCase("HeLLo 123!")); // "hEllO 123!"

// console.log("\n--- Task 3 ---");
// console.log(uniqueMerge([1,2,3,2],[3,4,1,5])); // [1,2,3,4,5]

// console.log("\n--- Task 4 ---");
// console.log(findFirstIndexDivisibleBy([2,7,9,10,12,15,22], 3, 5)); // index of 15

// console.log("\n--- Task 5 ---");
// console.log(allTruthy([1, "x", {}, []])); // true
// console.log(allTruthy([1, 0, "x"])); // false

// console.log("\n--- Task 6 ---");
// console.log(pickEveryNth(["a","b","c","d","e","f"], 2)); // ["a","c","e"]

// console.log("\n--- Task 7 ---");
// console.log(ticketPrice({ age: 4, isStudent: false, hasCoupon: false }));  // 0
// console.log(ticketPrice({ age: 15, isStudent: false, hasCoupon: true }));  // 6
// console.log(ticketPrice({ age: 20, isStudent: true, hasCoupon: true }));   // 6
// console.log(ticketPrice({ age: 70, isStudent: false, hasCoupon: true }));  // 4
// console.log(ticketPrice({ age: 30, isStudent: false, hasCoupon: true }));  // 10

// console.log("\n--- Task 8 ---");
// console.log(normalizeNames(["   aMMaR massOUD  ", " SARA ", "oMaR"]));

// console.log("\n--- Task 9 ---");
// const items = [
//   { name: "Mouse", brand: "Logi", stock: 10 },
//   { name: "SSD", stock: 0 },
//   { name: "Keyboard", brand: "KeyCo", stock: 3 },
// ];
// const catalog = buildProductCatalog(items);
// console.log(catalog.map(p => ({ label: p.label(), available: p.isAvailable() })));

// console.log("\n--- Task 10 ---");
// console.log(scoresReport({ Alice: 17, Bob: 22, Carol: 22, Dan: 9 }));

// console.log("\n--- Task 11 ---");
// console.log(sumUntilLimit([5, 7, 4], 12)); // 12
// console.log(sumUntilLimit([6, 6, 6], 10)); // 6

// console.log("\n--- Task 12 ---");
// console.log(safeLogin(
//   { email: "a@b.com", password: "He11oWorld" },
//   { minLen: 8, mustIncludeNumber: true, blockWord: "password" }
// )); // true or false depending on rules

// ============================================================
// End — Have fun!
// ============================================================

