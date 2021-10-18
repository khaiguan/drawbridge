input.onButtonPressed(Button.A, function () {
    sb.transitionServoPosition(sb.servo(SBServo.ServoC), 0, 1, sb.easing(SBEasing.Linear))
})
input.onButtonPressed(Button.B, function () {
    sb.transitionServoPosition(sb.servo(SBServo.ServoC), 100, 1, sb.easing(SBEasing.Linear))
})
sb.setContinuousServoSpeed(sb.servo(SBServo.ServoC), 50)
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
	
})
