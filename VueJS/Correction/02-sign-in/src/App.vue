<script setup>
  import { ref, computed } from 'vue'

  const email = ref('')
  const emailTouched = ref(false)
  const password = ref('')
  const passwordTouched = ref(false)

  const passwordInvalid = computed(() => {
    return password.value.trim() === '' && passwordTouched.value
  })

  const emailInvalid = computed(() => {
    console.log(email.value);
    const regexpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    // const regexpEmailBis = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$', 'g')
    return emailTouched.value && !regexpEmail.test(email.value)
  })
</script>

<template>
  <form action="#">
    <h3>Sign In</h3>
    <div>
      <label for="email">Email: </label>
      <input v-model="email" id="email" @input="emailTouched = true" type="email" required>
      <span v-if="emailInvalid">Invalid email!</span>
    </div>
    
    <div>
      <label for="password">Password: </label>
      <input v-model="password" @input="passwordTouched = true" id="password" type="password" required>
      <span v-if="passwordInvalid">Invalid password!</span>
    </div>

    <button :disabled="passwordInvalid || emailInvalid || !passwordTouched || !emailTouched">Submit</button>
  </form>
</template>

<style scoped>
  form {
    height: 65%;
    aspect-ratio: 1.1 / 1;
    padding: 10%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    border-radius: 2em;
    gap: 5%;
    background-color: rgb(86, 21, 21);
  }

  

  form > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  form > h3, form > div > span, form > button, form > div > input, form > div > label {
    color: hsl(0, 0%, 95%);
    font-size: 1.2rem;
    font-family: monospace;
  }

  form > h3 {
    font-size: 2rem;
    align-self: center;
  }

  form > div > span {
    margin-top: 0.25em;
  }

  form > div > input {
    background-color: hsl(0, 0%, 10%);
    border: hsl(0, 0%, 95%) 1px solid;
    border-radius: 0 0.25rem 0.25rem 0;
    margin-left: auto;
    padding: 0.25em;
    width: 75%;
    box-sizing: border-box;
  }

  form > div:nth-child(3) {
    margin-bottom: auto;
  }

  form > button {
    background-color: hsl(0, 0%, 10%);
    border: none;
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 2rem;
    transition: background-color 400ms ease, scale 400ms ease;
  }

  form > button:is([disabled]) {
    background-color: gray;
  }

  form > button:not([disabled]):hover {
    scale: 1.05;
    cursor: pointer;
    background-color: hsl(0, 0%, 22%);
  }
</style>
