london = 2360; //define a price to london
amsterdam = 1189; //define a price to amsterdam
price = london+ amsterdam; //get sum of two prices
goldenprice =  price - (price * 10) / 100; //get sum minus 10 % 


//print the output
document.write("<p>If you want to buy Flight to London and Flight to Amsterdam, it costs: "+ "<b>"+ price+" EUR</b>"+ "  </p>");
document.write("<p>If you want buy a Flight to London and a Flight to Amsterdam as a GoldenCard holder, you will get a"+"<b> 10% discount:</b> "+"<b>"+goldenprice+" EUR"+ "  </p>");


