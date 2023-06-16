const app = Vue.createApp({
    data() {
      return {
        musicDisks: [],
      };
    },
    methods: {
      requestDisks() {
        axios.get("http://localhost/php-dischi-json/server.php")
        .then((response) => (this.musicDisks = response.data));
      },
    },
    created() {
      this.requestDisks();
    },
});
app.mount("#app");