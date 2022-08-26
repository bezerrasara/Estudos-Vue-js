<template>
  <div>
    <v-col
          cols="12"
          
        >
          <v-text-field
            v-model="campoInput"
            label="Adicionar tarefa"
            outlined
            clearable
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col>
    <v-list
      flat
      subheader
    >

      <v-list-item-group
       
        multiple
        active-class=""
      >


<!--No video ele remove esses outros list-item pois trabalha somente com um, 
dai ele cria um componente chamado Tarefa e cola la. 
então não precisa criar aqui varias lis-item, basta criar um componente e adicionar apenas um list-item e se quiser replicar 
basta chamar aqui da seguinte forma: <Tarefa />


        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
             
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>-->
      <div
        v-for="tarefa, index in tarefas"
        :key="index "
        >
          <Tarefa
          :tarefa="tarefa" />
        
        </div>
      <button></button>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>

import Tarefa from '../components/tarefas/Tarefa.vue'
  export default {
    name: 'Home',
    components: {
      Tarefa
     
    },
    data(){
      return { 
        
        campoInput:null,
        tarefas: [
          {titulo: "Ir ao mercado", concluido: false},
          {titulo: "Comprar ração", concluido: false},
        
        ]
      }},

    methods: {
      handleAddTarefa(){
        if(this.campoInput)
        this.tarefas.push({
          
          titulo:this.campoInput,
          concluido: false
        })
        this.campoInput = null;
        
  },
      
  


   }
  }
</script>
