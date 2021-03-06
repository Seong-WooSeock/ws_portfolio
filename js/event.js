//tab
let history_tab = document.querySelector('.history_tab');
let portfolio_tab = document.querySelector('.portfolio_tab');
let intro_tab = document.querySelector('.intro_tab');
let skill_tab = document.querySelector('.skill_tab');
let contact_tab = document.querySelector('.contact_tab');
//tab
//icon
let school = document.querySelector('.school');
let gradu = document.querySelector('.gradu');
let company = document.querySelector('.company');
let file = document.querySelector('.file');
let laptop = document.querySelector('.laptop');
let qustionMark_style = document.querySelector('.qustionMark_style');
let flame = document.querySelector('.flame');
let hand = document.querySelector('.hand');
let addr_book = document.querySelector('.addr_book');
//icon
//다크, 라이트모드
const light_mode = document.querySelectorAll('.light_mode');
const dark_mode = document.querySelectorAll('.dark_mode');
let ld_span = document.querySelectorAll('.skin_font span');
const isUserColorTheme = localStorage.getItem('color-theme');
//다크, 라이트모드
//allcontent
let content_style = document.querySelectorAll('.content_style');
let intro_wrapper = document.querySelectorAll('.intro_wrapper');
let exit_box = document.querySelectorAll('.exit_box');
let opacity_cover = document.querySelector('.opacity_cover');
//allcontent
//intro
let tmi_content = document.querySelector('.btn_dp_none');
let tmibutton = document.querySelector('.tmibutton');
//intro

let toggle_sidebar = document.querySelector('.toggle_sidebar');
let side_tab = document.querySelector('.side_tab');

function opacity_defaultTab(){
    history_tab.style.opacity = '1';
    portfolio_tab.style.opacity = '1';
    intro_tab.style.opacity = '1';
    skill_tab.style.opacity = '1';
    contact_tab.style.opacity = '1';
}
function opacity_tabController(n1,n2,n3,n4,n5) {
    history_tab.style.opacity = n1;
    portfolio_tab.style.opacity = n2;
    intro_tab.style.opacity = n3;
    skill_tab.style.opacity = n4;
    contact_tab.style.opacity = n5;
}
//history
history_tab.onmouseover = () => {
    school.style.display = 'none';
    gradu.style.display = 'block';
    setTimeout(function () {
        school.style.display = 'none';
        gradu.style.display = 'none';
        company.style.display = 'block';
    }, 2000);
    opacity_tabController('1', '0.5', '0.5', '0.5', '0.5');
}

history_tab.onmouseout = () => {
    school.style.display = 'block';
    gradu.style.display = 'none';
    company.style.display = 'none';
    opacity_defaultTab();
}


//portfolio
portfolio_tab.onmouseover = () => {
    file.style.display = 'none';
    laptop.style.display = 'block';
    opacity_tabController('0.5', '1', '0.5', '0.5', '0.5');

}


portfolio_tab.onmouseout = () => {
    file.style.display = 'block';
    laptop.style.display = 'none';
    opacity_defaultTab();

}

//intro
intro_tab.onmouseover = () => {
    qustionMark_style.style.position = 'absolute';
    qustionMark_style.style.animation = 'fadeInUp 1s 1';
    qustionMark_style.style.top = '-21px';
    opacity_tabController('0.5', '0.5', '1', '0.5', '0.5');
}

intro_tab.onmouseout = () => {
    qustionMark_style.style.position = 'absoulte';
    qustionMark_style.style.animation = 'none';
    qustionMark_style.style.top = '7px';
    opacity_defaultTab();
}

//skill
skill_tab.onmouseover = () => {
    flame.style.animation = '.5s infinite flameSkills';
    opacity_tabController('0.5', '0.5', '0.5', '1' , '0.5');
}

skill_tab.onmouseout = () => {
    flame.style.animation = 'none';
    opacity_defaultTab();
}

//contact

contact_tab.onmouseover = () => {
    hand.style.display = 'none';
    addr_book.style.display = 'block';
    opacity_tabController('0.5', '0.5', '0.5', '0.5', '1');
}


contact_tab.onmouseout = () => {
    hand.style.display = 'block';
    addr_book.style.display = 'none';
    opacity_defaultTab();

}


//다크, 라이트모드

window.onload = () => {
    if (isUserColorTheme === 'dark') {
      localStorage.setItem('color-theme', 'dark');
        document.documentElement.setAttribute('color-theme', 'dark');
        light_mode[0].style.display = 'none';
        light_mode[1].style.display = 'none';
        ld_span[0].innerHTML = "Dark Mode";    
        ld_span[1].innerHTML = "Dark Mode";    
    } else {
      localStorage.setItem('color-theme', 'light');
        document.documentElement.setAttribute('color-theme', 'light');
        dark_mode[0].style.display = 'none';
        dark_mode[1].style.display = 'none';
        light_mode[0].style.display = 'block';
        light_mode[1].style.display = 'block';
        ld_span[0].innerHTML = "Light Mode";
        ld_span[1].innerHTML = "Light Mode";
    }
};

for (let i = 0; i < light_mode.length; i++){
    light_mode[i].onclick = () => {
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.setAttribute('color-theme', 'dark');
        dark_mode[0].style.display = 'block';
        dark_mode[1].style.display = 'block';
        light_mode[0].style.display = 'none';
        light_mode[1].style.display = 'none';
        ld_span[0].innerHTML = "Dark Mode";    
        ld_span[1].innerHTML = "Dark Mode";    
    }
    
    dark_mode[i].onclick = () => {
        localStorage.setItem('color-theme', 'light');
        document.documentElement.setAttribute('color-theme', 'light');
        dark_mode[0].style.display = 'none';
        dark_mode[1].style.display = 'none';
        light_mode[0].style.display = 'block';
        light_mode[1].style.display = 'block';
        ld_span[0].innerHTML = "Light Mode";
        ld_span[1].innerHTML = "Light Mode";
    }
}

//다크, 라이트모드

//allcontent
for (let i = 0; i < intro_wrapper.length; i++){
    intro_wrapper[i].onclick = () => {
        content_style[i].style.display = 'block';
        opacity_cover.style.display = 'block';
        window.scrollTo(0, 0);
        exit_box[i].onclick = () => {
            content_style[i].style.display = 'none';
            opacity_cover.style.display = 'none';
        }
        opacity_cover.onclick = () => {
            content_style[i].style.display = 'none';
            opacity_cover.style.display = 'none';
        }
    }
}
//pf
const swiper_slider = new Swiper('.swiper-container', {
    speed: 300,
    debugger: true,
    loop: true,
    mousewheel: false,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
//pf

//intro
tmibutton.onclick = () => {
    tmi_content.style.display = 'block';
    tmibutton.style.display = 'none';
}

