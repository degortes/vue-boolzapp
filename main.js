var app = new Vue ({
    el: '#root',
    data: {
        scrolling: '',
        isClicked: false,
        msgIndex: '',
        myName: 'Danilo',
        myIndex: 0,
        reply: '',
        findUser: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 17:30:55',
                        message: 'Mi piacerebbe ma devo andare a fare laspesa.',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 10:25:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Giulia',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/02/2020 18:30:55',
                        message: 'Hai fatto commit e pushato??',
                        status: 'sent',
                    },
                    {
                        date: '10/02/2020 18:50:00',
                        message: 'Ricordati di farlo di continuo',
                        status: 'sent'
                    },
                    {
                        date: '10/02/2020 19:15:22',
                        message: 'Tranquillo!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Alessandro',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '20/04/2020 19:30:00',
                        message: 'Hai sentito la nuova canzone di Vasco??',
                        status: 'sent'
                    },
                    {
                        date: '20/04/2020 19:32:55',
                        message: 'No guarda, sto già male di stomaco.. non vorrei il colpo di grazia',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 19:35:55',
                        message: 'Esagerato.. ',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Andrea',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ma quando finisce questa cavolo di pandemia?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Se tu e gli altri negazionisti continuate a dar retta alle fake news, beh.. per sempre',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: '#Noncielodicono!! sei solo servo del sistema.. Da quale multinazionale sei stipendiato??' ,
                        status: 'sent'
                    }
                ]
            }
        ]
    },
    methods: {
        takeIndex(index) {
            this.isClicked = false;
            this.myIndex = index;
            let yourmessage = setTimeout(function () {
                app.scrollToEnd();
            }, 1);

        },
        takemsgIndex(index) {
            this.msgIndex = index;
            this.isClicked = !this.isClicked;
        },
        insert() {

            if (this.reply.trim() != '') {
                this.contacts[app.myIndex].messages.push({message : this.reply, status : 'sent',  date: moment().format('DD-MM-YYYY, HH:mm:ss a')})
                this.reply = "";
                let mymessage = setTimeout(function () {
                    app.scrollToEnd();
                }, 1);


                let x = setTimeout(function() {
                    app.contacts[app.myIndex].messages.push({message : 'ok', status : 'received',  date: moment().format('DD-MM-YYYY, HH:mm:ss a')});

                    let yourmessage = setTimeout(function () {
                        app.scrollToEnd();
                    }, 1);

                },1000);
            }

        },
        scrollToEnd() {
            app.scrolling = this.$el.querySelector("#chat");
            app.scrolling.scrollTop = app.scrolling.scrollHeight;
        },
        del() {
            this.isClicked = false;

            if (this.contacts[app.myIndex].messages.length == 1) {
                let replace = app.contacts[app.myIndex].messages[0]
                replace.message = '';
                replace.date = '';
                replace.status = '';
            }else {
                this.$delete(this.contacts[app.myIndex].messages, app.msgIndex);

            }
        }
    },
    filters: {
        moment1: function (master) {
            if (master) {
                return moment(master , 'DD-MM-YYYY, HH:mm:ss').format('DD-MMM');

            }
        },
        moment2: function (master) {
            if (master) {
                return moment(master , 'DD-MM-YYYY, HH:mm:ss').format('HH:mm ');

            }
        }
    }











});
