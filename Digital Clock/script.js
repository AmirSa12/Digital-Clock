const clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let showTime = `${hours}:${mins}:${secs}`;

    let amOrPm = "AM";
    if (hours === 0) hours = 12;

    if (hours > 12){
        hours = hours - 12;
        amOrPm = "PM";
    }

    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    const time = `${hours}:${mins}:${secs} ${amOrPm}`;

    document.querySelector("#Time").innerText = time;
    setTimeout(clock, 1000);
};

clock();


const fullDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let showDate = `${day}, ${month}, ${year}`;
    document.querySelector("#Date").innerText = showDate;
    setTimeout(fullDate, 1000);

}

fullDate();