<template>
  <v-app>
    <v-card-actions>
      <v-btn color="">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-app>
</template>

<script>
export default {
  data() {
    return{

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
</style>