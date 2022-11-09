<template>
  <div >
    
  <v-navigation-drawer
  v-model="drawer"
  app>
  <v-img
  src="../assets/bg.jpg"
  gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
  dark
  class="pt-5 text-center"
  >
  
<div v-if="isLoggedIn">
  
  
  <v-avatar
  size="70"
  
  > 
      <img
        :src="`${$store.state.imagem}`"
        alt="John"
      >
    </v-avatar>
    <v-icon class="mt-10 " small @click="uploadImage">mdi-camera-plus</v-icon>

    <v-list-item link >
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                <v-badge
        multiple
        bottom
        color="green"
        dot
        overlap
        offset-x="-5"
        offset-y="12"
        bordered
      >
                {{$store.state.usuario}}
           </v-badge>    
              </v-list-item-title>

              <v-list-item-subtitle 
              v-on:click="logout" >
              log out
            </v-list-item-subtitle> 

            </v-list-item-content>
          </v-list-item> 
        </div>
        <div v-else>
          <v-list-item link color="pink">
          <v-list-item-subtitle >
            Offline 
            <v-btn
            icon
            color="red"
            @click="iconeTrue=true"
          >
            <v-icon>mdi-circle-medium</v-icon>
          
          </v-btn>
          <v-btn @click="fazerLogin">Fazer login</v-btn>
          </v-list-item-subtitle>
        </v-list-item>
        </div>
      </v-img>
 
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to = "item.to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        prominent
        height="185"
        color="#fcb69f"
        dark
       
        src="../assets/bg.jpg"
        
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
          ></v-img>
        </template>
  
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title
          class="mt-16"
        >

          <Input />
          
        </v-app-bar-title><v-spacer></v-spacer>
          <h4 class="mt-16"> {{Data}}</h4>
        <template v-slot:extension >
        <v-tabs color="green" icons-and-text dark align-with-title v-model="selected" @change="toggle">
          <v-tabs-slider></v-tabs-slider>
         
          <v-tab href="#Tarefas">
            <v-icon> mdi-clipboard-check-multiple</v-icon>
          </v-tab> 
          <v-tab href="#notifications">
            <!-- <div v-if="$store.state.notifications.length!=0"> 
             <v-badge
        :content="$store.state.notifications.length"
        
        color="green"
        overlap
      >
         <v-icon>mdi-bell</v-icon> 
      </v-badge>
           
            </div>

            <div v-else> -->
            <v-icon >
              mdi-bell
            </v-icon>
          <!-- </div> -->

          </v-tab>
          <v-tab href="#Fazendo">
            tab2
          </v-tab>
        </v-tabs>
        
      </template>
      </v-app-bar>
  <v-main  >
    <!-- <v-alert :value="alert" type="info">
      {{$store.state.notification}}
      <span></span>
      <v-btn small color="primary" @click="alert =!alert">ok</v-btn>
    </v-alert> -->
    <component v-bind:is="component" />

  </v-main>
 </div>
</template>

<script>
import Input from '../components/Input.vue';
import Fazendo from '../components/Fazendo.vue'
import Tarefas from '../components/Tarefas.vue'
import uploadImage from '../components/uploadImage.vue';
import notifications from '../components/notifications.vue';

  export default {
 
   components: {
    Input,
    uploadImage,
    Fazendo,
    Tarefas,
    notifications
   },
  
    data: () => ({ 
    //  fotoAtual: "data:image/jpeg;base64,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",
      drawer: null,
      alert: true,
      items: [
            {  title: 'Perfil', icon: 'mdi-account'},
            {  title: 'Dashboard', icon: 'mdi-view-dashboard' , to: '/Dashboard'},
          ],
      
      selected: null,
      component: "",
      
    }),

    computed: {
    isLoggedIn: function() {
      
      return this.$store.getters.isLoggedIn;
      
    },
    Data:()=> {
      const timeElapsed = Date.now();
const today = new Date(timeElapsed);
 return today.toDateString(); // "Sun Jan 30 2022"
    },
   
  },
    methods: {
     
      logout() {
       this.$store.commit('logout')
        // this.$router.replace({name:'Login'})
        console.log(this.isLoggedIn)
      },
      fazerLogin() {
        this.$router.replace({name:'Login'})
      },
      uploadImage(){
        this.$router.replace({name:'UploadImage'})
        this.fotoAtual = this.$store.state.imagem
      },
     
      toggle() {
      if (this.selected === "notifications") {
        this.component = notifications;
      } 
     else if (this.selected== "Fazendo") {
        this.component = Fazendo;
        
      } 
      else {
        this.component = Tarefas;
      }
    },
    mounted() {
      console.log(this.isLoggedIn())
      this.$store.commit('buscaImagem')
     
    }
    
    }
  };
  </script>