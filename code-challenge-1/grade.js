let grade = prompt('Put in your grade.')
switch (true) {
    case (parseInt(grade) > 100):
        alert('Input a number between 0-100');
        break;
    case (parseInt(grade) > 79):
        alert('You got an A!');
        break;
    case (parseInt(grade) >= 60 && parseInt(grade) <= 79):
        alert('You got a B!');
        break;
    case (parseInt(grade) >= 49 && parseInt(grade) <= 59):
        alert('You got a C.');
        break;
    case (parseInt(grade) >= 40 && parseInt(grade) <= 49):
        alert('You got a D.');
        break;
        case (parseInt(grade) >= 0 && parseInt(grade) <=39):
            alert('You got an E.');
            break;
        case (parseInt(grade) < 0):
            alert('Input a number between 0-100')
        
}
