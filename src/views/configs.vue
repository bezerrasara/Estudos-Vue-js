<template>
    <div id="app">
        <v-toolbar color="purple" dark>
            <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs"
          v-on="on" class="ma-4" @click="$router.replace({ name: 'Dashboard' })">mdi-arrow-left</v-icon>
      </template>
      <span>Voltar</span>
    </v-tooltip>
          
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>

        <!-- <v-card class="mx-auto mt-0" max-width="500" height="890"> -->
            <v-list height="890">
                <div class="grey lighten-3">
                <v-list-item>
                    <v-list-item-avatar size="70" class="mt-4 mx-auto ">
                        <img :src="`${$store.state.imagem}`" alt="John">
                    </v-list-item-avatar>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-content class="text-center">
                        <v-list-item-title class="text-h6 ">
                            {{ $store.state.usuario }}
                        </v-list-item-title>
                        <v-list-item-subtitle>sara@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-icon >mdi-menu-down</v-icon>
                    </v-list-item-action>
                </v-list-item></div>
                <v-divider></v-divider>

                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon>mdi-image-edit</v-icon>

                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            Imagem de fundo</v-list-item-title>
                        <v-list-item-subtitle>Adicione uma imagem de fundo</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon>mdi-account-edit</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Alterar nome de usuário</v-list-item-title>
                        <v-list-item-subtitle>
                            Altere seu nome de usuário
                        </v-list-item-subtitle>
                        
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon>mdi-lock</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Senha</v-list-item-title>
                        <v-list-item-subtitle>
                            Altere a senha
                        </v-list-item-subtitle>
                        
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        <!-- </v-card> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>