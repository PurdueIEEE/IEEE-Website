// TODO make this actually use Vue like everything else - that is a future task after F21 callout

let date = new Date();
let date_i = new Date();

let info_sessions = [
    {date:{month:1,day:19},time:{hour:18,minute:30},committee:'Purdue IEEE',location:'BHEE 129'},
    {date:{month:1,day:24},time:{hour:18,minute:00},committee:'Aerial Robotics',location:'ARMS 1010'},
    {date:{month:1,day:25},time:{hour:18,minute:30},committee:'EMBS',location:'BHEE 224'},
    {date:{month:1,day:26},time:{hour:18,minute:30},committee:'Racing',location:'Discord'},
    {date:{month:1,day:26},time:{hour:18,minute:30},committee:'ROV',location:'POTR 234'},
    {date:{month:1,day:26},time:{hour:19,minute:00},committee:'MTT-S',location:'<a href="https://discord.gg/kZNkKXM">IEEE Q&amp;A Discord [MTT-S]</a>'},
    {date:{month:1,day:27},time:{hour:20,minute:00},committee:'Computer Society',location:'BHEE 222'},
    {date:{month:1,day:29},time:{hour:15,minute:30},committee:'Software Saturdays',location:'<a href="https://purdue-edu.zoom.us/j/98093022022?pwd=OUpsUEg5YUVzeEFHUmluSXhEd3VkQT09">HAMP 1144 and Zoom</a>'},
    /*{date:{month: 9,day: 14},time:{hour: 18,minute: 30},committee:'Learning',location:'PHYS 201'},
    {date:{month: 9,day: 14},time:{hour: 18,minute: 30},committee:'Social',location:'PHYS 201'},
    {date:{month: 9,day: 14},time:{hour: 18,minute: 30},committee:'Industrial Relations',location:'PHYS 201'},
    {date:{month: 9,day: 14},time:{hour: 18,minute: 30},committee:'Growth &amp; Engagement',location:'PHYS 201'},*/
]

let table = document.getElementById('infosessions_tbody');
let row = '';
let prevdate = '';

for (session of info_sessions) {
    // TODO add timezone support
    date_i.setHours(session.time.hour, session.time.minute, 0, 0);
    date_i.setMonth(session.date.month-1, session.date.day);
    row = `<tr ${ date <= date_i ? '' : 'class="text-decoration-line-through"'}>`;

    if (prevdate == `${session.date.month}/${session.date.day.toString().padStart(2, "0")}`) {
        row += `<th scope="row"></th>`;
    } else {
        prevdate = `${session.date.month}/${session.date.day.toString().padStart(2, "0")}`;
        row += `<th scope="row">${prevdate}</th>`;
    }

    row += `<td>${session.committee}</td>`;
    row += `<td>${session.time.hour > 12 ? session.time.hour - 12 : session.time.hour}:${session.time.minute.toString().padStart(2, "0")} ${session.time.hour > 12 ? 'PM' : 'AM'}</td>`;
    row += `<td>${session.location}</td>`;
    row += '</tr>';
    table.innerHTML += row;
}
