console.log("Ok Vue", Vue);

const app = Vue.createApp({
    data() {
        return {
            message: "Hello Vue!",
            image: "https://picsum.photos/700/400"
        }
    }
});

app.mount("#root");