(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
      function max(a,b) {
        if (a <= b) {
          return b;

        } else {
          return a;
        }

        // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
    function max_of_three(a,b,c) {
      if(a >= b){
        if(a > c){
        return a;

      }if {
          return c;
        }elseif (b >= c){
        return b;

      }else{
        return c;
      }



  

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  function is_vowel(x):
    var vowels = ["a", "e", "i", "o", "u", "y," "w"];
    if (x in vowels) {
      return True

    }else {
      return False;
    }





  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
    function translate(phrase) {
      var rov = [];
      for (i in phrase) {
        rov.append(str(i) + "o" + str(i));
      }
      var last = "".join(rov);
      return last
    }

  

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
    function multiply(n){
    var total = 1;
    for(i in range(0,len(n))) {
      var total;
      *= n[i];

      print(total)
    }




  

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
    function reverse(a) {
      var last = ''.join(list(reversed(a)))
      return last
    }

  
  
  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
    function find_longest_word(list){
      var longest_word = " ";
      for (i in list){
.        if(len(i) > len(longest_word){
            longest_word = i}
      }
      return len(longest_word)
    }
  

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

    function filter_long_words(words, a) {
      var longest_word = "";
      var longest_word_greater = [];
      for (i in words) {
        if (len(i) > len(longest_word)){
          longest_word = i;
        }else{

          return longest_word;
      }

      if (i in longest_word > a) {
      print(i);
    }


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------



  
  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');
  
  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR function maxOfThree');
  
  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR function maxOfThree');
  
  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');
  
  console.assert(isVowel('a') === true, 'ERROR function isVowel');
  
  console.assert(isVowel('b') == false, 'ERROR function isVowel');
  
  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');
  
  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');
  
  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');
  
  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'function findLongestWords');
  
  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);
  
  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);
  
  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);
  
  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);

})();
