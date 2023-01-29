let player = {
  rice: 0,
  riceballs: 0,
  ricepersecond: 1,
  morericepersecondprice: 10,
  riceballsperclick: 1,
  morericeballsperclickprice: 50,
}

function gainRice() {
  player.rice = player.rice + (player.ricepersecond / 100)
}

function makeRiceballs() {
  if (player.rice >= player.riceballsperclick) {
    player.rice = player.rice - player.riceballsperclick
    player.riceballs = player.riceballs + player.riceballsperclick
  }
  else {
    document.getElementById("error").innerHTML = "you dont have enough rice"
    setTimeout(function() {
      document.getElementById("error").innerHTML = ""
    }, 2000)
  }
}

function buyMoreRPS() {
  if (player.riceballs >= player.morericepersecondprice) {
    player.riceballs = player.riceballs - player.morericepersecondprice
    player.ricepersecond = player.ricepersecond + 1
    player.morericepersecondprice = player.morericepersecondprice * 1.5
  }
  else {
    document.getElementById("error").innerHTML = "you dont have enough riceballs"
    setTimeout(function() {
      document.getElementById("error").innerHTML = ""
    }, 2000)
  }
}

function buyMoreRBPC() {
  if (player.riceballs >= player.morericeballsperclickprice) {
    player.riceballs = player.riceballs - player.morericeballsperclickprice
    player.riceballsperclick = player.riceballsperclick + 1
    player.morericeballsperclickprice = player.morericeballsperclickprice * 1.25
  }
  else {
    document.getElementById("error").innerHTML = "you dont have enough riceballs"
    setTimeout(function() {
      document.getElementById("error").innerHTML = ""
    }, 2000)
  }
}


var gameLoop = window.setInterval(function () {
  gainRice()
}, 10)

var dataLoop = window.setInterval(function () {
  document.getElementById("rice").innerHTML = player.rice.toFixed(1)
  document.getElementById("riceballs").innerHTML = player.riceballs.toFixed()
  document.getElementById("ricepersecond").innerHTML = player.ricepersecond
  document.getElementById("morericepersecondprice").innerHTML = player.morericepersecondprice.toFixed()
  document.getElementById("riceballsperclick").innerHTML = player.riceballsperclick.toFixed()
  document.getElementById("morericeballsperclickprice").innerHTML = player.morericeballsperclickprice.toFixed()
}, 1)