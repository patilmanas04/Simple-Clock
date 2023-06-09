const timeContainer = document.querySelector(".time-container");
const dayNameContainer = document.querySelector(".day-name-container");
const dateContainer = document.querySelector(".date-container");
const modeSelectButton = document.querySelector(".mode-select-button");

const getDayName = (dayIndex)=>{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

const getMonthName = (monthIndex)=>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

const updateTime = ()=>{
    const date = new Date();
    const hh24HoursFormat = date.getHours();
    const am_pm = (hh24HoursFormat>=12) ? 'PM' : 'AM';
    let hh = (hh24HoursFormat>12) ? hh24HoursFormat-12 : hh24HoursFormat;
    hh = (hh<10) ? '0'+hh : hh;
    let mm = date.getMinutes();
    mm = (mm<10) ? '0'+mm : mm;
    const time = `${hh}:${mm} ${am_pm}`
    let dayName = getDayName(date.getDay());;
    let monthDate = date.getDate();
    let month = getMonthName(date.getMonth());
    let year = date.getFullYear();
    

    timeContainer.textContent = time;
    dayNameContainer.textContent = `${dayName}`;
    dateContainer.textContent = `${month} ${monthDate}, ${year}`;
}

setInterval(updateTime, 1000);

modeSelectButton.addEventListener("click", (e)=>{
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    const dayDateContainer = document.querySelector(".day-date-container");
    const button = document.querySelector(".mode-select-button");

    if(e.target.innerHTML.toLowerCase() === "dark mode"){
        body.style.backgroundColor = "var(--body-dark-background)";
        container.style.backgroundColor = "var(--container-dark-background)";
        container.style.color = "var(--container-dark-text-color)";
        dayDateContainer.style.color = "var(--day-date-container-dark-text-color)";
        button.style.color = "var(--button-dark-text-color)";
        button.style.borderColor = "var(--button-dark-border-color)";
        button.innerHTML = "Light Mode";
    }
    else{
        body.style.backgroundColor = "var(--body-light-background)";
        container.style.backgroundColor = "var(--container-light-background)";
        container.style.color = "var(--container-light-text-color)";
        dayDateContainer.style.color = "var(--day-date-container-light-text-color)";
        button.style.color = "var(--button-light-text-color)";
        button.style.borderColor = "var(--button-light-border-color)";
        button.innerHTML = "Dark Mode";
    }
});