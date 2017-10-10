// function getWords(){
//   var house = Math.floor(Math.random()*443+1)
//   fetch('https://anapioficeandfire.com/api/houses/'+house).then(function(response) {
//     return response.json().then(function(houseData) {
//       var houseWords = document.getElementById('houseWords')
//       houseWords.innerHTML = ''
//       houseWords.append(houseData.name + ' ' + houseData.words)
//       console.log(houseData.name)
//     });
//   });
// }
var sent = []

function begin(){
  // getWords()
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')
  var items = document.getElementById('items')
  var ally = document.getElementById('ally')
  var passage = document.getElementById('passage')
  var killed = document.getElementById('dead')

  // variables creating div and button objects
  var div = document.createElement('div')
  var btn = document.createElement('button')
  var btn2 = document.createElement('button')

  // paragraphs that replace content in filler
  var par1 = 'Some time later, you wake up to find the door to your cell wide open. Trying to escape the castle is futile. You resolve to kill the King.'

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''
  items.innerHTML = ''
  ally.innerHTML = ''
  passage.innerHTML = ''
  killed.innerHTML = ''

  // creating buttons/choices for player
  btn.innerHTML = 'Leave the dungeon.'
  btn.addEventListener("click", leave)
  btn2.innerHTML = 'Search the room.'
  btn2.addEventListener("click", searchRoom)

  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  choices.append(btn)
  choices.append(btn2)
}

function leave() {
  // getWords()
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')

  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var btn = document.createElement('button')
  var btn2 = document.createElement('button')

  // paragraphs that replace content in filler
  var par1 = `Continuing through a great wooden door, you notice there’s a guard on your right who blocks ascending stairs. To the left is a long curving hallway.`

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''

  // creating choices/items for player
  btn.innerHTML = 'Go left.'
  btn.addEventListener("click", leftLock)
  btn2.innerHTML = 'Go right.'
  btn2.addEventListener("click", rightKill)

  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  choices.append(btn)
  choices.append(btn2)

}

function searchRoom() {
  // getWords()
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')
  var  items = document.getElementById('items')

  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var btn = document.createElement('button')
  var btn2 = document.createElement('button')
  var el = document.createElement('p')

  // paragraphs that replace content in filler
  var par1 = `Searching the room you find a key lodged in your cell door and another man in a cell. His only distinguishing feature is a streak of white in his hair.`
  var par2 = `“Care to help another man out?”`

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''

  // creating choices/items for player

  btn.innerHTML = 'Let the man out. (Uses Key).'
  btn.addEventListener("click", helpJaqen)
  btn2.innerHTML = 'Leave the strange man.'
  btn2.addEventListener("click", leave)
  el.innerHTML = 'Key'
  el.id = 'key'

  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  filler.append(div2)
  div2.append(par2)
  choices.append(btn)
  choices.append(btn2)
  items.append(el)
}


function returnRoom() {
  // getWords()
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')

  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var btn = document.createElement('button')
  var btn2 = document.createElement('button')

  // paragraphs that replace content in filler
  var par1 = `Sneaking back into the Dungeon cells you look at the man in the cell. His face profiled.`
  var par2 = `"A man approaches again..."`

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''

  // creating choices/items for player

  btn.innerHTML = 'Let the man out. (Uses Key).'
  btn.addEventListener("click", helpJaqen)
  btn2.innerHTML = 'Leave the strange man.'
  btn2.addEventListener("click", leave)

  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  filler.append(div2)
  div2.append(par2)
  choices.append(btn)
  choices.append(btn2)
}

function leftLock() {
  let filler = document.getElementById('filler')
  let choices = document.getElementById('choices')
  let jaq = document.getElementById('jaqen')
  let key = document.getElementById('key')
  let castDepths = document.getElementById('castDepths')
  let stonePass = document.getElementById('stonePass')

  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var btn = document.createElement('button')
  var btn2 = document.createElement('button')
  var btn3 = document.createElement('button')

  // paragraphs that replace content in filler
  var par1 = `Heading down the curved hall, you find a wooden door.`
  var par2 = `It's locked.`

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''


    //Castle Depths
    if (castDepths !== null && key !== null) {
      btn.innerHTML = 'Descend the ladder'
      btn.addEventListener("click", depths)
      btn2.innerHTML = 'Return to the Dungeon Cells.'
      btn2.addEventListener("click", returnRoom)
      btn3.innerHTML = 'Go right.'
      btn3.addEventListener("click", rightKill)

      par2 = "It's unlocked. Inside is a small room with a ladder to the depths of the Castle."
      choices.append(btn)
      choices.append(btn2)
      choices.append(btn3)
    } else if (castDepths !== null) {
      par2 = "It's unlocked. Inside is a small room with a ladder to the depths of the Castle."
      var butn = document.createElement('button')
      butn.innerHTML = 'Descend the ladder.'
      butn.addEventListener("click", depths)
      choices.append(butn)
    }

  if (key === null && jaq === null && stonePass === null) {
    btn.innerHTML = 'Search the last room.';
    btn.addEventListener("click", searchRoom);
    btn2.innerHTML = 'Go right.'
    btn2.addEventListener("click", rightKill)
    choices.append(btn)
    choices.append(btn2)
  } else if (key !== null && jaq === null && castDepths === null) {
    btn.innerHTML = 'Unlock the door. (Uses Key)'
    btn.addEventListener("click", depths)
    btn2.innerHTML = 'Go right.'
    btn2.addEventListener("click", rightKill)
    choices.append(btn)
    choices.append(btn2)
  } else if (key === null && jaq !== null && castDepths === null) {
    btn.innerHTML = `Ask Jaqen for help. (Jaqen H'ghar)`
    btn.addEventListener("click", leftJH)
    btn2.innerHTML = 'Go right. (Jaqen H\'ghar)'
    btn2.addEventListener("click", rightJH)
    choices.append(btn)
    choices.append(btn2)
  } else if (key === null && jaq !== null & castDepths !== null) {
    btn.innerHTML = `Ask Jaqen for help. (Jaqen H'ghar)`
    btn.addEventListener("click", leftJH)
    btn2.innerHTML = 'Go right. (Jaqen H\'ghar)'
    btn2.addEventListener("click", rightJH)
    btn3.innerHTML = 'Descend the ladder'
    btn3.addEventListener("click", depths)
    par2 = "It's unlocked. Inside is a small room with a ladder to the depths of the Castle."
    choices.append(btn)
    choices.append(btn2)
  }


  //Stone Passage
  if (stonePass !== null) {
    var btn5 = document.createElement('button')
    btn5.innerHTML = 'Stone Passage to Lower Bailey'
    btn5.addEventListener("click", lowerBailey)
    choices.append(btn5)
    var butn5 = document.createElement('button')
    butn5.innerHTML = 'Go right.'
    butn5.addEventListener("click", rightKill)
    choices.append(butn5)

    var div3 = document.createElement('div')
    var par3 = 'To the opposite of the door is the Stone Passage Jaqen H\'ghar had opened for you.'

  }



  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  filler.append(div2)
  div2.append(par2)
if (par3 !== undefined) {
  filler.append(div3)
  div3.append(par3)
}
}


