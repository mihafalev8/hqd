<template>
<div class="product">
    <div class="product-content">
        <div class="product-img">
            <img src="@/assets/images/hqd-cuvie.png" alt="product image">
        </div>
    </div>
    <div class="product-info">
        <div class="product-info-top">
            <h2 class="sm-title">{{ product.brand }}</h2>
            <div class="rating">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="far fa-star"></i></span>
            </div>
        </div>
        <a href="#" class="product-name">{{ product.model }}</a>
        <div class="product-container">
            <p class="product-price">$ {{ product.price }}</p>
            <p class="product-price">$ {{ product.price }}</p>
            <a href="#" class="btn-buy"><span><i class="fas fa-shopping-cart"></i></span></a>
            <a href="#" class="btn-cart"><span><i class="fas fa-plus"></i></span></a>
        </div>
    </div>
    <div class="off-info">
        <h2 class="sm-title">25% off</h2>
    </div>
</div>

</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
}
</script>

<style>
img {
    width: 100%;
    display: block;
}

.lg-title,
.md-title,
.sm-title {
    font-family: "Roboto", sans-serif;
    padding: 0.6rem 0;
    text-transform: capitalize;
}

.lg-title,
.md-title,
.sm-title {
    font-family: 'Roboto', sans-serif;
    padding: 0.6rem 0;
    text-transform: capitalize;
}

.lg-title {
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    padding-top: 4rem;
    /*отступ от nav area*/
    padding-bottom: 0.5rem;
    /* отступ от заголовка*/
    opacity: 0.9;
}

.md-title {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
}

.sm-title {
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
}

.text-light {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5;
    opacity: 0.5;
    margin: 0.4rem 0;
    padding-bottom: 7rem;
}

/* product section */
.products {
    padding: 3.2rem 0;
}

.products .text-light {
    text-align: center;
    width: 70%;
    margin: 0.9rem auto;
}

.product {
    margin: 2rem;
    position: relative;
}

.product-content {
    background: transparent; /*фон карточек*/
    padding: 3rem 0.5rem 2rem 0.5rem;
    cursor: pointer;
}

.product-img {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    transition: background 0.5s ease;
}

.product-container {
    background: transparent;
    font-family: inherit;
    border: none;
    height: 30px;
}

.btn-cart, .btn-buy {
    display: inline-block;
    float: right;
}

.btn-cart {
    color: black;
    padding-right: 10px;
}

.btn-buy {
    color: black;
}

.btn-cart:hover {
    color: var(--blue);
    transition: .25s;
}

.btn-buy:hover {
    color: var(--blue);
    transition: .25s;
}

.product-info {
    background: white;
    padding: 2rem;
    border-radius: 6px;
    border: 1px solid #eaecef;
}

.product-info-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rating span {
    color: #1f1f1f;
    /*цвет звёзд*/
}

.product-name {
    color: black;
    display: block;
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
}

.product-price {
    padding-top: 0.6rem;
    padding-right: 0.6rem;
    display: inline-block;
}

.product-price:first-of-type {
    text-decoration: line-through;
    color: var(--blue);
}

.product-img img {
    transition: transform 0.6s ease;
}

.product:hover .product-img img {
    transform: scale(1.1);
}

.product:hover {
    opacity: 1;
}

.off-info .sm-title {
    background: var(--blue);
    color: white;
    display: inline-block;
    padding: 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    z-index: 1;
    letter-spacing: 3px;
    cursor: pointer;
}

/* product collection */
.product-collection {
    padding: 3.2rem 0;
    padding-bottom: 100vh;
}

.product-collection-wrapper {
    padding: 3.2rem 0;
}

.product-col-left {
    /*    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("image/fashion-img-1.jpg") center/cover no-repeat;*/
    background-color: #1f1f1f;
}

.product-col-r-top {
    /*    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("image/fashion-img-2.png") center/cover no-repeat;*/
    background-color: #0a0a0a;
}

.flex {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 50vh;
    padding: 2rem 1.5rem 3.2rem;
    margin: 5px;
}

.product-col-r-bottom>div:first-child {
    background: #2393f7;
}

.product-col-r-bottom>div:last-child {
    background: #1f1f1f;
}

.product-col-content {
    text-align: center;
    color: white;
}

.product-collection .text-light {
    opacity: 1;
    font-size: 0.8;
    font-weight: 400;
    line-height: 1.7;
}

.btn-dark {
    background: var(--blue);
    color: white;
    outline: 0;
    border-radius: 25px;
    padding: 0.7rem 1rem;
    border: 0;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.6s ease;
    font-size: 1rem;
    font-family: inherit;
}

.btn-dark:hover {
    background: var(--blue);
}

/* Media Queries */
@media screen and (min-width: 992px) {
    .product-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .product-col-r-bottom {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 1200px) {
    .product-items {
        grid-template-columns: repeat(3, 1fr);
    }

    .product {
        margin-right: 1rem;
        margin-left: 1rem;
    }

    .products .text-light {
        width: 50%;
    }
}

@media screen and (min-width: 1336px) {
    .product-items {
        grid-template-columns: repeat(4, 1fr);
    }

    .product-collection-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .flex {
        height: 60vh;
    }

    .product-col-left {
        height: 121.5vh;
    }
}
</style>
