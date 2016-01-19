// content.js
//alert("Hello from your Chrome extension!")

var level = 5

var replacements = []
// XKCD
  if (level > 1){
  replacements.push(
    ["Allegedly", "Kinda Probably"],
    ["allegedly", "kinda probably"],
    ["At Large", "Very Large"],
    ["at large", "very large"],
    ["Car", "Cat"],
    ["car", "cat"],
    ["Canidate", "Airbender"],
    ["canidate", "airbender"],
    ["Cents", "Million Dollars"],
    ["cents", "million dollars"],
    ["could not be reached for comment", "is guilty and everyone knows it"],
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

replacements.push(
//Political
  ["Trump", "Duck"],
  ["Hillary Clinton", "Empress Catherine of Russia"],
  ["Ted Cruz", "His Mighty Belligerance"],
  ["Bernie Sanders", "Mao Zedong"],
  ["John Doe", "Anonymous, Inc"],
  ["Boycott", "Donate To"],
  ["boycott", "donate to"],
  ["Democratic", "Socialist"],
  ["Democrat", "Socialist"],
  ["democrat", "docialist"],
  ["Donat", "Brib"],
  ["donat", "brib"],
  ["Republican", "Redneck"],
  ["republican", "redneck"],
  ["Senator", "Knight"],
  ["Sen.", "Knight"],
  ["Governor", "Beaurocrat"],
  ["governor", "beaurocrat"],
  ["Gov.", "Beaurocrat"],
  ["gov.", "beaurocrat"],
  ["Abortion", "Highway Robbery"],
  ["abortion", "highway robbery"],

//Tech
  ["Windows 10", "Ubuntu 15.4"],
  ["Windows", "DOS"],
  ["Microsoft", "Developers"],
  ["PC", "Raspberry Pi"],
  ["Minecraft", "GTA 4"],
  ["Stock", "Concert Ticket"],
  ["stock", "concert ticket"],
  ["share", "concert ticket"],
  ["Oil", "Liquid Hydrogen"],
  ["oil", "liquid hydrogen"],

//Religious
  ["Evangelical", "Pastafarian"],
  ["evangelical", "Pastafarian"],
  ["Christian", "Pastafarian"],
  ["Jesus", "Flying Speghetti Monster"],
  ["God", "FSM"],

//International Affairs
  ["Anthem", "Battle Cry"],
  ["Shooting", "Party That Went Too Far"],
  ["Navy", "Space Fleet"],
  ["navy", "space fleet"],
  ["Sailor","Interstellar Pilot"],
  ["sailor","interstellar pilot"],
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
  ["Export", "Shipment"],
  ["export", "shipment"],
  ["Federal", "Imperial"],
  ["federal", "imperial"], 
  ["Police", "Special Forces"],
  ["police", "special forces"],

  //Places
  ["Britian", "Beetlegeuse 5an"],
  ["britian", "Beetlegeuse 5an"],
  ["British", "Beetlegeuse 5ish"],
  ["british", "Beetlegeuse 5ish"],
  ["Bridge", "Hyperspace Terminal"],
  ["bridge", "hyperspace terminal"],
  ["Canada", "Siberia"],
  ["Canadia", "Siberia"],
  ["ISIL", "Whacko terrorists"],
  ["ISIS", "Whacko terrorists"],
  ["IS ", "Whacko terrorists "],
  ["Michigan", "Hoth"],
  ["Mich.", "Hoth"],
  ["Minnesota", "Hoth"],
  ["Minne", "Hoth"],
  ["Texas", "Redneckland"],
  ["Iowa", "Middle Earth"],
  ["Iran", "Mars"],
  ["Iranian", "Martian"],
  ["China", "Han China"],
  ["US", "Confederated Colonies of the Moon"],
  ["U.S.", "Confederated Colonies of the Moon"],
  ["USA", "Confederated Colonies of the Moon"],
  ["United States", "Confederated Colonies of the Moon and Surrounding Areas"],
  ["American", "Lunar Colonist"],  
  ["Ocean", "Space"],
  ["ocean", "space"],
  ["Marine", "Interstellar"],
  ["marine", "interstellar"],
  ["Harbor", "Spaceport"],
  ["harbor", "spaceport"],
  ["Wisconsin", "The Dairy State"],
  
  //Other
  ["Chicken", "Dinosaur"],
  ["chicken", "dinosaur"],
  ["Delete", "Nominate for Oscar"],
  ["delete", "nominate for oscar"],
  ["Homeless", "Dirt-Poor"],
  ["homeless", "dirt-poor"],
  ["Boat", "Spacecraft"],
  ["boat", "spacecraft"],
  ["Raft", "Ejection Pod"],
  ["raft", "ejection pod"],
  ["Helicopter", "Dragon Capsule"],
  ["helicopter", "Dragon capsule"],
  ["Tumblr", "Faller"],
  ["tumblr", "faller"],
  ["Facebook", "Face Book"],
  ["Twitter", "Little Bird Talk"]
)


// re = /\s+|\s+$/g
// re = new RegExp('\\s+|\\s+$','g') 
// /media/gi

/*
function replaceAll(str, find, replace) {
  var findreg = new RegExp(find, 'g')
  return str.replace(findreg , replace);
}

var page = document.body.innerHTML
for (i=0; i<replacements.length; i++){
  page = replaceAll(page, replacements[i][0], replacements[i][1])
}
document.body.innerHTML = page



'Two cats are not 1 Cat! They\'re just cool-cats, you caterpillar'
   .replace(/(^|.\b)(cat)(s?\b.|$)/gi,function(all,char1,cat,char2)
    {
       //check 1st, capitalize if required
       var replacement = (cat.charAt(0) === 'C' ? 'D' : 'd') + 'og';
       if (char1 === ' ' && char2 === 's')
       {//replace plurals, too
           cat = replacement + 's';
       }
       else
       {//do not replace if dashes are matched
           cat = char1 === '-' || char2 === '-' ? cat : replacement;
       }
       return char1 + cat + char2;//return replacement string
    });
//returns:
//Two dogs are not 1 Dog! They're just cool-cats, you caterpillar

*/


function replaceAll(str, find, replacey) {
  //Don't change anything when we find a URL (content=* target=* href=*
//re = /\s+|\s+$/g
//re = new RegExp('\\s+|\\s+$','g') 
re = new RegExp('(^|.\\b)('+find+')(s?\\b.|$)', 'g')

  return str
   .replace(re,function(all,char1,cat,char2)
    {
       //check 1st, capitalize if required
       var replacement = (cat.charAt(0) === 'C' ? '' : '') + replacey;
       if (char1 === ' ' && char2 === 's')
       {//replace plurals, too
           cat = replacement + 's';
       }
       else
       {//do not replace if dashes are matched
           cat = char1 === '-' || char2 === '-' ? cat : replacement;
       }
       return char1 + cat + char2;//return replacement string
    });
//returns:
//Two dogs are not 1 Dog! They're just cool-cats, you caterpillar

  //var findreg = new RegExp(find + "\b", 'g')
  //return str.replace(findreg , replacey);
}

var page = document.body.innerHTML
for (i=0; i<replacements.length; i++){
  page = replaceAll(page, replacements[i][0], replacements[i][1])
}
document.body.innerHTML = page


//Legacy stuff below
//document.body.innerHTML=document.body.innerHTML.replace("/media/gi","<b>pokedex</b>");
//document.body.innerHTML=document.body.innerHTML.replace(/Debate/gi,"Dance-Off");