function rightKill() {
  // getWords()
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')

  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var btn = document.createElement('button')

  // paragraphs that replace content in filler
  var par1 = `Hugging the wall you approach the guard. He turns and draws his sword while screaming, "PRISONER ESCAPED!!"`
  var par2 = `The last thing you hear is the sound of armor clanking down the stairs while the guard standing infront of you cuts you down.`

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''

  // creating choices/items for player
  btn.innerHTML = 'Restart.'
  btn.addEventListener("click", begin)

  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  filler.append(div2)
  div2.append(par2)
  choices.append(btn)

}

function helpJaqen() {
  // getWords()
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')
  var party = document.getElementById('ally')
  var items = document.getElementById('items')
  var key = document.getElementById('key')

  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var div3 = document.createElement('div')
  var btn = document.createElement('button')
  var btn2 = document.createElement('button')
  var el = document.createElement('p')

  // paragraphs that replace content in filler
  var par1 = `Unlocking his cell door breaks the only key you have. `
  var par2 = `“Jaqen H’ghar is my name. I will help you, but only once.” Jaqen gives the impression he can kill or do other things. He follows you out of the room.`
  var par3 = `There’s a guard on your right who blocks ascending stairs. To the left a long curving hallway.`

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''
  items.removeChild(key)
  console.log(key);

  // creating choices/items for player
  btn.innerHTML = 'Go left.'
  btn.addEventListener("click", leftLock)
  btn2.innerHTML = `Go right. (Jaqen H'ghar)`
  btn2.addEventListener("click", rightJH)
  el.innerHTML = `Jaqen H'ghar`
  el.id = 'jaqen'

  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  filler.append(div2)
  div2.append(par2)
  filler.append(div3)
  div3.append(par3)
  party.append(el)
  choices.append(btn)
  choices.append(btn2)

}

function rightJH() {
  // getWords()
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')
  var party = document.getElementById('ally')
  var killed = document.getElementById('dead')

  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var btn = document.createElement('button')
  var btn2 = document.createElement('button')
  var btn3 = document.createElement('button')
  var btn4 = document.createElement('button')
  var el = document.createElement('p')

  // paragraphs that replace content in filler
  var par1 = `Hugging the wall you approach the guard. He turns and Jaqen breaks his neck. Jaqen turns to you, “Valar morghulis.” and walks back the opposite way.`
  var par2 = `You reach the top of the stairs and emerge into the lower bailey.`

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''
  party.innerHTML = ''

  // creating choices/items for player
  btn.innerHTML = 'Go to the Rookery.'
  btn.addEventListener("click", rookery)
  btn2.innerHTML = 'Go to the White Sword Tower.'
  btn2.addEventListener("click", whiteSTower)
  btn3.innerHTML = 'Go to the Maegor\'s Holdfast.'
  btn3.addEventListener("click", maegorHoldfast)
  btn4.innerHTML = 'Go to the Serpentine Stairs.'
  btn4.addEventListener("click", serpStairs)
  el.innerHTML = 'Guard'
  killed.append(el)

  // appending the new content to filler
  filler.append(div)
  div.append(par1)
  filler.append(div2)
  div2.append(par2)
  choices.append(btn)
  choices.append(btn2)
  choices.append(btn3)
  choices.append(btn4)

}


