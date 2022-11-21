<script>
import { useMsgStore } from '../stores/msg';
export default {
  data() {
    return {
      name: 'MessageView.js',
      timer: null,
      messages: [],
    };
  },
  setup() {
    const msg = useMsgStore();
    return { msg };
  },
  // events: {
  //   messageAdded: function (argument) {
  //     alert('test');
  //   },
  // },
  mounted() {
    this.msg.addMsg('success', 'test');
    this.messages = this.msg.getMessages;
    alert(this.messages);
    this.timer = setInterval(() => {
      this.update();
    }, 1000);
  },

  methods: {
    update() {
      this.messages = [];
      this.messages = msgs.concat(this.msg.getMessages);
    },
  },
};
</script>

<template>
  <div id="message-view">
    <div v-for="message in messages">
      <div class="alert" :class="`alert-${message.type}`" role="alert">
        {{ message.message }}
      </div>
    </div>
  </div>
</template>

<style scoped>
#message-view {
  position: absolute;
  right: 0px;
  bottom: 55px;
  max-width: 50vw;
}

#message-view > .alert {
  margin-bottom: 0;
  margin-top: 0.5rem;
}
</style>
