<template>
  <div>
    <div class="note" v-for="note in notes.notes" :key="note.id">
      <div class="user-info">
        <div class="person">
          <div>
            <el-avatar size="large" :src="`${note.photoUrl}`" :alt="note.name" />
          </div>
          <div class="name">
            <el-text tag="b" size="large">{{ note.name }}</el-text>
          </div>
        </div>
        <div>
          <el-text>{{ new Date(note.date).toLocaleString('en', {month: 'long'}) }} {{ new Date(note.date).getDate() }}, {{ new Date(note.date).getHours() }}:{{ new Date(note.date).getMinutes() }}</el-text>
        </div>
      </div>
      <div>
        <div>
          <el-text class="note-text">{{ note.text }}</el-text>
        </div>
        <div class="delete">
          <el-button size="small" :icon="Delete" plain circle @click="notes.deleteNote(note.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup> 
import {useStore} from '../stores/store';
import { Delete } from '@element-plus/icons-vue'

const notes = useStore();
</script>

<style scoped>
  .note {
    width: 60vw;
    text-align: justify;
    margin: 50px;
  }

  .user-info {
    display: flex;
    margin: 20px;
    justify-content: space-between;
  }

  .person {
    display: flex;
  }

  .name {
    margin-left: 10px;
    align-self: center;
  }

  .date {
    
    align-self: center;
  }

  .delete {
    text-align: end;
  }
</style>