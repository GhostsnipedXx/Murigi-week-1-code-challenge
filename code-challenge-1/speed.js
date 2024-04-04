let demerit = 0
let speed = prompt('How fast was your car going?', 0)
document.write(`You were moving at ${speed} km/h, `)
switch (true) {
    case speed < 70:
        document.write('Ok');
        break;
    case speed < 75 && speed >= 70:
        document.write(` be cautious, you are almost above the speed limit of 75km/h`);
        break;
    case speed >= 75:
        for (; speed >= 75; speed -= 5) {
            demerit += 1;

        } document.write(`you will be deducted ${demerit} points.`);
        if (demerit > 12) {
            document.write(' License suspended.');
        }
        break;

}
