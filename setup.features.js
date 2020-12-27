
before(async function() {
    await promise;
    console.log('... prepared!');
    return;
});

let promise = new Promise(resolve => {
    console.log('Preparing ...');
    const startApplication = async () => {
        
        resolve();
    };
    startApplication();
});