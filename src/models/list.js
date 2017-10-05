export default {

  namespace: 'list',

  state: {
    voices: [
      { word: 'maven', desc: 'n. 专家' },
      { word: 'sky', desc: 'n. 天空' },
      { word: 'father', desc: 'n. 父亲；爸爸' },
      { word: 'brother', desc: 'n. 兄弟' },
      { word: 'sister', desc: 'n. 姐妹；（称志同道合者）姐妹；修女；护士' },
      { word: 'mother', desc: 'n. 母亲；妈妈' },
    ],
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
