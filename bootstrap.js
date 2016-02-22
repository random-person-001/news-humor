// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    defaults = {};
    defaults['xkcd'] = true;
    defaults['political'] = true;
    defaults['space'] = true;
    defaults['other'] = true;
    defaults['extent'] = 4;

    chrome.storage.sync.set({yes_to_xkcd: true});
    chrome.storage.sync.set({yes_to_political: true});
    chrome.storage.sync.set({yes_to_space: true});
    chrome.storage.sync.set({yes_to_other: true});
    chrome.storage.sync.set({yes_to_extent: 4});

    chrome.storage.sync.set({news_humor_options: defaults});
});

// listen for any changes to the URL of any tab.
/*
chrome.tabs.onUpdated.addListener(function(id, info, tab){
        chrome.pageAction.show(tab.id);

        chrome.storage.sync.get("yes_to_xkcd", function(data){
            if (data["yes_to_xkcd"]){
                //Just changed.
            }
        });
        chrome.storage.sync.get("yes_to_political", function(data){
            if (data["yes_to_political"]){
                //Just changed.
            }
        });
        chrome.storage.sync.get("yes_to_space", function(data){
            if (data["yes_to_space"]){
                //Just changed.
            }
        });
        chrome.storage.sync.get("yes_to_other", function(data){
            if (data["yes_to_other"]){
                //Just changed.
                alert("Other changed")
            }
        });

});
*/
document.addEventListener('DOMContentLoaded', function(){
    console.log("Hi there!")
    var xkcd = document.getElementById('yes-xkcd');
    var political = document.getElementById('yes-political');
    var space = document.getElementById('yes-space');
    var other = document.getElementById('yes-other');
    var extent = document.getElementById('extent');

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
    chrome.storage.sync.get("yes_to_other", function(data){
      extent.value = data["yes_to_extent"]
    });
*/
    console.log("Bootstrap.js: beginning sync get")
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
          original['xkcd'] = xkcd.checked;
          chrome.storage.sync.set({news_humor_options : original});
        });
    });

    political.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          console.log("Political checkbox changed");
          original['political'] = political.checked;
          chrome.storage.sync.set({news_humor_options : original});
        });
    });
    space.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['space'] = space.checked;
          chrome.storage.sync.set({news_humor_options : original});
        });
    });
    other.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['other'] = other.checked;
          chrome.storage.sync.set({news_humor_options : original});
        });
    });
    extent.addEventListener("change", function(){
        chrome.storage.sync.get("news_humor_options", function(original){
          original['extent'] = extent.value;
          chrome.storage.sync.set({news_humor_options : original});
        });
    });


});

