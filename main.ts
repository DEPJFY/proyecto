input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    servos.P1.run(50)
    servos.P0.setAngle(90)
    servos.P2.run(50)
})
basic.showString("Hello!")
