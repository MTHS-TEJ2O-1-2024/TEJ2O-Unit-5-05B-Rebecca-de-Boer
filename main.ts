/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Oct 2024
 * This program plays rock paper scissors
*/

let randomNumber: number = 0
let score: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)


    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }

    if (randomNumber == 1) {
        basic.showIcon(IconNames.Scissors)
    }

    if (randomNumber == 2) {
        basic.showIcon(IconNames.Square)
    }

    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.buttonIsPressed(Button.A)
{
 score = score +1
}

input.onButtonPressed(Button.B, function () {
    basic.showString("score:" + score)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})