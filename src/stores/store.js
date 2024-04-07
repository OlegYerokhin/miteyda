import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    notes: [
      {
        id: 0,
        name: 'Anna White',
        photoUrl: 'https://t4.ftcdn.net/jpg/06/20/41/55/360_F_620415503_nwuRSJY7WE9bkwxEuo8F9BoGthLRvdb4.jpg',
        date: 'February 19, 2024 10:00:00',
        text: "This is Anna's note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      },
      {
        id: 1,
        name: 'Fred Perry',
        photoUrl: 'https://cdn.pixabay.com/photo/2023/04/28/23/32/ai-generated-7957457_960_720.png',
        date: 'February 18, 2024 12:30:00',
        text: "This is Fred's note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      },
      {
        id: 2,
        name: 'Veronica Ricci',
        photoUrl: 'https://static.vecteezy.com/system/resources/previews/032/413/929/large_2x/ai-generated-beautiful-woman-looking-at-the-camera-blurred-background-close-up-face-free-photo.jpg',
        date: 'February 23, 2024 17:15:00',
        text: "This is Veronica's note. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
    ]
  }),
  actions: {
    deleteNote(id) {
      const note = this.notes.findIndex(el => el.id === id)
      this.notes.splice(note, 1)
    },
    addNote(name, text) {
      const notes = useStore();
      notes.notes.push({...name, ...text})
    }
  }
});