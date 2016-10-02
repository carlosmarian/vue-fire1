import Vue from 'vue'  
import Vuex from 'vuex'

import store from '../vuex/store'

//mudando o valor do controle de autenticacao na store!
const setAutentificado = function(autentificado) {  
    console.log('setAutentificado ');
    console.log('Valor: '+autentificado);
    store.dispatch('SET_AUTENTICADO', autentificado)
}

//recuperando o valor de autenticacao da store!
const getAutentificado = function() {  
    return store.state.autentificado;
}

//mudando o valor do controle de USUARIO ATIVO na store!
const setUsuarioAtivo = function(usuarioActivo) {  
    console.log('setUsuarioAtivo ');
    console.log('Valor: '+usuarioActivo);
    store.dispatch('SET_USUARIO_ATIVO', usuarioActivo)
}

//recuperando o valor de USUARIO ATIVO da store!
const getUsuarioAtivo = function() {
    console.log('getUsuarioAtivo');
    console.log('valor: '+store.state.usuarioActivo);  
    return store.state.usuarioActivo;
}

export default {
    getUsuarioAtivo,
    setUsuarioAtivo,
    setAutentificado,
    getAutentificado
}