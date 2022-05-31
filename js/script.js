// Hotspot Data
var data = {
    hs01: {
        title: "Surface",
        innerhtml: "<p>By carefully going through all your content, we'll fix, upgrade or even create from scratch everything design-wise that's looking iffy.</p><p>Logo designs, banner designs, website designs and creation, gifs, articles, whitepaper, all that you think of - we got it covered.</p><p>🛒 and 🔥 Moontopia tokens.</p>",
        image: "img/harvester.jpg"
    },
    hs02: {
        title: "Radar",
        innerhtml: "<p>Wen moon? Wen marketing? Just list on Moontopia app, we'll take it from there.</p><p> Again, all you have to do is just burn some Moontopia tokens and stay positive :)</p>",
        image: "img/dish.jpg"
    },
    hs03: {
        title: "Core",
        innerhtml: "<p>Here at moontopia we have various different utilities ready to be used for your project.</p><p>We have NFT Marketplace just for you. We have Staking and NFT staking dapps ready. We have mint pages ready. We have portfolio tracker ready. Swap. Fiat exchange. You want yet another blockchain? Fuck it, we'll do it.</p><p>Buy. Burn. Moontopia.</p>",
        image: "img/lift.jpg"
    },
    hs04: {
        title: "Exercising",
        innerhtml: "<p>Parks and gyms would be completely unrecognisable. Lunar gravity is a sixth of what we are used to on Earth, so jumping and lifting would be much easier. Basketball hoops would need to be 18m off the ground provide the same challenge as a classic ‘dunk’. For the weight lifters in the group, lifting over 250kg wouldn’t even cause them to break a sweat.</p><p>Walking and running would be completely different to what we are used to. The reduced gravity on the Moon would mean that the way we walk would no longer be possible and everyone would need to develop a new method of taking steps.</p>",
        image: "img/court.jpg"
    },
    hs05: {
        title: "Breathing",
        innerhtml: "<p>There’s no atmosphere on the Moon so we would need to manufacture the oxygen we breathe. Luckily, we will be able to use some of the water we have harvested on the Moon to achieve this. By using the process of electrolysis, we can run electricity through the water to split water molecules and produce oxygen. </p><p>We would then pump this oxygen out into the pressurised lunar tube. The trees and plants that we’d have in the parks would also be very important to keeping oxygen levels topped up. </p>",
        image: "img/modal/park.jpg"
    },
    hs06: {
        title: "Energy",
        innerhtml: "<p>The only viable energy source we could use on the Moon would be a Nuclear Fusion Reactor. Solar energy would not be an option because of the two-week long night. </p><p>On Earth we use Nuclear Fission reactors, which work by splitting one unstable atom into two. Fusion is the opposite process and is what powers the Sun. It is the process of combining two atoms together which releases a large amount of energy. The Helium-3 which we could harvest on the Moon would make great fuel for a Nuclear Fusion reactor. </p>",
        image: "img/modal/reactor.jpg"
    },
    hs07: {
        title: "Farming",
        innerhtml: "<p>Traditional farming would be a thing of the past on the Moon, we’d need all the space and oxygen available to keep ourselves alive.</p><p>Without the space for farm animals, artificial meat would need to be grown in labs using tissue cultures in special vats. Hydroponic farms would need to be established to grow fruit and vegetables.</p>",
        image: "img/modal/lab.jpg"
    },
    hs08: {
        title: "Temperature",
        innerhtml: "<p>The Moon experiences very different conditions to planet Earth. Temperatures vary from 100&#xb0;C in direct sunlight, to -170&#xb0;C during the lunar night, which lasts a fortnight. This presents an enormous challenge to colonists.</p><p>Living inside a lava tube, surrounded by insulating rock, will allow the colonists to easily control the interior temperature.</p><p>Without seasons or naturally occurring weather, it could be t-shirt weather all year round.</p>",
        image: "img/wall.jpg"
    }
}

// Menu Logic
$('.menu-button, .menu-close, .menu-link').click(function() {
    $('.menu__overlay, .page-dim').toggleClass('active');
    $('body').toggleClass('noscroll');
});

// Modal Logic
$('.acticle__hotspot, .modal-close').click(function(event) {
    $('.modal, .page-dim').toggleClass('active').removeClass('sources')
    $('body').toggleClass('noscroll');
});

// Hotspot Logic
$('.acticle__hotspot').click(function(event) {
    var id = event.target.id,
        copy = data[id];
    $('.modal').addClass(event.target.id)
    $('#modal-title').html(copy.title);
    $('#modal-copy').html(copy.innerhtml);
    if (copy.image) {
        $('#modal-image').css("background-image", "url(" + copy.image + ")");
    }
});

// Check device width - init perfect scrollbar
var option = {
    wheelSpeed: 1,
    wheelPropagation: true
}

// Init perfect scrollbar on large devices
if ($(window).width() > 800) {
    $('.scroll').each(function() {
        var ps = new PerfectScrollbar(this, option);
    });
};

// Init AOS
AOS.init({
    offset: 300,
    duration: 800,
    easing: 'ease-out-cubic'
});

// Init Parallax
var rellax = new Rellax('.rellax');