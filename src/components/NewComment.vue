<template>
  <el-button class="buttons" type='success' plain v-if="close" @click="textareaState">Add New Note</el-button>
  <div class="new-note" v-else>
    <form>
      <el-input
        v-model="newNote.name"
        style="width: 60vw"
        :rows="1"
        type="input"
        placeholder="Enter your name"
      />
      <el-input
        v-model="newNote.text"
        style="width: 60vw"
        :rows="5"
        type="textarea"
        placeholder="Enter patient note here..."
      />
      <div class="buttons">
        <el-button type="success" @click="textareaState(), cleanTextarea()" plain>Close</el-button>
        <el-button 
          type="info"
          :disabled="!newNote.name  ? '' : disabled || !newNote.text.length ? '' : disabled"
          @click="note.addNote(this.newNote), closeTextarea(), cleanTextarea()"
        >Save Note</el-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {useStore} from '../stores/store';
const note = useStore();

</script>

<script>
export default {
  name: 'NewComment',
  data: () => ({
    newNote: {
      name: '',
      text: '',
      date: new Date().toString(),
      id: Date.now()

    },
    disabled: false,
    close: true,
  }),
  methods: {
    textareaState() {
      this.close = !this.close
    },

    cleanTextarea() {
      this.newNote.name = '';
      this.newNote.text = ''
    },

    closeTextarea() {
      this.close = true
    }
  }
}
</script>

<style scoped>
  .new-note {
    width: 60vw;
  }

  .buttons {
    margin-top: 10px;
    text-align: end;
  }
</style>