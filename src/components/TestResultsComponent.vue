<template>
  <div class="wrapper">
    <h2 class="result-title">
      Результаты тестирования по теме "Оказание первой помощи. Практическая
      часть"
    </h2>
    <p class="result-info">
      Для успешного прохождения практики необходимо набрать 90% верных ответов.
    </p>
    <h3 class="result-subtitle">Ваш результат: 83%</h3>

    <button class="result-btn">Завершить тестирование</button>
    <ul class="list">
      <li class="list__item red">1</li>
      <li class="list__item red">2</li>
      <li class="list__item green">3</li>
      <li class="list__item green">4</li>
      <li class="list__item red">5</li>
    </ul>
    <button class="result-btn">Завершить тестирование</button>
  </div>
</template>

<script></script>

<style scoped lang="sass">
.wrapper
  padding: 20px 50px
.result-title
  text-align: center
.result-subtitle
  margin-top: 15px
  text-align: center
.result-info
  text-align: center
  margin-top: 10px
.list
  list-style-type: none
  max-width: 900px
  &__item
    color: #fff
    margin-top: 10px
    padding: 5px 10px
    border-radius: 10px
.red
  background: #74070a
.green
  background: #02470a
.result-btn
  margin: 0 auto
  margin-top: 15px
  padding: 15px
  font-size: 18px
  border: none
  background: #212945
  border-radius: 10px
  cursor: pointer
  color: #fff
  transition: 0.3s all
  &:hover
    transform: scale(1.05)
</style>
