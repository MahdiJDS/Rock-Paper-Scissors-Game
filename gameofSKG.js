
let user = document.querySelectorAll('.btn');
let cpu = document.querySelectorAll('.btnC');
let userWin =document.querySelector('.userWin');
let cpuWin = document.querySelector('.computerWin');
let  random = Math.floor(Math.random()*cpu.length)
let loding = document.querySelector('.loding');


for (let i = 0; i <= user.length - 1; i++) {
    user[i].addEventListener('click' ,()=>{
        hiddenSelect(i);
        cpu[random].classList.remove('hidden');
        game(i , random);
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach(() => {
            button.disabled = true;
        });
        
    } );
    
};
console.log(random)
console.log(user);
console.log(cpu);
// console.log(random);
function hiddenSelect(i) {
    for(let j = 0 ; j <= user.length - 1 ; j++){
        if(j !== i ){
            user[j].classList.add('hidden');
        }
    }
};


const refreshed = ()=>{
    for (let i = 0; i <= user.length - 1; i++){
        user[i].classList.remove('hidden');
        cpu[i].classList.add('hidden');

       
    };
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(() => {
        button.disabled = false;
    });
};


document.querySelector('.Refresh').addEventListener('click' ,refreshed);


document.addEventListener('keydown' , (e)=> {
    if(e.key == 'r'){
        refreshed();
    }
});


function game(user , cpu){
    if(user !== cpu){
        if(user == 0){
            if(cpu == 2){
               userWin.innerHTML = Number(userWin.innerHTML)+1;
               loding.innerHTML = "you Win";
               loding.style.color = "green";
               document.querySelectorAll('.btn').disabled = true;
               console.log(userWin)
            }else{
            alert("cpu win");
            cpuWin.innerHTML = Number(cpuWin.innerHTML)+1;
            loding.innerHTML = "cpu Win";
            document.querySelectorAll('.btn').disabled = true;
            loding.style.color = "red";
            }
        }
        if(user == 1){
            if(cpu == 0){
                alert("cpu win");
                cpuWin.innerHTML = Number(cpuWin.innerHTML)+1;
                loding.innerHTML = "cpu Win";
                loding.style.color = "red";
            }else{
                
                userWin.innerHTML = Number(userWin.innerHTML)+1;
                loding.innerHTML = "you Win";
                loding.style.color = "green";
            }
        }
        if(user == 2){
            if(cpu == 0){
                userWin.innerHTML = Number(userWin.innerHTML)+1;
                  loding.innerHTML = "you Win";
                  loding.style.color = "green";
            }else{
                alert("cpu win");
                cpuWin.innerHTML = Number(cpuWin.innerHTML)+1;
                  loding.innerHTML = "cpu Win";
                  loding.style.color = "red";
            }
        }
    }
}
