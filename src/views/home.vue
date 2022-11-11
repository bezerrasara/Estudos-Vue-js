<template>
  <div >
    
<v-toolbar
    color="purple"
    dark
  >
    <v-toolbar-title>Gerenciador de tarefas</v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

    <span class="subheading">Home</span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>
        News
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn @click="$router.replace({ name: 'Login' })" text>
        Login
      </v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>
        Register
      </v-btn>

    </v-toolbar-items>

    
  </v-toolbar>

<div class="mt-8 mb-4 text-center ">
    <v-list-item dark  >
        <v-list-item-title>
   <h3> Uma poderosa ferramenta de produtividade</h3></v-list-item-title>
   
    </v-list-item>
    <v-list-item-content >
    <h4 class="text-center">Simples e flexível. Bastam quadros,<br> listas e cartões para obter uma visualização clara <br> do que precisa ser feito</h4>
   </v-list-item-content>
</div>
<v-spacer></v-spacer>
<v-divider></v-divider>
    <home-tutorial />


  </div>
</template>

<script>
import homeTutorial from '../components/homeTutorial.vue'
export default {
  components: { homeTutorial },
}
</script>

<style>

</style>