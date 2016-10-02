import Vue from 'vue'  
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {  
    autentificado: true,
    usuarioActivo: {displayName : '',
                    photoURL:'',
                    uid:''
                }
}
/*
const mutations = {  
    SET_AUTENTICADO (state, autentificado) {
        state.autentificado = autentificado
    },
    SET_USUARIO_ATIVO (state, usuarioActivo) {
        state.usuarioActivo = usuarioActivo
    }
}*/


export default new Vuex.Store({  
    state,
    mutations :{
      SET_AUTENTICADO (state, autentificado) {
        state.autentificado = autentificado
    },
    SET_USUARIO_ATIVO (state, usuarioActivo) {
        state.usuarioActivo = usuarioActivo
    }
    }
})