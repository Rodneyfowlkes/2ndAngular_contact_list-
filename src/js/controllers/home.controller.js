function HomeController(request) {
	let vm = this;
    vm.contacts = [];
     
	vm.fetchContacts = function(){  
		request.getContacts().then((res)=>{
			
            res.data.forEach(function(cont){
            	
                vm.contacts.push(cont);

               console.log(cont)


                
            });
 
            
		});

		// request.deleteContact("5797b188962f1000038cf2ca").then((res)=>{
  //           console.log(res)
		// });
	}
    vm.fetchContacts();  
    

}

HomeController.$inject = ['request']

export {HomeController};