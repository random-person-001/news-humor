// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    defaults = {};
    defaults['xkcd'] = true;
    defaults['political'] = true;
    defaults['space'] = true;
    defaults['other'] = true;
    defaults['grammar'] = false;
    defaults['extent'] = 4;

    defaults["changeThisSite"] = false;
    defaults["sites"] = [
        "news.google.com/",
        "bloomberg.com/",
        "abcnews.go.com/",
        "espn.go.com/",
        "news.nationalpost.com/",
        "www.wsj.com/",
        "www.nytimes.com/",
        "www.washingtonpost.com/",
        "www.huffingtonpost.com/",
        "www.reuters.com/",
        "www.foxnews.com/",
        "www.chicagotribune.com/",
        "www.pcmag.com/",
        "www.people.com/",
        "www.denverpost.com/",
        "www.time.com/",
        "www.sltrib.com/",
        "www.scienceworldreport.com/",
        "www.nasa.gov/",
        "www.space.com/",
        "www.spacex.com/",
        "www.nasdaq.com/",
        "www.sfgate.com/",
        "www.nj.com/",
        "www.wkyc.com/",
        "www.discovery.com/",
        "www.cnn.com/",
        "www.verdenews.com/",
        "www.dcourier.com/",
        "mashable.com/", //This one will never work :( no www.
        "www.macrumors.com/",
        "www.postbulletin.com/",
        "www.newsweek.com/",
        "www.usatoday.com/",
        "www.appleinsider.com/",
        "www.seattlepi.com/",
        "www.csmonitor.com/",
        "www.miamiherald.com/",
        "www.latimes.com/"
    ]

    chrome.storage.sync.set({news_humor_options: defaults});
});

var currentTab = ""
// listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){

//  Get sites, tell if we're on one that we should change
  console.log("You just changed tabs")
  chrome.storage.sync.get("news_humor_options", function(data){
    var onLegitSite = false
    var url = tab.url.toLowerCase()
    currentTab = url
    var sites = data["news_humor_options"]["sites"]
    console.log(data)
    for(i=0; i<sites.length; i++){
      siteName = sites[i]
      if (url.indexOf(siteName) !== -1){
        onLegitSite = true
        //chrome.pageAction.show(tab.id);
        //chrome.tabs.update(tab.id, {url: "http://www.spacex.com/"}); // Redirect
      }
    }
    chrome.storage.sync.get("news_humor_options", function(original){
        original['news_humor_options']["changeThisSite"] = onLegitSite
        chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
    });

    console.log(onLegitSite)
  });
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Sup")
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
    if (request.greeting == "Please, could you add this domain?"){
      console.log("sure!")
      //Actually add it:
      url = currentTab
      var firstDot = url.indexOf(".")
      var start = url.lastIndexOf("/", firstDot) + 1
      var secondDot = url.indexOf(".", firstDot)
      if (secondDot === -1){  //Could use a ternary operator, or...
        secondDot = firstDot
      }
      var end = url.indexOf("/", secondDot)
      var domain = url.substring(start, end) //Yay!
      console.log(domain)
      console.log(url)

      //Good!  Now we have it, and can add it to the list.
      chrome.storage.sync.get("news_humor_options", function(original){
        original['news_humor_options']['sites'].push(domain);
        chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
      });
      
      sendResponse({farewell: "Yes indeed.  The pleasure is mine in adding it."});
    }
    if (request.greeting == "Please, could you remove this domain?"){
      console.log("sure thing!")
      //Actually add it:
      url = currentTab
      var firstDot = url.indexOf(".")
      var start = url.lastIndexOf("/", firstDot) + 1
      var secondDot = url.indexOf(".", firstDot)
      if (secondDot === -1){  //Could use a ternary operator, or...
        secondDot = firstDot
      }
      var end = url.indexOf("/", secondDot) + 1
      var domain = url.substring(start, end) //Yay!
      console.log(domain)
      console.log(url)

      //Good!  Now we have it, and can add it to the list.
      chrome.storage.sync.get("news_humor_options", function(original){
        sites = original['news_humor_options']['sites'];
        sites.splice(sites.indexOf(domain), 1)
        original['news_humor_options']['sites'] = sites
        chrome.storage.sync.set({news_humor_options : original['news_humor_options']});
      });
      
      sendResponse({farewell: "Yes indeed.  The pleasure has been mine in exterminating it."});
    }
  });


/*

  document.addEventListener('DOMContentLoaded', function(){
    console.log("Hi there!")

//Check if this site should be replaced
    chrome.pageAction.show(tab.id);

    chrome.storage.sync.get("be_a_buzzkill", function(data){
        if (tab.url.toLowerCase().indexOf("facebook.com/buzzfeed") !== -1){
            chrome.tabs.update(tab.id, {url: "http://www.facebook.com/?no-buzzfeed-for-you!"});
        }
    });
});
*/

