<template>
  <div class="text-center mt-4">
    <input type="file" accept="image/*" @change=uploadImage>
    <v-card class="mx-auto mt-6" justify-align="center" max-width="400">
      <v-img height="400px" :src="`${$store.state.imagem}`" aspect-ratio="2">
      </v-img>
      <v-card-actions>

        <v-btn color="blue" @click="cancel" depressed>
          cancelar
        </v-btn>
        <v-btn color="teal accent-4" depressed @click="save">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'uploadImage',
  data() {
    return {
      previewImage: null
    }
  },
  methods: {
    uploadImage(e) {
      this.$store.commit('uploadImage', e)
      this.previewImage = this.$store.state.imagem
    },
    save() {
      this.$router.replace({ name: 'Dashboard' })
      this.$store.commit('buscaImagem')
    },
    cancel() {
      this.$router.replace({ name: 'Dashboard' })

    }

  }
}  
</script>

<style>
.uploading-image {
  display: flex;
}
</style>