// Write your solution below:
// codegrepper
// function removeDuplicateCharacters(string) {
//     return string
//       .split('')
//       .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//       })
//       .join('');
//   }
//   console.log(removeDuplicateCharacters('baraban'));



// learning this code
const makeUnique = (str) => [...new Set(str), console.log(new Set(str))].join('');

console.log(makeUnique('iwanttoclimbamountain'))
