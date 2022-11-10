<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
          fab 
          color="primary"
          small
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark >mdi-plus</v-icon>
        </v-btn>
      </template>
    

      <v-card 
      class="mx-auto"
      
     >
     <v-card-title>Nova tarefa</v-card-title>
        <!-- titulo -->
     <v-card-text>
          <v-text-field
            ref="title"
            v-model="title"
            label="Titulo"
            placeholder="Estudar"
            required
          ></v-text-field>

        <!-- descrição -->
          <v-text-field
            ref="descricao"
            v-model="descricao"
            
            label="Descrição"
            placeholder="Estudar capitulos 3 e 4"
            required
          ></v-text-field>

         <!-- prazo -->
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
            label="Picker in menu"
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

      <!-- prioridade -->
          <v-select
            ref="prioridade"
            v-model="prioridade"
            :items="prioridades"
            label="Nível de prioridade"
            placeholder="Select..."
            required
          ></v-select>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn 
          @click="dialog = false"
          text>
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  

</template>

<script>

export default {
  
  
data: () => ({
  date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
  dialog: false,
  prioridades: [1,2,3,4,5,6,7,8,9,10],
    prioridade: '',
    errorMessages: '',
    title: null,
    descricao: null,
    prazo: null,
    formHasErrors: false,
}),
computed: {
      form () {
        return {
        
          title: this.title,
          descricao: this.descricao,
          prazo: this.date,
          prioridades: this.prioridades,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.title
          ? `Hey! I'm required`
          : ''

        return true
      },
      
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit(){
        const tarefa = { 
          id: new Date().getTime(),
          titulo: this.title,
          descricao: this.descricao,
          prazo: this.date,
          prioridade: this.prioridade,
        }

        this.$store.dispatch('adicionaTarefa', tarefa)
        this.$store.state.prazo = this.date
        
        this.dialog=false
        this.title = ""
        this.descricao = ""
        this.prazo = ""
        this.prioridade = ""
        
  },
    },

}
</script>