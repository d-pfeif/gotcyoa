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

  // resetting content to nothing
  filler.innerHTML = ''
  choices.innerHTML = ''
  ally.removeChild(jaq)

  if (key === null && jaq === null) {
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    btn.innerHTML = 'Search the last room.';
    btn.addEventListener("click", searchRoom);
    btn2.innerHTML = 'Go right.'
    btn2.addEventListener("click", rightKill)
    choices.append(btn)
    choices.append(btn2)
  } else if (key !== null && jaq === null && castDepths === null) {
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    btn.innerHTML = 'Unlock the door. (Uses Key)'
    btn.addEventListener("click", depths)
    btn2.innerHTML = 'Go right.'
    btn2.addEventListener("click", rightKill)
    choices.append(btn)
    choices.append(btn2)
  } else if (key === null && jaq !== null && castDepths === null) {
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    btn.innerHTML = `Ask Jaqen for help. (Jaqen H'ghar)`
    btn.addEventListener("click", leftJH)
    btn2.innerHTML = 'Go right. (Jaqen H\'ghar)'
    btn2.addEventListener("click", rightJH)
    choices.append(btn)
    choices.append(btn2)
  } else if (key === null && jaq !== null & castDepths !== null) {
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var btn3 = document.createElement('button')
    btn.innerHTML = `Ask Jaqen for help. (Jaqen H'ghar)`
    btn.addEventListener("click", leftJH)
    btn2.innerHTML = 'Go right. (Jaqen H\'ghar)'
    btn2.addEventListener("click", rightJH)
    btn3.innerHTML = 'Descend the ladder'
    btn3.addEventListener("click", depths)
    par2 = "It's unlocked. Inside is a small room with a ladder to the depths of the Castle."
    choices.append(btn3)
    choices.append(btn)
    choices.append(btn2)
  }

}
