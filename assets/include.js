// Header and Navbar
Vue.component('ieee-header', {
    mounted: function() {
        document.title = `${this.page} | Purdue IEEE`;
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
                    <li><a class="dropdown-item" href="/awardwinners">Annual Award Winners</a></li>
                    <li><a class="dropdown-item" href="#">Students of the Week</a></li>
                    <li><a class="dropdown-item" href="/constitution">Constitution</a></li>
                </ul>
              </li>
              <!-- /navbarlinks_about -->
               <li class="nav-item">
                <a class="nav-link" href="#">Calender</a>
              </li>
              <!-- navbarlinks_committees -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarlinks_committees" role="button" data-bs-toggle="dropdown" aria-expanded="false">Committees</a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarlinks_committees">
                    <li><div class="dropdown-header py-1">Cornerstone</div></li>
                    <li><a class="dropdown-item" href="#">Learning</a></li>
                    <li><a class="dropdown-item" href="#">Industrial Relations</a></li>
                    <li><a class="dropdown-item" href="#">Social</a></li>
                    <li><a class="dropdown-item" href="#">Growth & Engagement</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><div class="dropdown-header py-1">Technical</div></li>
                    <li><a class="dropdown-item" href="#">Aerial Robotics</a></li>
                    <li><a class="dropdown-item" href="#">Computer Society</a></li>
                    <li><a class="dropdown-item" href="#">EMBS</a></li>
                    <li><a class="dropdown-item" href="#">MTT-S</a></li>
                    <li><a class="dropdown-item" href="#">Racing</a></li>
                    <li><a class="dropdown-item" href="#">ROV</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><div class="dropdown-header py-1">Events</div></li>
                    <li><a class="dropdown-item" href="#">Software Saturdays</a></li>
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
        <div class="container-fluid mt-3 text-center py-3">
            <div class="row justify-content-center">
                <div class="col-md-6">
                <a href="https://twitter.com/purdueieee" target="_blank" class="link-dark"><i class="bi bi-twitter fs-1 mx-2" width="50"></i></a>
                <a href="https://www.facebook.com/groups/purdueieee/" target="_blank" class="link-dark"><i class="bi bi-facebook fs-1 mx-2"></i></a>
                <a href="https://www.youtube.com/channel/UCJwFwlur0e2fgwf97eV7INw" target="_blank" class="link-dark"><i class="bi bi-youtube fs-1 mx-2"></i></a>
                <a href="https://discord.gg/kZNkKXM" target="_blank" class="link-dark"><i class="bi bi-discord fs-1 mx-2"></i></a>
                <a href="https://purdueieee.slack.com/signup" target="_blank" class="link-dark"><i class="bi bi-slack fs-1 mx-2"></i></a>
                </div>
            </div>
            <p class="text-center fs-5">Copyright © {{this.year}} Purdue IEEE</p>
        </div>
        <!-- /footer -->
    </footer>
    `
});

const vm = new Vue({
    el: '#app',
    data: {
      year: 2021,
      maxYear: 2021,
      startYear: 2008,
      elected: [],
      cornerstone: [],
      technical: [],
    },
    methods: {
      // Literally all of these are just used for the officers page
      handleInit: async function() {
        let response = await fetch(`/officers/${this.year}.json`);
        let responseJSON = await response.json();
        this.elected = responseJSON.elected;
        this.cornerstone = responseJSON.cornerstone;
        this.technical = responseJSON.technical;
        document.title = `${this.year} Officers | Purdue IEEE`;
      },
      handleYearChange: async function(year) {
        this.year = year;
        await this.handleInit();
      },
      createYears: function() {
        return new Array(this.maxYear - this.startYear + 1).fill(this.startYear).map((n,i)=>n+i);
      },
      buttonClasses: function(year) {
        return {
          'dropdown-item':true,
          'active':(year==this.year)
        }
      }
    }
});