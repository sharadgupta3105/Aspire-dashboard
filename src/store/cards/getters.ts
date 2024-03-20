import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  cards_data: (state) => {
    return state.cards_data;
  },
  active_card_name: (state) => {
    return state.active_card_name;
  }
};

export default getters;
