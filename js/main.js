console.log("Ok Vue", Vue);

const app = Vue.createApp({
    data() {
        return {
            message: "Hello Vue!"
        }
    }
});

app.mount("#root");