// content.js
//alert("Hello from your Chrome extension!")

/*NOTES:
    > Streamline synking settings here -- integrate addData?
    > Make replaceAll() work on replacements ending with periods
    > ...?

     New Things:
FBI      - 
Budget   - 
common nouns - potion ingredients
corn     - veggemite
wheat, etc - soybeans
 ?  - sugar cookie
Rubio > Bro
Foxconn > Foxes
Elected > ?
Economy > ?

Price  > Gouge
Apple  > Bananna
Europe > Europa
VR     > ?


THINGS NOT WORKING:
Sen. - Knight
Gov. - Beaurocrat
E.U. - Terrarian Union
U.S. - Confederated Colonies of the Moon
I.S. - Whacko terrorists
Mich.- Hoth
Minn.- Hoth
Wisc.- The Dairy State

(all things ending in a period)
*/
var level = 5
var wantSpace = false
var wantXKCD = false
var wantOther = false
var wantPolitical = false
var wantGrammar = false
console.log("Content.js running")

var replacements = [
  ["  Probably Erronious Placeholder ","  ... "]
]

//  Mainish
chrome.storage.sync.get("news_humor_options", function(data){
    if (data["news_humor_options"]["changeThisSite"]){
        console.log("Yay, it's a fun site!")
        populate(data["news_humor_options"])
        reformat()
        console.log("Finished!")
    }
    else{
        console.log("This site isn't one I should replace")
    }
});



function populate(stuffs) {

wantXKCD = stuffs["xkcd"]
wantSpace = stuffs["space"]
wantOther = stuffs["other"]
wantGrammar = stuffs["grammar"]
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
    ["Election", "Hot Dog Eating Contest"],
    ["election", "hot dog eating contest"],
    ["Grow", "Physically Grow"],
    ["grow", "physically grow"],
    ["Force", "Horse"],
    ["force", "horse"],
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
    ["vows to", "probably won't"], 
    ["Facebook", "Face Book"],
    ["Twitter", "Little Bird Talk"],
    ["Tumblr", "Faller"],
    ["tumblr", "faller"]
  )
}
if (wantXKCD){
  replacements.push(
    ["could not be reached for comment", "is guilty and everyone knows it"]
  )
}



//Political
if (level >= 4 && wantPolitical){
  replacements.push(//Obama : Green Giant?  <-- Swartzinagger or whatever
    //Jeb Bush : Batman?  <-- Dropped out of race
    //Carly Florina : ?
    //Ben Carson : Superman?
    ["Barack Obama", "Arnold Schwarzenegger"],
    ["Obama", "Schwarzenegger"],
    ["Trump", "Duck"], // Hulk?
    ["Hillary Clinton", "Empress Catherine of Russia"], //Wonderwoman?
    ["Clinton", "Empress Catherine"],  
    ["Ted Cruz", "His Mighty Belligerance"], // Ironman?
    ["Cruz", "His Great Belligerance"],   // Shows up surprisingly often
    ["Bernie Sanders", "Mao Zedong"],  //Batman?
    ["Sanders", "Zedong"],
    ["Sarah Palin", "Alaskan Redneck Leader"], // ?
    ["Palin", "Alaskan Redneck"]
  )
}
if (level >= 2 && wantPolitical){
  replacements.push(
    ["John Doe", "Anonymous, Inc"],
    ["GOP", "Grumpy Old People"],
    ["KGB", "Illuminati"],
    ["Kremlin", "Gremlin"],
    ["kremlin", "gremlin"]
  )
}
if (level >= 3 && wantPolitical){
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
    ["abortion", "highway robbery"],
    ["Truth", "Half-Truth"],
    ["truth", "half-truth"],
    ["Gun", "Flamethrower"],
    ["gun", "flamethrower"],
    ["Polls", "Lottery Drawings"],
    ["polls", "lottery drawings"],
    ["Internet", "Pony Express"],
    ["internet", "pony express"]
    
  )
}
if (level >= 1 && wantPolitical){
  replacements.push(
    ["Camera", "NSA-Controlled Camera"],
    ["camera", "NSA-controlled camera"],
    ["Polarization", "Hippification"],
    ["polarization", "hippification"],
    ["Quantitive Easing", "[some obscure economic concept]"],
    ["quantitive easing", "[some obscure economic concept]"],
    ["Treasury", "Gold Hoard"],
    ["treasury", "gold hoard"]
  )
}


