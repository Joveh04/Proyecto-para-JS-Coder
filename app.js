let Usuario = "Jonathan";
let Contraseña = "Caceres";
const historial = []
let SolicitudDeUsuario = prompt("ingrese su nombre de usuario");
let SolicitudContraseña= prompt ("ingrese su contraseña");

function inicioDeSesion(){
    if(SolicitudDeUsuario== "Jonathan" && SolicitudContraseña == "Caceres"){
    alert("bienvenido al calculador de sueldo liquido jornal liquido");
    calculadoraDeSueldos();
    let repetir = prompt("desea repetir el calculo? si o no");
    if(repetir== "si"){
    calculadoraDeSueldos();
    }else{
    alert("gracias por utilizar la app en seccion historial se encuentra el detalle del calculo");
    }
    }else{
    alert("usuario incorrecto");
    }
}

function calculadoraDeSueldos(){
    let nombre = prompt("ingrese el nombre del trabajador");
    let apellido = prompt("ingrese el apellido del trabajador");
    let valorHora = Number(prompt("ingrese el valor de la hora nominal"));
    let HorasTrabajadas = Number(prompt("ingrese la cantidad de horas trabajadas"));
    let Jornales = valorHora * HorasTrabajadas;
    console.log(`el valor de las horas trabajadas es de $${Jornales} `);
    let HorasExtrasTrabajadas= Number(prompt("ingrese la cantidad de horas extras trabajadasa"));
    let horaExtra = valorHora * 2;
    let horasExtras = HorasExtrasTrabajadas * horaExtra;
    let totalJornalNominales = horasExtras + Jornales
    
    console.log(`El total de horas extras generadas en el mes es de ${horaExtra} * ${HorasExtrasTrabajadas} = $${horasExtras}`)
    
    console.log(` el total Nominal a combrar es de $${Jornales}+ $${horasExtras} = $${totalJornalNominales}`);
    /*return totalJornalNominales;*/
    let impuestos = 20;
    let porcentaje = 100;
    let impuestosCalculados = totalJornalNominales * impuestos / porcentaje;
    let sueldoLiquidoACobrar = totalJornalNominales - impuestosCalculados;
    console.log(`el sueldo liquido a cobrar es de $${totalJornalNominales}- impuestos $${impuestosCalculados}= $${sueldoLiquidoACobrar}`);
    const reciboDetalle = {
        nombre: nombre,
        apellido: apellido,
        sueldoNominal:totalJornalNominales,
        descuentos :  impuestosCalculados,
        sueldoACobrar: sueldoLiquidoACobrar,
    }
    return historial.push(reciboDetalle);
}


inicioDeSesion();
console.log(historial[0]);
/*let contenedor = document.createElement("div");
contenedor.innerHTML = `<h2>Nombre:${" "+historial[0].nombre+ " "+historial[0].apellido}</h2>
<h4>Sueldo Nominal: ${historial[0].sueldoNominal}</h4>
<h4>Descuentos: ${historial[0].descuentos}</h4>
<h4>Sueldo a cobrar: ${historial[0].sueldoACobrar}</h4>`

document.body.appendChild(contenedor);
//console.log(historial);*/



for(objeto in historial){
    let contenedor = document.createElement("div");
contenedor.innerHTML = `<h2>Nombre:${" "+historial[objeto].nombre+ " "+historial[objeto].apellido}</h2>
<h4>Sueldo Nominal: $${historial[objeto].sueldoNominal}</h4>
<h4>Descuentos: $${historial[objeto].descuentos}</h4>
<h4>Sueldo a cobrar: $${historial[objeto].sueldoACobrar}</h4>`

document.body.appendChild(contenedor);

    
}

/*for(objeto of historial){
    let contenedor = document.createElement("div");
contenedor.innerHTML = `<h2>Nombre:${" "+objeto.nombre+ " "+objeto.apellido}</h2>
<h4>Sueldo Nominal: ${objeto.sueldoNominal}</h4>
<h4>Descuentos: ${objeto.descuentos}</h4>
<h4>Sueldo a cobrar: ${objeto.sueldoACobrar}</h4>`

document.body.appendChild(contenedor);

    
}*/