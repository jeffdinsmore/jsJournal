// business logic Journal
function Journal() {
  this.entries = []
}

// add entry to journal
Journal.prototype.addEntry = function(entry) {
  entry.wordCount = this.wordCounter(entry);
  let array = this.countLetter(entry);
  entry.vowels = array[0];
  entry.consonants = array[1];
  entry.teaser = this.getTeaser(entry);
  this.entries.push(entry);
}

// add 
// count words
Journal.prototype.wordCount = function(entry) {
  let count = entry.split(" ").length;
  return count;
}

// count vowels and consonants
Journal.prototype.countLetter = function(entry) {
  let count = [0, 0];
  
  let letters = entry.split("");
  letters.forEach(function(letter) {
    if (/[aeiou]/gi.test(letter)) {
      count[0]++;
    } else if (/[a-z]/gi.test(letter)) {
      count[1]++;
    }
  });
  return count;
}

// return first sentence or first 8 words
Journal.prototype.getTeaser = function(entry) {
  
}

// business logic Entry
export function Entry() {
  this.title = title,
  this.body = body
}

let journal = new Journal();