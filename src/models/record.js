export default {

  namespace: 'record',

  state: {
    localId: '', // 微信录音Id
    recording: false, // 是否显示"正在录音"弹窗。
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

    startRecord(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

    stopRecord(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    }

  },

};
