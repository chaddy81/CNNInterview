$(function() {
  $.ajax({
    type:'POST',
    url: 'http://localhost:30000/cnnbrk-tweets'
  }).done(function(data) {
    console.log(data);
    $.each(data, function(k,v){
      var origText = tweets.replaceURL(v.text);
      var newText = tweets.replaceHash(origText);
      console.log(k);
      if(k <= 4) {
        $(".tweets .column1").append('<div class="tweet"><p>' + newText + '</p><small>Tweeted By <a href="http://twitter.com/' + v.user.screen_name + '">' + v.user.screen_name + '</a> at <span>' + v.created_at.substring(0,19) + '</span></small></div>');
      }else{
        $(".tweets .column2").append('<div class="tweet"><p>' + newText + '</p><small>Tweeted By <a href="http://twitter.com/' + v.user.screen_name + '">' + v.user.screen_name + '</a> at <span>' + v.created_at.substring(0,19) + '</span></small></div>');
      }
    });
  });
});