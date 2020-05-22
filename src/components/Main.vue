<template>
    <div class="main">
        <p>{{title}}</p>
        <Catalog/>
        <Cart v-if="CART.length"/>
    </div>
</template>

<script>
    import Catalog from './Catalog'
    import Cart from './Cart'
    import {mapGetters} from 'vuex'

    export default {
        name: 'Main',
        components: {
            Catalog,
            Cart
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
        data() {
            return {
                title: 'Main'
            }
        }
    }
</script>

<style lang="scss">

</style>