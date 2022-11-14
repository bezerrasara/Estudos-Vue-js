import db from "../services/localbase.js";
import axios from "axios";
export default {
  buscaTarefas(state) {
    // db.collection('tarefas').get().then(tarefasDB => {
    //     state.tarefas.fazer = tarefasDB

    // })
    
    if (state.tarefas.fazer.length != 0) {
      localStorage.getItem(state.tarefas.fazer);
    } 
    else if (state.tarefas.fazendo.length != 0) {
      localStorage.getItem(state.tarefas.fazendo);
    }
    else {
      localStorage.getItem(state.tarefas.feito);
    }
  },
  buscaNotification(state){
    localStorage.getItem(state.notifications);

  },
  adicionaTarefa(state, tarefa) {
    // db.collection('tarefas').add(tarefa)
    state.tarefas.fazer.push(tarefa);
  },

  
  addNotification(state, notification){
    state.notifications.push(notification);
  },
  removeTarefa(state, id) {
    state.tarefas.fazer = state.tarefas.fazer.filter(
      (tarefa) => tarefa.id !== id
    );
  },
  clear(state){
    state.messages = []
    localStorage.removeItem(state.messages)

  },
  getMessages(state){
    localStorage.getItem(state.messages)
  },
  removeTarefaFazendo(state, id) {
    state.tarefas.fazendo = state.tarefas.fazendo.filter(
      (tarefa) => tarefa.id !== id
    );
  },
  removeTarefaFeito(state, id) {
    state.tarefas.feito = state.tarefas.feito.filter(
      (tarefa) => tarefa.id !== id
    );
  },
  editaTarefa(state, novaTarefa) {
    var item = state.tarefas.fazer.find(tarefa=> tarefa.id==novaTarefa.id)
    item.titulo = novaTarefa.titulo
    item.descricao = novaTarefa.descricao
    item.prazo = novaTarefa.prazo
  },
  editaTarefaFazendo(state, novaTarefa) {
    var item = state.tarefas.fazendo.find(tarefa=> tarefa.id==novaTarefa.id)
    item.titulo = novaTarefa.titulo
    item.descricao = novaTarefa.descricao
    item.prazo = novaTarefa.prazo
  },
  editaTarefaFeito(state, novaTarefa) {
    var item = state.tarefas.feito.find(tarefa=> tarefa.id==novaTarefa.id)
    item.titulo = novaTarefa.titulo
    item.descricao = novaTarefa.descricao
    item.prazo = novaTarefa.prazo
  },

  alterarNome(state, nome){
    if (nome==null){
      state.usuario=state.usuario
  }
  else{
    state.usuario = nome
  }

  },
  alterarSenha(state, senha){
    if (senha==null){
      state.password=state.password
  }
    else{
      state.password = senha
  }
},

  login(state, usuario) {
    state.conectado = true;
    state.usuario = usuario;
  },

  logout(state) {
    state.conectado = false;
  },

  async uploadImage(state, e){
    const image = e.target.files[0];
     const reader = new FileReader();
     await  reader.readAsDataURL(image);
        reader.onload =  e =>{
          //  this.previewImage = 
           state.imagem = e.target.result;
          //  console.log(state.imagem);
       };
   },
   async uploadImageCard(state, e){
    const image = e.target.files[0];
     const reader = new FileReader();
     await  reader.readAsDataURL(image);
        reader.onload =  e =>{
          //  this.previewImage = 
           state.imagemCard = e.target.result;
          //  console.log(state.imagem);
       };
   },
   buscaImagem(state){
    localStorage.getItem(state.imagem);
   }
};
