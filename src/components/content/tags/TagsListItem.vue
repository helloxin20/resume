<template>
    <div class="tags-list-item ">
                <img :src="tagsList.src" alt="" v-if="tagsList.src">
                <span v-else="!tagsList.src">{{tagsList.title}}:</span>
                <span>{{tagsList.content}}</span>
    </div>
</template>

<script>
    export default {
        name: "TagsListItem",
        props:{
            tagsList:Object,
        },
    }
</script>

<style scoped>
.tags-list-item{
    padding-top: 15px;
}
 img{
    vertical-align: middle;
}

</style>