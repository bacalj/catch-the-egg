function createEgg () {
    egg = game.createSprite(randint(0, 5), 0)
}
input.onButtonPressed(Button.A, function () {
    guy.move(-1)
})
function dropEgg () {
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        egg.change(LedSpriteProperty.Y, 1)
    }
    wasItCaught()
    egg.delete()
}
input.onButtonPressed(Button.B, function () {
    guy.move(1)
})
function wasItCaught () {
    if (guy.isTouching(egg)) {
        music.playMelody("C D E F G A B C5 ", 1000)
        game.addScore(1)
    }
}
let egg: game.LedSprite = null
let guy: game.LedSprite = null
guy = game.createSprite(2, 5)
game.startCountdown(30000)
basic.forever(function () {
    while (game.isRunning()) {
        basic.pause(randint(200, 900))
        createEgg()
        dropEgg()
    }
})
