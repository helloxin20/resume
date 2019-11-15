<template>
    <section class="row personal">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 ">
            <div class="photo">
            <img src="~assets/img/resume/identification_ photo.jpg" alt="证件照"/>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div class="user">
            <h1>{{user.username}}</h1>
            <h3>{{user.profession}}</h3>
            <p>{{user.introduction}}</p>
            <p>{{user.school.time}}/{{user.school.name}}/{{user.school.profession}}</p>
            <p>
                {{user.school.grade.title}}:{{user.school.grade.content}}
                {{user.school.cet.title}}:{{user.school.cet.content}}
            </p>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 social">
            <tags-list :tags="user.social"></tags-list>
        </div>
    </section>

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
    .personal{
        padding-left: 25px;
        padding-right: 25px;

    }
    .photo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px;

    }
    .photo img{
        width: 135px;
        height: 135px;
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
    }
    .social{
        display: flex;
        align-items: center;
    }
</style>