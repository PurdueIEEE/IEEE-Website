const vm = new Vue({
    el: '#app',
    data: {
      mailinglistEmail: "",
      mailinglistSubmitGood: false,
      mailinglistSubmitGoodMsg: "",
      mailinglistSubmitFail: false,
      mailinglistSubmitFailMsg: "",
    },
    methods: {
      submitEmail: function() {
        lists = ['ieee-announcements']

        // CORS sucks and this may break at any time...
        fetch('https://purdueieee.org/DirectoryServices/directories.php', {
          method: 'post',
          headers: new Headers({'content-type': 'application/x-www-form-urlencoded; charset=UTF-8','Accept': '*/*',}),
          body: encodeURI(`email=${this.mailinglistEmail}&list[]=ieee-announcements`).replace('@', '%40'), // properly encode form data
        })
        .then((response) => {
          return response.text(); // Endpoint returns HTML
        })
        .then((data) => {
          // We are ignoring the HTML returned by the site but this can be changed 
          //   in the ~~future~~ if we reimplement the other lists besides IEEE-A
          this.mailinglistSubmitGoodMsg = "You have been subscribed to IEEE-Announcements!\nCheck your email to confirm.";
          this.mailinglistSubmitGood = true;
        })
        .catch((error) => {
          console.log(error);
          this.mailinglistSubmitFailMsg = "Error submitting form: please contact webmaster!";
          this.mailinglistSubmitFail = true;
        })
      }
    }
});