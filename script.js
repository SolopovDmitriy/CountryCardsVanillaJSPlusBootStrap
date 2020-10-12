// (function () {

//     var wrapper = document.querySelector('.wrapper');


//     console.log(wrapper);
//     // console.log($wrapper);

//     // $wrapper.attr({
//     //     class: 'myFirstClass'
//     // });
// })();

// $(document).ready(function () {
//     //когда ONLOAD
//     var $wrapper = $('.wrapper');
//     var $nav = $('.navigate');
//     var $listLi = $('.navigate li');
//     console.log($listLi);
//     $nav.css({
//         border: '1px solid red',
//         width: '90%',
//         margin: '0px auto'
//     }).attr({
//         id: 'container'
//     });

//     $listLi.each(function (index) {
//         console.log(this); //dom node
//         var $elem = $(this);
//         // $elem.css({
//         //     border:'3px solid black'
//         // }).text(index);
//         $elem.css({
//             border: '3px solid black'
//         }).find('a').attr('href', '/').text(index);

//         var $lastEl = $('#last-elment');
//         $cont = $lastEl.closest('.container'); //вверх по дереву
//         console.log($cont);
//         console.log($cont.parent()); //доступ к родителю
//         /*$cont = null;
//         delete $cont;*/
//     });
//     $('.container').on('click', function () {
//         window.alert('hello');
//     });
//     //console.log($cont);

//     var $img = $('<img>');
//     $img.attr({
//         src: 'https://static3.depositphotos.com/1004996/226/i/450/depositphotos_2260019-stock-photo-glowing-font-shiny-letter-s.jpg',
//         alt: 'girl'
//     })
//     $cont.append($img);

//     $cont.append($('<a>').attr({
//         href: '/'
//     }).append($('<img>').attr({
//         src: 'https://static3.depositphotos.com/1004996/226/i/450/depositphotos_2260019-stock-photo-glowing-font-shiny-letter-s.jpg',
//         alt: 'girl'
//     })));


//     var $inp = $("<input type='button' value='Пуск'>");
//     var $square = $("<div>").attr({
//         class: 'square'
//     });
//     $cont.append($inp).append($square);
//     $inp.on('click', function () {
//         $square.animate({
//             borderRadius:'50%',
//             marginLeft:'50%'
//         }, 5000);
//     });
// });


const cards = [
    {
        imgSrc: 'img/1.1.png',
        altSrc: 'картинка 1',
        title: 'Париж',
        description: 'Один из главных европейских городов и мировой центр культуры, искусства, моды и гастрономии',
        href: '#'
    },
    {
        imgSrc: 'img/2.2.png',
        altSrc: 'картинка 2',
        title: 'Лондон',
        description: 'Столица Англии и Соединенного Королевства. История этого современного города уходит во времена римлян.',
        href: '#'
    },
    {
        imgSrc: 'img/3.3.jpg',
        altSrc: 'картинка 3',
        title: 'Нью-Йорк',
        description: 'Город, о котором, кажется, знают все на планете. Если кто-то вдруг упоминает словосочетание «столица мира», то первым в голове образованного человека наверняка всплывет имя этого мегаполиса на восточном побережье Соединенных Штатов.',
        href: '#'
    },
    {
        imgSrc: 'https://img-cdn.tinkoffjournal.ru/pekin___main.ebgxlmgjce0u.gif',
        altSrc: 'картинка 4',
        title: 'Пекин',
        description: 'Столица Китая, история которой насчитывает три тысячелетия. Она славится как своими современными зданиями, так и древними архитектурными памятниками, среди которых величественный Запретный город – императорский дворец времен династий Мин и Цин',
        href: '#'
    },
    {
        imgSrc: 'img/5.5.png',
        altSrc: 'картинка 5',
        title: 'Токио',
        description: 'Столица Японии, шумный город, в котором современные небоскребы с неоновой подсветкой сочетаются с традиционными храмами. Среди деревьев расположен богато украшенный синтоистский храм Мэйдзи, известный своими высокими воротами',
        href: '#'
    },
    {
        imgSrc: 'img/6.6.jpg',
        altSrc: 'картинка 6',
        title: 'Сеул',
        description: 'Это гигантский мегаполис, где современные небоскребы, высокотехнологичное метро и поп-культура соседствуют с буддийскими храмами, дворцами и уличными рынками. ',
        href: '#'
    },
    {
        imgSrc: 'img/7.7.jpg',
        altSrc: 'картинка 7',
        title: 'Санкт-Петербург',
        description: 'Русский портовый город на побережье Балтийского моря, который в течение двух веков служил столицей Российской империи',
        href: '#'
    },
    {
        imgSrc: 'img/8.8.jpg',
        altSrc: 'картинка 8',
        title: 'Одесса',
        description: 'Это портовый город на Черном море в южной части Украины. Он известен своими пляжами и архитектурой XIX века, например зданием Одесского театра оперы и балета. Потемкинская лестница, получившая всемирную известность благодаря фильму "Броненосец Потемкин", ведет к морю, где расположен Воронцовский маяк',
        href: '#'
    },
]

