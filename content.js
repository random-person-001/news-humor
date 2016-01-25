// content.js
//alert("Hello from your Chrome extension!")

var level = 5
var wantSpace = false
var wantXKCD = false
var wantOther = false
var wantPolitical = false

var replacements = [
  ["  oeuaoeu ","oeuoeu   "]
]


/*
chrome.storage.sync.get("yes_to_xkcd", function(data){
    populate(data)
    reformat()
});
chrome.storage.sync.get("yes_to_space", function(data){
    populate(data)
    reformat()
});
chrome.storage.sync.get("yes_to_other", function(data){
    populate(data)
    reformat()
});
chrome.storage.sync.get("yes_to_political", function(data){
    populate(data)
    reformat()
});
*/
chrome.storage.sync.get("news_humor_options", function(data){
    populate(data["news_humor_options"])
    reformat()
});

function populate(stuffs) {

wantXKCD = stuffs["xkcd"]
wantSpace = stuffs["space"]
wantOther = stuffs["other"]
wantPolitical = stuffs["political"]
level = stuffs["extent"]
//console.log(stuffs["xkcd"])
//console.log(typeof(stuffs["xkcd"]))

// XKCD
if (level >= 5 && wantXKCD){
  replacements.push(
    ["Car", "Cat"],
    ["car", "cat"]
  )
}
if (level >= 2 && wantXKCD){
  replacements.push(
    ["Allegedly", "Kinda Probably"],
    ["allegedly", "kinda probably"],
    ["At Large", "Very Large"],
    ["at large", "very large"],
    ["Canidate", "Airbender"],
    ["canidate", "airbender"],
    ["Cents", "Million Dollars"],
    ["cents", "million dollars"],
    ["Congressional Leaders", "River Spirits"],
    ["congressional leaders", "river spirits"],
    ["Debate", "Dance-Off"],
    ["debate", "dance-off"],
    ["Drone", "Dog"],
    ["drone", "dog"],
    ["Electric", "Fusion-Powered"],
    ["electric", "fusion-powered"],
    ["Election", "Eating Contest"],
    ["election", "eating contest"],
    ["Grow", "Physically Grow"],
    ["grow", "physically grow"],
    ["Keyboard", "Leopard"],
    ["keyboard", "leopard"],
    ["New Study", "Tumblr Post"],
    ["new study", "tumblr post"],
    ["Space", "Spaaaace"],
    ["space", "spaaaace"],
    ["Successful", "Sudden"],
    ["successful", "sudden"],
    ["President", "Elf-Lord"],
    ["president", "Elf-Lord"],
    ["Presidential", "Elf-Lordly"],
    ["presidential", "Elf-Lordly"],
    ["Prime Minister", "Elf-Lord"],
    ["PM", "EL"],
    ["Poll", "Psychic Reading"],
    ["poll", "psychic reading"],
    ["Self-Driving", "Uncontrollably Swerving"],
    ["self-driving", "uncontrollably swerving"],
    ["vows to", "probably won't"]
  )
}
if (wantXKCD){
  replacements.push(
    ["could not be reached for comment", "is guilty and everyone knows it"]
  )
}



//Political
if (level >= 4 && wantPolitical){
  replacements.push(
    ["Trump", "Duck"],
    ["Hillary Clinton", "Empress Catherine of Russia"],
    ["Clinton", "Empress Catherine"],
    ["Ted Cruz", "His Mighty Belligerance"],
    ["Cruz", "His Great Belligerance"],
    ["Bernie Sanders", "Mao Zedong"],
    ["Sanders", "Zedong"]
  )
}
if (level >= 2 && wantPolitical){
  replacements.push(
    ["John Doe", "Anonymous, Inc"],
    ["Boycott", "Donate To"],
    ["boycott", "donate to"],
    ["Democratic", "Socialist"],
    ["Democrat", "Socialist"],
    ["democrat", "socialist"],
    ["Liberal", "Socialist"],
    ["liberal", "socialist"],
    ["Donat", "Brib"],
    ["donat", "brib"],
    ["Republican", "Redneck"],
    ["republican", "redneck"],
    ["Conservative", "Redneck"],
    ["conservative", "redneck"],
    ["Senator", "Knight"],
    ["Sen.", "Knight"],
    ["Governor", "Beaurocrat"],
    ["governor", "beaurocrat"],
    ["Gov.", "Beaurocrat"],
    ["gov.", "beaurocrat"],
    ["Abortion", "Highway Robbery"],
    ["abortion", "highway robbery"]
    ["Truth", "Half-Truth"],
    ["truth", "half-truth"],
    ["Gun", "Flamethrower"],
    ["gun", "flamethrower"],
    ["Polls", "Lottery Drawings"],
    ["polls", "lottery drawings"]
  )
}
if (level >= 1 && wantPolitical){
  replacements.push(
    ["Camera", "NSA-Controlled Camera"],
    ["camera", "NSA-controlled camera"],
    ["Polarization", "Hippification"],
    ["polarization", "hippification"],
    ["Quantitive Easing", "[some obscure economic concept]"],
    ["quantitive easing", "[some obscure economic concept]"]
  )
}



if (wantOther){
  replacements.push(
//Tech
  ["Windows 10", "Ubuntu 15.4"],
  ["Windows", "DOS"],
  ["Microsoft", "Developers"],
  ["PC", "Raspberry Pi"],
  ["Minecraft", "GTA 4"],

//Religious
  ["Evangelical", "Pastafarian"],
  ["evangelical", "Pastafarian"],
  ["Christian", "Pastafarian"],
  ["Jesus", "Flying Speghetti Monster"],
  ["God", "FSM"],
  ["Bible", "Gospel of the Flying Spaghetti Monster"],
  ["Islam", "Atheism"],
  ["Islamic", "Athiest"],
  ["Muslum", "Athiest"],

//International Affairs
  ["Anthem", "Battle Cry"],
  ["Shooting", "Party That Went Too Far"],
  ["Hurricane", "Giant Sea Monster"],
  ["hurricane", "giant sea monster"],
  ["Olympics", "KSP Tournament"],
  ["Deaths", "Ascentions to Heaven"],
  ["deaths", "ascentions to heaven"],
  ["Dies", "Reincarnates Early"],
  ["dies", "reincarnates early"],
  ["Dead", "Reincarnated Early"],
  ["dead", "reincarnated early"],
  ["Death", "Ascention to Heaven"],
  ["death", "ascention to heaven"],
  ["Timeline", "Procrastination Plan"],
  ["timeline", "procrastination plan"],
  ["National Guard", "Rebel"],
  ["Soldier", "Imperial Officer"],
  ["soldier", "Imperial officer"],
  ["Celebrity", "Butthead"],
  ["celebrity", "butthead"],
  ["Federal", "Imperial"],
  ["federal", "imperial"], 
  ["Police", "Special Forces"],
  ["police", "special forces"],
  ["Stock", "Concert Ticket"],
  ["stock", "concert ticket"],
  ["share", "concert ticket"],

  //Places
  ["Canada", "Siberia"],
  ["Canadia", "Siberia"],
  ["China", "India"],
  ["Chinese", "Indian"],
  ["ISIL", "Whacko terrorists"],
  ["ISIS", "Whacko terrorists"],
  ["IS ", "Whacko terrorists "],
  ["India", "Atlantis"],
  ["india", "Atlantis"],
  ["Indian", "Atlantis"],
  ["indian", "Atlantis"],
  ["Michigan", "Hoth"],
  ["Mich.", "Hoth"],
  ["Minnesota", "Hoth"],
  ["Minne", "Hoth"],
  ["Texas", "Redneckland"],
  ["Iowa", "Middle Earth"],
  ["China", "Han China"],
  ["Chinese", "Han Chinese"],
  ["Wisconsin", "The Dairy State"],
  
  //Other
  ["Chicken", "Dinosaur"],
  ["chicken", "dinosaur"],
  ["Delete", "Nominate for Oscar"],
  ["delete", "nominate for oscar"],
  ["Homeless", "Dirt-Poor"],
  ["homeless", "dirt-poor"],
  ["tumblr", "faller"],
  ["Facebook", "Face Book"],
  ["Twitter", "Little Bird Talk"],
  ["Tumblr", "Faller"],
  ["Milk", "Soylent"],
  ["milk", "Soylent"],
  ["Juice", "Liquid Nitrogen"],
  ["juice", "liquid nitrogen"],
  ["Apple", "UNIX"],
  ["Watch", "Holo"],
  ["watch", "holo"]
)
}


if (wantSpace){
  replacements.push(
    ["Export", "Shipment"],
    ["export", "shipment"],
    ["Navy", "Space Fleet"],
    ["navy", "space fleet"],
    ["Sailor","Interstellar Pilot"],
    ["sailor","interstellar pilot"],

    ["Bejing", "ISL"],
    ["Britian", "Beetlegeuse 5"],
    ["britian", "Beetlegeuse 5"],
    ["British", "Beetlegeuse 5ish"],
    ["british", "Beetlegeuse 5ish"],
    ["Bridge", "Hyperspace Terminal"],
    ["bridge", "hyperspace terminal"],
    ["EU", "Terrarian Union"],
    ["European", "Terrarian"],
    ["Harbor", "Spaceport"],
    ["harbor", "spaceport"],
    ["Iran", "Mars"],
    ["Iranian", "Martian"],
    ["US", "Confederated Colonies of the Moon"],
    ["U.S.", "Confederated Colonies of the Moon"],
    ["USA", "Confederated Colonies of the Moon"],
    ["United States", "Confederated Colonies of the Moon and Surrounding Areas"],
    ["American", "Lunar Colonist"],  
    ["Ocean", "Space"],
    ["ocean", "space"],
    ["Marine", "Interstellar"],
    ["marine", "interstellar"],
    ["Russia", "Jovian Moon Economic Zone"],
    ["Russian", "Jovian"],
    ["SF", "ISL"],
    ["San Fransisco", "ISL"],
    ["Washington DC", "Interstellar Command"],
    ["DC", "Interstellar Command"],
    ["Brussels", "Interstellar Command"],
    ["United Nations", "Interplanetary Union"],
    ["UN", "Interplanetary Union"],

    ["Bus", "Transport Shuttle"],
    ["bus", "transport shuttle"],
    ["Ferry", "Transport Shuttle"],
    ["ferry", "transport shuttle"],
    ["Boat", "Spacecraft"],
    ["boat", "spacecraft"],
    ["Raft", "Ejection Pod"],
    ["raft", "ejection pod"],
    ["Helicopter", "Dragon Capsule"],
    ["helicopter", "Dragon capsule"],
    ["Copter", "Capsule"],
    ["copter", "capsule"],
    ["Oil", "Liquid Hydrogen"],
    ["oil", "liquid hydrogen"]
  )
}
}


