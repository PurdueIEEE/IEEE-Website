// TODO make this actually use Vue like everything else - that is a future task after F21 callout

let date = new Date();
let date_i = new Date();

let info_sessions = [
    {date:{month:8,day:30},time:{hour:19,minute:30},committee:'Purdue IEEE',location:'BHEE 129'},
    // {date:{month:1,day:18},time:{hour:18,minute:30},committee:'Cornerstones',location:'BHEE 129'},
    // {date:{month:1,day:19},time:{hour:18,minute:00},committee:'EMBS',location:'BHEE 226'},
    // {date:{month:1,day:19},time:{hour:19,minute:30},committee:'Computer Society',location:'BHEE 224'},
    {date:{month:9,day:6},time:{hour:18,minute:0},committee:'ROV',location:'POTR 234'},
    {date:{month:9,day:6},time:{hour:18,minute:30},committee:'Racing',location:'PHYS 114'},
    // {date:{month:1,day:23},time:{hour:18,minute:30},committee:'MTT-S',location:'BHEE 224'},
    // {date:{month:1,day:28},time:{hour:11,minute:30},committee:'Software Saturdays',location:'WALC 1018'},
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
