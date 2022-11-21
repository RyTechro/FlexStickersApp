<script>
import axios from 'axios';
export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    this.refreshOrders();
  },
  methods: {
    refreshOrders() {
      axios.get('https://webdesignnop.nl/orders/').then(this.resultOrders);
    },
    resultOrders(response) {
      this.info = response.data;
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-center">Bestellingen</h2>
      {{ info }}
      <table class="table dataTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Klant</th>
            <th scope="col">Project</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Mark</td>
            <td>Stickers</td>
            <td>Productie</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