if (level >= 1 && wantSpace){
  replacements.push(
    ["Export", "Shipment"],
    ["export", "shipment"],
    ["Navy", "Space Fleet"],
    ["navy", "space fleet"],
    ["Sailor","Interstellar Pilot"],
    ["sailor","interstellar pilot"]
  )
}


if (level >= 4 && wantSpace){
  replacements.push(

    ["Bejing", "ISL"],
    ["UK", "BG5"],
    ["United Kingdom", "Beetlegeuse 5"],
    ["England", "Beetlegeuse 5"],
    ["Britain", "Beetlegeuse 5"],
    ["britain", "Beetlegeuse 5"],
    ["British", "Beetlegeuse 5"],
    ["british", "Beetlegeuse 5"],
    ["Britons", "Beetlegeese"],
    ["Briton",  "Beetlegoose"],
    ["britons", "beetlegeese"],
    ["briton",  "beetlegoose"],
    ["London", "Beetelgeuse"],
    ["China", "Astroid Belt"],
    ["Chinese", "Beltian"],
    ["E.U.", "Terrarian Union"],
    ["EU", "Terrarian Union"],
    ["European", "Terrarian"],
    ["Earth", "Wasteland of our Fathers"],
    ["Iran", "Mars"],
    ["Iranian", "Martian"],
    ["Iraq", "Mercury"],
    ["Iraqi", "Mercurial"],
    ["Afghanistan", "Venus"],
    ["Afghanistani", "Venusian"],
    ["US", "Confederated Colonies of the Moon"],
    ["U.S.", "Confederated Colonies of the Moon"],
    ["USA", "Confederated Colonies of the Moon"],
    ["United States", "Confederated Colonies of the Moon and Surrounding Areas"],
    ["American", "Lunar Colonist"],
    ["Russia", "Jovian Moon Economic Zone"],
    ["Russian", "Jovian"],
    ["SF", "ISL"],
    ["San Fransisco", "ISL"],
    ["Washington DC", "Interstellar Command"],
    ["DC", "Interstellar Command"],
    ["Brussels", "Interstellar Command"],
    ["United Nations", "Interplanetary Union"],
    ["UN", "Interplanetary Union"],
    ["Vatican City", "Io"],
    ["Vatican", "Io"]
  )
}


if (level >= 3 && wantSpace){
  replacements.push(
    ["Bus", "Transport Shuttle"],
    ["bus", "transport shuttle"],
    ["Boat", "Spacecraft"],
    ["boat", "spacecraft"],
    ["Bridge", "Hyperspace Terminal"],
    ["bridge", "hyperspace terminal"],
    ["Copter", "Capsule"],
    ["copter", "capsule"],
    ["Ferry", "Transport Shuttle"],
    ["ferry", "transport shuttle"],
    ["Harbor", "Spaceport"],
    ["harbor", "spaceport"],
    ["Island", "Asteroid"],
    ["island", "asteroid"],
    ["Raft", "Ejection Pod"],
    ["raft", "ejection pod"],
    ["Sea", "Zone"],
    ["sea", "zone"],
    ["Helicopter", "Dragon Capsule"],
    ["helicopter", "Dragon capsule"],
    ["Marine", "Interstellar"],
    ["marine", "interstellar"],
    ["Ocean", "Space"],
    ["ocean", "space"],
    
    ["Sailed", "Flew"],
    ["sailed", "flew"],
    ["Sail", "Fly"],
    ["sail", "fly"]
  )
}


