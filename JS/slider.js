(function(){

    const sliders = [...document.querySelectorAll('.tipos_jabones__body')]
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTipos_jabones = document.querySelector('.tipos_jabones__body--show').dataset.id; 
        value =  Number( currentTipos_jabones);
        value+= add;
        
        sliders[Number(currentTipos_jabones)-1].classList.remove('tipos_jabones__body--show')
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
         }

         sliders[value-1].classList.add('tipos_jabones__body--show')
        }

    })();
