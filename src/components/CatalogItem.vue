<template>
    <div class="catalog-item">
        <img
            class="catalog-item__img"
            :src="require('../assets/images/' + product_data.image)"
            :alt="product_data.name"
        />
        <div class="catalog-item__wrap">
            <p class="catalog-item__name">{{product_data.name}}</p>
            <p v-if="product_data.oldPrice" class="through">{{product_data.oldPrice}} USD</p>
            <p class="catalog-item__price">Price: {{product_data.price}} USD</p>
            <button class="catalog-item__btn btn" @click="addToCart">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CatalogItem",
    props: {
        product_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch('ADD_TO_CART', this.product_data)
            // this.$emit("addToCart", this.product_data);
        }
    }
};
</script>

<style lang="scss">
.catalog-item {
    margin: $margin * 2;
    padding: $padding;
    border: 1px solid black;
    border-radius: $radius;
    width: 250px;
    box-sizing: border-box;
    .through {
        text-decoration: line-through;
        margin: 0;
    }
    &__img {
        max-width: 220px;
    }
    &__name {
        font-weight: 900;
        color: #959595;
    }
    &__price {
        font-weight: 900;
        color: red;
        margin: 5px 0;
    }
    &__btn {
        background-color: #fff;
        border: 1px solid black;
        border-radius: $radius;
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.15s all ease-in;
        outline: none;
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
}
</style>