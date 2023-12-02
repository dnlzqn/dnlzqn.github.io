$(document).ready(function(){

    

    $('.arrow_up svg').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 1000);
    });

    var palabras = ["Aftermath","BLITHESOME","Caprice","BUFFOONISH","Tournament","HYPOTHESIS", "Multiply", "SANDCASTLE", "Impression", "CONSIDER", "Controversial", "SLOVAKIA", "Municipality", "ELMHURST", "Barcelona", "MUNICH", "Zephyrs", "Vex’d chicks", "JUMPING", "Locomotora", "CERVEZA", "Mostaza","CUCARACHA","Matutino","KAMIKAZE", "Caramelo", "CULEBRA","Flamenco", "METACRISIODES","Subfamily","GAZED FOR LUCK"];


    // var palabras = ["Do wafting zephyrs quickly vex Jumbo", "How quickly daft jumping zebras vex", "Show mangled quartz flip vibe exactly","Who packed five dozen old quart jugs in my box","Joaquin Phoenix was gazed by MTV for luck","Blowzy red vixens fight for a quick jump","Quilt frenzy jackdaw gave them best pox","Sixty zips were quickly picked from the woven jute bag","Battle of Thermopylae: Quick javelin grazed wry Xerxes"];

            var numbers = []; // new empty array

            var min, max, r, n, p;

            min = 1;
            max = palabras.length;
            r = 11; // how many numbers you want to extract

            for (let i = 0; i < r; i++) {
              do {
                // n = Math.floor(Math.random() * (max - min + 1)) + min;
                n = Math.floor(Math.random()*max)
                p = numbers.includes(n);
                if(!p){
                  numbers.push(n);
                }
              }
              while(p);
            }

            // document.querySelector('.txt1').setAttribute('text', palabras[numbers[1]]);
            // document.querySelector('.txt2').setAttribute('text', palabras[numbers[2]]);
            // document.querySelector('.txt3').setAttribute('text', palabras[numbers[3]]);
            // document.querySelector('.txt4').setAttribute('text', palabras[numbers[4]]);
            // document.querySelector('.txt5').setAttribute('text', palabras[numbers[5]]);
            // document.querySelector('.txt6').setAttribute('text', palabras[numbers[6]]);
            // document.querySelector('.txt7').setAttribute('text', palabras[numbers[7]]);
            document.querySelector('.txt8').setAttribute('text', palabras[numbers[8]]);
            document.querySelector('.txt9').setAttribute('text', palabras[numbers[9]]);
            document.querySelector('.txt10').setAttribute('text', palabras[numbers[10]]);

    var controller = new ScrollMagic.Controller();
            
    // //cálculo de ancho de quote 1
    // const width_quote1 = document.getElementById("quote1");  
    // const width1 = width_quote1.clientWidth  

    // //quote 1
    // var tween1 = TweenMax.fromTo(".quote1", 1, 
    //     {css:{position: "absolute", left: "100%"}},
    //     {css:{position: "absolute", left: "-" + width1 + "px"}},
    //     );

    //     // build quote 1
    //     var scene1 = new ScrollMagic.Scene({triggerElement: ".marquee1", duration: 1000,triggerHook: 0.45})
    //     .setTween(tween1)
    //     .setPin('#pinear1')
    //     .addTo(controller);

    //cálculo de ancho de quote 2
    const width_quote2 = document.getElementById("quote2");  
    const width2 = width_quote2.clientWidth  

    //quote 1
    var tween2 = TweenMax.fromTo(".quote2", 1, 
        {css:{position: "absolute", left: "100%"}},
        {css:{position: "absolute", left: "-" + width2 + "px"}},
        );

    // build quote 2
    var scene2 = new ScrollMagic.Scene({triggerElement: ".marquee2", duration: 1000,triggerHook: 0.45})
    .setTween(tween2)
    .setPin('.pinear2')
    .addTo(controller);

    //cálculo de ancho de quote 3
    const width_quote3 = document.getElementById("quote3");  
    const width3 = width_quote3.clientWidth  

    //quote 3
    var tween3 = TweenMax.fromTo(".quote3", 1, 
        {css:{position: "absolute", left: "100%"}},
        {css:{position: "absolute", left: "-" + width3 + "px"}},
        );

    // build quote 3
    var scene3 = new ScrollMagic.Scene({triggerElement: ".marquee3", duration: 1000,triggerHook: 0.45})
    .setTween(tween3)
    .setPin('.pinear3')
    .addTo(controller);

    //abecedario
    var tween4 = TweenMax.fromTo("#alphabet_anim", 1, 
        {css:{"font-size": "3.5rem"}},
        {css:{"font-size": "6.5rem"}},
        );

        // build scene 3
        var scene4 = new ScrollMagic.Scene({triggerElement: ".alphabet", duration: 1000,triggerHook: 0})
        .setTween(tween4)
        .setPin('.alphabet')
        .addTo(controller);

    // build scene 5
    var tween5 = new TimelineMax()
    .to(".esquina1", 2, {left: "0"})
    .to(".esquina2", 2, {top: "0"})
    .to(".esquina3", 2, {left: "100%"})
    .to(".esquina4", 2, {top: "100%"});


        // build superfreak
        var scene5 = new ScrollMagic.Scene({triggerElement: ".super", duration: 1000,triggerHook: 0})
        .setTween(tween5)
        .setPin('.super')
        .addTo(controller);

    // build scene 5
    var tween6 = new TimelineMax()
    .to("#you", 1, {left: "10px"})
    .to("#you", 1, {fontWeight: "700"})
    .to("#talkin", 1, {left: "10px"})
    .to("#talkin", 1, {fontWeight: "700"})
    .to("#tome", 1, {left: "10px"})
    .to("#tome", 1, {fontWeight: "700"})


    var scene6 = new ScrollMagic.Scene({triggerElement: ".talkin", duration: 1000,triggerHook: 0})
    .setTween(tween6)
    .setPin('.talkin')
    .addTo(controller);


    //build scene 7
    var tween7 = new TimelineMax()
    .to("#bf_txt1", 1, {right: "0px"})
    //.to("#bf_BF", 1, {left: "0px"})
    .to("#bf_txt2", 1, {right: "0px"})
    .to("#bf_o2", 1, {opacity: "1", rotation:"300", bottom: "-50px"})
    .to("#bf_o1", 1, {opacity: "1", rotation:"-300", bottom: "50px" },'-=1')


    var scene7 = new ScrollMagic.Scene({triggerElement: ".franklin", duration: 1000,triggerHook: 0})
    .setTween(tween7)
    .setPin('.franklin')
    .addTo(controller);

    //build scene 8
    var tween8 = new TimelineMax()
    .to("#desc_1", 1, {opacity: "1"})
    .to("#desc_2", 1, {opacity: "1"})
    .to("#desc_3", 1, {opacity: "1"})
    .to("#desc_4", 1, {opacity: "1"})
    .to("#desc_5", 1, {opacity: "1"})
    .to("#desc_6", 1, {opacity: "1"})
    .to("#desc_7", 1, {opacity: "1"})

    var scene8 = new ScrollMagic.Scene({triggerElement: ".desc", duration: 1000,triggerHook: 0})
    .setTween(tween8)
    .setPin('.desc')
    .addTo(controller);

    // build scene 9
    var tween9 = new TimelineMax()
    .to("#hasta", 1, {fontWeight: "900"})
    .to("#la", 1, {left: "10px"})
    .to("#la", 1, {fontWeight: "900"})
    .to("#vista", 1, {left: "10px"})
    .to("#vista", 1, {fontWeight: "900"})
    .to("#baby", 1, {left: "10px"})
    .to("#baby", 1, {fontWeight: "900"})


    var scene9 = new ScrollMagic.Scene({triggerElement: ".back", duration: 1000,triggerHook: 0,reverse: true})
    .setTween(tween9)
    .setPin('.back')
    .addTo(controller);

    //build scene 10
    var tween10 = new TimelineMax()
    .to(".txt1", 1, {opacity: "1"})
    .to(".txt2", 1, {opacity: "1"})
    .to(".txt3", 1, {opacity: "1"})
    .to(".txt4", 1, {opacity: "1"})
    .to(".txt5", 1, {opacity: "1"})
    .to(".txt6", 1, {opacity: "1"})
    .to(".txt7", 1, {opacity: "1"})
    .to(".txt8", 1, {opacity: "1"})
    .to(".txt9", 1, {opacity: "1"})
    .to(".txt10", 1, {opacity: "1"})

    var scene8 = new ScrollMagic.Scene({triggerElement: ".justified", duration: 1000,triggerHook: 0})
    .setPin(".justified")
    .setTween(tween10)
    .addTo(controller);


});