function replaceAll(str, find, replacey) {
  re = new RegExp('(^|.\\b)('+find+')(s?\\b.|$)', 'g')
  return str
   .replace(re,function(all,char1,cat,char2)
    {
       //check 1st, capitalize if required
       var replacement = (cat.charAt(0) === 'C' ? '' : '') + replacey;
       if (char1 === ' ' && char2 === 's')
       {//replace plurals, too
           cat = replacement + 's';
       }if (char1 === ' ' && char2 === ':')
       {//replace colons, too
           cat = replacement + ':';
       }if (char1 === ' ' && char2 === '\'')
       {//replace apostrophies, too
           cat = replacement + '\'';
       }
       else
       {//do not replace if dashes are matched
           cat = char1 === '-' || char2 === '-' ? cat : replacement;
       }
       return char1 + cat + char2;//return replacement string
    });
}


function reformat (){
  //console.log("reformatting");
  //console.log(replacements);
  var page = document.body.innerHTML;
  try{
    for (i=0; i<replacements.length; i++){
      page = replaceAll(page, replacements[i][0], replacements[i][1])
    }
  }
  catch (e){
    console.log("Uh-oh! ")
    console.log(e)
  }
  document.body.innerHTML = page
}



//reformat();
//Legacy stuff below
//document.body.innerHTML=document.body.innerHTML.replace("/media/gi","<b>pokedex</b>");
//document.body.innerHTML=document.body.innerHTML.replace(/Debate/gi,"Dance-Off");
