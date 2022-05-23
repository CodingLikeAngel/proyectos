
const { createApp } = Vue; /* global Vue */
//export const vueApp = createApp({});

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')