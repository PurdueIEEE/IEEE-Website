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
      },
    }
});