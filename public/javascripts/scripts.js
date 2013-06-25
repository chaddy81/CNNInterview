$(function() {
  $.ajax({
    type:'POST',
    url: 'http://localhost:30000/cnnbrk-tweets'
  }).done(function(data) {
    var tweet_data;
    
    $.each(data, function(k,v){
      var origText = tweets.replaceURL(v.text);
      var newText = tweets.replaceHash(origText);
      
      tweet_data = {
        text: newText,
        name: v.user.screen_name,
        created_at: v.created_at.substring(0,19)
      }
      
      tweet = ich.tweet(tweet_data);
      
      if(k <= 4) {
        $(".tweets .column1").append(tweet);
      }else{
        $(".tweets .column2").append(tweet);
      }
    });
  });
});