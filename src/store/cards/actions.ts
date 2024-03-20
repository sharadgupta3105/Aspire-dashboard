import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';
import { uid } from 'quasar';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  updateActiveCard({ commit }, payload) {
    commit('updateActiveCard', payload);
  },
  changeFreezeStatus({ commit }, payload) {
    commit('changeFreezeStatus', payload);
  },
  deleteCard({ commit }, payload) {
    commit('deleteCard', payload);
  },
  addCard({ commit }, name) {
    const payload = {
      id: uid(),
      card: {
        name: name.name,
        number: Math.floor(1000000000000000 + Math.random() * 9000000000000000),
        date:
          Math.floor(Math.random() * 10 + 1) +
          '/' +
          Math.floor(Math.random() * 10 + 22),
        cvv: '123',
        freeze: false,
      },
    };
    commit('addCard', payload);
  },
};

export default actions;
