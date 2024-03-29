Vue.component('studentwinners-header',{
    props: ['year'],
    template: `
    <div>
        <div class="container-fluid pt-5 mt-5">
            <h1 class="display-3 fw-bold text-center">{{year}} Students of the Week</h1>
        </div>
        <div class="container-lg my-3 text-center">
            <div class="d-inline-flex align-items-center">
                <label class="display-5 mx-3" for="officerYear">Select Year:</label>
                <div class="dropdown" name="officerYear">
                    <button class="btn btn-ieee dropdown-toggle fs-4" type="button" id="officerYearDropdown" data-bs-toggle="dropdown" aria-expanded="false">{{year}}</button>
                    <ul class="dropdown-menu" aria-labelledby="officerYearDropdwon">
                        <li v-for="y in createYears()" v-bind:class="buttonClasses(y)" v-on:click="handleYearChange(y)">{{y}}</li>
                    </ul>
                </div>
            </div>
            <br><br>
            <p class="fs-2 text-center">
                IEEE Students of the Week are Purdue IEEE Members who have gone above and beyond
                in one particular committee. We recognize all their hard work and celebrate them
                for being extraordinary!
            </p>
        </div>
    </div>
    `,
    data: function(){
        return {
            startYear: 2019,
            maxYear: 2023,
        }
    },
    methods: {
        createYears: function() {
            return new Array(this.maxYear - this.startYear + 1).fill(this.startYear).map((n,i)=>n+i).reverse();
        },
        handleYearChange: function(year) {
            window.location.href=`/studentwinners/${year}.html`;
        },
        buttonClasses: function(year) {
            return {
              'dropdown-item':true,
              'active':(year==this.year)
            }
        }
    }
})


const vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    }
});