function leftJH() {
  // referencing elements from index.html
  var filler = document.getElementById('filler')
  var choices = document.getElementById('choices')
  var ally = document.getElementById('ally')
  var passage = document.getElementById('passage')
  var jaq = document.getElementById('jaqen')
  var castDepths = document.getElementById('castDepths')
  var key = document.getElementById('key')


  // variables creating div, button, paragraphs
  var div = document.createElement('div')
  var div2 = document.createElement('div')
  var par1 = `Turning to Jaqen H'ghar you ask, "Do you know another way out?"`
  var par2 = `Jaqen gives a slight smile and starts to feel the wall. He then pushes what seems like a random stone and the wall swings open. He looks back to you and says, "Valar dohaeris." Then turns and walks away.`
  var el = document.createElement('p')

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''
  ally.removeChild(jaq)
  el.innerHTML = 'Stone Passage'
  el.id = 'stonePass'
  var stonePass = document.getElementById(
    stonePass)

    if (castDepths !== null) {
      var butn = document.createElement('button')
      butn.innerHTML = 'Descend the ladder.'
      butn.addEventListener("click", depths)
      choices.append(butn)
    }

    var btn = document.createElement('button')
    btn.innerHTML = 'Take the Stone Passage.'
    btn.addEventListener("click", lowerBailey)
    choices.append(btn)
    var btn2 = document.createElement('button')
    btn2.innerHTML = 'Go right.'
    btn2.addEventListener("click", rightKill)
    choices.append(btn2)

    //Appending elements to the page
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    passage.append(el)

  }

  function depths() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var passage = document.getElementById('passage')
    var castDepths = document.getElementById('castDepths')
    var knife = document.getElementById('knife')
    var candle = document.getElementById('candle')
    var flint = document.getElementById('flint')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `A door opens. Before you is a little hole with a ladder.`
    var par2 = `Decending into the depths of the Red Keep, you find hundreds of strange barrels with the word "EXPLOSIVE" written on the side. Directly ahead is another ladder.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player


    btn2.innerHTML = 'Climb the far ladder.'
    btn2.addEventListener("click", maegorHoldfast)
    btn3.innerHTML = 'Turn around.'
    btn3.addEventListener("click", leftLock)
    el.innerHTML = 'Castle Depths'
    el.id = 'castDepths'

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn3)

    // BLOW UP THE CASTLE SENARIO
    if (flint !== null && candle !== null && knife !== null) {
      btn.innerHTML = 'SET THE BARRELS ON FIRE!'
      btn.addEventListener('click', blowUp)
      choices.append(btn)
    } else {
      btn.innerHTML = 'SET THE BARRELS ON FIRE!(Need specific items.)'
      btn.disabled= "disabled"
      choices.append(btn)
    }

    choices.append(btn2)

    if (castDepths === null) {
      passage.append(el)
    } else {

    }
  }

  function maegorHoldfast() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var ally = document.getElementById('ally')
    var jaq = document.getElementById('jaqen')
    var knife = document.getElementById('knife')
    var candle = document.getElementById('candle')
    var castDepths = document.getElementById('castDepths')
    var sansa = document.getElementById('sansaKO')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var btn4 = document.createElement('button')
    var btn5 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Maegor's Holdfast was bigger than you thought. You find yourself in the ballroom that's nestled under the royal quarters.`
    var par2 = `Against the fall wall you spot the only person in the room: Sansa Stark.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    if (sansa === null) {
      if (jaq !== null) {
        btn.innerHTML = 'KILL HER! (Jaqen H\'ghar)'
        btn.addEventListener("click", sansaJH)
        choices.append(btn)
      } else {

      }
      if (knife !== null) {
        btn2.innerHTML = 'STAB HER!! (Uses Knife)'
        btn2.addEventListener("click", sansaKill)
        choices.append(btn2)
      }
      if (candle === null) {
        btn4.innerHTML = 'Talk to Sansa.'
        btn4.addEventListener("click", sansaTalk)
        choices.append(btn4)
      } else if (candle !== null) {
        par2 = ''
      }

    } else if (sansa !== null) {
      par2 = 'Sansa Stark\'s body still where you stabbed her, sprawled across the floor.'
    }
    if (castDepths !== null) {
      btn5.innerHTML = 'Descend into the Castle Depths.'
      btn5.addEventListener("click", depths)
      choices.append(btn5)
    }

    btn3.innerHTML = 'Exit to the lower bailey.'
    btn3.addEventListener("click", lowerBailey)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn3)
  }

  function sansaTalk() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var ally = document.getElementById('ally')
    var jaq = document.getElementById('jaqen')
    var knife = document.getElementById('knife')
    var flint = document.getElementById('flint')
    var killed = document.getElementById('dead')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Approaching Sansa, she turns and looks rather unexpressive when she sees you.`
    var par2 = `"Hello..." she sounds depressed.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    if (jaq !== null) {
      btn.innerHTML = 'KILL HER! (Jaqen H\'ghar)'
      btn.addEventListener("click", sansaJH)
      choices.append(btn)
    } else {

    }
    if (knife !== null) {
      btn2.innerHTML = 'STAB HER!! (Uses Knife)'
      btn2.addEventListener("click", sansaKill)
      choices.append(btn2)
    }
    btn3.innerHTML = 'Give her words of encouragement.'
    btn3.addEventListener("click", encourageSansa)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn3)
  }

  function sansaJH() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var ally = document.getElementById('ally')
    var jaq = document.getElementById('jaqen')
    var knife = document.getElementById('knife')
    var flint = document.getElementById('flint')
    var killed = document.getElementById('dead')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `Jaqen H'ghar grips Sansa by the throat and hoists her into the air. Her eyes wide, she grips at his hand around her throat. Her feet kicking but hitting nothing. A sharp snap and her hands fall.`
    var par2 = `"Valar morghulis." Jaqen whispers and leaves you.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''
    ally.innerHTML = ''
    el.innerHTML = 'Sansa'
    el.id = 'sansaKO'
    killed.append(el)

    console.log(sansaKO);

    // creating choices/items for player
    if (castDepths !== null) {
      btn.innerHTML = 'Decend to the Castle Depths.'
      btn.addEventListener("click", depths)
      choices.append(btn)
    } else {

    }
    btn3.innerHTML = 'Exit to the Lower Bailey.'
    btn3.addEventListener("click", lowerBailey)
    choices.append(btn3)


    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    killed.append(el)
  }

  function sansaKill() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var ally = document.getElementById('ally')
    var jaq = document.getElementById('jaqen')
    var knife = document.getElementById('knife')
    var flint = document.getElementById('flint')
    var killed = document.getElementById('dead')
    var castDepths = document.getElementById('castDepths')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `Before she can say anything you pull the knife out. She give a short gasp before a flash of silver reaps a deep cut across her neck. Blood pours out of her as she struggles to breathe.`
    var par2 = `She falls and is no more.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''
    el.innerHTML = 'Sansa'
    el.id = 'sansaKO'
    killed.append(el)

    console.log(sansaKO);

    // creating choices/items for player
    if (castDepths !== null) {
      btn.innerHTML = 'Decend to the Castle Depths.'
      btn.addEventListener("click", depths)
      choices.append(btn)
    } else {

    }
    btn3.innerHTML = 'Exit to the Lower Bailey.'
    btn3.addEventListener("click", lowerBailey)
    choices.append(btn3)


    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    killed.append(el)
  }

  function encourageSansa() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var ally = document.getElementById('ally')
    var items = document.getElementById('items')
    var jaq = document.getElementById('jaqen')
    var knife = document.getElementById('knife')
    var flint = document.getElementById('flint')
    var castDepths = document.getElementById('castDepths')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var btn4 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `“Why is it always the innocents who suffer most, when high lords play the game of thrones?”`
    var par2 = `She looks up at you. A slight smile creeps onto her face. "My father, said the same thing once..." She reaches over and gives you a candle. "excuse me." and leaves the room.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    if (castDepths !== null) {
      btn.innerHTML = 'Decend to the Castle Depths.'
      btn.addEventListener("click", depths)
      choices.append(btn)
    } else {

    }
    btn3.innerHTML = 'Exit to the Lower Bailey.'
    btn3.addEventListener("click", lowerBailey)
    el.innerHTML = 'Candle'
    el.id = 'candle'

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn3)
    items.append(el)
  }


  function lowerBailey() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var coins = document.getElementById('money')
    var flint = document.getElementById('flint')
    var candle = document.getElementById('candle')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var btn4 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Peaking out you see that you've made it to the lower bailey.`
    var par2 = `Knights are around, but they haven't noticed you yet. You take note of the buildings surrounding you: the Rookery, White Swords Tower, and Maegor's Holdfast.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''


    // creating choices/items for player
    if (flint === null) {
      btn.innerHTML = 'Go to the Rookery.'
      btn.addEventListener("click", rookery)
    } else if (flint !== null) {
      btn.innerHTML = 'Go to the Rookery. (No longer accessible.)'
      btn.disabled = "disabled"
    }
    btn2.innerHTML = 'Go to White Swords Tower.'
    btn2.addEventListener('click', whiteSTower)
    btn3.innerHTML = 'Go to Maegor\'s Holdfast.'
    btn3.addEventListener("click", maegorHoldfast)
    btn4.innerHTML = 'Head up the Serpentine Stairs.'
    btn4.addEventListener("click", serpStairs)
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)
    choices.append(btn3)
    choices.append(btn4)

    //Stone Passage
    var stonePass = document.getElementById('stonePass')
    if (stonePass !== null) {
      var btn5 = document.createElement('button')
      btn5.innerHTML = 'Stone Passage to Dungeon'
      btn5.addEventListener("click", leftLock)
      choices.append(btn5)
    } else {

    }

  }

  function rookery() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `You dart into the rookery across from the dungeon entrance.`
    var par2 = `After climbing a winding staircase you see a room with caged messenger birds and a table full of papers. `

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Search the table.'
    btn.addEventListener("click", searchTable)
    btn2.innerHTML = 'Send a messenger bird.'
    btn2.addEventListener("click", messageBird)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)

  }

  function searchTable() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var jaq = document.getElementById('jaqen')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Searching the table you find a message for the King, “Meet me in the Godswood before you execute the traitor.” the letter is signed by Margaery Tyrell.`
    var par2 = `You hear footsteps advancing up the stairs.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'GET A BIRD!'
    btn.addEventListener("click", birdThrow)
    btn2.innerHTML = 'HIDE!'
    btn2.addEventListener("click", hideRookery)

    if (jaq !== null) {
      btn3.innerHTML = 'JAQEN! (Jaqen H\'ghar)'
      btn.addEventListener("click", pycelleJH)
      choices.append(btn3)
    } else {

    }

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)

  }

  function messageBird() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var jaq = document.getElementById('jaqen')


    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var el = 'message'

    // paragraphs that replace content in filler
    var par1 = `After you ponder of what kind of message you should send, you decide on "ATTACK THE CASTLE NOW!" You tie it to a birds leg and let it fly out the window. Message sent.`
    var par2 = `You hear footsteps advancing up the stairs.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'GET A BIRD!'
    btn.addEventListener("click", birdThrow)
    btn2.innerHTML = 'HIDE!'
    btn2.addEventListener("click", hideRookery)

    if (jaq !== null) {
      btn3.innerHTML = 'JAQEN! (Jaqen H\'ghar)'
      btn.addEventListener("click", pycelleJH)
      choices.append(btn3)
    } else {

    }

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)
    sent.push(el)
    console.log(sent);
  }

  function birdThrow() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var killed = document.getElementById('dead')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `There’s no time to think. You take a bird out of its cage and wait. As soon as you see the man you throw the bird at his face. He yelps and tumbles backwards down the stairs.`
    var par2 = `He lays at the bottom motionless, dead.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Take his shit.'
    btn.addEventListener("click", deadPycelle)
    btn2.innerHTML = 'Hide the body.'
    btn2.addEventListener("click", hidePycelle)
    el.innerHTML = 'Pycelle'
    el.id = 'pycelleKO'

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)
    killed.append(el)

  }

  function hideRookery() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var btn = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Concealing yourself behind the desk, you wait breathless.`
    var par2 = `Whoever the man, you can't see him. He stands at the top of the stairs for a few seconds before returning back down the stairs. Confused, you leave your hiding place only to hear the door slam open downstairs.`
    var par3 = `"HE'S UPSTAIRS!" Knights flood in from the door. Knowing you have no chance, you leap out of the window. The feeling of freedom rushing through you...until you die with a splat on the ground.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Restart.'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    choices.append(btn)

  }

  function hidePycelle() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var btn = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Pycelle is a lot heavier than you had anticipated. Your best hope of hiding him is up the stairs.`
    var par2 = `It's miraculous that you got him half way before a knight bursts in. He see's you and turns back outside, "FOUND THE TRAITOR!!" Knights flood in from the door. Knowing you have no chance, you forget Pycelle and run to the top of the stairs. You refuse to go down like this. So it's decided the best plan is to leap out of the window.`
    var par3 = `You jump. The feeling of freedom rushing through you...until you die with a splat on the ground.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Restart.'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    choices.append(btn)

  }

  function pycelleJH() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var killed = document.getElementById('dead')
    var ally = document.getElementById('ally')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var btn = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `Jaqen H'ghar whispers, "Volar morghulis." before he leaps down the stairs at the man coming up. After a loud tumble down the stairs, you look over the railing to see Pycelle the Grand Maester dead at the bottom.`
    var par2 = `Jaqen is no where to be seen.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''
    ally.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Take his shit.'
    btn.addEventListener("click", deadPycelle)
    btn2.innerHTML = 'Hide the body.'
    btn2.addEventListener("click", hidePycelle)
    el.innerHTML = 'Pycelle'
    el.id = 'pycelleKO'

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)
    killed.append(el)

  }

  function deadPycelle() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var coins = document.getElementById('money')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var btn4 = document.createElement('button')
    var btn5 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `Donning on his robes, you recognize the dead man as Pycelle the Grand Maester finding a flint stone in his pocket and the keys to the Rookery. You lock the door behind you and toss the keys.`
    var par2 = `Walking outside you notice the guards running about, “We can’t let his majesty know he’s gone! FIND THE TRAITOR!”`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player

    btn.innerHTML = 'Take the Serpentine Stairs.'
    btn.addEventListener("click", serpStairs)
    btn2.innerHTML = 'Head into Maegor\'s Holdfast.'
    btn2.addEventListener("click", maegorHoldfast)
    el.innerHTML = 'Flint Stone'
    el.id = "flint"
    items.append(el)
    console.log(el)
    if (flint === null) {
      btn3.innerHTML = 'Go to the Rookery.'
      btn3.addEventListener("click", rookery)
      choices.append(btn3)
    } else if (flint !== null) {
      btn3.innerHTML = 'Go to the Rookery. (No longer accessible.)'
      btn3.disabled = "disabled"
      choices.append(btn3)
    }
    btn4.innerHTML = "Go to White Sword Tower"
    btn4.addEventListener('click', whiteSTower)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)

    choices.append(btn4)
    choices.append(btn2)
    choices.append(btn)

    //Stone Passage
    var stonePass = document.getElementById('stonePass')
    if (stonePass !== null) {
      var btn5 = document.createElement('button')
      btn5.innerHTML = 'Stone Passage to Dungeon'
      btn5.addEventListener("click", leftLock)
      choices.append(btn5)
    } else {

    }

  }

  function whiteSTower() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var knife = document.getElementById("knife")
    var com = document.getElementById('lord')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // paragraphs that replace content in filler
    var par1 = "Inside White Swords Tower, you find a large white oval room and at the center is a great round table that sits seven. There are stairs to your right leading to a higher floor. There's also a set of stairs to the left leading down a level. "
    var par2 = `You wonder where to go...?`

    // creating choices/items for player

    btn.innerHTML = 'Head right; up the stairs.'
    btn.addEventListener("click", upStairs)
    btn2.innerHTML = 'Head left; down the stairs.'
    btn2.addEventListener("click", downStairs)
    btn3.innerHTML = 'Exit back to the Lower Bailey'
    btn3.addEventListener("click", lowerBailey)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn2)
    choices.append(btn)
    choices.append(btn3)

  }

  function upStairs() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var knife = document.getElementById("knife")
    var jaq = document.getElementById('jaqen')
    var com = document.getElementById('lordComKO')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var btn4 = document.createElement('button')

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // paragraphs that replace content in filler
    var par1 = `At the top of the stairs you find a man with his back to you. He's staring out of the window. You recognize this man as the Lord Commander of the King's army.`
    var par2 = `Maybe you should leave...`

    // creating choices/items for player
    if (com === null) {
      btn.innerHTML = 'Talk to him. Maybe he\'s nice.'
      btn.addEventListener("click", commanderHi)
      choices.append(btn)
    } else if (com !== null) {
      par1 = `The Lord Commander's body lays in a pool of warm blood on the far side of the room. Good riddence to a fowl man with no sense of justice.`
      par2 = ''
      btn.innerHTML = 'Dance on that bastards body!'
      // btn.addEventListener("click", dance)
      choices.append(btn)
    }

    btn2.innerHTML = 'Go back down stairs.'
    btn2.addEventListener("click", whiteSTower)

    // appending the new content to filler
    if (jaq !== null) {
      btn3.innerHTML = `Kill him Jaqen... (Jaqen H'ghar)`
      btn3.addEventListener("click", commanderJH)
      choices.append(btn3)
    } else {

    }
    if (knife !== null && com === null) {
      btn4.innerHTML = `STAB HIM! STAB HIM NOW!! (Uses knife)`
      btn4.addEventListener("click", commanderKnife)
      choices.append(btn4)
    }
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn2)

  }

  function downStairs() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var el = document.getElementById("knife")

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // paragraphs that replace content in filler
    var par1 = "You walk into a room full of knights drinking ale. They all look at you with perplexed faces. You slowly start to creep back up the stairs."
    var par2 = `"THE PRISONER!!" With that they raise their swords and charge. You turn and trip up the stairs; swords stabbing you in the back you bleed out and die.`

    // creating choices/items for player
    btn.innerHTML = 'Restart.'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)

  }

  function commanderKnife() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var el = document.getElementById("knife")

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // paragraphs that replace content in filler
    var par1 = "Knife raised in hand, you approach the Lord Commander with caution. It's only when you're right behind him that the floor you step on creaks loudly. The man whips around and you lunge."
    var par2 = `The two of you wrestle to the ground over the knife. He's too strong though. Try with all your might, he stabs you in the heart with your own knife. The edges of your vision blurs and all fades to black.`

    // creating choices/items for player
    btn.innerHTML = 'Restart.'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)

  }

  function commanderHi() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var el = document.getElementById("knife")

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // paragraphs that replace content in filler
    var par1 = `Approaching the man with confidence you say, "How's it going?"`
    var par2 = `He turns, startled that you've gotten so close and tackles you to the ground. He grips your neck. Try with all your might, he is much stronger than you. The edges of your vision blurs and all fades to black.`

    // creating choices/items for player
    btn.innerHTML = 'Restart.'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)

  }

  function commanderJH() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var ally = document.getElementById('ally')
    var knife = document.getElementById("knife")
    var killed = document.getElementById('dead')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    var el = document.createElement('p')

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''
    ally.innerHTML = ''

    // paragraphs that replace content in filler
    var par1 = "Jaqen calmly walks up to the Lord Commander. His steps give an eerie silence. Before the Commander knows it, Jaqen pulls a knife out of thin air and stabs repeatedly. The Commander doesn't cry out in pain. He just gives his last breath."
    var par2 = `Jaqen turns to you and says, "Valar morghulis." and leaves.`

    // creating choices/items for player
    btn2.innerHTML = 'Return to the main floor.'
    btn2.addEventListener("click", whiteSTower)
    el.innerHTML = 'Lord Commander'
    el.id = 'lordComKO'

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn2)
    killed.append(el)

  }

  function serpStairs() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var el = document.getElementById("knife")
    var boy = document.getElementById('boy')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // paragraphs that replace content in filler
    if (el == null && boy == null) {
      var par1 = `Keeping your head low, you make your way up the Serpentine stairs and duck into room containing a small kitchen. Inside is a wide-eyed servant boy, mouth full of stolen food.`
      var par2 = `You notice in his hand he holds a carving knife.`

      btn.innerHTML = 'Intimidate the servent.'
      btn.addEventListener("click", intimidate)
      btn2.innerHTML = 'Ask for help.'
      btn2.addEventListener("click", helpChild)

      // appending the new content to filler
      filler.append(div)
      div.append(par1)
      filler.append(div2)
      div2.append(par2)
      choices.append(btn2)
      choices.append(btn)
    } else if (el == null && boy !== null) {
      var par1 = `Passing by the kitchen on the Serpentine Stairs got you thinking about food.`
      var par2 = `You step inside and see the servant boy again. He smiles and gives you some more meat that you both love.`

      // creating choices/items for player
      btn.innerHTML = 'Head back to the Lower Bailey.'
      btn.addEventListener("click", lowerBailey)
      btn2.innerHTML = 'Head to the Middle Bailey.'
      btn2.addEventListener("click", midBailey)

      // appending the new content to filler
      filler.append(div)
      div.append(par1)
      filler.append(div2)
      div2.append(par2)
      choices.append(btn2)
      choices.append(btn)
    } else {
      var par1 = `Passing by the kitchen on the Serpentine Stairs got you thinking about food.`
      var par2 = `You munch on some much needed bread while you decide what to do...`

      // creating choices/items for player
      btn.innerHTML = 'Head back to the Lower Bailey.'
      btn.addEventListener("click", lowerBailey)
      btn2.innerHTML = 'Head to the Middle Bailey.'
      btn2.addEventListener("click", midBailey)

      // appending the new content to filler
      filler.append(div)
      div.append(par1)
      filler.append(div2)
      div2.append(par2)
      choices.append(btn2)
      choices.append(btn)
    }
  }

  function helpChild() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var ally = document.getElementById('ally')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `You ask the child for some help because anyhelp would be graciously accepted.`
    var par2 = `The boy indeed does pitty you. He carves you a piece of meat that you eat with vigorous intent. Smiling, the boy feels happy to help someone else in need.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Head to the Middle Bailey.'
    btn.addEventListener("click", midBailey)
    btn2.innerHTML = 'Head back to the Lower Bailey.'
    btn2.addEventListener("click", lowerBailey)
    el.innerHTML = 'Servant Boy'
    el.id = 'boy'

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)
    ally.append(el)
  }
  function intimidate() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `“Hand me that knife, and I won’t tell anyone you’ve been stealing food from his grace…”`
    var par2 = `He quickly hands you the knife and runs out of the room while you conceal the knife under your robes. You glance out of the window and see knights have found the Pycelle’s body.`

    // resetting content to nothing
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Head to the Middle Bailey.'
    btn.addEventListener("click", midBailey)
    btn2.innerHTML = 'Head back to the Lower Bailey.'
    btn2.addEventListener("click", lowerBailey)
    el.innerHTML = 'Knife'
    el.id = "knife"

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)
    items.append(el)
  }

  function midBailey() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var knife = document.getElementById('knife')
    var coins = document.getElementById('money')
    var varys = document.getElementById('varysKO')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // paragraphs that replace content in filler
    if (varys === null) {
      var par1 = `Entering the Middle Bailey, someone places their hand on your shoulder. You spin and see Varys the spider standing before you.`
      var par2 = `“Come with me,” he walks you to his quarters the outer yard and shuts the door. “you’ve done better than I imagined.”`

      // resetting content to nothing
      filler.innerHTML = ''
      choices.innerHTML = ''

      // creating choices/items for player
      if (knife !== null) {
        btn.innerHTML = 'KILL HIM. KILL HIM NOW. (Uses Knife)'
        btn.addEventListener("click", varysKill)
        choices.append(btn)
      }
      btn2.innerHTML = 'Question him.'
      btn2.addEventListener("click", questVarys)
      btn3.innerHTML = `Tell him to scram.`
      btn3.addEventListener("click", scramVarys)

      // appending the new content to filler
      filler.append(div)
      div.append(par1)
      filler.append(div2)
      div2.append(par2)
      choices.append(btn2)
      choices.append(btn3)
    } else if (varys !== null) {
      filler.innerHTML = ''
      choices.innerHTML = ''

      var par1 = 'You pass through the Middle Bailey and head for the Outer Yard.'
      var par2 = ' Across the Outer Yard where you\'ve enetered, you see the Throne Room entrance guarded by a few guards and one guard blocking the side entrance.'

      // creating choices/items for player
      btn.innerHTML = 'Return to the Lower Bailey'
      btn.addEventListener("click", lowerBailey)
      btn2.innerHTML = 'Bribe the Guard...'
      btn2.addEventListener("click", bribeKitchGuard)

      filler.append(div)
      div.append(par1)
      filler.append(div2)
      div.append(par2)
      choices.append(btn)
      choices.append(btn2)
    }
  }

  function questVarys() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var el = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `“Are you the one who freed me?”`
    var par2 = `Varys smirks. “Of course. I can only assume, someone who’s lost as much as you have would want revenge…” you nod your head, “I hope this helps your cause,” he gives you ten pieces of gold. “His majesty is in the Throne Room. Enter, through the kitchen on the side.”`
    var par3 = `Again outside, across the outer yard you make your way to the side where a guard blocks the kitchen entrance.`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Return to the Lower Bailey'
    btn.addEventListener("click", lowerBailey)
    btn2.innerHTML = 'Bribe the Guard...'
    btn2.addEventListener("click", bribeKitchGuard)
    el.innerHTML = "10 Gold Coins"
    el.id = 'money'

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    choices.append(btn)
    choices.append(btn2)
    items.append(el)
  }

  function varysKill() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var items = document.getElementById('items')
    var killed = document.getElementById('dead')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var el = document.createElement('p')
    var el2 = document.createElement('p')

    // paragraphs that replace content in filler
    var par1 = `"I DON'T TRUST YOU!!" You pull your knife out and stab downward onto his skull. He falls bleeding everywhere. After twitching for a few minutes he holds still and you take your knife back.`
    var par2 = `You search his living quarters and find 10 gold pieces! ...now what?`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Return to the Lower Bailey'
    btn.addEventListener("click", lowerBailey)
    btn2.innerHTML = 'Walk out to the Outer Yard'
    btn2.addEventListener("click", midBailey)
    el.innerHTML = "Varys"
    el.id = 'varysKO'
    el2.innerHTML = '10 Gold Pieces'
    el2.id = `money`

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    choices.append(btn)
    choices.append(btn2)
    killed.append(el)
    items.append(el2)
  }

  function scramVarys() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Varys looks very displeased when you say, "Varys, you are the scum of the Earth. Of all the people who had to find me, why was it YOU?"`
    var par2 = `After a long drawn out sigh Varys shows you the door and you spit at his feet as you pass him out the door.`
    var par3 = `Again outside, across the outer yard, you see the Throne Room and a few gaurds out front. You notice a kitchen entrance on the side where one gaurd stands.`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Return to the Lower Bailey'
    btn.addEventListener("click", lowerBailey)
    btn2.innerHTML = 'Bribe the Guard.'
    btn2.addEventListener("click", bribeKitchGuard)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    choices.append(btn)
    choices.append(btn2)
  }

  function bribeKitchGuard() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var jaq = document.getElementById('jaqen')
    var coins = document.getElementById('money')
    var knife = document.getElementById('knife')
    var sansaKO = document.getElementById('sansaKO')
    var varysKO = document.getElementById('varysKO')
    var lordComKO = document.getElementById('lordComKO')
    var pycelleKO = document.getElementById('pycelleKO')


    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')

    // paragraphs that replace content in filler
    if (coins !== null) {
      var par1 = `Bribing the guard works.`
      var par2 = `Making your way through the kitchen you enter the Throne Room where the king sits with his counsel and a crowd of people. “How do you lose a prisoner?! Incompetent guards. Someone will hang for this!” `
      var par3 = `It's too late for you to walk out.`

      // resetting content
      filler.innerHTML = ''
      choices.innerHTML = ''
      coins.innerHTML = ''

      // creating choices/items for player
      btn.innerHTML = 'Too many people, wait a minute.'
      btn.addEventListener("click", waitDeath)
      if (knife !== null) {
        btn2.innerHTML = 'Attempt to kill the King!!'
        btn2.addEventListener("click", throneKill)
        choices.append(btn2)
      } else {

      }
      if (jaq !== null) {
        var butn = document.createElement('button')
        butn.innerHTML = 'Kill the King Jaqen.'
        butn.addEventListener("click", kingJH)
        choices.append(butn)
      } else {

      }
      if (sansaKO !== null && varysKO !== null && pycelleKO !== null && lordComKO !== null && sent.length == 1) {
        btn3.innerHTML = `You've killed all the others...finish it.`
        btn3.addEventListener('click', dragon)
        choices.append(btn3)

      } else {
        btn3.innerHTML = `You've killed everyone but the guards...let's send it home. (fufill certain requirements)`
        btn3.disabled = "disabled"
        choices.append(btn3)

      }

      // appending the new content to filler
      filler.append(div)
      div.append(par1)
      filler.append(div2)
      div2.append(par2)
      filler.append(div3)
      div3.append(par3)
      choices.append(btn)
    } else if (coins === null) {
      var par1 = `The gaurd laughs at you, "You need money to bribe people."`
      var par2 = `"Come on, man!" you cry, "You don't know what I've been through! I'M SO CLOSE!" It's this moment the guard truly recognizes you. He draws his sword and cuts you down.`

      // resetting content
      filler.innerHTML = ''
      choices.innerHTML = ''

      // creating choices/items for player
      btn.innerHTML = 'Restart.'
      btn.addEventListener("click", begin)

      // appending the new content to filler
      filler.append(div)
      div.append(par1)
      filler.append(div2)
      div2.append(par2)
      choices.append(btn)
    }

  }

  function throneKill() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var coins = document.getElementById('money')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `No one seems to notice your presence as you make your way beside the throne where the King sits.`
    var par2 = `“Where’s the Grand Maester!? I need his counsel!” A knight begins to stammer a reply when a flash of silver accompanies your hand from under your robe.`
    var par3 = `Screams from around the room and the clatter of armor are all but nonexistent to you. The sound of the King’s anguish, stab after stab to the throat, is all you hear as you paint the throne a violent dark red. As the King gives his last breath you turn to the knights drawing their swords.`
    var par4 = `Your last words are, “Long live the King.”`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''
    coins.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'WIN!!'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    filler.append(div4)
    div4.append(par4)
    choices.append(btn);
  }

  function kingJH() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var coins = document.getElementById('money')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    var btn = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Jaqen makes his way to the front of the room.`
    var par2 = `He walks into the middle of their meeting and stabs the king to death.`
    var par3 = `Screams from around the room and the clatter of armor are all but nonexistent to you. The sound of the King’s anguish, stab after stab to the throat, is all you hear as Jaqen paints the throne a violent dark red. He turns to the knights drawing their swords.`
    var par4 = `"Valar morghulis."`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''
    coins.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'WIN!!'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    filler.append(div4)
    div4.append(par4)
    choices.append(btn);
  }

  function waitDeath() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var coins = document.getElementById('money')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `No one seems to notice your presence as you make your way beside the throne where the King sits.`
    var par2 = `“Where’s the Grand Maester!? I need his counsel!” the King demands.`
    var par3 = `"We c-c-cant find him, m-my Lord!" a Knight stammers out. The King looks around and spots you.`
    var par4 = `Your last words you hear are the Kings, “THE VERMIN IS RIGHT HERE!” before the knights stab you to death.`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''
    coins.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'Restart.'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    filler.append(div4)
    div4.append(par4)
    choices.append(btn);
  }

  function dragon() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var coins = document.getElementById('money')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `“Where’s the Grand Maester!? I need his counsel!” the King demands. Wearing the Grand Maester's clothes, you approach the center of the room. The King speaks again, "Where would the prisoner be?!"`
    var par2 = `In a flash of bravery, you reveal yourself and point your knife at him. A sudden tremor causes dust to fall from the cieling. Another one makes everyone catch their balance.`
    var par3 = `A dragon bursts through the wall behind the King, a rider on it's back carrying a messenger bird. The dragon breaths fire on the King as everyone scrambles out of the room.`
    var par4 = `Except you. You watch the pleasure of a dragon eating a crispy King.`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''
    coins.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'WIN!!'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    filler.append(div4)
    div4.append(par4)
    choices.append(btn);
  }

  function blowUp() {
    // getWords()
    // referencing elements from index.html
    var filler = document.getElementById('filler')
    var choices = document.getElementById('choices')
    var coins = document.getElementById('money')

    // variables creating div, button, paragraphs
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    var div3 = document.createElement('div')
    var div4 = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')

    // paragraphs that replace content in filler
    var par1 = `Opening one of the barrels wasn't easy, but you were able to. All the materials you need are right here. You know you won't survive the blast...but no one else will either. `
    var par2 = `Using the flint and knife, you light the candle. The flame burning bright you hold it over the open barrel.`
    var par3 = `You say goodbye to everything you've known and drop the candle. The last thing you think of is the King's face when he dies.`
    var par4 = `The King does die from your bomb...infact no one survived. Your soul is at rest.`

    // resetting content
    filler.innerHTML = ''
    choices.innerHTML = ''

    // creating choices/items for player
    btn.innerHTML = 'WIN!!'
    btn.addEventListener("click", begin)

    // appending the new content to filler
    filler.append(div)
    div.append(par1)
    filler.append(div2)
    div2.append(par2)
    filler.append(div3)
    div3.append(par3)
    filler.append(div4)
    div4.append(par4)
    choices.append(btn);
  }
