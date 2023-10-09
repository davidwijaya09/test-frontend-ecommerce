<template>
  <div class="summary-container">
    <p>Thank You</p>
    <p>Order Id: 500,000</p>
    <p>Your order will be delivered today with Go-SEND: 500,000</p>

    <p v-if="sendAsDropshipper">Dropshipping Fee: 5,900</p>
    <p>Total: {{ totalAmount }}</p>
    <!-- <button>
      Continue to Payment
    </button> -->
  </div>
</template>

<script>
export default {
  props: {
    sendAsDropshipper: {
      type: Boolean,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.summary-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.summary-container p {
  margin: 10px 0;
  font-weight: bold;
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
