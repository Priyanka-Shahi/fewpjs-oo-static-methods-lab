class Formatter {
  //add static methods here
   static capitalize(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);

  }

  static sanitize(str) {
    str = str.replaceAll(/[^A-Za-z0-9-' ]+/g, '');
    return str;

  }

  static titleize(str) {
    let arr = [];
    let exludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    arr = str.split(' ');
  return arr.map((word, index) =>
  {
     return exludeWords.includes(word) && index !=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);

  }).join(' ');

  }
}