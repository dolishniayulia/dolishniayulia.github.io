const section = document.querySelector('.blog')
const section2 = document.querySelector('news')

const requestURL = 'https://dolishniayulia.github.io/json/blog.json'

const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json'
request.send();

request.onload = function() {
    const blog = request.response
    populateSection1(blog)
    populateSection2(blog)
    populateSection3(blog)
    console.log(blog)
}
function populateSection1(jsonData) {
    let Section = document.querySelector('.blog .contant-wrap .post-shape');

    let sectionimg = document.createElement('img');

     sectionimg.classList.add('post-img')
     sectionimg.src = jsonData["img1"];
     Section.appendChild(sectionimg);



    let Section2 = document.querySelector('.blog .contant-wrap .post-shape .post-description');

    let description = document.createElement('div');
    description.classList.add('post-title');

    description.textContent = jsonData["description1"]
    Section2.appendChild(description);



    let description2 = document.createElement('div');
    description2.classList.add('post-text2');

    description2.textContent = jsonData["description2"]
    Section2.appendChild(description2);



    let description3 = document.createElement('div');
    description3.classList.add('post-text3');

    description3.textContent = jsonData["description3"]
    Section2.appendChild(description3);


    let date = document.createElement('div');
    date.classList.add('post-date');

    date.textContent = jsonData["date"]
    Section2.appendChild(date);
    
}
function populateSection3(jsonData) {
    let Section1 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b1');

    let sectionimg1 = document.createElement('img');
    sectionimg1.classList.add('b1')
    sectionimg1.src = jsonData["b1"];
    Section1.appendChild(sectionimg1);
}

function populateSection2(jsonData) {


    let Section1 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b1');

    let sectionimg1 = document.createElement('img');
    sectionimg1.classList.add('b1')
    sectionimg1.src = jsonData["b1"];
    Section1.appendChild(sectionimg1);



    let Section3 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b2');

    let sectionimg2 = document.createElement('img');
    sectionimg2.classList.add('b2')
    sectionimg2.src = jsonData["b2"];
    Section3.appendChild(sectionimg2);


    let Section4 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b3');

    let sectionimg3 = document.createElement('img');
    sectionimg3.classList.add('b3')
    sectionimg3.src = jsonData["b3"];
    Section4.appendChild(sectionimg3);



    let Section5 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b4');

    let sectionimg4 = document.createElement('img');
    sectionimg4.classList.add('b4')
    sectionimg4.src = jsonData["b4"];
    Section5.appendChild(sectionimg4);



    let Section6 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b5');

    let sectionimg5 = document.createElement('img');
    sectionimg5.classList.add('b5')
    sectionimg5.src = jsonData["b5"];
    Section6.appendChild(sectionimg1);


    let Section7 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b6');

    let sectionimg6 = document.createElement('img');
    sectionimg6.classList.add('b6')
    sectionimg6.src = jsonData["b6"];
    Section7.appendChild(sectionimg6);


    let Section8 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b7');

    let sectionimg7 = document.createElement('img');
    sectionimg7.classList.add('b7')
    sectionimg7.src = jsonData["b7"];
    Section8.appendChild(sectionimg7);



    let Section9 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b8');

    let sectionimg8 = document.createElement('img');
    sectionimg8.classList.add('b8')
    sectionimg8.src = jsonData["b8"];
    Section9.appendChild(sectionimg8);


    let Section10 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b9');

    let sectionimg9 = document.createElement('img');
    sectionimg9.classList.add('b9')
    sectionimg9.src = jsonData["b9"];
    Section10.appendChild(sectionimg9);



    let Section11 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b10');

    let sectionimg10 = document.createElement('img');
    sectionimg10.classList.add('b10')
    sectionimg10.src = jsonData["b10"];
    Section11.appendChild(sectionimg10);



    let Section12 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b11');

    let sectionimg11 = document.createElement('img');
    sectionimg11.classList.add('b11')
    sectionimg11.src = jsonData["b11"];
    Section12.appendChild(sectionimg11);



    let Section13 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b12');

    let sectionimg12 = document.createElement('img');
    sectionimg12.classList.add('b12')
    sectionimg12.src = jsonData["b12"];
    Section13.appendChild(sectionimg12);


    let Section14 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b13');

    let sectionimg13 = document.createElement('img');
    sectionimg13.classList.add('b13')
    sectionimg13.src = jsonData["b13"];
    Section14.appendChild(sectionimg13);



    let Section15 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b14');

    let sectionimg14 = document.createElement('img');
    sectionimg14.classList.add('b14')
    sectionimg14.src = jsonData["b14"];
    Section15.appendChild(sectionimg14);



    let Section16 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b15');

    let sectionimg15 = document.createElement('img');
    sectionimg15.classList.add('b15')
    sectionimg15.src = jsonData["b15"];
    Section16.appendChild(sectionimg15);



    let Section17 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b16');

    let sectionimg16 = document.createElement('img');
    sectionimg16.classList.add('b16')
    sectionimg16.src = jsonData["b16"];
    Section17.appendChild(sectionimg16);
    

    let Section18 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b17');

    let sectionimg17 = document.createElement('img');
    sectionimg17.classList.add('b17')
    sectionimg17.src = jsonData["b17"];
    Section18.appendChild(sectionimg17);



    let Section19 = document.querySelector('.news .contant-wrap .articles-news-content .articles-blocks .b18');

    let sectionimg18 = document.createElement('img');
    sectionimg18.classList.add('b18')
    sectionimg18.src = jsonData["b18"];
    Section19.appendChild(sectionimg18);


}