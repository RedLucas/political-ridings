<script>
  export default {
    name: "DisplayForm",

    data: function() {
      return {
        title: 'Title',
        body: 'Body',
        user: {
          title: '',
          body: ''
        }
      }
    },

    ready: function() {
      
    }
  }
</script>

<template>
  <div class="row">
    <div class="medium-6 columns">
      <label>{{title}}
        <input type="text" v-model="user.title" :placeholder="title">
      </label>
    </div>
    <div class="medium-6 columns">
      <label>{{body}}
        <textarea v-model="user.body" :placeholder="body"></textarea>
      </label>
    </div>
  </div>
   <div class="medium-12 columns">
      <h1> {{user.title}} </h1>
    </div>
    <div class="medium-12 columns">
      <p> {{user.body}} </p>
    </div>
  </div>
</template>

<style lang="sass">
  // Imports
  @import "../variables.scss";

  // Styles
  .quote-wrapper{
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.14);
    padding: 2em;
    border: solid 1px $grey2;
    margin-top: 1em;
  }

</style>
