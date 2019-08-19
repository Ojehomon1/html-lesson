// basic
let patt = /dci/
let str = "I like dci very much"
//console.log(patt);

// modifiers g, i
str = "I like dci very much, dci dci dci...."
patt = /dci/g;
//["dci","dci","dci","dci"]

// modifiers g(global), i(insensitive)
str = "I like dci very much, DCI dCi dci....."
patt = /dci/gi;
// ["dci", "DCI","dCi","dci"]

// out
let arr = str.match(patt);
//console.log(arr);

//brackets
// [abc]  Find any character between the brackets
str = "text_a test_b test_c test_m"
patt = /test_[abc]/g
//console.log(str.match(patt));
// ["text_a test_b test_c"]


//[abc] Find any character NOT between the brackets
str = "text_a test_b test_c test_m"
patt = /test_[^abc]/g
patt = /test_[^a-c]/g // same
// [ "test_m"]

//[0-9] Find any character between the brackets (any digit)
str = "test_0 test_2 test_3 test_7"
patt = /test_[023]/g
patt = /test_[0-3]/g //same
// [ "test_0", "test_2", "test_3"  ]

//[^0-9] Find any character NOT between the brackets (any non-digit)
str = "test_0 test_2 test_3 test_7"
patt = /test_[^023]/g
patt = /test_[^0-6]/g //same
// [ "test_7" ]

//(x|y) Find any of the alternatives specified
str = "colour color"
patt = /col(o|ou)r/g
// [ "colour","color"]


//metacharacters
// . - dot. Any character
str = "car car? cars car2"
patt = /car./g
// [ "car", "car?", "cars", "car2" ]
str = "car456 carRr car. car"
patt = /car../g
// [ "car45", "carRr", "car. " ]

//  \w Find a word character
str = "google.com facebook.com romal.com romal.it"
patt = /\w+\.com/g
// [ "google.com", "facebook.com", "romal.com" ]
patt = /\w+\.(com|it)/g
// [ "google.com", "facebook.com", "romal.com", "romal.it" ]


//  \W Find a special character / NON-word character 
str = "google.com google.it google123$@!.com googleIsNotThaSuper.com"
patt = /\W+\.com/g
//console.log(str.match(patt));
// [ "$@!.com" ]


//\d <=> [0-9]

//Quantifiiers
// n+ Matches any string that contains at least one n
str = "n l nn ll nnn lll nnn"
patt = /l+/g
//[ "l", "ll", "lll" ]

//n? Matches nay string that contains zero or one occurrences of n
str = "3 July, 3rd August"
patt = /3(rd)?/g
// [ "3", "3rd" ]

//{2,3} Matches any string that contains a sequence of 2 to 3 n's
str = "n l nn ll nnn lll nnn"
patt = /l{2,3}/g
//[ "ll", "lll"]
str = "n l nn ll nnn lll nnn llll"
patt = /l{2,4}/g
//[ "ll", "lll", "llll"]
patt = /l{2}/g
//[ "ll", "ll", "ll", "ll"]
patt = /l{3,}/g
//[ "lll", "llll"]

//^n Matches any string with n at the beginning of it
str = "google.it google.com google.de"
patt = /^google\.\w+/g
//["google.it"]

//n$ Matches nay string with n at the end of 
patt = /google\.\w+$/g
//console.log(str.match(patt));
// [ "google.de" ]


//////////////////////////////////////////////////////////////////////
// out
let arr = str.match(patt)
console.log(arr)

