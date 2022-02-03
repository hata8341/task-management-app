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
      <v-spacer></v-spacer>
      <task
      :initialSection="section"
      :initialTask="task"
      @editTaskTtl='refTaskTitle'
      @editTaskContent="refTaskContent"
      @taskDelete="refTaskDelete"
      />
      <task-new />
    </v-card>
  </v-app>
</template>

<script>
import Task from './Task.vue'
import TaskNew from './TaskNew.vue'
export default {
  components: { Task, TaskNew },
  props:['initialSection','index'],
  data() {
    return {
      isSecTtl: false,
      inputSectionTitle: '',
      section: this.initialSection,
      i: this.index,
      task: {
        sectionId: null,
        title: null,
        content: null,
      },
    }
  },
  methods:{
    editSecTtl: function(){
      return this.isSecTtl = !this.isSecTtl;
    },
    createSecIdTtl: function(i,title){
      this.section.id = i + 1;
      this.section.title = title;
      return this.section
    },
    sendSectionTitle: function(){
      this.editSecTtl();
      this.$emit("editSectionTitle", this.inputSectionTitle);
    },
    refTaskTitle: function(value){
      console.log(value);
    },
    refTaskContent: function(value){
      console.log(value);
    },
    refTaskDelete: function(){
      alert("タスク削除の通知です");
    }
  },
  created: function(){
    // console.log(this.section.id);
  }
}
</script>