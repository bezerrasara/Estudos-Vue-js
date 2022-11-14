<template>
    <div>
       <v-list-item>
              <v-list-item-content>
                {{tarefa.titulo}}
              </v-list-item-content>
             
               <v-list-item-action>
         
            <Tarefamenu 
            :tarefa="tarefa"
            />
          </v-list-item-action>
          </v-list-item>
          <div>
              <v-chip 
                small
                class="mx-2 "
                color="blue darken-4"
                text-color="white"
              ><v-icon class="ma-2" small>mdi-clock</v-icon> 
               <h5 >{{tarefa.prazo}}</h5>
              </v-chip>
                 </div>
          <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Detalhes
      </v-btn>

      <v-spacer></v-spacer>
      
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{tarefa.descricao}}
          <br>
          Prazo: {{tarefa.prazo}}
          <br>
          Nível de prioridade: {{tarefa.prioridade}}
        </v-card-text>
      </div>
    </v-expand-transition> 
    </div>
  </template>
  
  <script>
import AdicionaImagem from '../adicionaImagem.vue';
  import Tarefamenu from './Tarefamenu.vue'; 
  
  export default {
    components: {Tarefamenu, AdicionaImagem}, 
      props:['tarefa'],
      data() {
        return{
          show: false,
          }
        },

      methods: {
        handleRemoveTarefa(id) {
          this.$store.commit('removeTarefa', id)
          },
        },

        mounted() {
          return this.$store.commit('buscaTarefas')
  },
      }
     
  
  </script>
  
  <style>
  
  </style>