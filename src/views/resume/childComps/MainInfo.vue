<template>
    <section class="main-info row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 detail">
        <info-list>
            <info-list-item>
                <!--能力-->
                <div slot="header" class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <h2>{{abilityTitle[0]}}</h2>
                    <h3>{{abilityTitle[1]}}</h3>
                </div>
                <div slot="content" v-for="(info,index) in ability" :key="index" class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <header>
                        <h3>{{info.name}}</h3>
                    </header>
                    <ul>
                        <li v-for="(item,index) in info.description" :key="index">{{item}}</li>
                    </ul>
                </div>
            </info-list-item>
        </info-list>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 detail">
            <info-list>
                <info-list-item>
                    <!--设计集-->
                    <div slot="header" class="col-lg-12">
                        <h2>{{designTitle[0]}}</h2>
                        <h3>{{designTitle[1]}}</h3>
                    </div>
                    <div  slot="content">
                        <img :src="item" alt="" v-for="(item,index) in design.icon" :key="index"
                     class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    </div>
               </info-list-item>
        </info-list>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 detail">
        <info-list>
               <info-list-item>
               <!--工作经历-->
               <div slot="header" class="col-lg-12">
                   <h2>{{experienceTitle[0]}}</h2>
                   <h3>{{experienceTitle[1]}}</h3>
               </div>

               <div slot="content" v-for="(info,index) in experience" :key="index">
                   <header>
                        <h3>{{info.name}}</h3>
                   </header>
                   <ul>
                       <li v-for="(item,index) in info.description" :key="index">{{item}}</li>
                   </ul>
               </div>
               </info-list-item>

        </info-list>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 detail">
        <info-list>
                <info-list-item>
                    <!--个人评估-->
                    <div slot="header" class="col-lg-12">
                        <h2>{{selfAssessmentTitle[0]}}</h2>
                        <h3>{{selfAssessmentTitle[1]}}</h3>
                    </div>
                    <div slot="content" v-for="(item,index) in selfAssessment" :key="index">
                        <header>
                            <h3>{{item.name}}</h3>
                        </header>
                        <ul>
                            <li>{{item.description}}</li>
                        </ul>
                    </div>
                </info-list-item>
        </info-list>
        </div>
    </section>

</template>

<script>
    import InfoListItem from "../../../components/content/info/InfoListItem";
    import InfoList from "../../../components/content/info/InfoList";
    export default {
        name: "MainInfo",
        components: {InfoList, InfoListItem},
        props:{
            ability:Array,
            design:Object,
            experience:Array,
            selfAssessment:Array,
        },
        data(){
            return {
                abilityTitle:['能力','Ability'],
               designTitle:['设计集','Design'],
               experienceTitle:['校园经历','Experience'],
               selfAssessmentTitle:['个人评估','Self-Assessment'],
            }
        }
    }
</script>

<style scoped>
    .detail{
        padding-bottom: 10px;
    }
h2,h3{
    display: inline-block;
}
    h3{

    }
</style>