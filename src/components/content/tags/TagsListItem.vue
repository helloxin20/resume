<template>
    <div class="tags-list-item ">
        <ul>
            <li>
                <img :src="tagsList.src" alt="">
                <b>{{tagsList.title}}:</b>{{tagsList.content}}
            </li>
        </ul>
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
ul li{
    /*display: flex;
    justify-content: flex-start;*/
    /*margin-bottom: 10px;*/

}
</style>