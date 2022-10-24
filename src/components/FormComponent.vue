<template>
  <div class="wrapper">
    <div class="text-wrapper">
      <h2 class="result-title">Форма отправки результатов</h2>
      <p class="result-text">
        Укажите в форме ниже свои Имя, Фамилию и Отчество (при его наличии) для
        того, чтобы результаты вашего тестирования были отправлены в учебный
        центр.
      </p>
    </div>
    <form class="form">
      <input type="text" placeholder="Имя" class="form__input" />
      <input type="text" placeholder="Фамилия" class="form__input" />
      <input
        type="text"
        placeholder="Отчество (при наличии)"
        class="form__input"
      />
      <button class="form__btn">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  // data() {
  //   return;
  // },
};
</script>

<style scoped lang="sass">
.wrapper
  padding: 20px
  display: flex
  flex-direction: column
  align-items: center
.text-wrapper
  max-width: 700px
.result-title
  margin-bottom: 15px
.result-text
  margin-bottom: 15px
.form
  display: flex
  flex-direction: column
  max-width: 700px
  &__input
    margin-top: 15px
    padding: 5px
    font-size: 18px
    width: 700px
    border: 2px solid #212945
    border-radius: 10px
  &__btn
    margin: 0 auto
    margin-top: 15px
    padding: 15px
    max-width: 150px
    font-size: 18px
    border: none
    background: #74070a
    border-radius: 10px
    cursor: pointer
    color: #fff
    transition: 0.3s all
    &:hover
      transform: scale(1.05)
</style>
