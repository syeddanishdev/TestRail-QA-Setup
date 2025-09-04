# Checkout Test Cases

## TC008_Checkout_Guest_Success
- **Title**: Verify successful guest checkout
- **Preconditions**: Item in cart
- **Steps**:
  1. Navigate to https://demo.opencart.com/index.php?route=checkout/cart.
  2. Select "Guest Checkout."
  3. Enter valid shipping details.
  4. Select payment method (e.g., Cash on Delivery).
  5. Confirm order.
- **Expected Result**: Order confirmation displayed.
- **Priority**: High
- **Type**: Functional
- **Risk Level**: High
- **Requirement**: US-301

## TC009_Checkout_MaxItems
- **Title**: Verify checkout with maximum cart items
- **Preconditions**: Cart supports multiple items
- **Steps**:
  1. Add 50 items to cart (max for demo site).
  2. Proceed to checkout.
  3. Complete payment.
- **Expected Result**: Order processed successfully.
- **Priority**: Medium
- **Type**: Edge Case
- **Risk Level**: Medium
- **Requirement**: US-302

## TC010_Checkout_SessionTimeout
- **Title**: Verify checkout session timeout handling
- **Preconditions**: Item in cart
- **Steps**:
  1. Proceed to checkout.
  2. Wait for session timeout (e.g., 30 minutes).
  3. Attempt to confirm order.
- **Expected Result**: Session expired error, redirect to login.
- **Priority**: Medium
- **Type**: Negative
- **Risk Level**: Medium
- **Requirement**: US-303