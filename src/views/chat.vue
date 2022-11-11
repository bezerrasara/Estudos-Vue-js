<template>
  <div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

<!-- <template>
    <div>
       
<div class="container " height="800"> 
    <v-card class="mx-auto my-12" width="400" height="400" >
    <h3 class="green text-center">Mensagens</h3>
    <v-btn @click="clear">Limpar</v-btn>
    <div v-for="message, index in messages" :key="index">
        
            
        <v-card class="my-5 blue" width="200" height="30" >
            <v-avatar
            color="indigo"
            size="26"
            class="ml-0"
            
            >
            <v-img :src="`${$store.state.imagem}`"></v-img>
            </v-avatar>
      <b>
        {{ message.user }}
      </b>
      : {{ message.text }}
    </v-card>
    </div>
    
    <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="text"
            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
            :append-outer-icon="text ? 'mdi-send' : 'mdi-microphone'"
            :prepend-icon="icon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage()"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
 
   </v-card>
  </div>
  
</div>
</template>

<script>


const io = require('socket.io-client');
export default {
data() {
  return {
    marker: true,
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
    
  
    joined: false,
    currentUser: "",
    text: "",
    messages: [],
    socket: io('ws://localhost:3000', {
    transports: ['websocket',],
  })
    
    
};
  
},
computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },

methods: {
   toggleMarker () {
        this.marker = !this.marker
      },
  sendMessage() {
    this.addMessage();
    this.text = "";
    
  },
  changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
      clearMessage () {
        this.text = ''
      },
  clear(){
    this.$store.commit('clear')
    this.$store.commit('getMessages')
  },
  addMessage() {
     const message = { 
      id: new Date().getTime(),
      user: this.$store.state.usuario,
      text: this.text,
      avatar: this.$store.state.imagem
    }
   this.$store.commit('addMessages', message)
   this.socket.emit('message', message) 
   console.log(this.text)
    
   },
  
},
mounted(){
    this.socket.on('message', (msg) =>{
      if (this.$store.state.messages != null) {
         this.messages = this.$store.state.messages.concat(msg)
          }
          
      else {
        console.log('nenhuma mensagem!')
      }
      })
},

name: "ChatApp",
};
</script>

<style scoped>

.parent-container {

width: 100%;
height: 100%;
display: flex;
align-content: center;
justify-content: center;
position: fixed;
padding-top: 150px;
}

.name-container {
display: flex;
flex-direction: column;
width: 200px;
}

.user-name {
height: 30px;
font-size: 20px;
padding: 5px;
margin-bottom: 5px;
text-align: center;
font-weight: bold;
}

.join-button {
height: 30px;
font-size: 20px;

}

.text-input-container {

height: 80vh;
width: 50%; 

}


.text-message {
width: 50%;
position: absolute; 
bottom: 0px;
height: 70px;
padding: 10px;
box-sizing: border-box;

}
.btn {
width: 10%;
position: absolute;
bottom: 10px;
height: 50px;
right: 100px;
padding: 10px;
box-sizing: border-box;
}
</style> -->
