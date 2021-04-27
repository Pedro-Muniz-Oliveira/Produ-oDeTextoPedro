

now = new Date

dia = now.getDay()
diaSemana = 'oi'
Mes = now.getMonth()
MesAtual= 'oi'

function SemanaDay(){
    if(dia == 0){
        diaSemana = 'Domingo'
    }
    if(dia == 1){
        diaSemana = 'segunda'
    }
    if(dia == 2){
        diaSemana = 'terça'
    }
    if(dia == 3){
        diaSemana = 'quarta'
    }
    if(dia == 4){
        diaSemana = 'quinta'
    }
    if(dia == 5){
        diaSemana = 'sexta'
    }
    if(dia == 6){
        diaSemana = 'sabado'
    }
    return diaSemana
}
function mes(){
    if(Mes == 0){
        MesAtual = 'Janeiro'
    }
    if(Mes == 1){
        MesAtual = 'Fervereiro'
    }
    if(Mes == 2){
        MesAtual = 'Março'
    }
    if(Mes == 3){
        MesAtual = 'Abril'
    }
    if(Mes == 4){
        MesAtual = 'Maio'
    }
    if(Mes == 5){
        MesAtual = 'Junho'
    }
    if(Mes == 6){
        MesAtual = 'Julho'
    }
    if(Mes == 7){
        MesAtual = 'Agosto'
    }
    if(Mes == 8){
        MesAtual = 'Setembro'
    }
    if(Mes == 9){
        MesAtual = 'Outubro'
    }
    if(Mes == 10){
        MesAtual = 'Novembro'
    }
    if(Mes == 11){
        MesAtual = 'Dezembro'
    }
    return MesAtual
}


 document.write (now.getDate() + " de " + mes() + " de " + now.getFullYear() + " Hoje é " + SemanaDay())
