const markDownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview")

markDownInput.addEventListener("input",()=>{
  
  const htmlCode =convertMarkdown()
htmlOutput.textContent = htmlCode
 preview.innerHTML = htmlCode
})
function  convertMarkdown(){
  let result =  markDownInput.value;
  const h3Regex = /^\s*###\s+(.+)/gm;
  const h2Regex = /^\s*##\s+(.+)/gm;
  const h1Regex = /^\s*#\s+(.+)/gm;
  const quotesRegex =/^\s*>\s+(.+)/gm;
  const textForASterckRegex = /\*\*(.*?)\*\*/g;
  const textForUnderScoreRegex = /__(.*?)__/g;
  const italicTextAsterickRegex = /\*(.*?)\*/g;
  const italicTextUnderscoreRegex = /_(.*?)_/g;
  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  const linkRegex = /\[(.*?)\]\((.*?)\)/g
  result =result.replace(h3Regex,"<h3>$1</h3>");
   result =result.replace(h2Regex,"<h2>$1</h2>");
  result =result.replace(h1Regex,"<h1>$1</h1>");
  result = result.replace(quotesRegex,"<blockquote>$1</blockquote>");
  result = result.replace(textForASterckRegex,"<strong>$1</strong>");
   result = result.replace(textForUnderScoreRegex,"<strong>$1</strong>");
    result = result.replace(italicTextAsterickRegex,"<em>$1</em>");
     result = result.replace(italicTextUnderscoreRegex,"<em>$1</em>");
     result = result.replace(imageRegex,`<img alt="$1" src="$2">`);
     result = result.replace(linkRegex,`<a href="$2">$1</a>`);


  return result;
}