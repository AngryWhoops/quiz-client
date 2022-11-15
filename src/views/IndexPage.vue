<template>
  <HeaderComponent />
  <div class="info-block">
    <h1 class="themes__title">Оказание первой помощи. Практическая часть</h1>
    <div class="themes__wrapper">
      <div class="themes">
        <h2 class="subtitle">
          Темы, по которым будет проводится тестирование:
        </h2>
        <ul class="themes-list">
          <li
            class="list__item"
            v-for="theme in themes"
            v-bind:key="theme"
            v-bind:theme="theme"
          >
            <p :value="theme.value">{{ theme.label }}</p>
          </li>
        </ul>
      </div>
      <div class="instraction">
        <h2 class="subtitle">Информация по прохождению практики</h2>
        <p class="instraction__text">
          Практическая часть содержит 30 заданий по основным темам. Внимательно
          прочитайте вопрос, посмотрите на изображение в задании и выберите свой
          вариант ответа. После этого нажмите кнопку “Далее”. Обращаем ваше
          внимание на то, что вернуться к предыдущему вопросу и изменить ответ
          нельзя. Если Вы закроете страницу браузера до окончания прохождения
          практики, то проходить ее нужно будет с самого начала. Поэтому
          убедитесь, что у вас есть 30-40 минут свободного времени.
          <br />После того, как вы ответите на последний вопрос, появится
          результат прохождения практики. Если он положительный, то в
          специальной форме введите свои ФИО и нажмите кнопку “Отправить”. В
          случае отрицательного результата подготовьтесь и повторите попытку.
        </p>
        <div class="btn__wrapper">
          <router-link to="/testing-page" class="btn"
            >Начать тестирование
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  data() {
    return {
      themes: [
        {
          value: "situation",
          label: "Оценка обстановки на месте происшествия",
        },
        {
          value: "consciousness",
          label: "Отработка навыков определения сознания у пострадавшего",
        },
        {
          value: "life",
          label:
            "Отработка приемов восстановления проходимости верхних дыхательных путей. Оценка признаков жизни у пострадавшего",
        },
        {
          value: "ambulance",
          label:
            "Отработка вызова скорой медицинской помощи, других специальных служб",
        },
        {
          value: "artificial_respiration",
          label:
            'Отработка приемов искусственного дыхания "рот ко рту", "рот к носу" с применением устройств для искусственного дыхания',
        },
        {
          value: "sternum",
          label: "Отработка приемов давления руками на грудину пострадавшего",
        },
        {
          value: "resuscitation",
          label: "Выполнение алгоритма реанимации",
        },
        {
          value: "side_pose",
          label:
            "Отработка приема перевода пострадавшего в устойчивое боковое положение",
        },
        {
          value: "subject",
          label:
            "Отработка приемов удаления инородного тела из верхних дыхательных путей пострадавшего",
        },
      ],
    };
  },

  components: {
    HeaderComponent,
  },
  methods: {
    /**
     * Урлы для относительныйх путей
     */
    // test() {
    //   console.log(import.meta.env);
    //   console.log(import.meta.env.BASE_URL);
    //   console.log(import.meta.env.VITE_URL);
    // },
  },
};
</script>

<style scoped lang="sass">
.info-block
  padding: 20px 50px
.themes__wrapper
  display: flex
  justify-content: space-between
  padding: 0 50px
.subtitle
  font-size: 20px
  margin-bottom: 15px
.themes
  flex: 0 0 50%
  &__title
    margin-bottom: 30px
    font-size: 25px
.themes-list
  width: 80%
  margin: 0 auto
  list-style-type: none
.list__item
  padding: 10px 20px
  background: #212945
  margin-bottom: 10px
  border-radius: 10px
  cursor: default
  font-size: 18px
  transition: 0.3s all
  color: #fff
  &:hover
    transform: scale(1.05)
.instraction
  &__text
    font-size: 18px
    text-align: justify
    max-width: 90%
    margin: 0 auto
.btn__wrapper
  display: flex
  justify-content: center
.btn
  padding: 20px 60px
  margin-top: 15px
  background: #74070a
  border: none
  border-radius: 10px
  font-size: 25px
  cursor: pointer
  text-decoration: none
  color: #fff
  transition: 0.3s all
  &:hover
    transform: scale(1.05)
</style>
