function success(data) {
  return JSON.stringify({ status: 'success', data });
}

function error(message) {
  return JSON.stringify({ status: 'error', message });
}

module.exports = { success, error };