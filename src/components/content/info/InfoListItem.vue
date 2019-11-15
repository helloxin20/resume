<template>
    <div class="info-list-item row">
            <slot name="header"></slot>
            <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "InfoListItem",
    }
</script>
<style scoped>
    .info-list-item{
        padding-left: 25px;
        padding-right: 25px;
    }
</style>