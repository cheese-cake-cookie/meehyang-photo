export const state = () => ({
  selectedGnbMenu: null,
  gnbMenu: [
    {
      name: 'ALL',
      to: '/',
      regex: /^\/(?:\/(?=$))?$/i
    },
    {
      name: 'MUSIC',
      to: '/music',
      regex: /^\/music.*/i
    },
    {
      name: 'PEOPLE',
      to: '/people',
      regex: /^\/people.*/i
    },
    {
      name: 'DAILY',
      to: '/daily',
      regex: /^\/daily.*/i
    },
  ],
});

export const mutations = {
  SET_SELECTED_GNB_MENU(state, menu) {
    state.selectedGnbMenu = menu;
  }
}