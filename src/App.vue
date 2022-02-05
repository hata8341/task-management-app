<template>
  <v-app>
    <div class="d-flex flex-row">
      <task-section
      style="width:320px"
      v-for="(section, index) in sections"
      :index="index"
      :key="section.id"
      :initialSection="section"
      :initialSections="sections"
      @editSectionTitle="refSectionTitle"
      @addNewTask="refNewTask"
      @changeTask="refChangeTask"
      />
      <v-card-actions class="aling-start">
        <v-btn @click="addSection">セクションを追加</v-btn>
      </v-card-actions>
    </div>
  </v-app>
</template>

<script>
import TaskSection from './components/TaskSection';
export default {
  name: 'App',
  components: {
    TaskSection,
    },
  data() {
    return {
      countSection:0,
      sections:[],
    }
  },
  methods: {
    addSection: function(){
      this.countSection++;
      this.sections.push({
        id: this.countSection,
        title: null,
        taskList: [],
      });
    },
    refSectionTitle: function(sectionTitle,index){
      this.sections[index].title = sectionTitle;
    },
    refNewTask: function(index){
      this.sections[index].taskList.push({
        sectionId: index+1,
        title: null,
        content: null,
        isEditTitle: false,
        isEditContent: false,
        isCheck: false,
        isStar: false,
      });
    },
    refChangeTask: function(sectionId, newTask){
      this.sections[sectionId-1].taskList.push(newTask);

    },
    refTaskDelete: function(index){
      this.section.taskList.splice(index,1);
    }

  },
};
</script>

<style scoped>
::v-deep .v-card__actions{
  align-items: start;
}
</style>