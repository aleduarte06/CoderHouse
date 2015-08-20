/**
 * Created by aleduarte06 on 20/08/15.
 */
window.addEventListener('load',function(){
    var form = document.querySelector('.form1');
    console.log('Cargo la pagina e iniciamos el form');
    var contador = 0;
    var error = function(element){
      element.parentElement.classList.add("has-error");
    };
    var success = function(element){
        element.parentElement.classList.remove("has-error");
        contador++
    };

    form.addEventListener('submit',function(event){
        event.preventDefault();
        if(!this.nombre.value){
            error(this.nombre);
        } else {success(this.nombre)}
        if(!this.apellido.value){
            error(this.apellido);
        } else {success(this.apellido)}
        if(!this.direccion.value){
            error(this.direccion);
        } else {success(this.direccion)}
        if(!this.dni.value){
            error(this.dni);
        } else {success(this.dni)}
        if(!this.telefono.value){
            error(this.telefono);
        } else {success(this.telefono)}

        var chek = function(elements){
            for(i of elements){
                if(!i.value){
                    return false
                }
            };
        };
        if ((chek(form.querySelectorAll("input"))) !==false)
        {console.log('todo ok')
        }else{console.log('error validacion')}

    });

});