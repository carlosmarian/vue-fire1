<template>
    <div class="col-md-12">
        <h2>Listado de tareas</h2>
        <!-- Formulario -->
        <form @submit.prevent="agregarTarea(nuevaTarea)"
              class="form">
            <div class="input-group">
                <input v-model="nuevaTarea" required
                       type="text" class="form-control">
                <span class="input-group-btn">
						<button class="btn btn-default" type="submit" ><span
                                class="glyphicon glyphicon-plus"></span> Añadir tarea</button>
					</span>
            </div>
        </form>
        <!-- Listado de tareas -->
        <ul class="list-group">
            <li v-for="tarea in tareas"
                class="list-group-item clearfix">
                <p class="lead" :class="{completado: tarea.completado}">
                    <img class="avatar" :src="tarea.avatar">
                    {{ tarea.titulo }}
                    <small>({{ tarea.nombre }})</small>
                </p>
                <input v-model="tarea.titulo"
                       v-show="editandoTarea === $index"
                       @blur="editandoTarea = null, editarTarea(tarea)"
                       type="text">
                <div v-show="tarea.uid === usuarioActivo.uid">
                    <span class="pull-right">
                        <button @click="editandoTarea = $index"
                                class="btn btn-default btn-xs">
                            <span class="glyphicon glyphicon-pencil"></span>
                        </button>
                        <button v-show="editandoTarea === $index"
                                @click="editandoTarea = null, editarTarea(tarea)"
                                class="btn btn-default btn-xs">
                            <span class="glyphicon glyphicon-floppy-saved"></span>
                        </button>
                        <button @click="actualizarEstadoTarea(true, tarea)"
                                class="btn btn-primary btn-xs">
                            <span class="glyphicon glyphicon-ok"></span></button>
                        <button @click="actualizarEstadoTarea(false, tarea)"
                                class="btn btn-primary btn-xs">
                            <span class="glyphicon glyphicon-repeat"></span>
                        </button>
                        <button @click="eliminarTarea(tarea)"
                                class="btn btn-danger btn-xs">
                            <span class="glyphicon glyphicon-remove"></span>
                        </button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import firebase from 'firebase'
import authService from '../services/authService'
export default {
    ready: function () {
        this.autentificado = authService.getAutentificado();
        this.usuarioActivo = authService.getUsuarioAtivo(); 
    },
    data: function () {
        return {
            nuevaTarea: null,
            editandoTarea: null,
            autentificado: false,
            usuarioActivo: {}
        }
    },
    props: ['tareas', 'usuarioActivo'],
    methods: {
        agregarTarea: function (tarea) {
            var vm = this;

            if(!authService.getUsuarioAtivo()){
                authService.setUsuarioAtivo({displayName : '',
                    photoURL:'',
                    uid:''
                });
            }

            firebase.database().ref('tareas/').push({
                titulo: tarea,
                completado: false,
                nombre: authService.getUsuarioAtivo().displayName,
                avatar: authService.getUsuarioAtivo().photoURL,
                uid: authService.getUsuarioAtivo().uid,
            });
            this.nuevaTarea = '';
        },
        editarTarea: function (tarea) {
            firebase.database().ref('tareas/' + tarea['.key']).update({
                titulo: tarea.titulo
            });
        },
        actualizarEstadoTarea: function (estado, tarea) {
            firebase.database().ref('tareas/' + tarea['.key']).update({
                completado: estado ? true : false,
            });
        },
        eliminarTarea: function (tarea) {
            firebase.database().ref('tareas/' + tarea['.key']).remove();
        },
    }
}
</script>