if (level >= 2 && wantSpace){
  replacements.push(
    ["Gas", "Hydrogen"],
    ["gas", "hydrogen"],  
    ["Crude Oil", "LH"],
    ["crude oil", "LH"],
    ["Brent Oil", "Liquid Hydrogen"],
    ["brent oil", "liquid hydrogen"],
    ["Oil", "Liquid Hydrogen"],
    ["oil", "liquid hydrogen"],
    ["Brent", "H"],
    ["brent", "H"]
  )
}



if (level >= 2 && wantOther){
  replacements.push(
//Tech
  ["Windows 10", "Ubuntu 15.4"],
  ["Windows", "DOS"],
  ["Microsoft", "Developers"],
  ["PC", "Raspberry Pi"],
  ["Minecraft", "GTA 5"],
  ["Apple", "UNIX"],
  ["OSX", "DirectX"],
  ["OS X", "DirectX"],
  ["iOS", "Solaris"]
  )
}

if (level >= 4 && wantOther){
  replacements.push(
  ["iPod", "youPod"],
  ["iPad", "youPad"],
  ["iPhone", "youPhone"],
  ["Watch", "Holo"],
  ["watch", "holo"]
  )
}



if (level >= 4 && wantOther){
  replacements.push(

//International Affairs
  ["Battle", "Lightsaber® Duel"],
  ["battle", "Lightsaber® duel"],
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
  ["Gold", "Unicorn Blood"],
  ["gold", "unicorn blood"],
  ["Timeline", "Procrastination Plan"],
  ["timeline", "procrastination plan"],
  ["National Guard", "Rebel"],
  ["Soldier", "Imperial Officer"],
  ["soldier", "Imperial officer"],
  ["Celebrity", "Butthead"],
  ["celebrity", "butthead"],
  ["Fed", "Imperial Bank"],
  ["Federal", "Imperial"],
  ["federal", "imperial"], 
  ["Police", "Special Forces"],
  ["police", "special forces"],
  ["Stock", "Concert Ticket"],
  ["stock", "concert ticket"],
  ["share", "concert ticket"]
  )
}

if (level >= 3 && wantOther){
  replacements.push(
  //Places
  ["Canada", "Siberia"],
  ["Canadia", "Siberia"],
  ["China", "India"],
  ["Chinese", "Indian"],
  ["ISIL", "Whacko terrorists"],
  ["ISIS", "Whacko terrorists"],
  ["I.S. ", "Whacko terrorists "],
  ["IS ", "Whacko terrorists "],
  ["India", "Atlantis"],
  ["india", "Atlantis"],
  ["Indian", "Atlantis"],
  ["indian", "Atlantis"],
  ["Michigan", "Hoth"],
  ["Mich.", "Hoth"],
  ["Minnesota", "Hoth"],
  ["Minn.", "Hoth"],
  ["Texas", "Redneckland"],
  ["Iowa", "Middle Earth"],
  ["Wisconsin", "Cheese Central"],
  ["Wisc.", "Cheese Central"],
  ["WI", "CC"],
  ["California", "Hollywoodland"],
  ["Cal.", "Hollywoodland"],
  ["CA.", "HW"]
  )
}

if (level >= 4 && wantOther){
  replacements.push(
  //Religious
  ["Evangelical", "Pastafarian"],
  ["evangelical", "Pastafarian"],
  ["Christian", "Pastafarian"],
  ["Jesus Christ", "Almighty Flying Speghetti Monster"],
  ["Christ", "Flying Speghetti Monster"],
  ["Jesus", "Flying Speghetti Monster"],
  ["God", "FSM"],
  ["Bible", "Gospel of the Flying Spaghetti Monster"],
  ["Islam", "Atheism"],
  ["Islamic", "Athiest"],
  ["Muslim", "Athiest"]
  )
}

