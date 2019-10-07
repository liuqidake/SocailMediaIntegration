import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    themes: {
      light:{
        primary: '#bfb1b0',
        logo:"#ac3b61",
        error: '#b71c1c',
        social:"#000000",
        background:"#f2f1ed",
        bar:"#eee2dc"
      }
    },
  },
});
