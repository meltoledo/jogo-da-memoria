var cartas = [
               ["1.jpg", "6.jpg", "3.jpg", "5.jpg"],

               ["2.jpg", "4.jpg", "1.jpg", "6.jpg"],

               ["3.jpg", "4.jpg", "5.jpg", "2.jpg"]
               
             ];

var click = 0;
var pontj1 = 0;
var pontj2 = 0;
var jogadas = 0;
var linha = 0;
var coluna = 0;


function virar(lin, col)
{
        var elemento = document.getElementById("i" + lin + col).src; 

        var cortar = elemento.split("/");

        var tamanho = cortar.length;

           
            if(cortar[tamanho - 1] == "capa.jpg")
            {
                document.getElementById("i" +lin + col).src = cartas[lin][col];

                     click++;
            
                   
                    if(click == 1)
                     { 
            //guardando as cordenadas do 1 click
                        linha = lin;
                        coluna = col;

                   }

      if(click == 2)
      {
          
          jogadas++;
          //verificar se acertou
             
          if(cartas[linha][coluna] == cartas[lin] [col])
          {
              //acertou
                  if(jogadas % 2 != 0)
                  {
                      pontj1++;
                      document.getElementById("d1").innerHTML = "Jogador 1 = " + pontj1;
                  }
                  else
                  {
                       pontj2++;
                       document.getElementById("d2").innerHTML = "Jogador 2 = " + pontj2;
                  }
                  if(pontj1 + pontj2 == 6)
                  {
                           if(pontj1 > pontj2)
                           {
                              alert("Parabens Jogador 1");
                          }
                            else if(pontj2 > pontj1)
                              {
                                alert("Parabens Jogador 2");
                             }
                            else
                             {
                                alert("Empate!!");
                            }
                  }//fim de jogo
                 

          }
          else

          {
              //errou
              setTimeout(function() {
                  

                document.getElementById("i" + linha + coluna).src = "capa.jpg";
                document.getElementById("i" + lin + col).src = "capa.jpg";
              }, 3000);
            }
              click = 0;
       
          //somar na jogada
    
            
      } 
     
    }
    
          
}//fim funcao 