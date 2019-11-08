<template>
    <div class="container">
        <section class="row info-list">
            <header class="col-lg-12 col-sm-12">
                <h3>{{title[0]}}</h3>
                <h4>{{title[1]}}</h4>
            </header>
                <info-list-item v-for="(item,index) in list" :key="index" :info-list-item="item"></info-list-item>
        </section>
    </div>
</template>

<script>
    import InfoListItem from "./InfoListItem";
    export default {
        name: "InfoList",
        components: {InfoListItem},
        props:{
            list:Array,
            title:String,
        }
    }
</script>

<style scoped>
.row{
    display: flex;
    justify-content: center;
    align-items: center;
}
    .info-list{
        margin: 15px;
    }
    h3,h4{

        display: inline-block;
    }
    h4{
        margin-left: 5px;
        color: #a3a3a5;
    }
</style>