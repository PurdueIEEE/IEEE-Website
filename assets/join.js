const vm = new Vue({
    el: '#app',
    data: {
      mailinglistEmail: "",
      mailinglistSubmit: false,
    },
    methods: {
      submitEmail: function() {
        // This will need to be added...
        lists = ['ieee-announcements']

        fetch('https://purdueieee.org/DirectoryServices/directories.php', {
          method: 'post',
          mode: 'no-cors',
          headers: new Headers(
            {
              'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }),
          body: encodeURI(`email=${this.mailinglistEmail}&list[]=ieee-announcements`).replace('@', '%40'),
        })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })

        this.mailinglistSubmit=true;
      }
    }
});