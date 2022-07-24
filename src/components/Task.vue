<template>
  <v-app>
    <v-card width="260" class="mx-auto mb-2 pa-3">
      <v-form>
        <v-text-field
          type="text"
          label="task-title"
          v-model="inputTaskTitle"
          @blur="sendTaskTitle(task,taskId)"
          v-show="task.isEditTitle"
        >
        </v-text-field>
        <v-card
        @dblclick="editTaskTtl(task)"
        v-show="!task.isEditTitle"
        class="py-4"
        elevation-1
        >
        {{ task.title }}
        </v-card>
        <v-select
          v-model="selectSection"
          @change="sendSectionIdTaskId(selectSection, taskId)"
          :items="sectionTitleList"
          item-text="title"
          item-value="id"
          label="セクション"
          class="mt-3"
          outlined
        ></v-select>
        <v-textarea
        label="task-content"
        @blur="sendTaskContent(task, taskId)"
        v-show="task.isEditContent"
        v-model="inputTaskContent"
        ></v-textarea>
        <v-card-text
        @dblclick="editTaskContent(task)"
        v-show="!task.isEditContent"
        >
        {{task.content}}
        </v-card-text>
      </v-form>
      <div class="d-flex justify-end">
        <v-btn
          @click="editTaskContent(task)"
        >
          <v-icon
            class="mx-1"
            :color="task.isEditContent? 'primary':''"
          >
          mdi-border-color
          </v-icon>
        </v-btn>
        <v-btn
          @click="sendIsCheck(taskId)"
        >
          <v-icon
            class="mx-1"
            :color="task.isCheck? 'cyan':''"
          >
          mdi-check
          </v-icon>
        </v-btn>
        <v-btn
          @click="sendIsStar(taskId)"
        >
          <v-icon
            class="mx-1"
            :color="task.isStar? 'yellow':''"
          >
          mdi-star
          </v-icon>
        </v-btn>
        <v-btn
          @click="$emit('taskDelete',taskId)"
        >
          <v-icon
            class="mx-1"
          >
          mdi-delete
          </v-icon>
        </v-btn>
      </div>
    </v-card>
  </v-app>
</template>


<script>
export default {
  props: {
    initialSection: {
      type: Object,
      require: true,
    },
    initialSections: {
      type: [],
      require: true,
    },
    initialTask: {
      type: Object,
      require: true,
    },
    initialTaskId: {
      type: Number,
      require: true,
    }
  },
  data() {
    return{
      inputTaskTitle: '',
      inputTaskContent: '',
      section: this.initialSection,
      sections: this.initialSections,
      task: this.initialTask,
      taskId: this.initialTaskId,
      selectSection: {
        id: this.initialSection.id,
        title: this.initialSection.title,
      },
    }
  },
  methods: {
    editTaskTtl: function(task){
      return task.isEditTitle = !task.isEditTitle;
    },
    editTaskContent: function(task){
      return task.isEditContent = !task.isEditContent;
    },
    sendTaskTitle: function(task, index){
      this.editTaskTtl(task);
      this.$emit("editTaskTtl", this.inputTaskTitle, index);
      this.inputTaskTitle = "";
    },
    sendTaskContent: function(task, index){
      this.editTaskContent(task);
      this.$emit("editTaskContent", this.inputTaskContent, index);
      this.inputTaskContent = "";
    },
    sendIsCheck: function(index){
      this.$emit("signIsCheck", index);
    },
    sendIsStar: function(index){
      this.$emit('signIsStar', index);
    },
    sendSectionIdTaskId: function(sectionId, taskIndex){
      this.$emit("changeTask", sectionId, taskIndex)
    }
  },
  computed: {
    initSectionTitle: function(){
      return this.section.title;
    },
    sectionTitleList: function(){
      return this.sections
              .filter(section => section.title != null);
    }
  },
}
</script>

<style scoped>
  ::v-deep .v-application--wrap {
    min-height: fit-content;
  }
  ::v-deep .v-btn:not(.v-btn--round).v-size--default{
    height: unset;
    min-width: fit-content;
    padding: unset;
  }
  ::v-deep .theme--light.v-btn.v-btn--has-bg{
    background-color: #fff;
  }
  ::v-deep .v-btn--is-elevated{
    box-shadow: unset;
  }
  ::v-deep .v-text-field--outlined > .v-input__control > .v-input__slot {
    min-height: unset;
  }
</style>
