$(document).ready(function(){

    // Variables declerations 
    var container = $('.container');
    var footer = $('.footer');
    var main = $('.main');
    var body = $('body');
    var farmer = $('.farmer');
    var pakistan = $('.pakistan');
    var exports = $('.exports');
    var offset = '80%';
    var offset50 = '50%';
    var cardVisionContents = $('.card-vision-contents');
    var cardVisionimg = $('.card-vision-img');
    var cardMission = $('.card-mission');
    var cardMissionContents = $('.card-mission-contents');
    var cardMissionImg = $('.card-mission-img');
    var card = $('.card');
    var cardContents = $('.card-contents');
    var cardImg = $('.card-img');
    var land = $('.land')
    var btn = $('.btn')
    var vulnerable = $('.vulnerable')
    var researchImg = $('.research-img')
    var researchContent = $('.research-content')
    var research = $('.research')
    var teamH2 = $('.team__h2')
    var products = $('.products')
    var teamContainer = $('.team')
    


    // Button click event handler
    btn.click(function (){
        container.css('position', 'fixed').fadeOut();
        footer.fadeOut();
        main.fadeIn(1000).css('display', 'grid');
        body.addClass('no-background');
        farmer.addClass('appearLeft');
        pakistan.addClass('appearRight');
        exports.waypoint(function(){
            exports.addClass('animate__animated animate__fadeInBottomRight')
        }, { offset: offset})
        cardVisionContents.waypoint(function(){
            cardVisionContents.addClass('animate__animated animate__fadeInRight')
        }, { offset: offset})
        cardVisionimg.waypoint(function(){
            cardVisionimg.addClass('animate__animated animate__fadeInLeft')
        }, { offset: offset})
        land.waypoint(function(){
            land.addClass('animate__animated animate__fadeInBottomRight')
        }, { offset: offset})

        cardMission.waypoint(function(){
            cardMissionContents.addClass('animate__animated animate__fadeInLeft')
            cardMissionImg.addClass('animate__animated animate__fadeInRight')
        }, {offset: offset})
        card.waypoint(function(){
            cardContents.addClass('animate__animated animate__fadeInLeft')
            cardImg.addClass('animate__animated animate__fadeInRight')
        }, {offset: offset50})

        vulnerable.waypoint(function(){
            vulnerable.addClass('appearLeft')
        }, {offset: offset})

        research.waypoint(function(){
            researchContent.addClass('animate__animated animate__fadeInRight')
            researchImg.addClass('animate__animated animate__fadeInLeft')
        }, {offset: offset})

    
        teamContainer.waypoint(function(){
            teamContainer.addClass('appearLeft')
        }, {offset:offset})

        products.waypoint(function(){
            products.fadeIn()
        })
     
    })

})


