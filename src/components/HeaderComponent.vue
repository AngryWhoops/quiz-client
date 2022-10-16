<template>
    <header class="header">
        <a class="header__item" href="#">
            <img class="header__logo" src="@/assets/img/logo.png" alt="logo">
        </a>
        <p class="header__theme">
            Оказание первой помощи. Практическая часть
        </p>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass">
.header
    padding: 10px 50px
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 20px
    background: #fcb291 
    &__item
        flex: 0 0 140px
    &__logo
        width: 100%
    &__theme
        text-align: center
</style>