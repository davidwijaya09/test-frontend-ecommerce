<template>
  <div class="delivery-container">
    <!-- Progress steps -->
    <div class="progress-steps">
      <span class="active">1. Delivery</span>
      <span>2. Payment</span>
      <span>3. Finish</span>
    </div>

    <!-- Back to cart -->
    <button style="margin-bottom: 10px" @click="goBack">Back to cart</button>

    <!-- Delivery details form -->
    <div class="form-container">
      <input
        v-model="form.email"
        placeholder="Email"
        @blur="validateEmail"
        :class="form.emailValid ? 'valid' : 'invalid'"
      />

      <input
        v-model="form.phoneNumber"
        placeholder="Phone Number"
        @blur="validatePhoneNumber"
        :class="form.phoneNumberValid ? 'valid' : 'invalid'"
        type="number"
      />

      <textarea
        v-model="form.address"
        placeholder="Delivery Address"
        @blur="validateAddress"
        :class="form.addressValid ? 'valid' : 'invalid'"
      ></textarea>
      <p v-if="form.address">{{ 120 - form.address.length }} characters remaining</p>

      <label>
        <input type="checkbox" v-model="form.sendAsDropshipper" />
        Send as dropshipper
      </label>

      <div v-if="form.sendAsDropshipper">
        <input v-model="form.dropshipperName" placeholder="Dropshipper name" required />

        <input
          v-model="form.dropshipperPhoneNumber"
          placeholder="Dropshipper phone number"
          @blur="validateDropshipperPhoneNumber"
          :class="form.dropshipperPhoneNumberValid ? 'valid' : 'invalid'"
        />
      </div>
    </div>

    <!-- Summary section -->
    <div class="summary-container">
      <Summary :sendAsDropshipper="form.sendAsDropshipper" :totalAmount="totalAmount" />
      <!-- <p>10 items purchased</p>
      <p>Cost of goods: 500,000</p>
      <p v-if="form.sendAsDropshipper">Dropshipping Fee: 5,900</p>
      <p>Total: {{ totalAmount }}</p> -->

      <button><RouterLink :to="'/payment'">Continue to Payment</RouterLink></button>
    </div>
  </div>
</template>

<script>
// import { ref, computed } from 'vue'
import Summary from './Summary.vue'

export default {
  components: {
    Summary
  },
  data() {
    return {
      form: {
        email: '',
        phoneNumber: '',
        address: '',
        sendAsDropshipper: false,
        dropshipperName: '',
        dropshipperPhoneNumber: '',
        emailValid: false,
        phoneNumberValid: false,
        addressValid: false,
        dropshipperPhoneNumberValid: false
      }
    }
  },
  computed: {
    totalAmount() {
      return this.form.sendAsDropshipper ? 505900 : 500000
    }
  },
  methods: {
    goBack() {
      // Implement the logic to go back to cart
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.form.emailValid = emailPattern.test(this.form.email)
    },

    validatePhoneNumber() {
      const phoneNumberPattern = /^[0-9-\+\(\)]{6,20}$/
      this.form.phoneNumberValid = phoneNumberPattern.test(this.form.phoneNumber)
    },

    validateAddress() {
      this.form.addressValid = this.form.address.length > 0 && this.form.address.length <= 120
    },
    validateDropshipperPhoneNumber() {
      const phoneNumberPattern = /^[0-9-\+\(\)]{6,20}$/
      this.form.dropshipperPhoneNumberValid = phoneNumberPattern.test(
        this.form.dropshipperPhoneNumber
      )
    }
  }
}
</script>

<style scoped>
.delivery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fef3da;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  padding: 20px;
}

.progress-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.progress-steps span {
  flex: 1;
  text-align: center;
  padding: 10px;
  color: grey;
  font-weight: bold;
}

.progress-steps .active {
  color: black;
}

.form-container,
.summary-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.valid {
  border-color: green;
}

.invalid {
  border-color: orange;
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
