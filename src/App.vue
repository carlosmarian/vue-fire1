<template >
  <div id="app">
  <header-component></header-component>  
  <div class="container">
      <todo-list :tareas="tareas" :usuario-activo="usuarioActivo"></todo-list>
  </div>   
  </div>
</template>

<script>
import firebase from 'firebase'
import TodoList from './components/todo-list.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  ready: function () {
    var vm = this;
    firebase.database().ref('tareas/').on('value', function (snapshot) {
        console.log('Lista');
        vm.tareas = [];
        var objeto = snapshot.val();
        console.log('Objeto: '+objeto);
        for (var propiedad in objeto) {
            vm.tareas.unshift({
                '.key': propiedad,
                completado: objeto[propiedad].completado,
                titulo: objeto[propiedad].titulo,
                avatar: objeto[propiedad].avatar,
                nombre: objeto[propiedad].nombre,
                uid: objeto[propiedad].uid,
            });
        }
    }, function(error){
      console.log(error);
    });
       
  },
  data () {
    return {
      tareas: []
    }
  },
  components: {
    'header-component': HeaderComponent,
    'todo-list': TodoList
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
