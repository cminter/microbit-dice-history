function createDieImages () {
    dieImages = []
    dieImages.push(images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `))
    dieImages.push(images.createImage(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        `))
    dieImages.push(images.createImage(`
        . . . . .
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        `))
    dieImages.push(images.createImage(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        `))
    dieImages.push(images.createImage(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        `))
    dieImages.push(images.createImage(`
        . . . . .
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        `))
}
input.onButtonPressed(Button.A, function () {
    rolling = 1
})
function rollDie (range: number) {
    rolls.unshift(randint(0, range - 1))
    while (rolls.length > 5) {
        rolls.pop()
    }
}
input.onButtonPressed(Button.B, function () {
    if (rolls.length > 1) {
        tmpIndex = activeIndex + 1
        if (tmpIndex >= rolls.length) {
            tmpIndex = 0
        }
        showDie(tmpIndex)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (rolling == 1) {
        rollDie(6)
        rolling = 0
        showDie(0)
    }
})
function showDie (targetIndex: number) {
    roll = rolls[targetIndex]
    if (targetIndex == 0) {
        scrollDir = -1
    } else {
        scrollDir = 1
    }
    led.unplot(activeIndex, 0)
    dieImages[roll].showImage(0)
    activeIndex = targetIndex
    led.plotBrightness(targetIndex, 0, brightness)
}
let scrollDir = 0
let roll = 0
let tmpIndex = 0
let rolling = 0
let dieImages: Image[] = []
let activeIndex = 0
let brightness = 0
let rolls: number[] = []
rolls = []
brightness = 32
activeIndex = 0
createDieImages()
basic.showIcon(IconNames.Yes)
