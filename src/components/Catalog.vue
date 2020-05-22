<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <div class="catalog__list">
            <CatalogItem
                v-for="product in PRODUCTS"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import CatalogItem from "./CatalogItem";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Catalog",
    data() {
        return {
            
        };
    },
    components: {
        CatalogItem
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.$store.dispatch('ADD_TO_CART', data);
            console.log(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS()
    }
};
</script>

<style lang="scss">
    .catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            // align-items: center;
        }
    }
</style>