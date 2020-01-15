/**
 * Carnival of Coding blocks
 * URL of Github repo
 * URL of SO workshop listing on website
 */

let A = "A"
let B = "B"

//% weight=100 color=#0fbc11 icon="\u263A"
namespace carnivalOfCoding {
    /**
     * Turn the red LED on (1) or off (0)
     * @param value controls whether the LED is on or off, eg: 0
     */
    //% block
    //% value.min=0 value.max=1
    export function red(value: number) {
        pins.digitalWritePin(DigitalPin.P1, value)
    }

    /**
     * Turn the amber LED on (1) or off (0)
     * @param value controls whether the LED is on or off, eg: 0
     */
    //% block
    //% value.min=0 value.max=1
    export function amber(value: number) {
        pins.digitalWritePin(DigitalPin.P2, value)
    }

    /**
     * Turn the green LED on (1) or off (0)
     * @param value controls whether the LED is on or off, eg: 0
     */
    //% block
    //% value.min=0 value.max=1
    export function green(value: number) {
        pins.digitalWritePin(DigitalPin.P8, value)
    }

    /**
     * Turn on Motor1 for a set amount of time
     * @param value choose a speed (larger number is faster) and direction (positive or negative), eg: 0
     * @param duration choose how long the motor runs for in ms, eg: 1000
 */
    //% block
    //% value.min=-1000 value.max=1000
    //% duration.min=100 duration.max=10000
    export function Motor1(value: number, duration: number) {
        if (value > 0 && value < 1000) {
            pins.analogWritePin(AnalogPin.P13, Math.abs(value))
        } else if (value < 0 && value > -1000) {
            pins.analogWritePin(AnalogPin.P12, Math.abs(value))
        }
        basic.pause(duration)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
    }

    /**
     * Turn on Motor2 for a set amount of time
     * @param value choose a speed (larger number is faster) and direction (positive or negative), eg: 0
     * @param duration choose how long the motor runs for in ms, eg: 1000
     */
    //% block
    //% value.min=-1000 value.max=1000
    //% duration.shadow=timePicker
    export function Motor2(value: number, duration: number) {
        if (value > 0 && value < 1000) {
            pins.analogWritePin(AnalogPin.P14, Math.abs(value))
            pins.analogWritePin(AnalogPin.P15, 0)
            basic.pause(duration)
            pins.analogWritePin(AnalogPin.P14, 0)
        } else if (value < 0 && value > -1000) {
            pins.analogWritePin(AnalogPin.P15, Math.abs(value))
            pins.analogWritePin(AnalogPin.P14, 0)
            basic.pause(duration)
            pins.analogWritePin(AnalogPin.P15, 0)
        } else {
            pins.analogWritePin(AnalogPin.P14, 0)
            pins.analogWritePin(AnalogPin.P15, 0)
        }
    }

    /**
     * Turn a motor on for a set amount of time
     * @param id choose 'Motor A' or 'Motor B', eg: "A"
     * @param value choose a speed (larger number is faster) and direction (positive or negative), eg: 0
     * @param duration choose how long the motor runs for in ms, eg: 1000
     */
    //% block
    //% id.fieldEditor="textdropdown" id.fieldOptions.decompileLiterals=true id.fieldOptions.values=AB
    //% value.min=-1000 value.max=1000
    //% duration.shadow=timePicker
    export function motor(id: string, value: number, duration: number) {
        if (id == "A" && value > 0 && value < 1001) {
            pins.analogWritePin(AnalogPin.P13, Math.abs(value))
            pins.analogWritePin(AnalogPin.P12, 0)

        } else if (id == "B" && value > 0 && value < 1001) {
            pins.analogWritePin(AnalogPin.P14, Math.abs(value))
            pins.analogWritePin(AnalogPin.P15, 0)

        } else if (id == "A" && value < 0 && value > -1001) {
            pins.analogWritePin(AnalogPin.P12, Math.abs(value))
            pins.analogWritePin(AnalogPin.P13, 0)

        } else if (id == "B" && value < 0 && value > -1001) {
            pins.analogWritePin(AnalogPin.P15, Math.abs(value))
            pins.analogWritePin(AnalogPin.P14, 0)

        } else {
            pins.analogWritePin(AnalogPin.P13, 0)
            pins.analogWritePin(AnalogPin.P12, 0)
            pins.analogWritePin(AnalogPin.P14, 0)
            pins.analogWritePin(AnalogPin.P15, 0)
        }
        basic.pause(duration)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
    }
}
