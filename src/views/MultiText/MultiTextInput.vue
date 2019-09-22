<template>
  <div>
    <h2>Multi Text input</h2>
    <div class="form-group">
      <input
        v-for="(value, key) in listItems"
        type="text"
        v-bind:name="`input-${key}`"
        v-bind:key="key"
        v-bind:ref="`input-${key}`"
        v-model="value.text"
        class="form-control my-2"
        v-on:keydown="handleMultiInput"
      >
      <button class="btn btn-primary btn-md" @click="addItem"><slot>Add Input</slot></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'multi-text-input',
  components: {},
  props: {
    multiListItems: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      listItems: [{
        text: ''
      }],
    }
  },
  methods: {
    handleMultiInput() {
      if (!this.listItems.every((item) => item.text.length > 0)) {
        return;
      }
      this.addItem();
    },
    addItem() {
      this.listItems.push({text: ''});
    }
  }
}
</script>
