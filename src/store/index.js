import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store ({
    state: {
        tarefas: [
            {id: 1, titulo: "tarefa1", concluido: false},
            {id: 2, titulo: "tarefa2", concluido: false}
        ]

    },
    mutations: {
        adicionaTarefa(state, titulo) {
            if(titulo){
                state.tarefas.push({
                    id: new Date().getTime(),
                    
                    titulo,
                    concluido: false

                })
            }

        }

    },
    actions: {

    },
    modules: {

    }

})