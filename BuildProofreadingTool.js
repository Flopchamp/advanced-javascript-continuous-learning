function isPalindrome(word){
  let lowerCasedWord = word.toLowerCase().split('')
 let lowerCasedArray =lowerCasedWord.reverse().join('')
 if(word.toLowerCase()=== lowerCasedArray){
  return true
 }{
  return false
 }
}

function findPalindromeBreaks(words){
  const nonPalindromeIndices = [];
  for(let i=0;i < words.length;i++){
    if(!isPalindrome(words[i])){
      nonPalindromeIndices.push(i)
    }
  }
  return nonPalindromeIndices;
}

function findRepeatedPhrases(words,phraseLength){
  const ArrayPhraseLength =[];
  if(phraseLength >= words.length){
    return [];
  }
  const count = {}
  for(let i =0;i <= words.length-phraseLength;i++){
    let slicedWord =words.slice(i, i + phraseLength).join(' ');
    if(count[slicedWord]){
      count[slicedWord] ++
    }else{
      count[slicedWord] = 1
    }
    
    for(let i = 0; i <= words.length - phraseLength; i++){
      const slicedWord =words.slice(i, i + phraseLength).join(' ');
      if(count[slicedWord] > 1){
      ArrayPhraseLength.push(i)
    }
    }
  }
  return ArrayPhraseLength;
}

function analyzeTexts(texts,phraseLength){
  if(texts.length===0){
    return []
  }
  const result =[]
  for (let i =0;i<texts.length;i++){
    const repeats = findRepeatedPhrases(texts[i], phraseLength);const breaks = findPalindromeBreaks(texts[i]);
    result.push({
  repeatedPhrases: repeats,
  palindromeBreaks: breaks
});

  }
  return result
}