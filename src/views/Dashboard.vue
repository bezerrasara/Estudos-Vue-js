<template>
  <div>
    <v-navigation-drawer v-model="drawer" app dark src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
      <v-img src="../assets/bg.jpg" gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)" dark
        class="pt-5 text-center">

        <div v-if="isLoggedIn">
          <v-avatar size="70">
            <img :src="`${$store.state.imagem}`" alt="John">
          </v-avatar>
          <v-icon class="mt-10 " small @click="uploadImage">mdi-camera-plus</v-icon>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                <v-badge multiple bottom color="green" dot overlap offset-x="-5" offset-y="12" bordered>
                  {{ $store.state.usuario }}
                </v-badge>
              </v-list-item-title>

              <v-list-item-subtitle v-on:click="logout">
                log out
              </v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item link color="pink">
            <v-list-item-subtitle>
              Offline
              <v-btn icon color="red" @click="iconeTrue = true">
                <v-icon>mdi-circle-medium</v-icon>

              </v-btn>
              
           </v-list-item-subtitle>
          </v-list-item> <a class="white" @click="fazerLogin">Fazer login</a>
        </div>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app prominent height="185" color="#fcb69f" dark src="../assets/bg.jpg">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="mt-16">

        <Input />

      </v-app-bar-title>
      <v-spacer></v-spacer>
      <h4 class="mt-16"> {{ Data }}</h4>
      <template v-slot:extension>
        <v-tabs color="green" icons-and-text dark align-with-title v-model="selected" @change="toggle">
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#Tarefas">
            <v-icon> mdi-clipboard-check-multiple</v-icon>
          </v-tab>
          <v-divider
      class="mx-4"
      vertical
    ></v-divider>
          <v-tab href="#notifications">

            <v-icon>
              mdi-bell
            </v-icon>
            
          </v-tab>

          <v-divider
      class="mx-4"
      vertical
    ></v-divider>
          <v-tab href="#chat">
            <v-icon>mdi-message-text</v-icon>
          </v-tab>
        </v-tabs>

      </template>
    </v-app-bar>
    <v-main>

      <component v-bind:is="component" />

    </v-main>
  </div>
</template>

<script>
import Input from '../components/Input.vue';
import Tarefas from '../components/Tarefas.vue'
import uploadImage from '../components/uploadImage.vue';
import notifications from '../components/notifications.vue';
import chat from '../views/chat.vue';

export default {

  components: {
    Input,
    uploadImage,
    Tarefas,
    notifications,
    chat
  },

  data: () => ({
    drawer: null,
    alert: true,
    items: [
      { title: 'Perfil', icon: 'mdi-account' },
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/Dashboard' },

    ],
    selected: null,
    component: "",

  }),

  computed: {
    isLoggedIn: function () {

      return this.$store.getters.isLoggedIn;

    },
    Data: () => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);

      return today.toDateString(); // "Sun Jan 30 2022"
    },

  },
  methods: {

    logout() {
      this.$store.commit('logout')
      this.$router.replace({name: 'Home'})
    },
    fazerLogin() {
      this.$router.replace({ name: 'Login' })
    },
    uploadImage() {
      this.$router.replace({ name: 'UploadImage' })
      this.fotoAtual = this.$store.state.imagem
    },

    toggle() {
      if (this.selected === "notifications") {
        this.component = null;
      }
      else if (this.selected == "chat") {
        this.component = chat;

      }
      else {
        this.component = Tarefas;
      }
    },
    mounted() {
      this.$store.commit('buscaImagem')
    }

  }
};
</script>