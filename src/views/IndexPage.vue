<template>
  <div class="themes__wrapper">
    <h1 class="themes__title">
      Оказание первой помощи. Практическая часть
    </h1>
    <h2 class="themes__title">Выбирете тему:</h2>

    <div class="themes-list" v-for="theme in themes" v-bind:key="theme" v-bind:theme="theme">
      <label class="label">
        <input class="input" type="radio" name="theme" v-model="inputValue" :value="theme.value">{{theme.label}}
      </label>
    </div>

    <div class="btn__wrapper">
      <router-link to="/first" class="btn" v-if="inputValue">Начать</router-link>
      <!-- <button class="btn" @click="isThemeChecked">
        
      </button> -->
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      themes: [
        {
          value: 'situation',
          label: 'Оценка обстановки на месте происшествия',
        },
        {
          value: 'consciousness',
          label: 'Отработка навыков определения сознания у пострадавшего',
        },
        {
          value: 'life',
          label: 'Отработка приемов восстановления проходимости верхних дыхательных путей. Оценка признаков жизни у пострадавшего',
        },
        {
          value: 'ambulance',
          label: 'Отработка вызова скорой медицинской помощи, других специальных служб',
        },
        {
          value: 'artificial_respiration',
          label: 'Отработка приемов искусственного дыхания "рот ко рту", "рот к носу" с применением устройств для искусственного дыхания',
        },
        {
          value: 'sternum',
          label: 'Отработка приемов давления руками на грудину пострадавшего',
        },
        {
          value: 'resuscitation',
          label: 'Выполнение алгоритма реанимации',
        },
        {
          value: 'side_pose',
          label: 'Отработка приема перевода пострадавшего в устойчивое боковое положение',
        },
        {
          value: 'subject',
          label: 'Отработка приемов удаления инородного тела из верхних дыхательных путей пострадавшего',
        },
      ],
      inputValue: '',
    }
  },
  methods: {
    isThemeChecked() {
      if (!this.inputValue) {
        alert('Тема не выбрана');
      }
    },
  },
};
</script>

<style scoped lang="sass">
.themes__wrapper
  padding: 50px
  background: #FED6BC
.themes__title
  margin-bottom: 30px
.themes-list
  width: 70%
  margin: 0 auto
  list-style-type: none
.label
  width: 100%
  display: inline-block
  padding: 10px 20px
  cursor: pointer
  background: #fcb291
  margin-bottom: 10px
  border-radius: 10px
  font-size: 20px    
  transition: 0.3s all
  &:hover
    transform: scale(1.05)
.input
  margin-right: 10px
  cursor: pointer
input[type='radio']
  color: red
.btn__wrapper
  display: flex
  justify-content: center
.btn
  padding: 20px 60px
  background: #fcb291
  border: none
  border-radius: 10px
  font-size: 25px
  cursor: pointer
.text
  display: none
</style>

