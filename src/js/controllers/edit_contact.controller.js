function EditController(request, $stateParams,$state) {
	let vm = this;
	vm.contact;


    vm.singleContact = function(){
	request.getContact($stateParams.id).then((res)=>{
    console.log(res);
        vm.contact = res.data;

	}); 
    }

    vm.saveChanges = function(changes){
	request.editContact($stateParams.id, changes).then((res)=>{
    console.log(res);
    $state.go('root.home');

	}); 
    }    


    vm.singleContact();



}

EditController.$inject = ['request','$stateParams','$state']
export {EditController};