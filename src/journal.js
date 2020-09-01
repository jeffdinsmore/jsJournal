// business logic Journal
function Journal() {
  this.entries = []
}

let journal = new Journal();

// add entry to journal
Journal.prototype.addEntry = function(entry) {
  entry.wordCount = this.wordCounter(entry);
  let array = this.countLetter(entry);
  entry.vowels = array[0];
  entry.consonants = array[1];
  entry.teaser = this.getTeaser(entry);
  this.entries.push(entry);
}

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
  let words = entry.split(" ");
  let newArray = [];
  for (let i = 0; i < 8; i++) {
    if (/[!.?]/g.test(words[i])) {
      i = 8;
    } else {
      newArray.push(words[i]);
    }
  }
  let teaser = newArray.join(" ");
  return teaser;
}

// business logic Entry
export function Entry(title, body) {
  this.title = title,
  this.body = body
}

export function report(entry) {
  let myEntry = journal.addEntry(entry);

  let message = "<p>Title " + myEntry.title + "<br>" + myEntry.body + "<br>";
  message += "Number of words is " + myEntry.words + "<br>";
  message += "Number of vowels is " + myEntry.vowels + "<br>";
  message += "Number of consonants is " + myEntry.consonants + "<br>";
  message += "the Teaser is " + myEntry.teaser;

  return message;
}