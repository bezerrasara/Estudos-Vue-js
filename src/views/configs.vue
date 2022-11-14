<template>
<div id="app">
    <v-toolbar color="purple" dark>
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" class="ma-4" @click="$router.replace({ name: 'Dashboard' })">
                    mdi-arrow-left</v-icon>
            </template>
            <span>Voltar</span>
        </v-tooltip>

        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>

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
                    <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
            </v-list-item>
        </div>
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


        <div>
            <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                    <v-list-item link two-line v-bind="attrs" v-on="on">
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
                </template>
                <v-card>
                    <v-card-title class="text-h6">
                        Alterar nome de usuario
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="mt-2">
                        Informe o novo nome de usuário.</v-card-text>
                    <v-text-field class="px-3" label="Nome" outlined v-model="nome">
                    </v-text-field>
                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="alterarNome()">
                            ok
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>

        <v-divider></v-divider>

        <div>
            <v-dialog v-model="dialog2" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                    <v-list-item link two-line v-bind="attrs" v-on="on">
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
                </template>
                <v-card>
                    <v-card-title class="text-h6">
                        Alterar Senha
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="mt-2">
                        Informe a nova senha.</v-card-text>
                    <v-text-field class="px-3" label="Senha" outlined v-model="senha">
                    </v-text-field>
                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="alterarSenha()">
                            ok
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>

    </v-list>
   
</div>
</template>

<script>
export default {
data() {
    return {
        nome: null,
        dialog: false,
        senha: null,
        dialog2: false
    }
},
methods: {
    alterarNome() {
        const novoNome = this.nome
        this.$store.commit('alterarNome', novoNome);
        
        this.dialog = false
    },

    alterarSenha() {
        const novaSenha = this.senha
        this.$store.commit('alterarSenha', novaSenha);
        this.dialog2 = false
    }
}
}
</script>

<style>

</style>