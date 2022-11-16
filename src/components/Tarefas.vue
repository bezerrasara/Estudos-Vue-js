<template>
    <div 
   v-if="isLoggedIn" >
   <v-container fluid >
      <v-row 
      justify="center"
      >
        <v-col lg="3"
        cols="12" 
        sm="3"
        
        backgound="grey">
          
        <v-card 
          rounded="lg" 
          color="grey lighten-3"
          
          min-height="auto"
          >
            <h3 class="text-center grey">Fazer ✍</h3>
            <draggable class="draggable-list" 
            :list="$store.state.tarefas.fazer" 
            group="my-group">
                <v-card v-for="element in $store.state.tarefas.fazer" 
              :key="element.id"
                class="mx-auto mt-2" 
                 elevation="5"
                color="red darken-2" 
                dark>
               
             <Tarefa 
                  :tarefa="element" 
                  />
                   
                </v-card>
              <v-spacer></v-spacer>
            </draggable>
            <v-divider></v-divider>
            <div class="text-center mt-2 pa-2"> 
              <Input />
            </div>
          </v-card>
        </v-col>

        <v-col 
        lg="3"
        cols="12" 
        sm="3"
        class="mx-1"
        >
          <v-card 
          color="grey lighten-3"
          min-height="auto" 
          rounded="lg">

            <h3 class="text-center grey">Fazendo 🗓</h3>
            <draggable 
            class="draggable-list" 
            :list="fazendo" 
            group="my-group">
                <v-card  v-for="element in fazendo" 
              :key="element.id"
                class="mx-auto mt-2" 
                elevation="5"
                color="green" 
                dark>
                  <Tarefa 
                  :tarefa="element" />
                </v-card>
            </draggable>
            <v-divider></v-divider>
            <div class="text-center mt-2 pa-2">Soltar card aqui</div>
          </v-card>
        </v-col>

        <v-col 
        cols="12" 
        sm="3"
        lg="3"
        >
          <v-card 
          color="grey lighten-3"
          rounded="lg" 
          
          min-height="auto">

            <h3 class="text-center grey">Feito ✅</h3>
            <draggable 
            class="draggable-list" 
            :list="feito" 
            group="my-group">
              
                <v-card v-for="element in feito" 
              :key="element.id"
                class="mx-auto mt-2" 
                elevation="5"
                color="purple" dark>
                  <Tarefa 
                  :tarefa="element" />
                </v-card>
            </draggable>
            <v-divider></v-divider>
            <div class="text-center mt-2 pa-2">Soltar card aqui</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import Input from "./Input.vue";
import Tarefa from "./tarefas/Tarefa.vue";

export default {
  props: ['tarefa'],
  components: {
    draggable,
    Tarefa,
    Input
},
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    fazerLogin() {
      this.$router.replace({ name: 'Login' })
      
    },
  //   prazoNote(){
  // const dateAtual= (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  // const dif = new Date(this.$store.state.prazo).getTime()- new Date(dateAtual).getTime()
  // var diffSegundos = dif / 1000;
  // var diffMinutos = diffSegundos / 60;
  // var diffHoras = diffMinutos / 60;
  // var diffDias = diffHoras / 24;
  // }, 

  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    fazendo() {
      return this.$store.state.tarefas.fazendo
    },
    feito() {
      return this.$store.state.tarefas.feito
    },
   
  },
  created(){
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const data = today.toDateString(); // "Sun Jan 30 2022"
    console.log(data);
   
  }
 
};
</script>
<style scoped>
.draggable-list {
  background: rgb(225, 220, 220);
  color: rgb(226, 217, 217); 
  border: 5px solid;
  display: block ;
  height: auto;


}

.list-item {

  margin: 10px;
  padding: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: green;
  display: inline-block;
}


</style>