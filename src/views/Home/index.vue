<template>
    <div>
        <header class="navbar">
            <section class="navbar-section">
                <a href="#" class="btn btn-link">Docs</a>
                <a href="#" class="btn btn-link">Examples</a>
            </section>
            <section class="navbar-center">
                <img src="@/assets/ico/logo.png" height="42">
            </section>
            <section class="navbar-section">
                <a href="#" class="btn btn-link">Twitter</a>
                <a href="#" class="btn btn-link">GitHub</a>
            </section>
            <carousel></carousel>
        </header>
        
    </div>
</template>

<script>
import Carousel from "@/components/Carousel"
export default {
    name: "Home",
    components: {
        Carousel
    }
}
</script>

<style lang="scss">
.navbar {
    background-color: $dark-color;
}
</style>