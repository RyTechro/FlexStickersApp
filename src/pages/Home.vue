<template>
  <div class="row pt-4">
    <div class="col-12">
      <center>
        <img src="/src/assets/logo.svg" class="logo" />
      </center>
    </div>
  </div>
  <div class="row targets pt-5">
    <div class="col-3">
      <span>Productie</span>
      <div class="target">&euro;?</div>
    </div>
    <div class="col-6">
      <span>Open orders</span>
      <div class="target">?</div>
    </div>
    <div class="col-3">
      <span>Target</span>
      <div class="target">&euro;?</div>
    </div>
  </div>
  <div class="row buttons pt-5">
    <div class="col-6">
      <router-link class="btn btn-primary btn-lg" to="/neworder/"
        >Nieuwe Order</router-link
      >
    </div>
    <div class="col-6">
      <button type="button" class="btn btn-secondary disabled btn-lg">
        Extra knop
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 7rem;
}
.targets > div[class^='col-'] {
  text-align: center;
}
.targets > div[class^='col-'] .target {
  font-size: 200%;
  font-weight: bold;
}
.buttons > div[class^='col-'] {
  text-align: center;
}
.buttons > div[class^='col-'] .btn {
  padding: 1rem 0rem;
  white-space: nowrap;
  width: 9rem;
  font-size: 110%;
}
</style>
