<template>
    <div class="container">
    <section class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
            <div class="photo">
            <img src="~assets/img/resume/identification_ photo.jpg" alt="证件照"/>
            </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
            <div class="user">
            <h1>{{user.username}}</h1>
            <h2>{{user.profession}}</h2>
            <p>{{user.introduction}}</p>
            <p>{{user.school.time}}/{{user.school.name}}/{{user.school.profession}}</p>
            <p>
                {{user.school.grade.title}}:{{user.school.grade.content}}
                {{user.school.cet.title}}:{{user.school.cet.content}}
            </p>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <tags-list :tags="user.social"></tags-list>
        </div>
    </section>
    </div>
</template>

<script>
    import TagsList from "../../../components/content/tags/TagsList";
    export default {
        name: "Personal",
        components: {TagsList},
        props:{
            user:Object,
        }
    }
</script>

<style scoped>
    /*.row{
        border-bottom: 1px solid black;
    }*/
    .photo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px;
    }
    .photo img{
    width: 135px;
    height:135px;
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
    }

    h1,h2{
        margin-top: 5px;
    }
    @media (max-width: 767px) {
        .user {
            text-align: center;
        }
    }
</style>