let img = document.getElementById('album');
let photoText = document.getElementById('photoText');
let photoPath = img.getAttribute('src').split('/');
let photoName = photoPath[2].slice(0, 6);
let photoNum = photoPath[2].slice(6, 8);
let photoDate = document.getElementById('photoDate');


const page_turn = new Audio("page_turn_sfx.mp3");

const textObj = {
    'photos': [
        "Hello! ^_^\n \
        I'm Ahmad Hanif Naufal Jamil, but you can call me by Hanif!\n \
        Nice to meet you! ( ˶ˆᗜˆ˵ )\n \
        Feel free to take a glimpse of my life by pressing the buttons beside the picture!",

        "I am a student at State University of Jakarta.\n \
        I got accepted here by SNBT with a score of 687.2 and I am studying Computer Science along with my lovely friends in the picture!",

        "This is me and my friends welcoming new students to Computer Science at UNJ.\n \
        I got assigned as the 2nd Secretary, it was tiring but I learned a lot through it!",

        "I graduated from SMAN 1 Babelan, I met some really nice people, forged some strong friendships, and I wont forget the lessons I've learned there!",

        "In my second year of senior high school I was trusted to be the leader of their English Club.\n \
        This photo was taken when my time as a leader has come to an end\n \
        I made many mistakes, but looking back I never regretted becoming the leader.",

        "This is me and the leader of another school organization. We decided to collab and host a Language Fest Event for the entire school!\n \
        It held a total of 7 competitions such as speech, story telling, and many more!",

        "One of my hobbies is making pixel art, I've started this hobby since 2021 and I am consistently learning until this day!\n \
        If you'd like to see more of my work, head over to my art Instagram account: <a href=\"https://www.instagram.com/pancakemewo/?hl=id\">@pancakemewo</a>",
        
        "One of my hobbies is developing games, I've started this hobby since 2022. It's sometimes a headache but overall I find it really fun!\n \
        This is a sneak peek of a card game I'm working on, it's still in an early version but be on the lookout for it!"
    ],

    'dates': [
        "Welcome!",
        "10/10/2024",
        "25/08/2025",
        "22/05/2024",
        "11/11/2023",
        "30/10/2023",
        "26/07/2022",
        "25/06/2023"
    ]
}


function set_text() {
    photoText.innerHTML = `${textObj[photoText.className][photoNum-1]}`
    photoDate.innerHTML = `${textObj[photoDate.className][photoNum-1]}`
}


function prev_photo() {
    switch (photoNum) {
        case '01':
            photoNum = 8;
            break;
        default:
            photoNum--
            break;
    }

    if (`${photoNum}`.length < 2) {
        photoNum = `0${photoNum}`
    } else {photoNum = photoNum.toString()}

    page_turn.play()

    img.src = `${photoPath[0]}/${photoPath[1]}/${photoName + photoNum}.jpeg`
    set_text()
}


function next_photo() {
    switch (photoNum) {
        case '08':
            photoNum = 1;
            break;
        default:
            photoNum++;
            break;
    }

    if (`${photoNum}`.length < 2) {
        photoNum = `0${photoNum}`
    } else {photoNum = photoNum.toString()}

    page_turn.currentTime = 0;
    page_turn.play()

    img.src = `${photoPath[0]}/${photoPath[1]}/${photoName + photoNum}.jpeg`
    set_text()
}
