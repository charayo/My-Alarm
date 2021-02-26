let minVal;
let hrval;
let snoozeVal = 10;
let snoozeTemp;
let fillMin = () => {
    for (let index = 60; index > 0; index--) {
        if (index < 10) {
            minSe.innerHTML += `<option value="0${index}">0${index}</option>`
        } else {
            minSe.innerHTML += `<option value="${index}">${index}</option>`
        }
    }
}
let fillHr = () => {
    for (let index = 12; index > 0; index--) {
        if (index < 10) {
            hrSe.innerHTML += `<option value="0${index}">0${index}</option>`
        } else {
            hrSe.innerHTML += `<option value="${index}">${index}</option>`
        }
    }
}
fillHr();
fillMin();


let minDigIt = () => {
    minVal = minSe.value;
}
let hrDigIt = () => {
    hrVal = hrSe.value;
}
minSe.addEventListener('change', minDigIt);
hrSe.addEventListener('change', hrDigIt);

let update = () => {
    let today = new Date();
    let hour12;

    if (today.getHours() > 12) {
        dayNigth.innerHTML = "PM"
        hour12 = today.getHours() - 12;
    } else {
        dayNigth.innerHTML = "AM";
        hour12 = today.getHours()
    }
    if (today.getHours() == 0) {
        hour12 = today.getHours() + 12;
    }

    if (today.getSeconds() < 10) {
        secDisp.innerHTML = "0" + today.getSeconds();
    } else {
        secDisp.innerHTML = today.getSeconds();
    }

    if (today.getMinutes() < 10) {
        minDisp.innerHTML = "0" + today.getMinutes();
    } else {
        minDisp.innerHTML = today.getMinutes();
    }

    if (hour12 < 10) {
        hrDisp.innerHTML = "0" + hour12;

    } else {
        hrDisp.innerHTML = hour12;
    }
}

let setit = () => {
    var myTime = setInterval(update, 1000);
}
setit();

let setAlarm = () => {
    if (minVal == minDisp.innerHTML && hrVal == hrDisp.innerHTML && dayNigth.innerHTML == dnSe.value) {
        clearInterval(alarmTime);
        snooze.classList.remove("d-none");
        sndAlarm.play();
    }
}

let setUp = () => {
    alarmTime = setInterval(setAlarm, 1000)
}

let setSnooze = () => {
    snoozeVal = snoozeSe.value;
};
snoozeSe.addEventListener('change', setSnooze)

let snoozeACtion = () => {
    sndAlarm.pause();
    snoozeTemp = parseInt(minVal) + parseInt(snoozeVal);
    if (snoozeTemp > 60) {
        minVal = snoozeTemp - 60;
        hrval = parseInt(hrval) + 1;
    } else {
        minVal = parseInt(minVal) + parseInt(snoozeVal);
    }
    snooze.classList.add("d-none")
    setUp();
}

snoozeBtn.addEventListener('click', snoozeACtion);
let stopBtn = () => {
    snooze.classList.add("d-none");
    clearInterval(alarmTime);
    sndAlarm.pause();
}
stpBtn.addEventListener('click', stopBtn);