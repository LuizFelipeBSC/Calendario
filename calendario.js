var d = new Date();
var T = d.getMonth();
var A = d.getFullYear();

function montarCalendario(mes,ano){
    const meses = ['','Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const semana = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    let month = d.getMonth() + 1;
    var data = 20/02/2022
    var y = 0;
    var z = 0
    var txt = "";
    document.getElementById('ano').innerHTML = A;
    //se mes diferente de vazio
    if (mes == null) {

        document.getElementById('mes').innerHTML = meses[month];

        //Primeiro Dia da semana de Janeiro 6
        var firstDayWeek = new Date(d.getFullYear() ,d.getMonth(), 1).getDay()-1;
        //document.getElementById('mes').innerHTML = mes;

        //total de dias dos Meses
        var lastDayMonth = new Date(d.getFullYear() ,month, 0).getDate();
        //document.getElementById('mes').innerHTML = lastDayMonth;

        //total de dias do Mes Passado
        var lastMonth = new Date(d.getFullYear() ,(month-1), 0).getDate();
        //document.getElementById('mes').innerHTML = lastMonth;


    }else{
        document.getElementById('mes').innerHTML = meses[mes+1];

        //Primeiro Dia da semana de Janeiro 6
        firstDayWeek = new Date(ano ,mes, 1).getDay()-1;
        //document.getElementById('mes').innerHTML = firstDayWeek;

        //total de dias dos Meses
        lastDayMonth = new Date(ano ,mes+1, 0).getDate();
        //document.getElementById('mes').innerHTML = lastDayMonth;

        //total de dias do Mes Passado
        var lastMonth = new Date(ano ,mes, 0).getDate();
        //document.getElementById('mes').innerHTML = lastMonth;


    }

    for (var n = -firstDayWeek, i = (lastMonth-firstDayWeek); n < (42-firstDayWeek); i++, n++) {
        y++

        //Se n for maior que o ultimo dia do mes
        if (n > lastDayMonth) {
            z+=1;
            txt += "<td> <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-bs-whatever=\"@getbootstrap\" >"+z+"</button> </td>";
        }else

            //Se n for menor ou igual o ultimo dia do mes
        if (i <= lastMonth) {
            txt += "<td> <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-bs-whatever=\"@getbootstrap\" >"+i+"</button> </td>";
        }else

            txt += "<td id='mes-atual'> <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" data-bs-whatever=\"@getbootstrap\" >"+n+"</button> </td>";

        if(y == 7 ){
            y=0;
            txt += "<tr>";
        }

        if (data = y + "/" + i + "/" + n) {

        } else {

        }

    }

    document.querySelector('#calendario tbody').innerHTML = txt;

    const botao_proximo = document.getElementById('btn-next');
    const botao_anterior = document.getElementById('btn-prev');
    const Form = document.getElementById("FormularioTarefa");

    botao_proximo.onclick = function(){
        T++;
        if (T > 11) {
            T = 0;
            A ++;
        }
        montarCalendario(T,A)
    }
    botao_anterior.onclick = function(){
        T--;
        if (T < 0) {
            T = 11;
            A --;
        }
        montarCalendario(T,A)
    }

    var Name = document.getElementById("recipient-name");
    var Inicio = document.getElementById("recipient-Data-Inicio");
    var Termino = document.getElementById("recipient-Data-Termino");

    function formataData(){
        let data = new Date(Inicio.value),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth()+1).toString().padStart(2, '0'),
            ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
    function formataData2(){
        let data = new Date(Termino.value),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth()+1).toString().padStart(2, '0'),
            ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    Form.addEventListener('submit', function(e) {
        document.getElementById("Seila").innerHTML += "<li> " + "     |     " +"Tarefa: "+ Name.value + "     |     "+ "Data inicial: " + formataData() + "     |     "+ "Data final: " + formataData2() +"  </li>";
        e.preventDefault();
    });
}

