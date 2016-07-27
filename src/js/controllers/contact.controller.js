function ContactController(request,$stateParams) {
	let vm = this;
	vm.contact;

	    vm.singleContact = function(){
    	request.getContact($stateParams.id).then((res)=>{
        console.log(res);
            vm.contact = res.data;

    	}); 
        }

    vm.singleContact();


}

ContactController.$inject = ['request','$stateParams']
export{ContactController};