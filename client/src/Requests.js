class Requests {
  static fetchUserNotes(currentUser) {
      let auth_response = currentUser.getAuthResponse();
      let id_token = auth_response.id_token;
    return fetch('/api/login', {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id_token: id_token
        })
    }).then(Requests._checkStatus)
      .then(Requests._parseJSON);
  }

  static _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error); // eslint-disable-line no-console
      throw error;
    }
  }

  static _parseJSON(response) {
    return response.json();
  }
}

export default Requests;
