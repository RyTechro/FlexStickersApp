<script>
export default {
  data() {
    return {
      name: 'NavBar.js',
      left: '0px',
      width: '0px',
    };
  },
  mounted: function () {
    this.left = this.$refs.home.offsetLeft + 'px';
    this.width = this.$refs.home.offsetWidth + 'px';
  },
  computed: {
    computedLeft: function () {
      return this.left;
    },
    computedWidth: function () {
      return this.width;
    },
  },
  methods: {
    switchPage(event) {
      this.left = event.target.offsetLeft + 'px';
      this.width = event.target.offsetWidth + 'px';
    },
  },
};
</script>

<template>
  <div class="navbar">
    <div
      class="tab-highlighter"
      v-bind:style="{ left: computedLeft, width: computedWidth }"
    ></div>
    <ul class="nav fixed-bottom nav-pills nav-fill">
      <li class="nav-item">
        <a class="nav-link disabled" data-tab="tabProducts" href="#tabProducts">
          <svg class="bi text-dark" width="28" height="28">
            <use
              xlink:href="node_modules/bootstrap-icons/bootstrap-icons.svg#umbrella"
            />
          </svg>
        </a>
      </li>
      <li class="nav-item">
        <router-link @click="switchPage" class="nav-link" to="/orders/"
          >Orders</router-link
        >
      </li>
      <li class="nav-item" ref="home">
        <router-link @click="switchPage" class="nav-link" to="/"
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" data-tab="tabStats" href="#tabStats">
          <svg class="bi text-dark" width="28" height="28">
            <use
              xlink:href="node_modules/bootstrap-icons/bootstrap-icons.svg#bar-chart-line"
            />
          </svg>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link disabled"
          data-tab="tabCustomers"
          href="#tabCustomers"
        >
          <svg class="bi text-dark" width="28" height="28">
            <use
              xlink:href="node_modules/bootstrap-icons/bootstrap-icons.svg#book"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tab {
  display: none;
}
.tab.active {
  display: block;
}
.navbar {
  background-color: #fff;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 3px 10px 1px #000;
}
.navbar .tab-highlighter {
  height: 44px;
  width: 78.5px;
  background: #007bff;
  position: fixed;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  bottom: 4px;
  left: calc(50% - 40px);
  transition: all 0.6s cubic-bezier(0.21, 0.61, 0.36, 1);
}
.navbar .nav.fixed-bottom {
  bottom: 4px;
  padding: 0 4px;
}
.navbar .nav.fixed-bottom .nav-link:not(.disabled) {
  cursor: pointer;
}
.navbar .nav.fixed-bottom .nav-link.active,
.navbar .nav.fixed-bottom .nav-pills .show > .nav-link {
  background-color: inherit;
}
.navbar .nav.fixed-bottom .nav-link.disabled {
  background-color: #a9afb5;
}
</style>
