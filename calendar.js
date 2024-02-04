document.addEventListener('DOMContentLoaded', function () {
    generateCalendar();
    markCurrentDate();
    addClickEventForSpecialDates();
    addHeartIcons();
    addPopupEvent();
});

function addPopupEvent() {
    const popupContainer = document.querySelector('.popup-container');

    popupContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup-container') || event.target.classList.contains('heart-icon')) {
            togglePopup('');
        }
    });
}

function generateCalendar() {
    const currentDate = new Date();
    const calendarContainer = document.querySelector('.calendar-container');

    for (let month = 0; month < 12; month++) {
        const currentMonth = new Date(currentDate.getFullYear(), month, 1);
        const monthElement = document.createElement('div');
        monthElement.className = 'calendar-month';

        const monthHeader = document.createElement('h2');
        monthHeader.textContent = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        monthElement.appendChild(monthHeader);

        const daysContainer = document.createElement('div');
        daysContainer.className = 'calendar-days';
        daysContainer.innerHTML = generateCalendarDays(currentMonth);
        monthElement.appendChild(daysContainer);

        calendarContainer.appendChild(monthElement);
    }
}

function generateCalendarDays(currentMonth) {
    let htmlContent = '';
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const isAnniversary = (day === 4 && currentMonth.getMonth() === 3); // April 4th
        const isBirthday = (day === 28 && currentMonth.getMonth() === 4); // May 28th
        const isGirlfriendBirthday = (day === 7 && currentMonth.getMonth() === 10); // November 7th

        const highlightClass = (isAnniversary || isBirthday || isGirlfriendBirthday) ? 'special-date' : '';
        const eventData = getEventData(day, currentMonth.getMonth());

        htmlContent += `<div class="calendar-day ${highlightClass}" data-month="${currentMonth.getMonth() + 1}" data-day="${day}" data-event="${eventData}">
                            ${day}
                        </div>`;
    }

    return htmlContent;
}

function getEventData(day, month) {
    const events = {
        '4-4': "THIS IS OUR ANNIVERSARY BABYGIRL😍",
        '7-11': "YOUR BIRTHDAYYYYYYY AWWW",
        '28-5': "MY BIRTHDAY😍",
    };

    const eventKey = `${day}-${month + 1}`;
    return events[eventKey] || "";
}

function markCurrentDate() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const currentDayElement = document.querySelector(`.calendar-day[data-month="${currentMonth}"][data-day="${currentDay}"]`);

    if (currentDayElement) {
        currentDayElement.classList.add('current-date-container-highlight');
    }
}

function addClickEventForSpecialDates() {
    const specialDates = document.querySelectorAll('.special-date');

    specialDates.forEach(dateElement => {
        dateElement.addEventListener('click', function () {
            const eventData = dateElement.getAttribute('data-event');
            if (eventData) {
                togglePopup(eventData);
            }
        });
    });
}

function addHeartIcons() {
    const specialDates = document.querySelectorAll('.special-date');

    specialDates.forEach(dateElement => {
        const heartIcon = document.createElement('span');
        heartIcon.className = 'heart-icon';
        heartIcon.innerHTML = '&hearts;';
        dateElement.appendChild(heartIcon);

        heartIcon.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the calendar-day click event from triggering
            const eventData = dateElement.getAttribute('data-event');
            if (eventData) {
                togglePopup(eventData);
            }
        });
    });
}

function togglePopup(eventData) {
    const popupContainer = document.querySelector('.popup-container');
    const popupContent = document.querySelector('.popup-content');

    if (eventData) {
        popupContent.textContent = eventData;
        popupContainer.classList.toggle('active');
    } else {
        popupContainer.classList.remove('active');
    }
}