// window.addEventListener('load', function() {

// })

$(document).ready(function () {
    // const cardContainer = $('.card-container')
    const cardContainer = document.getElementsByClassName('card-container')[0]

    // for (var r = 0; r < cards.length / 4; r++) {
    //     const row = $('<div>').addClass('row') // <div class="row"></div>
    //     row.innerHTML = 'some text'

    //     for (let c = 0; c < 4; c++) {
            
    //     }
    //     cardCont.append(row)
    // }

    const createDivColMd4 = card => {
        const divColMd4 = document.createElement('div') // <div></div>
        divColMd4.classList.add('col-md-4') // <div class="col-md-3"></div>

        const divCardM2 = document.createElement('div') // <div></div>
        divCardM2.classList.add('card', 'm-2') // <div class="card-m2"></div>
        divCardM2.style.width = '18rem' // <div class="card-m2" style="width: 18 rem;"></div>

        const img = document.createElement('img')
        img.classList.add('card-img-top')
        img.src = card.imgSrc
        img.alt = card.altSrc

        img.width = 300
        img.height = 300

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body')

        const h5 = document.createElement('h5')
        h5.innerHTML = card.title // take title property from card and assign it as inner text of h5 attribute

        const p = document.createElement('p')
        p.classList.add('card-text')
        p.innerHTML = card.description

        const a = document.createElement('a')
        a.classList.add('btn', 'btn-primary')
        a.href = card.href
        a.innerHTML = 'Go somewhere'
        // end of creating card

        divCardBody.appendChild(h5)// divCardBody  является родителем для h5, p, a
        divCardBody.appendChild(p)
        divCardBody.appendChild(a)

        divCardM2.appendChild(img)
        divCardM2.appendChild(divCardBody)

        divColMd4.appendChild(divCardM2)

        return divColMd4
    }

    // const isValidIndex = index => index < cards.length

    for (let i = 0; i < cards.length; i += 3) {
        // 0, 3, 6
        // 0, 1, 2
        // 3, 4, 5
        // 6, 7, 8 (!!!)

        // create card
        const divRow = document.createElement('div') // <div></div>
        divRow.classList.add('row') // <div class="row"></div>

        // 0, 1, 2

        for (let j = i; j < i + 3; j++) {
            if (j < cards.length) {
                const div = createDivColMd4(cards[j])
                divRow.appendChild(div)

                /*

                before loop:
                <div class ="row"></div>

                1:
                <div class="row">
                    <div class="col-md-3"></div>
                </div>

                2:
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-3"></div>
                </div>

                3:
                2:
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-3"></div>
                    <div class="col-md-3"></div>
                </div>

                */
            }
        }

        // const div1 = createDivColMd3(cards[i])
        // const div2 = createDivColMd3(cards[i + 1])

        // divRow.appendChild(div1)
        // divRow.appendChild(div2)

        cardContainer.appendChild(divRow)
    }

    for (const card of cards) {
        // // create card
        // const divRow = document.createElement('div') // <div></div>
        // divRow.class = 'row' // <div class="row"></div>

        // const divColMd3 = document.createElement('div') // <div></div>
        // divColMd3.class = 'col-md-3' // <div class="col-md-3"></div>

        // const divCardM2 = document.createElement('div') // <div></div>
        // divCardM2.class = 'card m-2' // <div class="card-m2"></div>
        // divCardM2.style.width = '18rem' // <div class="card-m2" style="width: 18 rem;"></div>

        // const img = document.createElement('img')
        // img.class = 'card-img-top'
        // img.src = card.imgSrc
        // img.alt = card.altSrc

        // // img.width = 300
        // // img.height = 300

        // const divCardBody = document.createElement('div')
        // divCardBody.class = 'card-body'

        // const h5 = document.createElement('h5')
        // h5.innerHTML = card.title // take title property from card and assign it as inner text of h5 attribute

        // const p = document.createElement('p')
        // p.class = 'card-text'
        // p.innerHTML = card.description

        // const a = document.createElement('a')
        // a.class = 'btn btn-primary'
        // a.href = card.href
        // a.innerHTML = 'Go somewhere'
        // // end of creating card

        // divCardBody.appendChild(h5)// divCardBody  является родителем для h5, p, a
        // divCardBody.appendChild(p)
        // divCardBody.appendChild(a)

        // divCardM2.appendChild(img)
        // divCardM2.appendChild(divCardBody)

        // divColMd3.appendChild(divCardM2)

        // divRow.appendChild(divColMd3)

        // cardContainer.appendChild(divRow)
    }
})
