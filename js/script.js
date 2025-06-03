'use strict';

document.addEventListener("DOMContentLoaded", function (){
    const dia = document.querySelector('.dias');
    const hora = document.querySelector('.horas');
    const minuto = document.querySelector('.minutos');
    const segundo = document.querySelector('.segundos');

    const fechaObjetivo = new Date('August 09, 2025 20:00:00').getTime();

    const actualizarCuentaRegresiva = () => {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            dia.textContent = "00";
            hora.textContent = "00";
            minuto.textContent = "00";
            segundo.textContent = "00";
            clearInterval(intervalo);
            return;
        }

        const segundosTotales = Math.floor(diferencia / 1000);
        const diasRestantes = Math.floor(segundosTotales / (3600 * 24));
        const horasRestantes = Math.floor((segundosTotales % (3600 * 24)) / 3600);
        const minutosRestantes = Math.floor((segundosTotales % 3600) / 60);
        const segundosRestantes = segundosTotales % 60;

        dia.textContent = diasRestantes.toString().padStart(2, '0');
        hora.textContent = horasRestantes.toString().padStart(2, '0');
        minuto.textContent = minutosRestantes.toString().padStart(2, '0');
        segundo.textContent = segundosRestantes.toString().padStart(2, '0');
    };

    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva();


});