// TODO make this actually use Vue like everything else - that is a future task after F21 callout

let date = new Date();
let date_i = new Date();

let info_sessions = [
    {date:{month:8,day:30},time:{hour:18,minute:30},committee:'Purdue IEEE',location:'BHEE 129'},
    {date:{month:8,day:31},time:{hour:18,minute:30},committee:'Aerial Robotics (Session 1)',location:'ARMS B061'},
    {date:{month:8,day:31},time:{hour:18,minute:30},committee:'ROV',location:'POTR 234, EE 020'},
    {date:{month:9,day:01},time:{hour:18,minute:30},committee:'Aerial Robotics (Session 2)',location:'ARMS B071'},
    {date:{month:9,day:07},time:{hour:18,minute:30},committee:'EMBS',location:'BHEE 222'},
    {date:{month:9,day:08},time:{hour:19,minute:30},committee:'Computer Society',location:'BHEE 222'},
    /*{date:{month:8,day:26},time:{hour:18,minute:30},committee:'Racing',location:'<a href="https://discord.gg/qUmscXNQBU">IEEE Racing Discord</a>'},
    {date:{month:8,day:26},time:{hour:19,minute:00},committee:'MTT-S',location:'<a href="https://discord.gg/kZNkKXM">IEEE Q&amp;A Discord [MTT-S]</a>'},
    {date:{month:8,day:29},time:{hour:15,minute:30},committee:'Software Saturdays',location:'<a href="https://purdue-edu.zoom.us/j/98093022022?pwd=OUpsUEg5YUVzeEFHUmluSXhEd3VkQT09">HAMP 1144 and Zoom</a>'},*/
]

let table = document.getElementById('infosessions_tbody');
let row = '';
let prevdate = '';

for (session of info_sessions) {
    // TODO add timezone support
    date_i.setHours(session.time.hour, session.time.minute, 0, 0);
    date_i.setMonth(session.date.month-1, session.date.day);
    row = `<tr ${ date <= date_i ? '' : 'class="text-decoration-line-through"'}>`;

    prevdate = `${session.date.month}/${session.date.day.toString().padStart(2, "0")}`;

    row += `<th scope="row">${prevdate}</th>`;
    row += `<td>${session.committee}</td>`;
    row += `<td>${session.time.hour > 12 ? session.time.hour - 12 : session.time.hour}:${session.time.minute.toString().padStart(2, "0")} ${session.time.hour > 12 ? 'PM' : 'AM'}</td>`;
    row += `<td>${session.location}</td>`;
    row += '</tr>';
    table.innerHTML += row;
}
