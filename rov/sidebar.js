let content = `<div class="pt-5 mt-5 container-lg">
    <div class="row">
        <div class="col-md-3">
            <ul class="list-group list-group-flush">
                <a class="list-group-item" id="rov-main-sidelink" href="/rov/">Home</a>
                <a class="list-group-item" id="rov-updates-sidelink" href="/rov/updates/">Updates</a>
                <a class="list-group-item" id="rov-history-sidelink" href="/rov/history/">History</a>
                <a class="list-group-item" id="rov-sponsors-sidelink" href="/rov/sponsors/">Sponsors</a>
                <a class="list-group-item" id="rov-join-sidelink" href="/rov/join/">Join ROV</a>
                <a class="list-group-item" id="rov-calendar-sidelink" href="/rov/calendar/">Calendar</a>
            </ul>
        </div>
        <div class="col-md-9 text-center">
            <img src="/rov/images/rov_logo.jpg" alt="ROV Logo" width="300" height="auto" >
            <p class="display-4 fw-bold">Remotely Operated underwater Vehicle (ROV) Team</p>
        </div>
    </div>
</div>`

document.getElementById("insert-rov-sidebar").innerHTML = content;
