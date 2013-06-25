var tweets = {
  replaceURL: function(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a href='$1'>$1</a>"); 
  },

  replaceHash: function(text) {
    var exp = /#([a-zA-Z0-9]+)/g;
    return text.replace(exp,"<a href='https://twitter.com/search?q=$1'>#$1</a>"); 
  }
}