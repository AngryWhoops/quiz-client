<template>
  <div class="themes__wrapper">
    <h1 class="themes__title">
      Оказание первой помощи. Практическая часть
    </h1>
    <ol class="themes-list">
      <h2 class="themes__title">Выбирете тему:</h2>
      <li class="themes-list__item">Оценка обстановки на месте происшествия</li>
      <li class="themes-list__item">Отработка навыков определения сознания у пострадавшего</li>
      <li class="themes-list__item">Отработка приемов восстановления проходимости верхних дыхательных путей.
        Оценка признаков жизни у пострадавшего</li>
      <li class="themes-list__item">Отработка вызова скорой медицинской помощи, других специальных служб</li>
      <li class="themes-list__item">Отработка приемов искусственного дыхания "рот ко рту",
        "рот к носу" с применением устройств для искусственного дыхания</li>
      <li class="themes-list__item">Отработка приемов давления руками на грудину пострадавшего</li>
      <li class="themes-list__item">Выполнение алгоритма реанимации</li>
      <li class="themes-list__item">Отработка приема перевода пострадавшего в устойчивое боковое положение</li>
      <li class="themes-list__item">Отработка приемов удаления инородного тела из верхних
        дыхательных путей пострадавшего</li>
    </ol>
    <button class="btn">Начать</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
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
  &__item    
    padding: 20px
    background: #fcb291
    margin-bottom: 10px
    border-radius: 10px
    font-size: 20px
    cursor: pointer
    transition: 0.3s all
    &:hover
      transform: scale(1.1)
.btn
  padding: 20px
  background: #fcb291
  border: none
  border-radius: 10px
  font-size: 25px
  cursor: pointer
</style>
