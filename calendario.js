//const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//const dias = [ 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-feira', 'Sabado', 'Domingo'];


//if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))

function daysOfmonth(month, ano) {
    const d = new Date();

    var data = new Date(ano, month, 0);
    var mes = d.getMonth() + 1;
    var days = [];

    if (ano == null && month == null) {
        days[d.getMonth()] = new Date(d.getFullYear() ,mes, 0).getDate();
        return days;
        
    } else if (month != null) {
        days[month] = new Date(d.getFullYear() ,month, 0).getDate();

        return days;
    }

    for (index = 1; index <=12 ; index++) {
            
        days[index] = new Date(d.getFullYear() ,index, 0).getDate();
    }
   
    return days();
}

function calendario() {
    document.write('</tr>');
    document.write('<th> Domingo</th>');
    document.write('<th> Segunda-Feira</th>');
    document.write('<th> Terça-Feira</th>');
    document.write('<th> Quarta-Feira</th>');
    document.write('<th> Quinta-Feira</th>');
    document.write('<th> Sábado</th>');
}

function postMessage() {
    
}

// Exemplo:
    console.log(daysOfmonth()); // Exibe 28. 

