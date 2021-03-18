// MASTER NOTES
// No * before and after answer strings
// ex Test* * *var NOT *Test* * *var*
//KEEP NO SPACES BETEWEN PHRASES, especially colored words


function toArray(obj) {
  var array = [];
  for (var i in obj) {
    array.push([i, obj[i]]);
  }
  return array;
}

https://edabit.com/challenge/AP4hnF97anRc2mAZ6

function  sortIt  (arr)  {return  arr.  sort  ((a, b)   =>   { let num   = a.length   ===  1 ?   a[0] :   a; return   num -   b})}



//MEDIUM - SORT THE UNSORTABLE
    function sortIt(arr) {
      return arr.sort((a, b) => {
      let num = a.length === 1 ? a[0] : a;
      return num - b
      })
    }


    function  toArray  (obj)  {    var  array  =[];      for(var i  in obj){  array.push  ([i,obj  [i]]);   }return array;  }


//HARD QS
{
  "_id" : ObjectId("60386b91979d70796b21c617"),
  "Title" : "Number of Boomerangs",
  "Category" : "Arrays",
  "Question" : "A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different. ... Some boomerang examples: [3, 7, 3], [1, -1, 1], [5, 6, 5] ... Create a function that returns the total number of boomerangs in an array.. To illustrate: [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2] // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2] ",
  "Answer" : "function  countBoomerangs  (arr)  {return  arr.  reduce . ((acc ,   e , index)  =>  acc +  (e  === arr[index+2]  &&  e!  = arr  [index+1]  ) ,  0); }",
  "Flag" : false,
  "Score" : 0,
  "Example" : "sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ 'Boom!' ... 7 contains the number seven. ... sevenBoom([8, 6, 33, 100]) ➞ 'there is no 7 in the array'...None of the items contain 7 within them.... sevenBoom([2, 55, 60, 97, 86]) ➞ 'Boom!' ... 97 contains the number seven.",
  "__v" : 0
}
{
  "_id" : ObjectId("60386bce979d70796b21c618"),
  "Title" : "Seven Boom!",
  "Category" : "Arrays",
  "Question" : "Create a function that takes an array of numbers and return 'Boom!' if the digit 7 appears in the array. Otherwise, return 'there is no 7 in the array'.",
  "Answer" : "const  sevenBoom  =   function  (arr) {  return (arr.  join  ().  includes  ('7')  ?  'Boom!'  : 'there  is no 7  in the  array  ');}",
  "Flag" : false,
  "Score" : 0,
  "Example" : "sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ 'Boom!' ... 7 contains the number seven. ... sevenBoom([8, 6, 33, 100]) ➞ 'there is no 7 in the array'...None of the items contain 7 within them.... sevenBoom([2, 55, 60, 97, 86]) ➞ 'Boom!' ... 97 contains the number seven.",
  "__v" : 0
}
{
  "_id" : ObjectId("60386e26979d70796b21c619"),
  "Title" : "Numbers in Strings",
  "Category" : "Strings",
  "Question" : "Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.",
  "Answer" : "function  numInStr  (arr) {  return  arr.  filter(  item =>  { for  (char  of item)  { if   (char.  charCodeAt  (0)>47 &&   char.  charCodeAt  (0)<58){  return  item;}  }}  )}",
  "Flag" : false,
  "Score" : 0,
  "Example" : "numInStr(['1a', 'a', '2b', 'b']) ➞ ['1a', '2b']... numInStr(['abc', 'abc10']) ➞ ['abc10']... numInStr(['abc', 'ab10c', 'a10bc', 'bcd']) ➞ ['ab10c', 'a10bc']...numInStr(['this is a test', 'test1']) ➞ ['test1']",
  "__v" : 0
}
{
  "_id" : ObjectId("603870e2979d70796b21c61a"),
  "Title" : "Left Shift by Powers of Two",
  "Category" : "Recursion",
  "Question" : "The left shift operation is similar to multiplication by powers of two, thus, the process is repetitive and can be done recursively.. Sample calculation using the left shift operator (<<):  10 << 3 = 10 * 2^3 = 10 * 8 = 80 ...-32 << 2 = -32 * 2^2 = -32 * 4 = -128...5 << 2 = 5 * 2^2 = 5 * 4 = 20...Write a recursive function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.",
  "Answer" : "function  shiftToLeft  (x, y)  {const  shifted  = y ?  x *  2  : x;  return   y <=   1 ?   shifted   :  shiftToLeft  (shifted,  y -  1)  ;}",
  "Flag" : false,
  "Score" : 0,
  "Example" : "shiftToLeft(5, 2) ➞ 20 ...shiftToLeft(10, 3) ➞ 80... shiftToLeft(-32, 2) ➞ -128 ... shiftToLeft(-6, 5) ➞ -192 ...shiftToLeft(12, 4) ➞ 192 ...shiftToLeft(46, 6) ➞ 2944",
  "__v" : 0
}
{
  "_id" : ObjectId("60387307979d70796b21c61b"),
  "Title" : "Length of a Nested Array",
  "Category" : "Recursion",
  "Question" : "The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements: [1, [2, 3]] // 2 elements, number 1 and array [2, 3]Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3... Write a function that returns the total number of non-nested items in a nested array.",
  "Answer" : "function  getLength  (arr)  {  let count  = 0;  arr.  forEach(  item =>  { if  (Array.  isArray  (item  )) {  count +=  getLength  (item);  } else  {count  ++;}  });  return  count;}",
  "Flag" : false,
  "Score" : 0,
  "Example" : "getLength([1, [2, 3]]) ➞ 3...getLength([1, [2, [3, 4]]]) ➞ 4...getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6...getLength([1, [2], 1, [2], 1]) ➞ 5",
  "__v" : 0
}

