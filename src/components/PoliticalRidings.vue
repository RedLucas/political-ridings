<script>
  var $ = require('jquery');
  export default {
    name: "PoliticalRidings",
    props: ['party'],
    data: function() {
      return {
        parties: [
          'red', 
          'green'
        ],
        ridings: [
          {
            name: '',
            party: 'red'
          },
          {
            name: '',
            party: 'green'
          }
        ],
        selected: ''
      }
    },
    computed: {

    },
    methods: {
      changeRiding: function (party, e, i) {
        switch (this.ridings[i].party) {
          case 'red':
            this.ridings[i].party = 'green';
            break;
          case 'green':
            this.ridings[i].party = 'red';
            break;
          default:
            this.ridings[i].party = 'blue';
        }
      },
      addRiding: function (e) {
        var selectedRiding = this.selected;
        this.ridings.push({
          name: '',
          party: selectedRiding
        })
      }
    },
    ready: function() {
    }
  }
</script>

<template>
  <div class="input-group">
    <label>
      Select Party
      <select v-model="selected">
        <template v-for="party in parties">
          <option selected v-if="party === 'red'" :value="party">{{ party }}</option>
          <option  v-else :value="party">{{ party }}</option>
        </template>
      </select>
    </label>
    <div class="input-group-button">
      <button :class="['button']" @click="addRiding">Add</button>
    </div>
  </div>
  <div class="row align-spaced territory">
    <div class="columns small-3 square" v-for="riding in ridings">
      <div transition="fade" :party="riding.party" @click="changeRiding(riding.party, $event, $index)"></div>
    </div>
  </div>
</template>

<style lang="sass">
  // Imports
  @import "../variables.scss";

  [party=green] {
    background: green;
  }
  [party=red] {
    background: red;
  }
  .columns > div {
    text-align: center;
  }
  input {
    color: white;
  }
  .territory {
    min-height: 50vmin;
    height: 100%;
    max-height: 100vmin;
  }
  .square {
    display: flex;
    padding-top: 0.9375rem;
    padding-bottom: 0.9375rem;
    max-height: 25vmin;
    div {
      flex: 50%;
    }
  }
  .fade-transition {
    transition: all 0.3s ease;
  }

</style>
