// object for creating random forecast
const astrology = {
    first: ['Конец года! Сегодня день, чтобы завершить рутинные задания!',
    'Возможна судьбоносная встреча. Будьте бдительны!', 
    'Если есть трудности, обратитесь к своим друзьям!', 
    'Не портите себе настроения по пустякам! Все сегодня под вашим контролем!', 
    'Время подарков! Не всегда дешевая вещь может быть подходящая.', 
    'У вас замечательные организаторские таланты! Поделитесь своим опытом.', 
    'Просто радуйтесь жизни! Отпустите все обиды!',
    'Помогите другу! В скором времени все наладится.', 
    'Время тщательной планировки и осторожных шагов.', 
    'Интеллектуальное настроение. Теперь идеальное время для обучения!', 
    'Проанализируйте свою работу! В скором времени ситуация наладится.', 
    'Дайте волю альтруизму и посмотрите, что из этого выйдет.'],
    second: ['Следуйте графику! Не отступайте, продолжайте действовать!', 
    'Энергия кипит! Направьте ее в правильное русло и получите отличный результат!', 
    'Прорыв уже близок! Не сдавайтесь и будьте в таком же темпе.', 
    'Вы талантливы! Покажите свои достижения людям! Не стесняйтесь!', 
    'Все мелочи – на то и мелочи! Не обращайте на них много внимания!', 
    'Тайна будет раскрыта! Будьте готовы ко всему.', 
    'Займитесь своими делами! Не отвлекайтесь!', 
    'Стройте планы и набирайтесь сил! На носу новый год с возможностями!', 
    'Заручитесь поддержкой, потому что она очень вам нужна!', 
    'Научитесь лучше понимать близкого человека! Не будьте безразличны.'],
    third: ['Будьте внимательнее! Перед тем как что-то сделать несколько раз подумайте!', 
    'Найдите единомышленников и поддержку! Не тяните канат с живущим иллюзиями!', 
    'Проблемы отступают! Решитесь на творческие решения!', 
    'Наслаждайтесь моментом! Тратьте деньги, но с умом.', 
    'Празднуйте свою победу с размахом! Вы заслуживаете этого!', 
    'Гибкость – о вас! Спокойно адаптируйтесь к новому месту.', 
    'Уносится что-то грандиозное! Не держите интригу, расскажите миру!', 
    'Вызов! Будет не просто, но у вас уже есть опыт в этом вопросе.', 
    'Отправляйтесь в путешествие! В воздухе романтика – ждут интересные приключения.', 
    'Пока не время перемен! У вас есть сложная задача – решить его!', 
    'Ищите компромисс! Вы успешно можете решать сложные вопросы!', 
    'День хорош для того, чтобы запустить грандиозные изменения!'],
    _signs: ["Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог", "Водолей", "Рыбы"],
    // creating random forecast
    forecast() {
        return this.first[Math.floor(Math.random()*this.first.length)] + ' ' + this.second[Math.floor(Math.random()*this.second.length)] + ' ' + this.third[Math.floor(Math.random()*this.third.length)];
    }
};

// object for creating zodiac forecast
const zodiac = {
    _signs: ["Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог", "Водолей", "Рыбы"],
    // creating forecast for random sign
    forecastForRandomSign() {
        let selectSign = this._signs[Math.floor(Math.random()*this._signs.length)];
        return "Случайный гороскоп: \n" + selectSign + " - " + astrology.forecast();
    },
    // creating forecast for all signs
    forecastForAll() {
        let returnedText = "";
        this._signs.forEach(element => {
            returnedText += element  + " - " + astrology.forecast() + "\n\n";
        });
        return returnedText;
    }
};

//creating forecast for random sign
//console.log(zodiac.forecastForRandomSign());

// creating forecast or all sign
console.log(zodiac.forecastForAll());