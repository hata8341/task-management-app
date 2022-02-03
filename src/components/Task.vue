<template>
  <v-app>
    <v-card width="260" class="mx-auto mb-2 pa-3">
      <v-form>
        <v-text-field
          type="text"
          label="task-title"
          v-model="inputTaskTitle"
          @blur="sendTaskTitle()"
          v-show="isTaskTtl"
        >
        </v-text-field>
        <v-card
        @dblclick="editTaskTtl"
        v-show="!isTaskTtl"
        class="py-4"
        elevation-1
        >
        <!-- {{task.title}} -->
        </v-card>
        <v-card-title>セクション名：{{ section.title }}</v-card-title>
        <v-textarea
        label="task-content"
        @blur="sendTaskContent()"
        v-show="isTaskContent"
        v-model="inputTaskContent"
        ></v-textarea>
        <v-card-text
        @dblclick="editTaskContent"
        v-show="!isTaskContent"
        >
        {{task.content}}
        </v-card-text>
      </v-form>
      <div class="d-flex justify-end">
        <v-btn
          @click="editTaskContent"
        >
          <v-icon
            class="mx-1"
            :color="isTaskContent? 'primary':''"
          >
          mdi-border-color
          </v-icon>
        </v-btn>
        <v-btn
          @click="isCheck = !isCheck"
        >
          <v-icon
            class="mx-1"
            :color="isCheck? 'cyan':''"
          >
          mdi-check
          </v-icon>
        </v-btn>
        <v-btn
          @click="isStar = !isStar"
        >
          <v-icon
            class="mx-1"
            :color="isStar? 'yellow':''"
          >
          mdi-star
          </v-icon>
        </v-btn>
        <v-btn
          @click="$emit('taskDelete')"
        >
          <v-icon
            class="mx-1"
          >
          mdi-delete
          </v-icon>
        </v-btn>
        <!-- <v-btn><v-icon class="mx-1" color="">mdi-check</v-icon></v-btn>
        <v-btn><v-icon class="mx-1" color="">mdi-star</v-icon></v-btn>
        <v-btn><v-icon class="mx-1" color="">mdi-delete</v-icon></v-btn> -->
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
    initialTask: {
      type: Object,
      require: true,
    }
  },
  data() {
    return{
      isTaskTtl: false,
      isTaskContent: false,
      isCheck: false,
      isStar: false,
      inputTaskTitle: '',
      inputTaskContent: '',
      section: this.initialSection,
      task: this.initialTask,
    }
  },
  methods: {
    editTaskTtl: function(){
      return this.isTaskTtl = !this.isTaskTtl;
    },
    editTaskContent: function(){
      return this.isTaskContent = !this.isTaskContent;
    },
    sendTaskTitle: function(){
      this.editTaskTtl();
      this.$emit("editTaskTtl", this.inputTaskTitle);
    },
    sendTaskContent: function(){
      this.editTaskContent();
      this.$emit("editTaskContent", this.inputTaskContent);
    },
    sendTaskDelete: function(){
      this.$emit("taskDelete");
    }
  },
  computed: {

  }
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
</style>