function loadPersonInfo() {
    console.log('Loading person information...');
    
    setTimeout(() => {
        const personInfo = {
            fullName: 'Ritu Singh',
            emailAddress: 'RItu99@gmail.com'
        };
        
        console.log('Information loaded successfully!');
        console.log('Person Details:', personInfo);
    }, 2000);
}

loadPersonInfo();


