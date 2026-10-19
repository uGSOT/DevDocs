
# Vue.js Getting Started Guide

Vue.js is a progressive JavaScript framework for building interactive user interfaces.

## 1. Create a Vue Project

Make sure Node.js is installed, then run:

```bash
npm create vue@latest
```

Follow the prompts to configure your project.

```bash
cd your-project-name
npm install
npm run dev
```

Open the local URL displayed in your terminal.

## 2. Create Your First Vue Component

Create `HelloWorld.vue` inside your Vue project's `src/components` folder.

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Hello, Vue!</h1>
  <p>Count: {{ count }}</p>
  <button @click="count++">
    Increase Count
  </button>
</template>
```

## 3. Reactive State

The `ref()` function creates reactive state. Vue automatically updates the displayed value when the count changes.

## 4. Conditional Rendering

Use `v-if` to display content conditionally.

```html
<p v-if="count > 5">Count is greater than 5!</p>
```

## 5. List Rendering

Use `v-for` to render a list.

```html
<li v-for="item in ['HTML', 'CSS', 'JavaScript']" :key="item">
  {{ item }}
</li>
```

## Learn More

Official Vue.js documentation: https://vuejs.org/guide/
