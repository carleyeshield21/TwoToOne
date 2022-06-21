// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    // We use the function Array.from to immediately create an array from the two strings given without using the for loop, then use the sort function to arrange the array in ascending order. Then we use the ...new Set function to omit the duplicates. We join the two arrays using the concatenate function. Then we use again the ...new Set function to omit again the duplicates then sort it. Finally, we use the split and join function to have the desired string output.
    strs1 = Array.from(s1).sort()
    let s1uniq = [...new Set(strs1)]
    // console.log(s1uniq)

    strs2 = Array.from(s2).sort()
    let s2uniq = [...new Set(strs2)]
    // console.log(s2uniq)

    string = (s1uniq.concat(s2uniq))

    let s3 = [...new Set(string)].sort()
    console.log(s3.toString().split(',').join(''))

}
longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')
console.log('========')
longest("aretheyhere", "yestheyarehere")
console.log('========')
longest("loopingisfunbutdangerous", "lessdangerousthancoding")
console.log('========')
longest("inmanylanguages", "theresapairoffunctions")
console.log('========')
longest('abcde','fedcba')
console.log('========')
longest('fedcba', 'xxxxyyyyabklmopq')