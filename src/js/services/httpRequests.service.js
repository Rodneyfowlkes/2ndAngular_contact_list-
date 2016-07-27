function request($http, SERVER) {
	
    this.addContact    = addContact;
    this.editContact    = editContact; 
    this.getContacts   = getContacts;
    this.getContact   = getContact;
    this.deleteContact = deleteContact; 
   function addContact(person){
        return $http.post(SERVER.URL, person);
        }

    function editContact(id, person){
        return $http.put(SERVER.URL + id, person);
        }


    function getContacts(id){
        return $http.get(SERVER.URL);
        }  

    function getContact(id){
        return $http.get(SERVER.URL + id);
        }  

    function deleteContact(id){
        return $http.delete(SERVER.URL + id);
        }  




    };





request.$inject = ['$http', 'SERVER'];
 export {request};