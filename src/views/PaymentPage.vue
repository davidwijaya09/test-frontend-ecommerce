<template>
  <div class="checkout-container">
    <!-- Navigation steps -->
    <div class="nav-steps">
      <span class="active">1. Delivery</span>
      <span class="active">2. Payment</span>
      <span>3. Finish</span>
    </div>

    <button><RouterLink :to="'/payment'">Back to delivery</RouterLink></button>

    <!-- Shipment section -->
    <div class="section">
      <h2>Shipment</h2>
      <div class="shipment-options">
        <div class="shipment-option" @click="setShipment('GO-SEND', 15000)">
          <p>GO-SEND</p>
          <p>15,000</p>
          <p v-if="selectedShipment === 'GO-SEND'">✔</p>
        </div>

        <div class="shipment-option" @click="setShipment('JNE', 9000)">
          <p>JNE</p>
          <p>9,000</p>
          <p v-if="selectedShipment === 'JNE'">✔</p>
        </div>

        <div class="shipment-option" @click="setShipment('Personal Courier', 29000)">
          <p>Personal Courier</p>
          <p>29,000</p>
          <p v-if="selectedShipment === 'Personal Courier'">✔</p>
        </div>
      </div>
    </div>

    <!-- Payment section -->
    <div class="section">
      <h2>Payment</h2>
      <div class="payment-options">
        <div class="payment-option" @click="setPayment('e-Wallet', 1500000)">
          <p>e-Wallet</p>
          <p>1,500,000 left</p>
          <p v-if="selectedPayment === 'e-Wallet'">✔</p>
        </div>
        <div class="payment-option" @click="setPayment('Bank Transfer')">
          <p>Bank Transfer</p>
        </div>
        <div class="payment-option" @click="setPayment('Virtual Account')">
          <p>Virtual Account</p>
        </div>
      </div>
    </div>

    <!-- Summary section -->
    <div class="section summary">
      <h2>Summary</h2>
      <p>10 items purchased</p>
      <p>Delivery estimation: {{ deliveryEstimation }}</p>
      <p>Cost of goods: 500,000</p>
      <p>Dropshipping Fee: 5,900</p>
      <p>{{ selectedShipment }} shipment: {{ shipmentCost }}</p>
      <p>Total: {{ totalAmount }}</p>
      <button>Pay with {{ selectedPayment }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedShipment: null, // Initialized to null, so no shipment is selected by default
      shipmentCost: 0,
      selectedPayment: 'e-Wallet',
      shipmentOptions: [
        // Shipping options configuration
        { name: 'GO-SEND', cost: 15000, deliveryEstimate: 'today by GO-SEND' },
        { name: 'JNE', cost: 9000, deliveryEstimate: '2 days by JNE' },
        { name: 'Personal Courier', cost: 29000, deliveryEstimate: '1 day by Personal Courier' }
      ],
      paymentOptions: [
        // Payment options configuration
        { name: 'e-Wallet', buttonText: 'Pay with e-Wallet' },
        { name: 'Bank Transfer', buttonText: 'Pay via Bank Transfer' },
        { name: 'Virtual Account', buttonText: 'Pay using Virtual Account' }
      ]
    }
  },

  computed: {
    // Extracted from configuration
    deliveryEstimation() {
      let option = this.shipmentOptions.find((o) => o.name === this.selectedShipment)
      return option ? option.deliveryEstimate : 'Please select a shipment method'
    },
    paymentButtonText() {
      let option = this.paymentOptions.find((o) => o.name === this.selectedPayment)
      return option ? option.buttonText : 'Select a payment method'
    },
    totalAmount() {
      return 500000 + 5900 + this.shipmentCost
    }
  },

  methods: {
    setShipment(method, cost) {
      this.selectedShipment = method
      this.shipmentCost = cost || 0
    },
    setPayment(method) {
      this.selectedPayment = method
    }
  }
}
</script>

<style scoped>
.checkout-container {
  padding: 20px;
  background-color: #fef3da;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-steps {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.nav-steps span {
  margin: 0 10px;
  color: gray;
}

.nav-steps .active {
  color: black;
}

.section {
  width: 80%;
  margin-bottom: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

h2 {
  margin-top: 0;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
}

.shipment-options,
.payment-options {
  display: flex;
  justify-content: space-between;
}

.shipment-option,
.payment-option {
  width: 30%;
  padding: 10px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.shipment-option:hover,
.payment-option:hover {
  background-color: #f9f4e8;
}

button {
  background-color: #ff9700;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e88600;
}
</style>
