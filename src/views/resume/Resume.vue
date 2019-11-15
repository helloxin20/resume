<template>
    <div class="resume container">
        <personal :user="user"></personal>
        <main-info :ability="ability"
                   :design="design"
                   :experience="experience"
                   :selfAssessment="selfAssessment">
        </main-info>
    </div>

</template>

<script>
    import Personal from "./childComps/Personal";
    import InfoList from "@/components/content/info/InfoList";
    import MainInfo from "./childComps/MainInfo";

    import user from "@/database/personal";
    import ability from "@/database/ability";
    import experience from "@/database/experience";
    import selfAssessment from  "@/database/self-assessment";
    import design from "@/database/icon"
    export default {
        name: "Resume",
        components: {MainInfo, InfoList, Personal},
        data(){
            return {
                user,
                ability,
                experience,
                selfAssessment,
                design,
            }
        }
    }
</script>

<style scoped>
.container{
    border: 1px solid #333333;
}

</style>