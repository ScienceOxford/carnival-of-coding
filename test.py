from microbit import *
import music

# Please tag us if used!
# We'd love to see what you make:
# @ScienceOxford

display.show(Image.GIRAFFE)

LF = pin13
LB = pin12
RF = pin14
RB = pin15

def drive(L, R):
    # Below is an adjustment to correct for motor speed discrepancy
    L = int(L*1)
    R = int(R*1)
    # Below controls the left wheel: forward, backward, stop at given speed
    if L > 0 and L <= 1023:
        LF.write_analog(abs(L))  # go forwards at speed given
        LB.write_analog(0)         # don't go backwards
    elif L < 0 and L >= -1023:
        LF.write_analog(0)         # don't go forwards
        LB.write_analog(abs(L))  # go backwards at speed given
    else:
        LF.write_analog(0)         # stop the left wheel
        LB.write_analog(0)
    # Below controls the right wheel: forward, backward, stop at given speed
    if R > 0 and R <= 1023:
        RF.write_analog(abs(R))  # go forwards at speed given
        RB.write_analog(0)         # don't go backwards
    elif R < 0 and R >= -1023:
        RF.write_analog(0)         # don't go forwards
        RB.write_analog(abs(R))  # go backwards at speed given
    else:
        RF.write_analog(0)         # stop the right wheel
        RB.write_analog(0)

while True:
    if button_a.was_pressed():
        display.show(Image.DUCK)
        music.play(music.POWER_UP, wait=False)
        pin1.write_digital(1)
        sleep(200)
        pin2.write_digital(1)
        sleep(200)
        pin8.write_digital(1)
        sleep(200)
        pin1.write_digital(0)
        sleep(200)
        pin2.write_digital(0)
        sleep(200)
        pin8.write_digital(0)
        sleep(200)
        display.show(Image.GIRAFFE)
    if button_b.was_pressed():
        display.show(Image.HAPPY)
        music.play(music.POWER_DOWN, wait=False)
        pin1.write_digital(1)
        pin2.write_digital(1)
        pin8.write_digital(1)
        pin16.write_digital(1)
        drive(1000, 1000)
        sleep(1000)
        drive(0, 0)
        sleep(500)
        drive(-1000, -1000)
        sleep(1000)
        drive(0, 0)
        pin1.write_digital(0)
        pin2.write_digital(0)
        pin8.write_digital(0)
        pin16.write_digital(0)
        display.show(Image.GIRAFFE)
