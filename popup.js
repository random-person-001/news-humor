
document.addEventListener('DOMContentLoaded', function(){

    var xkcd = document.getElementById('yes-xkcd');
    var political = document.getElementById('yes-political');
    var space = document.getElementById('yes-space');
    var other = document.getElementById('yes-other');

    // set the initial state of the checkbox
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


    xkcd.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_xkcd: space.checked});
    });
    political.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_political: space.checked});
    });
    space.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_space: space.checked});
    });
    other.addEventListener("change", function(){
        chrome.storage.sync.set({yes_to_other: space.checked});
    });


});
