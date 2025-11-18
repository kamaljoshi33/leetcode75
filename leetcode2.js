// Greatest Common Divisor of Strings
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""


function gcdOfString(s1, s2){
    if(s1 + s2 != s2 + s1) return ''
    
    const gcd = (a,b) =>( b === 0 ? a : gcd(b , a % b))

    const len = gcd(s1.length , s2.length)

    return s1.slice(0, len)
}
console.log(gcdOfString( "ABCABC",   "ABC"))
console.log(gcdOfString( "ABABAB",   "ABABAB"))
console.log(gcdOfString( "LEET",   "CODE"))
