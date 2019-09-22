<template>
  <div>
    <h2>Add Todo</h2>
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        v-model="todo.title"
        class="form-control"
      >
    </div>
    <MultiTextInput />
    <button
      class="btn btn-success"
      @click="postTodo"
    >Submit</button>
  </div>
</template>
<script>
  import MultiTextInput from "../MultiText/MultiTextInput";

  export default {
    name: 'add-todo',
    components: {MultiTextInput},
    data() {
      return {
        todo: {
          list: []
        },
      }
    },
    methods: {
      postTodo() {
      }
    }
  }
</script>
