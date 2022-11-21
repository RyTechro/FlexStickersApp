<template>
  <div class="row totals">
    <div class="col-3">
      <span>Kostprijs</span>
      <div class="total">&euro;?</div>
    </div>
    <div class="col-3">
      <span>Uren</span>
      <div class="total">?</div>
    </div>
    <div class="col-3">
      <span>Marge</span>
      <div class="total">?%</div>
    </div>
    <div class="col-3">
      <span>Totaal</span>
      <div class="total">&euro;?</div>
    </div>
  </div>
  <div class="row customer pt-3">
    <div class="col-12">
      <label for="customerSearch" class="form-label">Klant</label>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Zoeken"
          aria-label="Klant"
          id="customerSearch"
          aria-describedby="button-addon2"
        />
        <span class="input-group-text"
          ><svg class="bi text-dark" width="12" height="12">
            <use
              xlink:href="node_modules/bootstrap-icons/bootstrap-icons.svg#search"
            /></svg
        ></span>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Nieuwe klant
        </button>
      </div>
    </div>
  </div>
  <div class="row project">
    <div class="col-12">
      <label for="project" class="form-label">Projectnaam</label>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Project"
          aria-label="Project"
          id="project"
        />
      </div>
    </div>
  </div>
  <div class="row lines">
    <h3>
      <u><i>Orderregels</i></u>
    </h3>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
  <div class="row dates">
    <div class="col-6">
      <label for="actiedatum" class="form-label">Actiedatum</label>
      <div class="input-group mb-3">
        <input
          type="date"
          class="form-control"
          aria-label="actiedatum"
          id="actiedatum"
        />
      </div>
    </div>
    <div class="col-6">
      <label for="deadline" class="form-label">Deadline</label>
      <div class="input-group mb-3">
        <input
          type="date"
          class="form-control"
          aria-label="deadline"
          id="deadline"
        />
      </div>
    </div>
  </div>
  <div class="row status">
    <div class="col-12">
      <label for="state" class="form-label">Status</label>
      <select class="form-select" id="state">
        <option value="quote">Offereren</option>
        <option value="design">Ontwerpen</option>
        <option value="waitcustomer">Wachten op reactie</option>
        <option value="production">Produceren</option>
        <option value="waitexternal">Wachten op levering</option>
        <option value="invoice">Facturen</option>
        <option value="finish">Afronden</option>
        <option value="noaction">Geen actie</option>
      </select>
    </div>
  </div>
  <div class="row state pb-5 mb-5">
    <div class="col-6">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkInfo"
        />
        <label class="form-check-label" for="checkInfo">
          Informatie compleet
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkCustomer"
        />
        <label class="form-check-label" for="checkCustomer">
          Klant akkoord
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkProduce"
        />
        <label class="form-check-label" for="checkProduce">
          Producten gemaakt
        </label>
      </div>
    </div>
    <div class="col-6">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkQuote"
        />
        <label class="form-check-label" for="checkQuote">
          Offerte verzonden
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkInvoice"
        />
        <label class="form-check-label" for="checkInvoice">
          Factuur verzonden
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="checkDone"
        />
        <label class="form-check-label" for="checkDone"> Afgerond </label>
      </div>
    </div>
  </div>
  <div class="saveButton">
    <svg class="bi text-dark" width="40" height="40">
      <use
        xlink:href="node_modules/bootstrap-icons/bootstrap-icons.svg#check"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tabNewOrder .totals > div[class^='col-'] {
  text-align: center;
}
#tabNewOrder .totals > div[class^='col-'] .total {
  font-size: 150%;
  font-weight: bold;
}
#tabNewOrder .saveButton {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: lime;
  position: fixed;
  right: 15px;
  bottom: 65px;
  text-align: center;
  line-height: 3;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
