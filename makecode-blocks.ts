/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum LED {
    red,
    amber,
    green
}

enum Motor {
    A,
    B,
    //% block="A+B"
    AB,
}

/**
 * Carnival of Coding blocks
 */

//% weight=100 color=#CCCC00 icon="\u263A"
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
     * Turn the traffic light LEDs on (1) or off (0)
     * @param colour chooses from red, amber, green, eg: red
     * @param value controls whether the LED is on or off, eg: 0
     */
    //% block="set |%NAME| to %value"
    //% value.min=0 value.max=1
    export function turn(colour: LED, value: number) {
        if (colour == LED.red) {
            pins.digitalWritePin(DigitalPin.P1, value)
        } else if (colour == LED.amber) {
            pins.digitalWritePin(DigitalPin.P2, value)
        } else if (colour == LED.green) {
            pins.digitalWritePin(DigitalPin.P8, value)
        }
    }

    /**
     * Turn on Motor1 for a set amount of time
     * @param value choose a speed (larger number is faster) and direction (positive or negative), eg: 0
     * @param duration choose how long the motor runs for in ms, eg: 1000
    */
    //% block
    //% value.min=-1023 value.max=1023
    //% duration.min=100 duration.max=10000
    export function Motor1(value: number, duration: number) {
        if (value > 0 && value <= 1023) {
            pins.analogWritePin(AnalogPin.P13, Math.abs(value))
        } else if (value < 0 && value >= -1023) {
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
    //% value.min=-1023 value.max=1023
    //% duration.shadow=timePicker
    export function Motor2(value: number, duration: number) {
        if (value > 0 && value <= 1023) {
            pins.analogWritePin(AnalogPin.P14, Math.abs(value))
            pins.analogWritePin(AnalogPin.P15, 0)
            basic.pause(duration)
            pins.analogWritePin(AnalogPin.P14, 0)
        } else if (value < 0 && value > - -1023) {
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
     * @param id choose 'Motor A' or 'Motor B', eg: A
     * @param value choose a speed (larger number is faster) and direction (positive or negative), eg: 0
     * @param duration choose how long the motor runs for in ms, eg: 1000
     */
    //% block="set motor |%NAME| to speed %value for duration: %duration"
    //% value.min=-1023 value.max=1023
    //% duration.shadow=timePicker
    export function motor(id: Motor, value: number, duration: number) {
        if (id == Motor.A && value > 0 && value <= 1023) {
            pins.analogWritePin(AnalogPin.P13, Math.abs(value))

        } else if (id == Motor.B && value > 0 && value <= 1023) {
            pins.analogWritePin(AnalogPin.P14, Math.abs(value))

        } else if (id == Motor.AB && value > 0 && value <= 1023) {
            pins.analogWritePin(AnalogPin.P13, Math.abs(value))
            pins.analogWritePin(AnalogPin.P14, Math.abs(value))

        } else if (id == Motor.A && value < 0 && value >= -1023) {
            pins.analogWritePin(AnalogPin.P12, Math.abs(value))

        } else if (id == Motor.B && value < 0 && value >= -1023) {
            pins.analogWritePin(AnalogPin.P15, Math.abs(value))

        } else if (id == Motor.AB && value < 0 && value >= -1023) {
            pins.analogWritePin(AnalogPin.P12, Math.abs(value))
            pins.analogWritePin(AnalogPin.P15, Math.abs(value))
        }
        basic.pause(duration)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
    }

    /**
     * Turn the extra output on (1) or off(0)
     * @param value controls whether the output is on or off, eg: 0
     */
    //% block="set digital output to %value"
    //% value.min=0 value.max=1
    export function outputDigital(value: number) {
        pins.digitalWritePin(DigitalPin.P16, value)
    }

    /**
     * Turn the extra output on to a chosen value
     * @param value controls whether the output is on or off, eg: 1023
     */
    //% block="set analog output to %value"
    //% value.min=0 value.max=1023
    export function outputAnalog(value: number) {
        pins.analogWritePin(AnalogPin.P16, value)
    }
}
