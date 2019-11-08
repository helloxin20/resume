<template>
    <div class=" col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div class="info-list-item">
        <header class="col-lg-12 col-sm-12">
            <h3>{{infoListItem.name}}</h3>
        </header>
        <ul>
            <li v-for="(item,index) in infoListItem.description" :key="index">{{item}}</li>
        </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InfoListItem",
        props:{
            infoListItem:Object
        }
    }
</script>

<style scoped>
    @media (max-width: 767px) {
    .info-list-item {
        text-align: center;
    }
    }
    .info-list-item{
        height: 180px;
        border: 1px solid #a3a3a5;
        margin-bottom: 15px;
    }
    ul{
        margin-top:10px ;
        margin-left: 15px;
    }
    ul li{
        margin-top:5px ;
    }

</style>