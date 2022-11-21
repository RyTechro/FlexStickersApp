import { defineStore } from 'pinia';

export const useMsgStore = defineStore('msg', {
  state: () => {
    return {
      messages: [],
    };
  },
  actions: {
    addMsg(type, message) {
      const allowed = ['success', 'info', 'warn', 'danger', 'error'];
      if (!allowed.includes(type)) {
        this.addMsg('error', 'Message with incorect type');
        // Escalate message to highest
        this.addMsg('danger', message);
        return;
      }

      this.messages.push({ type: type, message: message });
      // this.$emit('messageAdded');
    },
  },
  getters: {
    getMessages() {
      let msgs = this.messages;
      this.messages = [];
      return msgs;
    },
  },
});
