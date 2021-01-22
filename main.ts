input.onGesture(Gesture.LogoUp, function () {
    if (y < 4 && freez == 1) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        y += 1
        basic.clearScreen()
    } else {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (x > 0) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        x += -1
        basic.clearScreen()
    } else {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    }
})
input.onButtonPressed(Button.A, function () {
    freez = 1
})
input.onGesture(Gesture.LogoDown, function () {
    if (y > 0) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        y += -1
        basic.clearScreen()
    } else {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    }
})
input.onButtonPressed(Button.B, function () {
    freez = 0
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    if (x < 4) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        x += 1
        basic.clearScreen()
    } else {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
    }
})
let freez = 0
let y = 0
let x = 0
x = 2
y = 2
let posX = randint(0, 4)
let posY = randint(0, 4)
let game2 = 1
let score = 0
freez = 0
basic.forever(function () {
    if (freez == 1) {
        led.plot(x, y)
        led.plot(posX, posY)
    }
    if (x == posX && y == posY) {
        score += 1
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        music.playTone(659, music.beat(BeatFraction.Sixteenth))
        music.playTone(784, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
        basic.showNumber(score)
        basic.pause(200)
        posX = randint(0, 4)
        posY = randint(0, 4)
        basic.clearScreen()
        x = 2
        y = 2
    }
    if (score > 9) {
        basic.showString("You Win")
        x = 2
        y = 2
        posX = randint(0, 4)
        posY = randint(0, 4)
        game2 = 1
        score = 0
    }
})
