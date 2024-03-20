export interface ExampleStateInterface {
  prop: boolean;
  cards_data: any,
  active_card_name: string

}

function state(): ExampleStateInterface {
  return {
    prop: false,
    cards_data: {
      ID1: {
        name: 'Sharad',
        number: '1234343434322025',
        date: '12/22',
        cvv: '123',
        freeze: false,
      },
      ID2: {
        name: 'Thai',
        number: '1234343434322224',
        date: '6/25',
        cvv: '123',
        freeze: false,
      },
    },
    active_card_name: 'ID1',
  }
}

export default state;
