let 습도 = 0
basic.forever(function () {
    습도 = pins.analogReadPin(AnalogPin.P2)
    if (습도 < 50) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P1, 0)
        music.stopAllSounds()
    }
})
