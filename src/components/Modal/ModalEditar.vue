<template>
    <div>
       <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
      >
       
        <v-card>
          <v-card-title class="text-h5">
            Editar
          </v-card-title>
          <v-divider></v-divider>
         <v-card-text
         class="mt-2">
          Informe o novo titulo.</v-card-text>

           <v-text-field
           class="px-3"
              label="Titulo"
              outlined
              v-model="titulo"
            >
            </v-text-field>
            <v-text-field
           class="px-3"
              label="Descrição"
              outlined
              v-model="descricao"
            >
            </v-text-field>

            <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Prazo"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="$emit('fechaModal')"
  
            >
             Cancelar
            </v-btn>
            <v-btn
            color="primary"
              text
              @click="handleEditar()"
            >
              Editar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- prazo -->
     
    </div>
  </template>
  
  <script>

    export default {
      props: ['tarefa'],
      data () {
        return {
          date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
          dialog: true,
          titulo: null,
          prazo: null,
          descricao: null,
          
        }
      },
      created(){
          this.titulo = this.tarefa.titulo
          //console.log("titulo:", this.titulo);
      },
      methods: {
        handleEditar() {
          let novaTarefa = {
            titulo: this.titulo,
            id: this.tarefa.id,
            prazo: this.date,
            descricao: this.descricao
          }
         
          if (this.$store.state.tarefas.fazer.includes(this.tarefa)){
            this.$store.commit('editaTarefa', novaTarefa);
          }
          else if (this.$store.state.tarefas.fazendo.includes(this.tarefa)){
            this.$store.commit('editaTarefaFazendo', novaTarefa);
          }
          else {
            this.$store.commit('editaTarefaFeito', novaTarefa);
          }
          
          this.$emit('fechaModal');

        }
      }
    }
  </script>
  
  <style>
  
  </style>