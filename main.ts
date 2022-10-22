function bluecontrol () {
    if (uartData == "A") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M3,
        -200
        )
    } else if (uartData == "B") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        200
        )
    } else if (uartData == "C") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        -200
        )
    } else if (uartData == "D") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M3,
        200
        )
    } else if (uartData == "0") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    connected = 1
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
function ModeSelect () {
    if (uartData == "S") {
        basic.showIcon(IconNames.House)
        g_mode = 1
    } else if (uartData == "T") {
        basic.showIcon(IconNames.Angry)
        g_mode = 2
    } else if (uartData == "U") {
        basic.showIcon(IconNames.EigthNote)
        g_mode = 3
    } else if (uartData == "V") {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            `)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M1,
        0
        )
        g_mode = 0
    }
}
function SevenColorLED () {
    if (uartData == "G") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (uartData == "H") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (uartData == "I") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (uartData == "J") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (uartData == "K") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
        SuperBit.RGB_Program().show()
    } else if (uartData == "L") {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
        SuperBit.RGB_Program().show()
    } else if (uartData == "M") {
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
}
function SevenWaterLED () {
    if (uartData == "N") {
        g_RGBMode = 1
    } else if (uartData == "P") {
        g_RGBMode = 2
    } else if (uartData == "Q") {
        g_RGBMode = 3
    } else if (uartData == "R") {
        g_RGBMode = 4
    } else if (uartData == "W") {
        g_RGBMode = 5
    }
}
function music2 () {
    music.setVolume(255)
    if (uartData == "1") {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (uartData == "2") {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (uartData == "3") {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (uartData == "4") {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (uartData == "5") {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (uartData == "6") {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (uartData == "7") {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else if (uartData == "8") {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (uartData == "B1") {
        music.playTone(554, music.beat(BeatFraction.Whole))
    } else if (uartData == "B2") {
        music.playTone(622, music.beat(BeatFraction.Whole))
    } else if (uartData == "B3") {
        music.playTone(740, music.beat(BeatFraction.Whole))
    } else if (uartData == "B4") {
        music.playTone(831, music.beat(BeatFraction.Whole))
    } else if (uartData == "B5") {
        music.playTone(932, music.beat(BeatFraction.Whole))
    } else if (uartData == "O") {
        music.setVolume(0)
    }
}
let g_mode = 0
let uartData = ""
let connected = 0
let g_RGBMode = 0
let i = 0
let m = 0
g_RGBMode = 0
connected = 0
bluetooth.startUartService()
basic.showString("S")
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    if (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        bluecontrol()
        SevenColorLED()
        music2()
        ModeSelect()
        SevenWaterLED()
    }
})
basic.forever(function () {
    if (g_RGBMode == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (g_RGBMode == 2) {
        basic.showIcon(IconNames.Duck)
    } else if (g_RGBMode == 3) {
        basic.showIcon(IconNames.Butterfly)
    } else if (g_RGBMode == 4) {
        basic.showIcon(IconNames.Ghost)
    } else if (g_RGBMode == 5) {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(10)
})
