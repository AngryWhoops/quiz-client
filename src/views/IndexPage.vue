<template>
  <HeaderComponent></HeaderComponent>
  <div class="themes__wrapper">
    <h1 class="themes__title">
      Оказание первой помощи. Практическая часть
    </h1>
    <h2 class="themes__title">Темы, по которым будет проводится тестирование:</h2>

    <ul class="themes-list" >
      <li class="list__item" v-for="theme in themes" v-bind:key="theme" v-bind:theme="theme">
        <p :value="theme.value">{{theme.label}}</p>
      </li>
    </ul>

    <div class="btn__wrapper">
      <router-link to="/question" class="btn">Начать</router-link>
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
    }
  },
  components: {
    HeaderComponent
  }
};
</script>

<style scoped lang="sass">
.themes__wrapper
  padding: 50px
  background: #FED6BC
.themes__title
  margin-bottom: 30px
  font-size: 25px
.themes-list
  width: 75%
  margin: 0 auto
  list-style-type: none
.list__item
  padding: 10px 20px
  background: #fcb291
  margin-bottom: 10px
  border-radius: 10px
  cursor: default
  font-size: 20px    
  transition: 0.3s all
  &:hover
    transform: scale(1.05)
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
  text-decoration: none
  color: #000
  transition: 0.3s all
  &:hover
    transform: scale(1.05)
</style>

