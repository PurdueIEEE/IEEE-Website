// TODO make this actually use Vue like everything else - that is a future task after F21 callout

let date = new Date();
let date_i = new Date();

let info_sessions = [
    {date:{month: 9,day: 1},time:{hour: 18,minute: 30},committee:'Purdue IEEE',location:'PHYS 112'},
    {date:{month: 9,day: 2},time:{hour: 18,minute: 30},committee:'Purdue IEEE',location:'PHYS 112'},
    {date:{month: 9,day: 5},time:{hour: 16,minute: 0},committee:'Learning',location:'<a href="https://discord.gg/kZNkKXM">IEEE Q&amp;A Discord [Learning]</a>'},
    {date:{month: 9,day: 8},time:{hour: 18,minute: 0},committee:'ROV',location:'POTR 234'},
    {date:{month: 9,day: 8},time:{hour: 18,minute: 30},committee:'Aerial Robotics',location:'ARMS 1010'},
    {date:{month: 9,day: 8},time:{hour: 18,minute: 30},committee:'Racing',location:'LWSN B151'},
    {date:{month: 9,day: 9},time:{hour: 18,minute: 0},committee:'Social',location:'PHYS 112'},
    {date:{month: 9,day: 9},time:{hour: 18,minute: 0},committee:'Industrial Relations',location:'PHYS 112'},
    {date:{month: 9,day: 9},time:{hour: 18,minute: 0},committee:'Growth &amp; Engagement',location:'PHYS 112'},
    {date:{month: 9,day: 9},time:{hour: 18,minute: 0},committee:'Computer Society',location:'EE 117'},
    {date:{month: 9,day: 9},time:{hour: 18,minute: 0},committee:'EMBS',location:'EE 222'},
    {date:{month: 9,day: 9},time:{hour: 19,minute: 0},committee:'MTT-S',location:'<a href="https://discord.gg/kZNkKXM">IEEE Q&amp;A Discord [MTT-S]</a>'},
    {date:{month: 9,day: 11},time:{hour: 15,minute: 30},committee:'Software Saturdays',location:'<a href="https://purdue-edu.zoom.us/j/99675779158?pwd=Vklib29nS1BCYVpXaG5wMkRlUnpTQT09">WALC 1087 and Zoom</a>'},
]

let table = document.getElementById('infosessions_tbody');
let row = '';
let prevdate = '';

for (session of info_sessions) {
    // TODO add timezone support
    date_i.setHours(session.time.hour+12, session.time.minute, 0, 0);
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
