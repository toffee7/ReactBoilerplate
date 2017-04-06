import 'whatwg-fetch';



const checkStatus = (response) => {
  if (response.status === 200 ) {
    return response;
  } else if (response.status === 401) {
    window.location.href = "url";
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

class Service {

  getObject(optionsGetMethod) {
    return fetch(rootUrl + '/rule', optionsGetMethod)
    .then(checkStatus)
    .then((response) => {
      return response.json();
    });
  }
}

export default Service;
