var app = new Vue ({
    el: '#root',
    data: {
        dateNow: moment().format(),
        myName: 'Danilo',
        myIndex: 0,
        reply: "",
        findUser: "",
        contacts: [
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        hide: true
                    },
                    {
                        eraser: false,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        eraser: false,
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        eraser: false,
                        date: '20/03/2020 17:30:55',
                        message: 'Mi piacerebbe ma devo andare a fare laspesa.',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        hide: true
                    },

                    {
                        eraser: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        eraser: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        eraser: false,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
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
                        hide: true
                    },

                    {
                        eraser: false,
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        eraser: false,
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        eraser: false,
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
                        hide: true
                    },

                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        eraser: false,
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        eraser: false,
                        status: 'received'
                    }
                ]
            }
        ]
    },
    methods: {
        takeIndex(index) {
            this.myIndex = index;
        },
        insert(myIndex) {
            this.contacts[myIndex].messages.push({message : this.reply, status : 'sent', eraser: false, date: moment().format()})
            this.reply = "";

            var x = setTimeout(function() {
                app.contacts[myIndex].messages.push({message : 'ok', status : 'received', eraser: false, date: moment().format()});
            },1000);
        },
        sure(item) {
            if (item.eraser) {
                app.contacts.forEach((user, i) => {
                    user.messages.forEach((msg, i) => {
                        msg.eraser = false;
                    });
                });

            }else {
                app.contacts.forEach((user, i) => {
                    user.messages.forEach((msg, i) => {
                        msg.eraser = false;
                    });
                });

                item.eraser = true;
            }
        },
        elimina(myIndex,index) {
            app.contacts[myIndex].messages.splice(index,1);
        }


    },
    filters: {
        moment1: function (master) {
            if (master) {
                return moment(master , 'DD-MM-YYYY, hh:mm:ss').format('DD-MMM');

            }
        },
        moment2: function (master) {
            if (master) {
                return moment(master , 'DD-MM-YYYY, hh:mm:ss').format('hh:mm a');

            }
        }

    }












});
