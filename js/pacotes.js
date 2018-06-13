/**
    Trabalho para Disciplina de Aplicações dinâmicas, Prof. Adriano Milanez
    
    Alunos:
        Andrey Pimentel         RA 916109786
        Carlos José Amorim      RA 917207155
        Glaucyany Lira da Cruz  RA 916116774
        Gustavo Santos          RA 916112371
        Ivam Henrique M Santos  RA 316107371
        Juliana Araújo          RA 916112277
    
    Projeto:
        TourExpress
 */
$(document).ready(function () {
    const intervalo = 1500
     var imagem = 10
     var rodar = setInterval(animar, intervalo)  
     
     $('<p class="legenda"/>').appendTo('#galeria')
     $('.legenda').css({
         position : 'absolute',
         ocupacity: 0.9,
         visibility:'hidden',
         with:'488px',
         lef:-4,
         top:380,
         color:'#333',
         zindex:1000,
         fontSize:'14px',
         padding:'5px 10px',
         borderBottom:'1px dotted #fff',
         background:'#6cf',
         margin:0
     })
 
     function animar() {
         imagem--
         $('img').eq(imagem).toggle()
         $('#legenda').remove()
         if(imagem==0){
            while(imagem!=10){
             $('img').eq(imagem).toggle()
             imagem++
            }
         }
     }   
 
     $('img').hover(
         function(){
             clearInterval(rodar)
             $('.legenda').text($(this).attr('alt'))
             .css('visibility','visible')
         }, 
         function(){
             $('.legenda').css('visibility','hidden')
             rodar = setInterval(animar, intervalo)
         }
     )
     
 })