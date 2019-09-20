<template>
  <div>
    <h2>Add a note</h2>
    <div class="row">
      <div class="form-group col-10">
        <label for="title">Note Title</label>
        <input type="text" name="title" id="title" class="form-control">
      </div>
      <div class="form-group col-10">
        <textarea name="body" id="body" cols="30" rows="10" class="form-control"></textarea>
      </div>
    </div>
    <button class="btn btn-success">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'add-note',
  components: {},
}
</script>