if (level >= 2 && wantOther){
  replacements.push(
  //Other
  ["Chicken", "Dinosaur"],
  ["chicken", "dinosaur"],
  ["Delete", "Nominate for Oscar"],
  ["delete", "nominate for oscar"],
  ["Homeless", "Dirt-Poor"],
  ["homeless", "dirt-poor"],
  ["Milk", "Soylent"],
  ["milk", "Soylent"],
  ["Juice", "Liquid Nitrogen"],
  ["juice", "liquid nitrogen"],

  ["said", "professed"],
  ["say", "lay claim that"],
  ["Two", "Fourty-Two"],
  ["two", "fourty-two"],
  ["Four", "Fourty-Two"],
  ["four", "fourty-two"]
  )
}
if (level >= 4 && wantGrammar){
  replacements.push(
    ["or", "xor"],
    ["and", "but not"],
    ["if", "iff"]
  )
}
if (level >= 2 && wantGrammar){
  replacements.push(
    ["against", "TEMPYYY"],
    ["for", "against"],
    ["TEMPYYY", "for"],
    ["outside", "within"],
    ["in", "outside of"],
    ["after", "TEMPYYY"],
    ["before", "after"],
    ["TEMPYYY", "before"],
    ["with", "TEMPYYY"],
    ["without", "with"],
    ["TEMPYYY", "without"],
    ["new", "TEMPYYY"],
    ["old", "new"],
    ["TEMPYYY", "old"],
    ["will", "TEMPYYY"],
    ["won't", "will"],
    ["TEMPYYY", "won't"]
  )
}
}

///  UHHHH -- THIS NEEDS FIXING AND STUFF
function replaceAll(str, find, replacey) {
  re = new RegExp('(^|.\\b)('+find+')(s?\\b.|$)', 'g')
  return str
   .replace(re,function(all,char1,cat,char2)
    {//   cat = word to be replaced      replacey = replacement for that

       //check 1st, capitalize if required -- NO LONGER!
       //var replacement = (cat.charAt(0) === '' ? '' : '') + replacey;
       var replacement = replacey
       //console.log(cat)
       //console.log(replacey)
       //console.log("")
       if (char1 === ' ' && char2 === 's')
       {//replace plurals, too
           cat = replacement + 's';
       }else if (char1 === ' ' && char2 === ':')
       {//replace colons, too
           cat = replacement + ':';
       }else if (cat.charAt(-1) === '.' || char2 === '.')
       {//r GRRRRRR!!!!
           console.log("TNSOPIDTNSPNITTNSPFNSOYITNONTHTN")
           console.log(cat)
           cat = replacement + '.';
       }
       else
       {
       //do not replace if dashes are matched
           cat = char1 === '-' || char2 === '-' ? cat : replacement;
       //do not replace if surrounded by %20
           cat = char1 === '0' || char2 === '%' ? cat : replacement;
       //do not replace if surrounded by underscores
           cat = char1 === '_' || char2 === '_' ? cat : replacement;
       }
       return char1 + cat + char2;//return replacement string
    });
}


function reformat (){
  //console.log("reformatting");
  //console.log(replacements);
  var page = document.body.innerHTML;
  var i = 0
  try{
    for (; i<replacements.length; i++){
      page = replaceAll(page, replacements[i][0], replacements[i][1])
    }
  }
  catch (e){ 
    console.log("Uh-oh, speghetti-o!  Following stuff is: index failure was at, length of list, list, error, protip")
    console.log(i)
    console.log(replacements.length)
    console.log(replacements)
    console.log(e)
    console.log("Forgetting commas may be the cause of this error.  Now alerting user.")
    alert("News Humor problem:  There's something wrong in file 'content.js' - probably a missed comma - on replacement #" + String(i) + " of " + String(replacements.length + ".\nI guess you can disable the extension for now by going to 'chrome://extensions' and unchecking News Humor.  \n\nPlease let the developer know at random.person.001@gmail.com.  Sorry!"))
  }
  document.body.innerHTML = page
}



//reformat();
//Legacy stuff below
//document.body.innerHTML=document.body.innerHTML.replace("/media/gi","<b>pokedex</b>");
//document.body.innerHTML=document.body.innerHTML.replace(/Debate/gi,"Dance-Off");
