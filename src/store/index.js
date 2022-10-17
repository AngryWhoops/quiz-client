import { createStore } from 'vuex';

export default createStore({
  state: {
        /**
         * Массив с ответами
         */
        answers: [1,1,1,1],
        /**
         * Количество ответов (уже пройденные вопросы)
         */
        countAnswers: 0,
        /**
         * Всего вопросов
         */
        totalQuestions: ''
  },
  getters: {
    /**
     * Получаем все ответы из хранилища
     */
    answers(state) {
      return state.answers;
    },

    /**
     * Получаем количество ответов
     */
    count_answers(state) {
      return state.countAnswers;
    }
  },
  mutations: {
    /**
     * Добавить ответ в массив
     */
    ADD_ANSWER: (state, payload) => {
      state.answers.push(payload);
    }
  },
  actions: {
    /**
     * Добавляем ответ в хранилище 
     */
     addToAnswers(context, payload) {
      const answers = context.state.answers;
      answers.push(payload);
      context.commit('ADD_ANSWER', answers);
    }
  },
  modules: {
  },
});
