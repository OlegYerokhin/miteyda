<template>
<div id="app" class="app">
  <div>
    <NoteElem />
    <NewComment />
  </div>
</div>
</template>

<script>
import NoteElem from './components/NoteElem.vue'
import NewComment from './components/NewComment.vue'

export default {
  name: 'App',
  components: {
    NoteElem,
    NewComment,
  }
}
</script>

<style>
  .app {
    font-family: system-ui;
    text-align: -webkit-center;
  }
</style>
