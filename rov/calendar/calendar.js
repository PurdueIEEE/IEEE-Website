import all_cal from "/assets/calendar.js"

let url = '';
all_cal.forEach(cal => {
    if(cal["name"].startsWith("rov") || cal["name"] == "ieee" || cal["name"] == "workspace reservations") {
        url += `src=${cal.src}&color=%23${cal.color}&`
    }
});

let link = `https://calendar.google.com/calendar/embed?mode=WEEK&showTitle=0&showPrint=0&height=700&wkst=1&bgcolor=%23F5F5F5&${url}ctz=America/New_York;`;

document.getElementById("rov-calendar-content").innerHTML = '<iframe src="' + link + '" style="border-width:0" width="100%" height="700px" frameborder="0" scrolling="no"></iframe>';
