new Vue({
    el: '#app',
    data: {
        history: []
    },
    created() {
        this.loadHistory();
    },
    methods: {
        loadHistory() {
            this.history = JSON.parse(localStorage.getItem('movieHistory')) || [];
        }
    }
});
