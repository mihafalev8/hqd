<template>
<div class="">
     <div class="products">
        <div class="product-items">
          <Product v-for="(product, i) in products" :key="i" :product="product" ></Product>
        </div>
    </div>
    <h2 class="pag-m">Пока что пусть так сыровато побудет</h2>
    <div class="center">
      <div class="pagination">
        <a @click="fetchProducts(pagination.current_page - 1)">«</a>
        <a
          v-for="n in pagination.last_page" 
          :class="{ active: pagination.current_page == n }"
          @click="fetchProducts(n)" >{{ n }}</a>
        <a @click="fetchProducts(pagination.current_page + 1)">»</a>
      </div>
    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Product from '@/components/products/index';

export default {
  components: {
    Product
  },
  middleware: 'auth',
  computed: mapGetters({
    products: 'products/products',
    pagination: 'products/pagination'
  }),
  mounted() {
    this.fetchProducts(this.pagination.current_page);
  },
  methods: {
    fetchProducts(page = 1) {
      if(page > this.pagination.last_page) page = 1;
      else if(page < 1) page = this.pagination.last_page;
      this.$store.dispatch('products/fetchProducts', page);
    },
  },
  head () {
    return { title: this.$t('home') }
  }
}
</script>

<style>
.pag-m{
  text-align: center;
  padding-bottom: 3%;
}

.center {
  text-align: center;
}

.pagination {
  display: inline-block;
  padding-bottom:3%;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  border-right:none;
  margin: 0px;
}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: 1px solid #ddd;
}

.pagination a:hover, .active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:active {
  background-color: #4CAF50;
  color: white;
}
</style>
