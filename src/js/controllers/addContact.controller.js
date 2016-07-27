function AddController(request, $state) {
	let vm = this;

    vm.publish_contact = function(x){
    	request.addContact(x).then((res)=>{
            console.log(res);
            $state.go('root.home');
    	});
    }
}

 AddController.$inject =['request','$state']

export {AddController};