<template>
  <v-app>
    <v-card max-width="300px" class="mx-3 pa-2">
      <v-card-text>
        <v-text-field
        v-show="isSecTtl"
        @blur="sendSectionTitle"
        type="text"
        label="section-title"
        v-model="inputSectionTitle"
        >
        </v-text-field>
      </v-card-text>
      <v-card
        @dblclick="editSecTtl"
        v-show="!isSecTtl"
        class="mb-2 py-4 px-2" elevation-2>
        {{ section.title }}
      </v-card>
      <task
      v-for="(task, index) in section.taskList"
      :key="index"
      :initialSection="section"
      :initialSections="sections"
      :initialTask="task"
      :initialTaskId="index"
      @editTaskTtl='refTaskTitle'
      @editTaskContent="refTaskContent"
      @signIsCheck="refIsCheck"
      @signIsStar="refIsStar"
      @changeTask="refChangeTask"
      @taskDelete="refTaskDelete"
      />
      <task-new
        :initialSection="section"
        @addNewTask="refNewTask"
      />
    </v-card>
  </v-app>
</template>

<script>
import Task from './Task.vue'
import TaskNew from './TaskNew.vue'
export default {
  components: { Task, TaskNew },
  props:['initialSection','initialSections','index'],
  data() {
    return {
      isSecTtl: false,
      inputSectionTitle: '',
      section: this.initialSection,
      sections: this.initialSections,
      i: this.index,
    }
  },
  methods:{
    editSecTtl: function(){
      return this.isSecTtl = !this.isSecTtl;
    },
    sendSectionTitle: function(){
      this.editSecTtl();
      this.$emit("editSectionTitle", this.inputSectionTitle, this.i);
    },
    refNewTask: function(){
      this.$emit('addNewTask', this.i);
    },
    refTaskTitle: function(taskTitle, index){
      this.section.taskList[index].title = taskTitle;
      return this.section;
    },
    refTaskContent: function(taskContent, index){
      this.section.taskList[index].content = taskContent;
    },
    refIsCheck: function(index){
      this.section.taskList[index].isCheck = !this.section.taskList[index].isCheck;
    },
    refIsStar: function(index){
      this.section.taskList[index].isStar = !this.section.taskList[index].isStar;
    },
    refChangeTask: function(sectionId,taskIndex){
      const currTask = this.section.taskList[taskIndex];
      // スプレット構文でオブジェクトを値渡しする
      const newTask = {...currTask};
      // Object.assign()メソッドでオブジェクトを値渡しする
      // Object.assign(target'{}空のオブジェクト', source'コピーするタスク')
      // const newTask = Object.assign({},currTask);
      this.refTaskDelete(taskIndex);
      this.$emit('changeTask', sectionId, newTask);
      return this.section;
    },
    refTaskDelete: function(index){
      this.section.taskList.splice(index,1);
    }
  },
}
</script>