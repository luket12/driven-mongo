<template>
  <div>
    <h2>Add a note</h2>
    <div class="row">
      <div class="form-group col-10">
        <label for="title">Note Title</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="note.title"
          class="form-control">
      </div>
      <div class="form-group col-10">
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          v-model="note.body"
          class="form-control"></textarea>
      </div>
    </div>
    <button
      class="btn btn-success"
      @click="postNote"
    >Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'add-note',
  components: {},
  data() {
    return {
      note: {}
    }
  },
  methods: {
    postNote() {
      console.log(this.note);
      axios.post('http://localhost:3000/note/add', this.note)
        .then(() => {
          // Success validation
        })
    }
  }
}
</script>
