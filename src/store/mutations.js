import db from '../services/localbase.js';

export default {
buscaTarefas(state){
    db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB
    })
    

    },
    adicionaTarefa(state, titulo){
        db.collection('tarefas').add({
            id: new Date().getTime(),
            titulo,
            concluido: false
     })
    },

    //unica que ta funcionando pra deletar
    // removeTarefa(state, id){
    //      state.tarefas = state.tarefas.filter(tarefa => tarefa.id!==id)
    //      },
}