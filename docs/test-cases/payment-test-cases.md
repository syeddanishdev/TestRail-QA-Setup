# Payment Test Cases

## TC004_Payment_Checkout_Success
- **Title**: Verify successful checkout payment
- **Preconditions**: Item in cart, user logged in
- **Steps**:
  1. Navigate to https://demo.opencart.com/index.php?route=checkout/cart.
  2. Proceed to checkout.
  3. Enter valid billing and shipping details.
  4. Select payment method (e.g., Cash on Delivery for demo).
  5. Confirm order.
- **Expected Result**: Order confirmation displayed.
- **Priority**: Critical
- **Type**: Functional
- **Risk Level**: Critical
- **Requirement**: US-201

## TC005_Payment_InvalidDetails
- **Title**: Verify handling of invalid payment details
- **Preconditions**: Item in cart
- **Steps**:
  1. Proceed to checkout.
  2. Enter invalid billing details (e.g., missing postal code).
  3. Confirm order.
- **Expected Result**: Error: "Please enter a valid postcode."
- **Priority**: High
- **Type**: Negative
- **Risk Level**: High
- **Requirement**: US-201

## TC006_Payment_HighLoad
- **Title**: Verify checkout under high load
- **Preconditions**: Load testing environment
- **Steps**:
  1. Simulate 2000 concurrent checkout attempts.
  2. Monitor transaction success rate and latency.
- **Expected Result**: 98% success rate, latency < 3s.
- **Priority**: Medium
- **Type**: Performance
- **Risk Level**: Medium
- **Requirement**: US-202

## TC007_Payment_XSSAttack
- **Title**: Verify payment resists XSS attack
- **Preconditions**: Checkout page accessible
- **Steps**:
  1. Proceed to checkout.
  2. Enter billing details with XSS payload (e.g., "<script>alert('hack')</script>" in name field).
  3. Confirm order.
- **Expected Result**: Input sanitized, no script execution.
- **Priority**: Critical
- **Type**: Security
- **Risk Level**: Critical
- **Requirement**: US-203