        function getInfo() {
            document.querySelector('.right').innerHTML =



                '<div class="info"> <img class="info_img" src="img/foto/' + globArr.id + '.jpg" alt="">' +

                '<div class="info_body"><span class="info_clue">П.І.Б.</span>' +
                '<span class="info_data">' + globArr.name + '</span>' +




                '<span class="info_clue">Цех</span>' +
                '<span class="info_data">' + globArr.username + '</span>' +

                '<span class="info_clue">Відділ</span>' +
                '<span class="info_data">' + globArr.company.name + '</span>' +

                '<span class="info_clue">Посада</span>' +
                '<span class="info_data">' + globArr.company.catchPhrase + '</span>' +

                '<span class="info_clue">Телефон</span>' +
                '<span class="info_data">' + globArr.phone + '</span></div></div>'
        };



        function getVal() {

            let tab_numb = document.getElementById('tab_numb').value;
            let pass = document.getElementById('pass').value;


            async function getResponce() {
                let response = await fetch('https://jsonplaceholder.typicode.com/users');
                let content = await response.json();

                let list = document.querySelector('.root');
                list.innerHTML = " ";


                for (let key in content) {

                    if (content[key].id == tab_numb && content[key].id == pass) {


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

                        window.globArr = content[key];
                        getInfo();
                        break;
                    }

                }





                if (window.globArr == null) {
                    alert('Логин и пароль должны быть одним числом от 1 до 10');
                    location.reload();
                };


            }

            getResponce();

        }




        function getPayroll() {
            document.querySelector('.right').innerHTML =
                '<div class="payroll"><div class="payroll_head">Розрахунковий лист</div>' +
                '<div class="select"><img src="img/images/5.gif" class="select_img"><select><option>2020</option><option>2021</option></select><select><option>Січень</option><option>Лютий</option><option>Березень</option><option>Квітень</option><option>Травень</option><option>Червень</option><option>Липень</option><option>Серпень</option><option>Вересень</option><option>Жовтень</option><option>Листопад</option><option>Грудень</option></select></div><div id="print">Друк</div>' +

                '<table border="0"><tr><td colspan="2">Нараховано</td><td>Утримано</td></tr><tr><td>' + globArr.email + '</td><td>' + globArr.address.zipcode + '</td><td>' + globArr.company.bs + '</td></tr><tr><td>' + globArr.address.street + '</td><td>' + globArr.website + '</td><td>' + globArr.address.suite + '</td></tr><tr><td colspan="2">Зарплата: ' + globArr.address.geo.lat + '</td><td>' + globArr.address.city + '</td> </tr><tr><td colspan="2">Аванс: ' + globArr.address.geo.lng + '</td>    <td></td></tr></div>'


        };

        function getEsc() {
            location.reload()
        };

        function getPassword() {
            alert('Пароль можно поменять только со стороны сервера')
        };