<template>
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="icon-bar">2</span>
                  <span class="icon-bar">3</span>
                  <span class="icon-bar">4</span>
              </button>
              <a href="#" class="navbar-brand">Todo App</a>
          </div>
          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li >
                      <a @click="conectar" href="#">Conectar</a>
                  </li>

                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <span class="glyphicon glyphicon-user"></span> 
                          <strong></strong>
                          <span class="glyphicon glyphicon-chevron-down"></span>
                      </a>

                      <ul class="dropdown-menu">
                          <li>
                              <div class="navbar-login">
                                  <div class="row">
                                      <div class="col-lg-4">
                                          <p class="text-center">sss
                                          </p>
                                      </div>
                                      <div class="col-lg-8">
                                          <p class="text-left"><strong>ssss</strong></p>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li class="divider"></li>
                          <li>
                              <div class="navbar-login navbar-login-session">
                                  <div class="row">
                                      <div class="col-lg-12">
                                          <p>
                                              <a @click="desconectar()" href="#" class="btn btn-danger btn-block">
                                                  Cerrar Sesion
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import authService from '../services/authService'

export default {
    ready: function () {
        var vm = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.info('Conectado: ', user);
                authService.setAutentificado(true);
                //vm.autentificado = true;
                vm.usuarioActivo = user;
            } else {
                console.warn('No conectado');
                authService.setAutentificado(false);
                //vm.autentificado = false;
                vm.usuarioActivo = null;
            }
        });
    },
    data () {
        return {
          usuarioActivo: null
        }
    },
    methods: {
        conectar: function () {
            firebase.auth().signInWithPopup(proveedor).catch(function (error) {
                console.error('Error haciendo logIn: ', error);
            });
        },
        desconectar: function () {
            firebase.auth().signOut().catch(function (error) {
                console.error('Error haciendo logOut: ', error);
            });
        }
    }
}
</script>