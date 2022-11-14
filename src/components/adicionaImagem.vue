<template>
  <div>
    <v-card v-if="$store.state.tarefas.fazer.imagem!=''">        
    <img :src="`${$store.state.tarefas.fazer.imagem}`"></v-card> 
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>