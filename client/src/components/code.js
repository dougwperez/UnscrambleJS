function toArray(obj) {
  var array = [];
  for (var i in obj) {
    array.push([i, obj[i]]);
  }
  return array;
}

https://edabit.com/challenge/AP4hnF97anRc2mAZ6

function  sortIt  (arr)  {return  arr.  sort  ((a, b)   =>   { let num   = a.length   ===  1 ?   a[0] :   a; return   num -   b})}




    function sortIt(arr) {
      return arr.sort((a, b) => {
      let num = a.length === 1 ? a[0] : a;
      return num - b
      })
    }


    function  toArray  (obj)  {    var  array  =[];      for(var i  in obj){  array.push  ([i,obj  [i]]);   }return array;  }


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