// Header and Navbar
Vue.component('ieee-header', {
    mounted: function() {
        document.title = this.page != '' ? `${this.page} | Purdue IEEE` : "Purdue IEEE";
        if(document.title == 'Officers | Purdue IEEE') this.$emit('init'); // This is SUCH A SHITTY way to let the root element know it is the officers page
    },
    props: ['head', 'page'],
    template:`
    <!-- navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-lg">
          <a class="navbar-brand d-flex me-auto w-50" href="/"><img class="me-2" src="/images/IEEE-Kite.svg" alt="" width="30" height="30"> <span class="fw-bold">{{head}}</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarlink" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- navbarlinks -->
          <div class="collapse navbar-collapse" id="navbarlink">
            <ul class="navbar-nav ms-auto mb-2">
                <!-- navbarlinks_about -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarlinks_about" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarlinks_about">
                    <li><a class="dropdown-item" href="/about">About IEEE</a></li>
                    <li><a class="dropdown-item" href="/officers">Officers</a></li>
                    <li><a class="dropdown-item" href="/awardees">Annual Award Winners</a></li>
                    <li><a class="dropdown-item" href="/studentwinners">Students of the Week</a></li>
                    <li><a class="dropdown-item" href="/constitution">Constitution</a></li>
                </ul>
              </li>
              <!-- /navbarlinks_about -->
               <li class="nav-item">
                <a class="nav-link" href="/calendar">Calendar</a>
              </li>
              <!-- navbarlinks_committees -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarlinks_committees" role="button" data-bs-toggle="dropdown" aria-expanded="false">Committees</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarlinks_committees">
                    <li><div class="dropdown-header py-1">Cornerstone</div></li>
                    <li><a class="dropdown-item" href="/learning">Learning</a></li>
                    <li><a class="dropdown-item" href="/social">Social</a></li>
                    <li><a class="dropdown-item" href="/growth">Growth & Engagement</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><div class="dropdown-header py-1">Technical</div></li>
                    <li><a class="dropdown-item" href="/part">Aerial Robotics</a></li>
                    <li><a class="dropdown-item" href="/csociety">Computer Society</a></li>
                    <li><a class="dropdown-item" href="/embs">EMBS</a></li>
                    <li><a class="dropdown-item" href="/mtt-s">MTT-S</a></li>
                    <li><a class="dropdown-item" href="/racing">Racing</a></li>
                    <li><a class="dropdown-item" href="/rov">ROV</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><div class="dropdown-header py-1">Events</div></li>
                    <li><a class="dropdown-item" href="/software">Software Saturdays</a></li>
                </ul>
              </li>
              <!-- /navbarlinks_committees -->
              <li class="nav-item">
                <a class="nav-link" href="/join">Join</a>
              </li>
            </ul>
          </div>
          <!-- /navbarlinks -->
        </div>
      </nav>
      <!-- /navbar -->
    `
});

Vue.component('ieee-footer',{
    data: function() {
        return {
            year: (new Date()).getFullYear(),
        }
    },
    props: [],
    template: `
    <footer>
        <!-- footer -->
        <div class="container-fluid text-center py-3">
            <div class="row justify-content-center">
                <div class="col-md-6">
                <a href="https://twitter.com/purdueieee" target="_blank" class="link-dark"><i class="bi bi-twitter fs-1 mx-2" width="50"></i></a>
                <!-- <a href="https://www.facebook.com/groups/purdueieee/" target="_blank" class="link-dark"><i class="bi bi-facebook fs-1 mx-2"></i></a> -->
                <a href="https://www.youtube.com/channel/UCJwFwlur0e2fgwf97eV7INw" target="_blank" class="link-dark"><i class="bi bi-youtube fs-1 mx-2"></i></a>
                <a href="https://www.instagram.com/purdueieee" target="_blank" class="link-dark"><i class="bi bi-instagram fs-1 mx-2"></i></a>
                <a href="https://purdueieee.slack.com/signup" target="_blank" class="link-dark"><i class="bi bi-slack fs-1 mx-2"></i></a>
                <a href="https://github.com/PurdueIEEE" target="_blank" class="link-dark"><i class="bi bi-github fs-1 mx-2"></i></a>
                </div>
            </div>
            <p class="text-center fs-5 my-0"><a href="https://github.com/PurdueIEEE/IEEE-Website" target="_blank" class="link-dark">View page on GitHub</a> |
            <a href="mailto:webmaster@purdueieee.org" target="_blank" class="link-dark">Email the webmaster</a></p>
            <p class="text-center fs-5 fw-bold">Copyright © {{this.year}} Purdue IEEE</p>
        </div>
        <!-- /footer -->
    </footer>
    `
});

// Google Analytics Tracker
// only send on actual deployment
if (location.hostname === "purdueieee.org") {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-66463204-1', 'auto');
  ga('send', 'pageview');
  console.log("GA logged");
}
