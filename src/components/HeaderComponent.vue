<template>
    <header class="header">
        <a class="header__item" href="#">
            <img class="header__logo" src="@/assets/img/logo.png" alt="logo">
        </a>
        <p class="header__theme" >
            <!-- {{themesList[localArray]}} -->
            Оказание первой помощи. Практическая часть
        </p>
    </header>
</template>

<script>
export default {
    data() {
        return {
            localArray: this.themesList,
        }
    },
    props: {
        /**
         * Входящие данные
         */
        themesList: {
            type: Object,            
            required: true,
        },
        incomingString: {
            type: String,
            default: 'Оказание первой помощи. Практическая часть',
        }
    },
}
</script>

<style scoped lang="sass">
.header
    padding: 10px 50px
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 20px
    background: #212945
    color: #fff
    &__item
        flex: 0 0 140px
    &__logo
        width: 100%
    &__theme
        text-align: center
</style>