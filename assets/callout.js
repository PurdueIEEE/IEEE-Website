let date = new Date();
let date_i = new Date();

let info_sessions = [
    {
        date: {
            month: 7,
            day: 1,
        },
        time: {
            hour: 7,
            minute: 0,
        },
        committee:'General',
        location:'Discord',
    },
    {
        date: {
            month: 7,
            day: 31,
        },
        time: {
            hour: 8,
            minute: 15,
        },
        committee:'Computer Society',
        location:'EE 270',
    }
];

let table = document.getElementById('infosessions_tbody');
let row = '';

for (session of info_sessions) {
    // TODO add timezone support
    date_i.setHours(session.time.hour+12, session.time.minute, 0, 0);
    date_i.setMonth(session.date.month-1, session.date.day);
    row = `<tr ${ date <= date_i ? '' : 'class="text-decoration-line-through"'}>`;
    row += `<th scope="row">${session.date.month}/${session.date.day.toString().padStart(2, "0")}</th>`;
    row += `<td>${session.committee}</td>`;
    row += `<td>${session.time.hour}:${session.time.minute.toString().padStart(2, "0")} PM</td>`;
    row += `<td>${session.location}</td>`;
    row += '</tr>';
    table.innerHTML += row;
}