//MEDIUM QS
{

  "Title" : "Sort the Unsortable",
  "Category" : "Arrays",
  "Question" : "In this challenge you will be given an array similar to the following: [[3], 4, [2], [5], 1, 6] In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to \"the content of the elements\" as [1, [2], [3], 4, [5], 6] Create a function that, given an array similar to the above, sorts the array according to the content of the element.",
  "Answer" : "function  sortIt . (arr)  {return  arr.  sort  ((a, b)   =>   { let num   = a.length   ===  1 ?   a[0] :   a; return   num -   b})}",
  "Flag" : false,
  "Score" : 2,
  "Example" : "sortIt([4, 1, 3]) ➞ [1, 3, 4] ... sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]] ... sortIt([4, [1], 3]) ➞ [[1], 3, 4] ... sortIt([[4], 1, [3]]) ➞ [1, [3], [4]] ... sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]",

}

db.mediumqs.remove({Title:"A Sorted Array"})

{
  "_id" : ObjectId("60383f56979d70796b21c610"),
  "Title" : "A Sorted Array",
  "Category" : "Arrays",
  "Question" : "In this challenge you will be given an array similar to the following: [[3], 4, [2], [5], 1, 6] In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to \"the content of the elements\" as [1, [2], [3], 4, [5], 6] Create a function that, given an array similar to the above, sorts the array according to the content of the element.",
  "Answer" : "function  sortIt . (arr)  {return  arr.  sort  ((a, b)   =>   { let num   = a.length   ===  1 ?   a[0] :   a; return   num -   b})}",
  "Flag" : false,
  "Score" : 2,
  "Example" : "sortIt([4, 1, 3]) ➞ [1, 3, 4] ... sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]] ... sortIt([4, [1], 3]) ➞ [[1], 3, 4] ... sortIt([[4], 1, [3]]) ➞ [1, [3], [4]] ... sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]",
  "__v" : 0
}
{
  "_id" : ObjectId("6038745f979d70796b21c61c"),
  "Title" : "Convenience Store",
  "Category" : "Numbers",
  "Question" : "Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies...To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.",
  "Answer" : "function  changeEnough  (arr)  {  let count  = 0;  arr.  forEach(  item =>  { if  (Array.  isArray  (item  )) {  count +=  getLength  (item);  } else  {count",
  "Flag" : false,
  "Score" : 2,
  "Example" : "  changeEnough([2, 100, 0, 0], 14.11) ➞ false... changeEnough([0, 0, 20, 5], 0.75) ➞ true... changeEnough([30, 40, 20, 5], 12.55) ➞ true...changeEnough([10, 0, 0, 50], 3.85) ➞ false...changeEnough([1, 0, 5, 219], 19.99) ➞ false",
  "__v" : 0
}
{
  "_id" : ObjectId("603875ec979d70796b21c61d"),
  "Title" : "How Much is True?",
  "Category" : "Arrays",
  "Question" : "Create a function which returns the number of true values there are in an array. Note: Return 0 if given an empty array...All array items are of the type bool (true or false).",
  "Answer" : "function  countTrue  (arr)  {  return  arr  .filter  (  x  =>  x  ==  true  ).  length  }",
  "Flag" : false,
  "Score" : 1,
  "Example" : "countTrue([true, false, false, true, false]) ➞ 2... countTrue([false, false, false, false]) ➞ 0... countTrue([]) ➞ 0",
  "__v" : 0
}

//EASYQs

{
  "_id" : ObjectId("60386840979d70796b21c615"),
  "Title" : "Convert Objects into Arrays",
  "Category" : "Arrays",
  "Question" : "Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array. Example: toArray({ a: 1, b: 2 }) ➞ [[\"a\", 1], [\"b\", 2]]",
  "Answer" : "function  toArray  (obj)  {    var  array  =[];      for(var i  in obj){  array.push  ([i,obj  [i]]);   }return array;  }",
  "Flag" : false,
  "Score" : 1,
  "Example" : "Ex1. toArray({ a: 1, b: 2 }) ➞ [[\"a\", 1], [\"b\", 2]]",
  "__v" : 0
}

{

  "Title" : "Convert Objects into Arrays",
  "Category" : "Arrays",
  "Question" : "Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array. Example: toArray({ a: 1, b: 2 }) ➞ [[\"a\", 1], [\"b\", 2]]",
  "Answer" : "function*toArray*(obj)*some spaces*test",
  "Flag" : false,
  "Score" : 1,
  "Example" : "Ex1. toArray({ a: 1, b: 2 }) ➞ [[\"a\", 1], [\"b\", 2]]",

}


//TEST
function*toArray*(obj)*{

//FINAL
function*toArray*(obj)*{* * *var*array*=*[]; * *for(*var*i  in*obj){* * *array*.push*([i, obj[i]]);}*return*array;}

//GRID
function*toArray*(obj)*{* *
*var*array*=*[];*
*for(*var*i  in*obj){*
* *array*.push*([i, obj[i]]);}*
return*array;}*