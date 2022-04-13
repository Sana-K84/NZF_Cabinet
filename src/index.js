function getInfo() {
    const unit = JSON.parse(localStorage.getItem('unit'));
    document.querySelector('.right').innerHTML =

        '<div class="info"> <img class="info_img" src="img/foto/' + unit.id + '.jpg" alt="">' +

        '<div class="info_body"><span class="info_clue">П.І.Б.</span>' +
        '<span class="info_data">' + unit.name + '</span>' +

        '<span class="info_clue">Цех</span>' +
        '<span class="info_data">' + unit.username + '</span>' +

        '<span class="info_clue">Відділ</span>' +
        '<span class="info_data">' + unit.company.name + '</span>' +

        '<span class="info_clue">Посада</span>' +
        '<span class="info_data">' + unit.company.catchPhrase + '</span>' +

        '<span class="info_clue">Телефон</span>' +
        '<span class="info_data">' + unit.phone + '</span></div></div>'
};


function getDoc() {
    let list = document.querySelector('.root');
    list.innerHTML = " ";
    var header = document.createElement('header');
    header.classList = 'head';
    list.appendChild(header);

    var logo = document.createElement('img');
    logo.classList = 'logo';
    logo.src = 'img/Images/logo.png';
    logo.alt = 'Logo_nzf';
    header.appendChild(logo);

    var span = document.createElement('span');
    span.classList = 'head_text';
    span.innerHTML = 'Особистий кабінет';
    header.appendChild(span);

    list.innerHTML +=
        '<section><div class="left"><span class="list" onclick="getInfo()">Інформація</span><span class="list" onclick="getPayroll()">Розрахунковий лист</span><span class="list" onclick="getPassword()">Змінити пароль</span><span class="list" onclick="getEsc()">Вихід</span></div><div class="right"></div></section>';


}


function getVal() {

    let tab_numb = document.getElementById('tab_numb').value;
    let pass = document.getElementById('pass').value;



    async function getResponce() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let content = await response.json();



        for (let key in content) {

            if (content[key].id == tab_numb && content[key].id == pass) {

                localStorage.setItem('unit', JSON.stringify(content[key]))
                getDoc();
                getInfo();
                break;
            }
        }

        const unit = JSON.parse(localStorage.getItem('unit'));
        if (unit == undefined) {
            alert('Логин и пароль должны быть одним числом от 1 до 10');
            location.reload();
        };

    }
    getResponce();
}

function getPayroll() {
    const unit = JSON.parse(localStorage.getItem('unit'));
    document.querySelector('.right').innerHTML =
        '<div class="payroll"><div class="payroll_head">Розрахунковий лист</div>' +
        '<div class="select"><img src="img/Images/5.gif" class="select_img"><select><option>2020</option><option>2021</option></select><select><option>Січень</option><option>Лютий</option><option>Березень</option><option>Квітень</option><option>Травень</option><option>Червень</option><option>Липень</option><option>Серпень</option><option>Вересень</option><option>Жовтень</option><option>Листопад</option><option>Грудень</option></select></div><div id="print">Друк</div>' +
        '<div id="table"><table border="0"><tr><td colspan="2">Нараховано</td><td>Утримано</td></tr><tr><td>' + unit.email + '</td><td>' + unit.address.zipcode + '</td><td>' + unit.company.bs + '</td></tr><tr><td>' + unit.address.street + '</td><td>' + unit.website + '</td><td>' + unit.address.suite + '</td></tr><tr><td colspan="2">Зарплата: ' + unit.address.geo.lat + '</td><td>' + unit.address.city + '</td> </tr><tr><td colspan="2">Аванс: ' + unit.address.geo.lng + '</td><td></td></tr></div></div>'
    document.getElementById('print').onclick = function () {
        function CallPrint() {
            var prtContent = document.getElementById('table');
            var prtCSS = '<link rel="stylesheet" href="src/style.css" type="text/css" />';
            var WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
            WinPrint.document.write('<div id="table"');
            WinPrint.document.write(prtCSS);
            WinPrint.document.write(prtContent.innerHTML);
            WinPrint.document.write('</div>');
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
            prtContent.innerHTML = strOldOne;
        }
        CallPrint();
    }
};

function getEsc() {
    localStorage.removeItem('unit');
    location.reload()
};

function getPassword() {
    alert('Пароль можно поменять только со стороны сервера')
};

function loadImage() {
    const unit = JSON.parse(localStorage.getItem('unit'));
    if (unit !== null) {
        getDoc();
        getInfo();
    };

}