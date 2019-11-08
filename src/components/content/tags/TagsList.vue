<template>
    <div class="tags">
        <tags-list-item v-for="(item,index) in tags" :key="index" :tags-list="item"></tags-list-item>
    </div>
</template>

<script>
    import TagsListItem from "./TagsListItem";
    export default {
        name: "TagsList",
        components: {TagsListItem},
        props:{
            tags:Object,
        }
    }
</script>

<style scoped>
    @media (max-width: 767px) {
        .tags {
            text-align: center;
        }
    }
    @media(min-width: 768px) {
        .tags{
            margin-top: 45px;
        }
    }
</style>