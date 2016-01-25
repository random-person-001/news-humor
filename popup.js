
document.addEventListener('DOMContentLoaded', function(){
    console.log("Hi there!")
    var xkcd = document.getElementById('yes-xkcd');
    var political = document.getElementById('yes-political');
    var space = document.getElementById('yes-space');
    var other = document.getElementById('yes-other');
    var extent = document.getElementById('extent');

    // set the initial state of the checkbox
/*
    chrome.storage.sync.get("yes_to_xkcd", function(data){
      if (data["yes_to_xkcd"]){
        xkcd.checked = true;
      } else {
        xkcd.checked = false;
      }
    });
    chrome.storage.sync.get("yes_to_political", function(data){
      if (data["yes_to_political"]){
        political.checked = true;
      } else {
        political.checked = false;
      }
    });
    chrome.storage.sync.get("yes_to_space", function(data){
      if (data["yes_to_space"]){
        space.checked = true;
      } else {
        space.checked = false;
      }
    });
    chrome.storage.sync.get("yes_to_other", function(data){
      if (data["yes_to_other"]){
        other.checked = true;
      } else {
        other.checked = false;
      }
    });
    chrome.storage.sync.get("yes_to_extent", function(data){
      extent.value = data["yes_to_extent"]
    });
*/
    chrome.storage.sync.get("news_humor_options", function(data){
      xkcd.checked = data["news_humor_options"]['xkcd']
    });
    chrome.storage.sync.get("news_humor_options", function(data){
      political.checked = data["news_humor_options"]['political']
    });
    chrome.storage.sync.get("news_humor_options", function(data){
      space.checked = data["news_humor_options"]['space']
    });
    chrome.storage.sync.get("news_humor_options", function(data){
      other.checked = data["news_humor_options"]['other']
    });
    chrome.storage.sync.get("news_humor_options", function(data){
      extent.value = data["news_humor_options"]['extent']
    });


/*
    xkcd.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_xkcd: xkcd.checked});
    });
    political.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_political: political.checked});
    });
    space.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_space: space.checked});
    });
    other.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_other: other.checked});
    });
    extent.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_extent: extent.value});
    });
*/
    xkcd.addEventListener("change", function(){ 
        chrome.storage.sync.get("news_humor_options", function(original){
          original['news_humor_options']['xkcd'] = xkcd.checked;
          chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
        });
    });

    political.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          console.log("Political changed from popup.js");
          console.log(original);
          newy = original['news_humor_options'];
          console.log(newy);
          newy['political'] = political.checked;
          console.log(newy);
          chrome.storage.sync.set({news_humor_options : newy});
        });
    });
    space.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['news_humor_options']['space'] = space.checked;
          chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
        });
    });
    other.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['news_humor_options']['other'] = other.checked;
          chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
        });
    });
    extent.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['news_humor_options']['extent'] = extent.value;
          chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
        });
    });



});
