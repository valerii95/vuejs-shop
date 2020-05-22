<template>
    <div class="cart">
        <h1>Cart</h1>
        <CartItem/>
    </div>
</template>

<script>
import CartItem from './CartItem'

export default {
    name: "Cart",
    components: {
        CartItem,
    },
};
</script>

<style lang="scss">
</style>