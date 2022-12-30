//number counter
let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===12)
            {
                clearInterval(counts);
            }
        }
let counter=setInterval(upd);
        let uptoo=0;
        function upd(){
            var count1= document.getElementById("counter2");
            count1.innerHTML=++uptoo;
            if(uptoo===35)
            {
                clearInterval(counter);
            }
        }
