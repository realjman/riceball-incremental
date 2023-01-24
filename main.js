let player = {
  rice: 0,
  riceballs: 0,
  ricepersecond: 1,
  morericepersecondprice: 10,
}

function gainRice() {
  player.rice = player.rice + player.ricepersecond
}

function makeRiceballs() {
  if (player.rice > 0) {
    player.rice = player.rice - 1
    player.riceballs = player.riceballs + 1
  }
  else {
    alert("not enough rice")
  }
}

function buyMoreRPS() {
  if (player.riceballs >= player.morericepersecondprice) {
    player.riceballs = player.riceballs - player.morericepersecondprice
    player.ricepersecond = player.ricepersecond + 1
    player.morericepersecondprice = player.morericepersecondprice * 1.5
  }
  else {
    alert("not enough riceballs")
  }
}


var gameLoop = window.setInterval(function () {
  gainRice()
}, 1000)

var dataLoop = window.setInterval(function () {
  document.getElementById("rice").innerHTML = player.rice
  document.getElementById("riceballs").innerHTML = player.riceballs
  document.getElementById("ricepersecond").innerHTML = player.ricepersecond
  document.getElementById("morericepersecondprice").innerHTML = player.morericepersecondprice
}, 1)