<template>
  <h1>Login</h1>
  <form @submit="onSubmit">
    <div class="mb-3">
      <label for="selectUser" class="form-label">Gebruiker</label>
      <select class="form-control" id="selectUser" v-model="user">
        <option value="1">Robin</option>
        <option value="2" ref="defaultOption">Boas</option>
        <option value="3">Erik</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="tokenInput" class="form-label">Token</label>
      <input
        type="password"
        class="form-control"
        id="tokenInput"
        v-model="token"
        aria-describedby="tokenHelp"
        required
      />
      <div id="tokenHelp" class="form-text">
        Vraag een eenmalige token bij Robin
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Inloggen</button>
  </form>
</template>
<script>
import { useAuthStore } from '../stores/auth';
import { toRefs } from 'vue';
export default {
  name: 'LoginForm',
  data() {
    return {
      user: '',
      token: '',
    };
  },
  setup() {
    const store = useAuthStore();
    return { store };
  },
  mounted() {
    this.user = this.$refs.defaultOption.value;
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.token) {
        // alert is ok due to clientside validation.
        return;
      }
      this.store.login(this.user, this.token);
      this.token = '';
      this.$router.push('/');
    },
  },
};
</script>

<style scoped></style>
