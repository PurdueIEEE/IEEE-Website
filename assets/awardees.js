Vue.component('awardees-header',{
    props: ['year'],
    template: `
    <div>
        <div class="container-fluid pt-5 mt-5">
            <h1 class="display-3 fw-bold text-center">{{year}} Annual Award Winners</h1>
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
        </div>
    </div>
    `,
    data: function(){
        return {
            startYear: 2017,
            maxYear: 2022,
        }
    },
    methods: {
        createYears: function() {
            return new Array(this.maxYear - this.startYear + 1).fill(this.startYear).map((n,i)=>n+i);
        },
        handleYearChange: function(year) {
            window.location.href=`/awardees/${year}.html`;
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
