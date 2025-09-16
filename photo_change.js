let img = document.getElementById('album');
let photoText = document.getElementById('photoText');
let photoPath = img.getAttribute('src').split('/');
let photoName = photoPath[2].slice(0, 6);
let photoNum = photoPath[2].slice(6, 8);
const textObj = {
    'photos': [
        "Hello! ^_^\n \
        I'm Ahmad Hanif Naufal Jamil, but you can call me by Hanif!\n \
        Nice to meet you! ( ˶ˆᗜˆ˵ )\n \
        Feel free to take a glimpse of my life by pressing the buttons beside the picture!",

        "I am a student at State University of Jakarta,\n \
        I got accepted here by SNBT with a score of 687.2 and \n \
        I am studying Computer Science along with my lovely friends in the picture!",

        "This is me and my friends welcoming new students to Computer Science at UNJ.\n \
        I got assigned as the 2nd Secretary, it was tiring but I learned a lot through it!"
    ]
}


function get_text() {
    photoText.innerHTML = `${textObj[photoText.className][photoNum-1]}`
}


function prev_photo() {
    switch (photoNum) {
        case '01':
            photoNum = 18;
            break;
        default:
            photoNum--
            break;
    }

    if (`${photoNum}`.length < 2) {
        photoNum = `0${photoNum}`
    } else {photoNum = photoNum.toString()}

    img.src = `${photoPath[0]}/${photoPath[1]}/${photoName + photoNum}.jpeg`
    get_text()
}


function next_photo() {
    switch (photoNum) {
        case '18':
            photoNum = 1;
            break;
        default:
            photoNum++;
            break;
    }

    if (`${photoNum}`.length < 2) {
        photoNum = `0${photoNum}`
    } else {photoNum = photoNum.toString()}

    img.src = `${photoPath[0]}/${photoPath[1]}/${photoName + photoNum}.jpeg`
    get_text()
}
