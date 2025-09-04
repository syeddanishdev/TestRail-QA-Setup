require('dotenv').config();

// Mock TestRail API integration
const TESTRAIL_URL = process.env.TESTRAIL_URL || 'https://mock-testrail-instance/index.php?/api/v2';
const TESTRAIL_USER = process.env.TESTRAIL_USER || 'mock-user@example.com';
const TESTRAIL_API_KEY = process.env.TESTRAIL_API_KEY || 'mock-api-key';

async function addTestResult(runId, caseId, statusId, comment = '') {
  try {
    // Mock API response for demonstration
    const mockResponse = {
      status: 'success',
      run_id: runId,
      case_id: caseId,
      status_id: statusId,
      comment: comment,
      timestamp: new Date().toISOString()
    };
    console.log('Mock TestRail result added:', mockResponse);
    return mockResponse;
  } catch (error) {
    console.error('Mock API error:', error.message);
    throw error;
  }
}

module.exports = { addTestResult };