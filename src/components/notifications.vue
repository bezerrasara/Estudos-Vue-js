<template>
  <div>
 {{this.$store.state.notifications[0].text}}
  </div>
</template>

<script>
export default {
data() {
  return {
    notification: ""

  }
},

computed: {
  },
 
methods: {
  addNotification(){
  const notification = {
        title: "Notificação1",
        text: "jhsdsahdasdjasd"
      }
      this.$store.commit('addNotification' ,notification);
      this.$store.commit('buscaNotification');
  },
  prazoNote(){
  const dateAtual= (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  const dif = new Date(this.$store.state.prazo).getTime()- new Date(dateAtual).getTime()
  var diffSegundos = dif / 1000;
  var diffMinutos = diffSegundos / 60;
  var diffHoras = diffMinutos / 60;
  var diffDias = diffHoras / 24;

  // var diffMeses = diffDias / 30;
  if(diffDias<=5) {
    this.notification = "Sua tarefa expira em " + diffDias + " dias"
    const note = {
      id: new Date().getTime(),
      text: this.notification
    }
  
  this.$store.state.notification = this.notification
  this.$store.commit('addNotification', note)
  this.$store.commit('buscaNotification')
  // this.$store.state.notifications.push(this.notification)
}
  },
},
mounted() {
 this.prazoNote()

}

}
  
</script>