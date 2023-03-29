input.onButtonPressed(Button.A, function () {
    OLED.writeNumNewLine(습도)
})
let 습도 = 0
습도 = 0
OLED.init(128, 64)
basic.forever(function () {
    습도 = pins.analogReadPin(AnalogPin.P2)
    if (습도 < 50) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P1, 0)
        music.stopAllSounds()
    }
})
