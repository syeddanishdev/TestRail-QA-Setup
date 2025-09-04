# Login Test Cases

## TC001_Login_ValidCredentials
- **Title**: Verify successful login with valid credentials
- **Preconditions**: Registered user account on demo.opencart.com
- **Steps**:
  1. Navigate to https://demo.opencart.com/index.php?route=account/login.
  2. Enter email: "test@example.com".
  3. Enter password: "ValidPass123".
  4. Click "Login."
- **Expected Result**: Redirected to account dashboard.
- **Priority**: High
- **Type**: Functional
- **Risk Level**: High
- **Requirement**: US-101

## TC002_Login_SQLInjection
- **Title**: Verify login resists SQL injection
- **Preconditions**: Login page accessible
- **Steps**:
  1. Navigate to login page.
  2. Enter email: "user' OR '1'='1".
  3. Enter password: "pass' OR '1'='1".
  4. Click "Login."
- **Expected Result**: Error: "Warning: No match for E-Mail Address and/or Password."
- **Priority**: Critical
- **Type**: Security
- **Risk Level**: Critical
- **Requirement**: US-103

## TC003_Login_ConcurrentUsers
- **Title**: Verify login under 1000 concurrent users
- **Preconditions**: Load testing environment
- **Steps**:
  1. Simulate 1000 concurrent login attempts.
  2. Monitor response time and success rate.
- **Expected Result**: 95% success rate, response time < 2s.
- **Priority**: Medium
- **Type**: Performance
- **Risk Level**: Medium
- **Requirement**: US-104