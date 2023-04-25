function arm_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function backwards () {
    wuKong.setAllMotor(-20, -20)
}
function foward () {
    wuKong.setAllMotor(20, 20)
}
function arm_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
joystickbit.initJoystickBit()
radio.setGroup(9)
basic.showIcon(IconNames.Rollerskate)
basic.forever(function () {
	
})
