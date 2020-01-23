if( 'Notification' in window){
            
    if (Notification.permission === 'granted') {
        // If it's okay let's create a notification
        // doNotify();
        notifyMe()

    }else{
        //notification == denied
        Notification.requestPermission()
            .then(function(result) {
                console.log(result);  //granted || denied
                if( Notification.permission == 'granted'){ 
                    // doNotify();
                    notifyMe()
                }
            })
            .catch( (err) => {
                console.log(err);
                
            });
    }

}

// function doNotify(){
//     let title = "The Title";
//     let t = Date.now() + 120000;    //2 mins in future
//     let options = {
//         body: 'Hello from JavaScript!',
//         data: {prop1:123, prop2:"Steve"},
//         lang: 'en-CA',
//         icon: './img/calendar-lg.png',
//         timestamp: t,
//         vibrate: [100, 200, 100]
//     }
//     let n = new Notification(title,options);
    
//     n.addEventListener('show', function(ev){
        
//         console.log('SHOW', ev.currentTarget.data);
//     });
        
//     n.addEventListener("click", function(ev){
        
//         window.open('http://www.mozilla.org', '_blank')
//     });
    
//     n.addEventListener('close', function(ev){
//        console.log('CLOSE', ev.currentTarget.body); 
//     });
//     setTimeout( n.close.bind(n), 3000); //close notification after 3 seconds
// }

function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have alredy been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Hi there!",{
      badge : "asdas"});
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
        }
      });
    }
  
    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
  }
