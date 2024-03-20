import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  updateActiveCard(state, payload) {
    state.active_card_name = payload.slide;
  },
  changeFreezeStatus(state, payload) {
    state.cards_data[payload.card].freeze =
      !state.cards_data[payload.card].freeze;
  },
  deleteCard(state, payload) {
    delete state.cards_data[payload];
    const remainingKeys = Object.keys(state.cards_data);
    state.active_card_name = remainingKeys[0];

  },
  addCard(state, payload) {
    state.cards_data[payload.id]= payload.card;
  },
};

export default mutation;
