var tl = gsap.timeline();

tl
    .add("tog")
        .from(".hero-img,.retro-text-con,.tl",{
            y:100,
            opacity:0,
            duration:2.5,
        },'tog')

        .from(".hero-bg,.rt-bg-img",{
            scale:2,
            duration:2.5,
        },'tog')

        .from(".promo,.n-down",{
            x:-200,
            duration:2,
        },'tog')
        .from(".more,.logo",{
            y:-100,
            opacity:0,
            duration:2.5,
        },'tog')