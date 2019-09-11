window.alert("welkom bij de lokale pizzaria wat wilt u?");//zet een window neer van hey welkom bij de pizzaria
var kleinepizza = prompt("hoeveel kleine pizza's neem je 2,-",); //deze en de 2 eronder vragen hoeveel pizzas je wilt met de prijs erbij
var normalepizza = prompt("hoeveel normale pizza's 10,-",);
var grotepizza = prompt("hoeveel grote pizza's neemt u 200,-");
document.write('kleinepizza : ' + kleinepizza);// zet neer hoeveel pizzas je hebt besteld zonder de prijs
document.write('<br/>')//maakt het netjes onder elkaar
document.write('normalepizza : ' + normalepizza);
document.write('<br/>')
document.write('grotepizza : ' + grotepizza);
var pizzatotaal = kleinepizza * 1 + normalepizza * 1 + grotepizza * 1;
document.write('<br/>')
document.write("aantal bestelde pizzas " + pizzatotaal)//zet het totaal aantal pizza 
document.write('<br/>')
document.write('<br/>')
document.write("kleine pizza " + kleinepizza * 2 + "$");//rekent uit hoeveel alle kleine pizzas hebben gekocht
document.write('<br/>')//maakt het netjes onder elkaar
document.write("normale pizza " + normalepizza * 10 + "$");//rekent uit hoeveel alle normale pizzas hebben gekocht
document.write('<br/>')
document.write("grote pizza " + grotepizza * 200 + "$");//rekent uit hoeveel alle grote pizzas hebben gekocht
document.write('<br/>')
var totaal = kleinepizza * 2 + normalepizza * 10 + grotepizza * 200;// maakt het totaal in een ding 
document.write("totaal " + totaal + "$")//zet het totaal er neer
document.write('<br/>')//netjes maken
document.write('<br/>')//entertje
document.write("bedankt voor uw bestelling bij de lokale pizzaria!")//aardige groet
document.write('<br/>')//netjes entertje
document.write('<br/>')
document.write("willekeurig lot nummer als je 6 hebt gratis pizza")//lot
var lot = Math.floor(Math.random() * 10);
document.write('<br/>')
document.write("uw lot " + lot)