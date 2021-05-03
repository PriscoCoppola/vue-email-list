/*************************************
* EMAIL LIST
*************************************/

const root = new Vue({
    el: '#root',
    data: {
        email: [],
    },
    computed: {
        dataOk() {
            return this.email.length === 10 ? true : false;
        }
    },
    created() {
        this.randomMail();
    },
    methods: {
        randomMail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (mail) => {
                this.email.push(mail.data.response);
                })
            }
        },
    }
})