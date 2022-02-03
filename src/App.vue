<template>
  <v-app>
    <div class="d-flex flex-row">
      <task-section
      v-for="(section, index) in sections"
      :index="index"
      :key="section.id"
      :initialSection="section"
      @editSectionTitle="refSectionTitle"
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
      // section: {
      //   id: null,
      //   title: null,
      //   taskList: [],
      // }
    }
  },
  methods: {
    addSection: function(){
      
    },
    refSectionTitle: function(){

      alert("セクションタイトルが変更しました")
    }
  },
  updated:function(){
    // console.log(this.sections);
  }
};
</script>
