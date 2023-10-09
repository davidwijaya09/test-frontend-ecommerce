<template>
  <div class="checkout-container">
    <!-- Progress steps -->
    <div class="progress-steps">
      <span class="active">1. Delivery</span>
      <span>2. Payment</span>
      <span class="finish">3. Finish</span>
    </div>

    <!-- Thank You section -->
    <div class="thankyou-section">
      <h2>Thank you</h2>
      <p>Order ID: {{ orderId }}</p>
      <p>Your order will be delivered today with GO-SEND</p>
      <router-link :to="{ name: 'Delivery' }">
        <button>Go to homepage</button>
      </router-link>
    </div>

    <!-- Summary section -->
    <div class="summary-section">
      <h2>Summary</h2>
      <p>10 items purchased</p>
      <p>Delivery estimation: today by GO-SEND</p>
      <p>Payment method: Bank Transfer</p>
      <p>Cost of goods: 500,000</p>
      <p>Dropshipping Fee: 5,900</p>
      <p>GO-SEND shipment: 15,000</p>
      <h3>Total: 505,900</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: this.generateOrderId(),
    };
  },

  methods: {
    generateOrderId() {
      const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
      let result = "";
      for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    },
  },
};
</script>

<style scoped>
.checkout-container {
  padding: 20px;
  background-color: #fef3da;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

.progress-steps {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.progress-steps span {
  margin: 0 10px;
  color: gray;
  cursor: pointer;
}

.progress-steps .active {
  color: black;
}

.progress-steps .finish {
  color: orange;
}

.thankyou-section,
.summary-section {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
}

h2 {
  margin-top: 0;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
}

h3 {
  color: orange;
  font-size: 24px;
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
