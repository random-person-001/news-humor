
document.addEventListener('DOMContentLoaded', function(){
    console.log("Hi there! from popup.js")
    var xkcd = document.getElementById('yes-xkcd');
    var political = document.getElementById('yes-political');
    var space = document.getElementById('yes-space');
    var other = document.getElementById('yes-other');
    var grammar = document.getElementById('yes-grammar');
    var extent = document.getElementById('extent');
    var addDomain = document.getElementById('add-this');
    var removeDomain = document.getElementById('remove-this');
    var applybtn = document.getElementById('apply');

    // set the initial state of the checkboxes
    chrome.storage.sync.get("news_humor_options", function(data){
      xkcd.checked = data["news_humor_options"]['xkcd']
      political.checked = data["news_humor_options"]['political']
      space.checked = data["news_humor_options"]['space']
      other.checked = data["news_humor_options"]['other']
      grammar.checked = data["news_humor_options"]['grammar']
      extent.value = data["news_humor_options"]['extent']
    });


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
    grammar.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['news_humor_options']['grammar'] = grammar.checked;
          chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
        });
    });
    extent.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['news_humor_options']['extent'] = extent.value;
          chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
        });
    });
    addDomain.addEventListener("click", function(){
       // Tell botstrap.js to add this domain to list
        chrome.runtime.sendMessage({greeting: "Please, could you add this domain?"}, function(response) {
          console.log(response.farewell);
        });
    });
    removeDomain.addEventListener("click", function(){
       // Tell botstrap.js to remove this domain to list
        chrome.runtime.sendMessage({greeting: "Please, could you remove this domain?"}, function(response) {
          console.log(response.farewell);
        });
    });

//chrome.tabs.executeScript(null, {file: "content_script.js"});

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

});
