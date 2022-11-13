function montarCalendario(retorno){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    //const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    let d = new Date();
    let mes = d.getMonth();

    let diasMesses = new Array();
    let arrayRetorno = new Array();

    for (let i = 0; i < 12; i++) {
        //
        diasMesses[i] = new Date(d.getFullYear() ,mes, 0).getDate();
        
        arrayRetorno[i]= Array();
        
        for (let n = 1; n <= diasMesses[i]; n++) {
            //
            var diaMes = new Date(d.getFullYear() ,i,n).getDay();
            //
            let semanaMes = semana[diaMes];
            arrayRetorno[i][n] = semanaMes;
        }
    }

    let y = 0;
    let txtSemana = "";
    let txtDia = "";

    function mySemana(element) {
        txtSemana += "<td>"+element+"</td>";
    }

    function myDias(element) {
        txtDia += "<td>"+element+"</td>";
    }

    semana.forEach(mySemana);
    //semana.forEach(myDia);

    meses.forEach( function myMes(value, i, array1) {
        document.querySelector('#calendario tbody').innerHTML += "<tr><th colspan='7'>"+value+"<th></tr><tr>"+txtSemana+
        "</tr>" 
      });

    document.getElementById('mes').innerHTML = meses[mes];
}