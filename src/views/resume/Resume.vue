<template>
    <div class="resume">
            <personal :user="user"></personal>
            <info-list :list="ability" :title="ablityTitle"></info-list>

    </div>

</template>

<script>
    import Personal from "./childComps/Personal";
    import InfoList from "@/components/content/info/InfoList";

    import user from "@/database/personal";
    import ability from "@/database/ability";
    import experience from "@/database/experience";
    import selfAssessment from  "@/database/self-assessment";
    export default {
        name: "Resume",
        components: {InfoList, Personal},
        data(){
            return {
                user,
                ability,
                experience,
                selfAssessment,
                ablityTitle:['能力','Ability'],
                designTitle:'设计集',
                experienceTitle:'工作经历',
                selfAssessmentTitle:'个人评估',
            }
        }
    }
</script>

<style scoped>
.container{
    border: 1px solid #333333;
}

</style>