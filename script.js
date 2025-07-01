// Функція для отримання назви поточної сторінки
function getCurrentPageName() {
    const path = window.location.pathname;
    // Повертаємо назву файлу, або порожній рядок, якщо це кореневий URL (наприклад, /test/)
    return path.substring(path.lastIndexOf('/') + 1);
}

// Дані про правильні відповіді для кожної кінематичної пари
// Зібрано на основі наданих вами зображень таблиць
// 'imageName' повинно відповідати імені файлу зображення (наприклад, '1.jpg', '8.jpg')
const KINEMATIC_PAIRS_DATA = [
    {
        imageName: "1.jpg", // Сфера на вигнутій поверхні (image_bd9058.png)
        q1_translation: "Ox, Oy, Oz",
        q2_rotation: "Жодної",
        q3_impossible_moves: "3",
        q4_class: "III",
        q5_type: "Нижча"
    },
    {
        imageName: "2.jpg", // Штифт у пазу (image_bd9079.png, рядок 4)
        q1_translation: "Ox, Oy, Oz",
        q2_rotation: "Oy, Oz",
        q3_impossible_moves: "5",
        q4_class: "V",
        q5_type: "Нижча"
    },
    {
        imageName: "3.jpg", // Гвинтове з'єднання (image_bd9079.png, рядок 1)
        q1_translation: "Ox, Oy",
        q2_rotation: "Ox, Oy, Oz",
        q3_impossible_moves: "5",
        q4_class: "V",
        q5_type: "Нижча"
    },
    {
        imageName: "4.jpg", // Циліндричне з'єднання (image_bd9079.png, рядок 2)
        q1_translation: "Ox, Oy",
        q2_rotation: "Ox, Oy",
        q3_impossible_moves: "5",
        q4_class: "V",
        q5_type: "Нижча"
    },
    {
        imageName: "5.jpg", // Сферичне (шарнірне) з'єднання (image_bd933a.png, рядок 1)
        q1_translation: "Oy, Oz",
        q2_rotation: "Oy, Oz",
        q3_impossible_moves: "4",
        q4_class: "IV",
        q5_type: "Нижча"
    },
    {
        imageName: "6.jpg", // Штифт у циліндричному отворі з осьовим рухом (image_bd933a.png, рядок 2)
        q1_translation: "Oz",
        q2_rotation: "Ox, Oy",
        q3_impossible_moves: "3",
        q4_class: "III",
        q5_type: "Нижча"
    },
    {
        imageName: "7.jpg", // Приклад для 9-го зображення (припустимо, це простий обертовий шарнір, якщо він не представлений в таблицях)
        q1_translation: "Ox, Oy",
        q2_rotation: "Жодної",
        q3_impossible_moves: "2",
        q4_class: "II",
        q5_type: "Вища"
    },
    {
        imageName: "8.jpg", // Блок на блоці (площинне) (image_bd9079.png, рядок 3)
        q1_translation: "Oz",
        q2_rotation: "Жодної",
        q3_impossible_moves: "1",
        q4_class: "I",
        q5_type: "Вища"
    },
];

// Об'єкт для зберігання перекладів
const translations = {
    'uk': {
        // General
        'prevStep': 'ПОПЕРЕДНІЙ КРОК',
        'nextStep': 'НАСТУПНИЙ КРОК',

        // index.html
        'mainTitleIndex': 'Інтерактивне практичне завдання до теми 2',
        'enterYourName': 'Введіть ваше ім\'я',
        'startButton': 'Розпочати',

        // page2.html
        'mainTitlePage2': 'Інтерактивне практичне завдання до теми 2',
        'subtitlePage2': 'Тема: Кінематичні пари і кінематичні ланцюги',
        'scorePrefix': 'Кількість балів: ',
        'chooseLanguage': 'Оберіть мову:',

        // page3.html
        'page3Title': 'Кінематичні пари і кінематичні ланцюги',
        'step1Heading': 'Крок 1',
        'theorySubheading': 'Теоретичні відомості',
        'theoryP1': 'Механізмом називається штучно створена система тіл, призначена для перетворення одного або декількох тіл в потрібний рух інших тіл.',
        'theoryP2': 'Одно або декількох жорстко з’єднаних твердих тіл, що входять до складу механізму, називаємого ланкою. Ланка, прийнята за нерухому, називається стояком. Ланки механізму, положення яких назначаються безпосередньо значенням вибраних незалежних параметрів — узагальнених координат, називаються ведучими, а ланки механізму, положення і переміщення яких однозначно залежать від положень і переміщень ведучих ланок, називаються веденими.',
        'theoryP3': 'Кінематичною парою називається з\'єднання двох дотичних ланок, що допускають їх відносний рух. Поверхні, лінії, точки ланки, по яким воно може дотикатися з іншою ланкою, утворюючи кінематичну пару, називаються елементами кінематичної пари.',
        'theoryP4': 'Кінематичним ланцюгом називається зв\'язана система ланок, утворюючи між собою кінематичні пари. Кінематичні ланцюги поділяються на прості і складні, замкнуті і незамкнуті.',
        'theoryP5': 'Простим кінематичним ланцюгом називається ланцюг, у якого кожна ланка входе не більше ніж в дві кінематичні пари.',
        'theoryP6': 'Складним кінематичним ланцюгом називається ланцюг, який має хоча б одна ланка, що входить більш ніж в дві кінематичні пари.',
        'theoryP7': 'Замкненим кінематичним ланцюгом називається ланцюг, кожна ланка якого входе принаймні в дві кінематичні пари.',
        'theoryP8': 'Незамкненим кінематичним ланцюгом називається ланцюг, у якого є ланки, що входять тільки в одну кінематичну пару.',
        'theoryP9': 'Переважна більшість механізмів, що використовується в інженерній практиці, утворені замкнутими кінематичними ланцюгами. Тому механізм (що складається тільки з твердих тіл) може бути визначений наступним чином.',
        'theoryP10': 'Механізмом називається кінематичний ланцюг, в якого при заданому русі одного чи декількох ланок (ведучих) відносно любої з них (стояка) всі інші ланки (ведені) здійснюють однозначно визначні рухи.',
        'theoryP11': 'Число ступенів свободи механізму відносно стійки називають ступенем рухомості та зазвичай позначають буквою ω. Більшість механізмів, що використовуються в техніці, мають ступінь рухомості, рівний одиниці, але іноді зустрічаються механізми з двома і більше ступенями рухомості; такі механізми називаються диференціальними.',
        'theoryP12': 'Всі кінематичні пари розділяються на п’ять класів. Номер класу кінематичної пари визначається числом умов зв’язків, що накладені на рух одної ланки пари відносно іншої. Звідси слідує, що пара I класу може бути названа п’ятирухомою, пара II класу — чотирьохрухомою і т.д.',
        'theoryP13': 'Для вирішення питання, до якого класу відноситься та чи інша кінематична пара, потрібно діяти так. Одну із ланок, що входить до кінематичної пари, уявити нерухомою. пов\'язати з нею систему координат Оxyz і, орієнтуючись на неї, прослідкувати, які рухи другої ланки пари неможливі із шести рухів, які вона мала б можливість здійснювати, не входячи в пару. Число цих неможливих рухів (як рівне числу зв’язків в парі) представляє собою номер класу пари.',

        // page4.html
        'stepTitlePage4': 'Крок 2',
        'taskTitlePage4': 'Завдання для студента',
        'q1Translation': 'Вздовж яких вісей ланка 2 не може переміщуватися поступально відносно ланки 1?',
        'q2Rotation': 'Навколо яких вісей ланка 2 не може обертатися відносно лаки 1?',
        'q3ImpossibleMoves': 'Скільки з шести можливих рухів ланки 2 відносно ланки 1 неможливі?',
        'q4Class': 'Який клас кінематичної пари?',
        'q5Type': 'Нижча або вища кінематична пара?',
        'checkButtonPrefix': 'ПЕРЕВІРИТИ',
        'attemptsSuffix': 'спроб',
        'toResults': 'ПЕРЕЙТИ ДО РЕЗУЛЬТАТІВ',
        'chooseQuantity': 'Оберіть кількість',
        'chooseClass': 'Оберіть клас',
        'chooseType': 'Оберіть тип',
        'noAxis': 'Жодної',
        'chooseAxisPlaceholder': 'Оберіть осі',

        // page5.html
        'testResultsTitle': 'Ваші результати',
        'startTime': 'Час початку тестування: ',
        'endTime': 'Час завершення тестування: ',
        'executionTime': 'Час виконання: ',
        'seconds': ' сек.',
        'finalScorePrefix': 'Ви отримали: ',
        'points': ' балів'
    },
    'en': {
        // General
        'prevStep': 'PREVIOUS STEP',
        'nextStep': 'NEXT STEP',

        // index.html
        'mainTitleIndex': 'Interactive practical task for topic 2',
        'enterYourName': 'Enter your name',
        'startButton': 'Start',

        // page2.html
        'mainTitlePage2': 'Interactive practical task for topic 2',
        'subtitlePage2': 'Topic: Kinematic pairs and kinematic chains',
        'scorePrefix': 'Score: ',
        'chooseLanguage': 'Choose language:',

        // page3.html
        'page3Title': 'Kinematic Pairs and Kinematic Chains',
        'step1Heading': 'Step 1',
        'theorySubheading': 'Theoretical Information',
        'theoryP1': 'A mechanism is an artificially created system of bodies designed to convert the movement of one or more bodies into the desired movement of other bodies.',
        'theoryP2': 'One or more rigidly connected solid bodies that are part of a mechanism are called a link. A link taken as fixed is called a stand. Links of a mechanism whose positions are directly determined by the values of selected independent parameters — generalized coordinates — are called driving links, while links of a mechanism whose positions and movements uniquely depend on the positions and movements of driving links are called driven links.',
        'theoryP3': 'A kinematic pair is a connection of two touching links that allows their relative movement. Surfaces, lines, and points of a link through which it can touch another link, forming a kinematic pair, are called elements of a kinematic pair.',
        'theoryP4': 'A kinematic chain is a connected system of links forming kinematic pairs with each other. Kinematic chains are divided into simple and complex, closed and open.',
        'theoryP5': 'A simple kinematic chain is a chain in which each link is part of no more than two kinematic pairs.',
        'theoryP6': 'A complex kinematic chain is a chain that has at least one link that is part of more than two kinematic pairs.',
        'theoryP7': 'A closed kinematic chain is a chain in which each link is part of at least two kinematic pairs.',
        'theoryP8': 'An open kinematic chain is a chain that has links that are part of only one kinematic pair.',
        'theoryP9': 'The vast majority of mechanisms used in engineering practice are formed by closed kinematic chains. Therefore, a mechanism (consisting only of solid bodies) can be defined as follows.',
        'theoryP10': 'A mechanism is a kinematic chain in which, for a given movement of one or more links (driving) relative to any of them (stand), all other links (driven) perform uniquely defined movements.',
        'theoryP11': 'The number of degrees of freedom of a mechanism relative to the stand is called the degree of mobility and is usually denoted by the letter ω. Most mechanisms used in technology have a degree of mobility equal to one, but sometimes mechanisms with two or more degrees of mobility are encountered; such mechanisms are called differential.',
        'theoryP12': 'All kinematic pairs are divided into five classes. The class number of a kinematic pair is determined by the number of constraint conditions imposed on the movement of one link of the pair relative to the other. It follows that a class I pair can be called five-movable, a class II pair — four-movable, and so on.',
        'theoryP13': 'To determine the class of a kinematic pair, proceed as follows. Imagine one of the links forming the kinematic pair as fixed. Associate a coordinate system Oxyz with it and, guided by it, observe which movements of the second link of the pair are impossible out of the six movements it would be able to perform without being part of the pair. The number of these impossible movements (equal to the number of constraints in the pair) represents the class number of the pair.',

        // page4.html
        'stepTitlePage4': 'Step 2',
        'taskTitlePage4': 'Student Task',
        'q1Translation': 'Along which axes can link 2 not move translationally relative to link 1?',
        'q2Rotation': 'Around which axes can link 2 not rotate relative to link 1?',
        'q3ImpossibleMoves': 'How many of the six possible movements of link 2 relative to link 1 are impossible?',
        'q4Class': 'What class of kinematic pair?',
        'q5Type': 'Lower or higher kinematic pair?',
        'checkButtonPrefix': 'CHECK',
        'attemptsSuffix': 'attempts',
        'toResults': 'GO TO RESULTS',
        'chooseQuantity': 'Choose quantity',
        'chooseClass': 'Choose class',
        'chooseType': 'Choose type',
        'noAxis': 'None',
        'chooseAxisPlaceholder': 'Select axes',

        // page5.html
        'testResultsTitle': 'Your Results',
        'startTime': 'Test start time: ',
        'endTime': 'Test end time: ',
        'executionTime': 'Execution time: ',
        'seconds': ' sec.',
        'finalScorePrefix': 'You received: ',
        'points': ' points'
    }
};


// Функція для застосування перекладів на поточній сторінці
function applyTranslations(lang) {
    // index.html specific translations
    if (getCurrentPageName() === 'index.html' || getCurrentPageName() === '') {
        const mainTitle = document.querySelector('h1');
        if (mainTitle) mainTitle.textContent = translations[lang]['mainTitleIndex'];

        const userNameInput = document.getElementById('userName');
        if (userNameInput) {
            userNameInput.placeholder = translations[lang]['enterYourName'];
        }
        const startButton = document.getElementById('startButton');
        if (startButton) {
            startButton.textContent = translations[lang]['startButton'];
        }
    }
    // page2.html specific translations
    else if (getCurrentPageName() === 'page2.html') {
        const mainTitlePage2 = document.querySelector('h1');
        if (mainTitlePage2) mainTitlePage2.textContent = translations[lang]['mainTitlePage2'];

        const subtitlePage2 = document.querySelector('.subtitle');
        if (subtitlePage2) subtitlePage2.textContent = translations[lang]['subtitlePage2'];

        const chooseLanguageText = document.querySelector('.language-selection p');
        if (chooseLanguageText) chooseLanguageText.textContent = translations[lang]['chooseLanguage'];

        const scoreInfoParagraph = document.querySelector('.score-info p');
        const scoreValueSpan = scoreInfoParagraph ? scoreInfoParagraph.querySelector('.score-value') : null;
        if (scoreInfoParagraph) {
            if (scoreValueSpan) {
                scoreInfoParagraph.innerHTML = translations[lang]['scorePrefix'] + scoreValueSpan.outerHTML;
            } else {
                scoreInfoParagraph.textContent = translations[lang]['scorePrefix'];
            }
        }
    }
    // page3.html specific translations
    else if (getCurrentPageName() === 'page3.html') {
        const page3Title = document.querySelector('.page-title');
        if (page3Title) page3Title.textContent = translations[lang]['page3Title'];

        const step1Heading = document.querySelector('.section-heading');
        if (step1Heading) step1Heading.textContent = translations[lang]['step1Heading'];

        const theorySubheading = document.querySelector('.section-subheading');
        if (theorySubheading) theorySubheading.textContent = translations[lang]['theorySubheading'];

        const theoryParagraphs = document.querySelectorAll('.theory-content p');
        if (theoryParagraphs[0]) theoryParagraphs[0].textContent = translations[lang]['theoryP1'];
        if (theoryParagraphs[1]) theoryParagraphs[1].textContent = translations[lang]['theoryP2'];
        if (theoryParagraphs[2]) theoryParagraphs[2].textContent = translations[lang]['theoryP3'];
        if (theoryParagraphs[3]) theoryParagraphs[3].textContent = translations[lang]['theoryP4'];
        if (theoryParagraphs[4]) theoryParagraphs[4].textContent = translations[lang]['theoryP5'];
        if (theoryParagraphs[5]) theoryParagraphs[5].textContent = translations[lang]['theoryP6'];
        if (theoryParagraphs[6]) theoryParagraphs[6].textContent = translations[lang]['theoryP7'];
        if (theoryParagraphs[7]) theoryParagraphs[7].textContent = translations[lang]['theoryP8'];
        if (theoryParagraphs[8]) theoryParagraphs[8].textContent = translations[lang]['theoryP9'];
        if (theoryParagraphs[9]) theoryParagraphs[9].textContent = translations[lang]['theoryP10'];
        if (theoryParagraphs[10]) theoryParagraphs[10].textContent = translations[lang]['theoryP11'];
        if (theoryParagraphs[11]) theoryParagraphs[11].textContent = translations[lang]['theoryP12'];
        if (theoryParagraphs[12]) theoryParagraphs[12].textContent = translations[lang]['theoryP13'];
    }
    // page4.html specific translations
    else if (getCurrentPageName() === 'page4.html') {
        const stepTitlePage4 = document.querySelector('.step-title');
        if (stepTitlePage4) stepTitlePage4.textContent = translations[lang]['stepTitlePage4'];

        const taskTitlePage4 = document.querySelector('.task-title');
        if (taskTitlePage4) taskTitlePage4.textContent = translations[lang]['taskTitlePage4'];

        // Question texts
        const questionTexts = document.querySelectorAll('.question-block .question-text');
        if (questionTexts[0]) questionTexts[0].textContent = translations[lang]['q1Translation'];
        if (questionTexts[1]) questionTexts[1].textContent = translations[lang]['q2Rotation'];
        if (questionTexts[2]) questionTexts[2].textContent = translations[lang]['q3ImpossibleMoves'];
        if (questionTexts[3]) questionTexts[3].textContent = translations[lang]['q4Class'];
        if (questionTexts[4]) questionTexts[4].textContent = translations[lang]['q5Type'];

        // Axis buttons "Жодної" and input placeholders
        document.querySelectorAll('.axis-button[data-value="Жодної"]').forEach(btn => {
            btn.textContent = translations[lang]['noAxis'];
        });
        document.querySelectorAll('.question-input').forEach(input => {
            input.placeholder = translations[lang]['chooseAxisPlaceholder'];
        });


        // Dropdown buttons
        document.querySelectorAll('.dropdown-button').forEach(button => {
            const qType = button.dataset.qtype;
            const currentVal = button.dataset.value; // Get currently selected value

            if (!currentVal) { // If no value is selected, update placeholder
                if (qType === 'q3') button.textContent = translations[lang]['chooseQuantity'];
                else if (qType === 'q4') button.textContent = translations[lang]['chooseClass'];
                else if (qType === 'q5') button.textContent = translations[lang]['chooseType'];
            } else {
                // If a value is selected, ensure it's translated if it's one of the options
                // This part might need more sophisticated mapping if options themselves are translatable strings
                // For now, assuming selected values like "1", "II", "Нижча" are distinct and don't need translation.
                // If "Нижча" needs translation, it should be mapped.
                if (currentVal === 'Нижча' && lang === 'en') button.textContent = 'Lower';
                if (currentVal === 'Вища' && lang === 'en') button.textContent = 'Higher';
            }
        });


        // Check button
        const checkButton = document.querySelector('.check-button');
        if (checkButton) {
            let attemptsText = '';
            const currentText = checkButton.textContent;
            // Use regex to extract the number of attempts if present
            const parts = currentText.match(/\((\d+)\s[^\)]+\)/); // Matches (NUMBER text)
            if (parts && parts[1]) {
                const numAttempts = parts[1];
                attemptsText = ` (${numAttempts} ${translations[lang]['attemptsSuffix']})`;
            }

            if (currentText.includes('ПЕРЕЙТИ ДО РЕЗУЛЬТАТІВ') || currentText.includes('GO TO RESULTS')) {
                checkButton.textContent = translations[lang]['toResults'];
            } else {
                checkButton.textContent = translations[lang]['checkButtonPrefix'] + attemptsText;
            }
        }
    }
    // page5.html specific translations
    else if (getCurrentPageName() === 'page5.html') {
        const resultsTitle = document.querySelector('.results-title');
        if (resultsTitle) resultsTitle.textContent = translations[lang]['testResultsTitle'];

        const startTimeP = document.querySelectorAll('.time-info p')[0];
        const startTimeSpan = startTimeP ? startTimeP.querySelector('#startTime') : null;
        if (startTimeP && startTimeSpan) startTimeP.innerHTML = translations[lang]['startTime'] + startTimeSpan.outerHTML;

        const endTimeP = document.querySelectorAll('.time-info p')[1];
        const endTimeSpan = endTimeP ? endTimeP.querySelector('#endTime') : null;
        if (endTimeP && endTimeSpan) endTimeP.innerHTML = translations[lang]['endTime'] + endTimeSpan.outerHTML;

        const executionTimeP = document.querySelectorAll('.time-info p')[2];
        const executionTimeSpan = executionTimeP ? executionTimeP.querySelector('#executionTime') : null;
        if (executionTimeP && executionTimeSpan) {
            // Reconstruct the innerHTML to update "сек." while preserving the number
            const currentSeconds = executionTimeSpan.textContent.replace(/[^0-9]/g, ''); // Extract just the number
            executionTimeP.innerHTML = translations[lang]['executionTime'] + `<span id="executionTime" class="execution-time-box">${currentSeconds} ${translations[lang]['seconds']}</span>`;
        }

        const finalScoreP = document.querySelector('.score-display p');
        const finalScoreSpan = finalScoreP ? finalScoreP.querySelector('#finalScore') : null;
        if (finalScoreP && finalScoreSpan) finalScoreP.innerHTML = translations[lang]['finalScorePrefix'] + finalScoreSpan.outerHTML + translations[lang]['points'];
    }

    // Common navigation buttons for all pages (except index, which has only start button, and page3, page4 have specific nav buttons)
    // Make sure these are handled only once or for pages where they actually exist.
    const prevButtonNav = document.querySelector('.bottom-nav-bar .nav-button.gray');
    const nextButtonNav = document.querySelector('.bottom-nav-bar .nav-button.blue');

    if (prevButtonNav) prevButtonNav.textContent = translations[lang]['prevStep'];
    // nextButtonNav exists on page2 and page5 (and potentially page3 if implemented with next step).
    // It's also handled in page4's check button for "ПЕРЕЙТИ ДО РЕЗУЛЬТАТІВ".
    if (nextButtonNav) nextButtonNav.textContent = translations[lang]['nextStep'];
}


document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPageName();

    // Apply language on initial load for any page
    const savedLanguage = localStorage.getItem('language') || 'uk'; // Default to Ukrainian
    applyTranslations(savedLanguage);

    // --- Логіка навігації сторінками ---

    // Обробка кнопки "Розпочати" на index.html
    if (currentPage === 'index.html' || currentPage === '') {
        const startButton = document.getElementById('startButton');
        if (startButton) {
            startButton.addEventListener('click', (event) => {
                event.preventDefault();
                const userName = document.getElementById('userName').value;
                if (userName) {
                    localStorage.setItem('userName', userName);
                    localStorage.removeItem('testStartTime');
                    localStorage.removeItem('testEndTime');
                    localStorage.removeItem('selectedImages');
                    localStorage.removeItem('finalScore');
                    localStorage.removeItem('remainingAttempts');
                    window.location.href = 'page2.html';
                } else {
                    alert(savedLanguage === 'uk' ? 'Будь ласка, введіть ваше ім\'я.' : 'Please enter your name.'); // Used savedLanguage here
                }
            });
        }
    }

    const prevButton = document.querySelector('.nav-button.gray');
    const nextButton = document.querySelector('.nav-button.blue');

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentPage === 'page2.html') {
                window.location.href = 'index.html';
            } else if (currentPage === 'page3.html') {
                window.location.href = 'page2.html';
            } else if (currentPage === 'page4.html') {
                window.location.href = 'page3.html';
            } else if (currentPage === 'page5.html') {
                window.location.href = 'page4.html';
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentPage === 'page2.html') {
                if (!localStorage.getItem('testStartTime')) {
                    localStorage.setItem('testStartTime', new Date().getTime());
                }
                window.location.href = 'page3.html';
            } else if (currentPage === 'page3.html') {
                window.location.href = 'page4.html';
            } else if (currentPage === 'page4.html') {
                // Час завершення тестування встановлюється при натисканні "ПЕРЕВІРИТИ" (останній раз)
                window.location.href = 'page5.html';
            } else if (currentPage === 'page5.html') {
                localStorage.removeItem('userName');
                localStorage.removeItem('testStartTime');
                localStorage.removeItem('testEndTime');
                localStorage.removeItem('selectedImages');
                localStorage.removeItem('finalScore');
                localStorage.removeItem('remainingAttempts');
                window.location.href = 'index.html';
            }
        });
    }

    // --- Функціонал таймера та відображення балів для page5.html ---
    if (currentPage === 'page5.html') {
        const startTimeElement = document.getElementById('startTime');
        const endTimeElement = document.getElementById('endTime');
        const executionTimeElement = document.getElementById('executionTime');
        const finalScoreElement = document.getElementById('finalScore');

        const startTime = localStorage.getItem('testStartTime');
        const endTime = localStorage.getItem('testEndTime');
        const finalScore = localStorage.getItem('finalScore');

        if (startTime && endTime) {
            const startDate = new Date(parseInt(startTime));
            const endDate = new Date(parseInt(endTime));

            startTimeElement.textContent = startDate.toLocaleTimeString('uk-UA'); // Keep locale for time format
            endTimeElement.textContent = endDate.toLocaleTimeString('uk-UA'); // Keep locale for time format

            const executionTimeSeconds = Math.round((endDate - startDate) / 1000);
            executionTimeElement.textContent = `${executionTimeSeconds} ${translations[savedLanguage]['seconds']}.`; // Translate "сек."
        } else {
            startTimeElement.textContent = '--:--:--';
            endTimeElement.textContent = '--:--:--';
            executionTimeElement.textContent = `-- ${translations[savedLanguage]['seconds']}.`; // Translate "сек."
        }

        if (finalScore !== null) {
            finalScoreElement.textContent = finalScore;
        } else {
            finalScoreElement.textContent = '0';
        }
    }

    // --- Language selection for page2.html ---
    if (currentPage === 'page2.html') {
        const ukFlag = document.querySelector('img[src="images/ukraine.svg"]');
        const ukFlagIcon = document.querySelector('img[src="images/uk.png"]');

        if (ukFlag) {
            ukFlag.addEventListener('click', () => {
                localStorage.setItem('language', 'uk');
                applyTranslations('uk');
            });
        }

        if (ukFlagIcon) {
            ukFlagIcon.addEventListener('click', () => {
                localStorage.setItem('language', 'en');
                applyTranslations('en');
            });
        }
    }

    // --- Логіка вибору осей (Клік замість Drag-and-Drop) та Рандомізація зображень, Перевірка відповідей для page4.html ---
    if (currentPage === 'page4.html') {
        // --- Рандомізація зображень ---
        const imageElements = document.querySelectorAll('.question-image');
        let selectedImages = JSON.parse(localStorage.getItem('selectedImages'));

        if (!selectedImages) {
            const allImageNames = KINEMATIC_PAIRS_DATA.map(pair => pair.imageName); // Використовуємо всі доступні зображення з даних
            selectedImages = [];
            while (selectedImages.length < 2) {
                const randomIndex = Math.floor(Math.random() * allImageNames.length);
                const randomImage = allImageNames[randomIndex];
                if (!selectedImages.includes(randomImage)) {
                    selectedImages.push(randomImage);
                }
            }
            localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
        }

        imageElements.forEach((img, index) => {
            if (selectedImages[index]) {
                img.src = `images/${selectedImages[index]}`;
            }
        });

        // --- Допоміжна функція для очищення візуального зворотного зв'язку ---
        function clearFeedback(element) {
            if (element) {
                element.classList.remove('correct-answer', 'incorrect-answer');
                const parentContainer = element.closest('.input-with-feedback');
                const feedbackIcon = parentContainer ? parentContainer.querySelector('.feedback-icon') : null;
                if (feedbackIcon) {
                    feedbackIcon.classList.remove('correct', 'incorrect');
                }
            }
        }

        // --- Логіка вибору осей кліками ---
        const axisButtons = document.querySelectorAll('.axis-button');
        const questionInputs = document.querySelectorAll('.question-input'); // Отримуємо всі поля вводу

        axisButtons.forEach(button => {
            button.addEventListener('click', () => {
                const inputValue = button.dataset.value;
                const inputField = button.closest('.input-and-choices').querySelector('.question-input');
                const acceptsMultiple = inputField.dataset.acceptMultiple === 'true';

                let currentValues = inputField.value.split(', ').filter(val => val !== ''); // Отримуємо поточні значення як масив

                if (acceptsMultiple) {
                    if (currentValues.includes(inputValue)) {
                        currentValues = currentValues.filter(val => val !== inputValue);
                    } else {
                        currentValues.push(inputValue);
                    }
                } else {
                    // Якщо приймає лише одне значення
                    if (currentValues.includes(inputValue)) {
                        currentValues = [];
                    } else {
                        const prevSelectedButton = button.closest('.axis-buttons').querySelector('.axis-button.in-input-field');
                        if (prevSelectedButton) {
                            prevSelectedButton.classList.remove('in-input-field');
                        }
                        currentValues = [inputValue];
                    }
                }

                // Оновлюємо значення поля введення (сортуємо для консистентності)
                inputField.value = currentValues.sort().join(', ');

                // Оновлюємо візуальний стан кнопок у цій групі
                const currentAxisButtonsInGroup = button.closest('.axis-buttons').querySelectorAll('.axis-button');
                currentAxisButtonsInGroup.forEach(btn => {
                    if (currentValues.includes(btn.dataset.value)) {
                        btn.classList.add('in-input-field');
                    } else {
                        btn.classList.remove('in-input-field');
                    }
                });

                clearFeedback(inputField); // Очищаємо зворотний зв'язок при зміні відповіді
            });
        });

        // При завантаженні сторінки відновлюємо візуальний стан кнопок та полів
        questionInputs.forEach(inputField => {
            if (inputField.value) {
                const savedValues = inputField.value.split(', ').filter(val => val !== '');
                const parentAxisButtons = inputField.closest('.input-and-choices').querySelectorAll('.axis-button');
                parentAxisButtons.forEach(button => {
                    if (savedValues.includes(button.dataset.value)) {
                        button.classList.add('in-input-field');
                    }
                });
            }
        });


        // --- Налаштування та логіка випадаючих списків ---
        const dropdownOptions = {
            q3: ["1", "2", "3", "4", "5", "6"],
            q4: ["I", "II", "III", "IV", "V"],
            q5: ["Нижча", "Вища"] // These specific values need to be handled for translation if chosen
        };

        document.querySelectorAll('.dropdown-buttons-group').forEach(group => {
            group.querySelectorAll('.dropdown-button').forEach(button => {
                const qType = button.dataset.qtype;
                const options = dropdownOptions[qType];

                let dropdownList = document.createElement('ul');
                dropdownList.classList.add('dropdown-list');
                dropdownList.style.display = 'none'; // Спочатку приховано
                dropdownList.style.backgroundColor = '#fff';
                dropdownList.style.border = '1px solid #ccc';
                dropdownList.style.zIndex = '100';
                dropdownList.style.listStyle = 'none';
                dropdownList.style.padding = '5px 0';
                dropdownList.style.margin = '0';
                dropdownList.style.borderRadius = '4px';
                dropdownList.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                dropdownList.style.minWidth = 'max-content';
                dropdownList.style.textAlign = 'left';

                options.forEach(option => {
                    let listItem = document.createElement('li');
                    // Translate specific option values if needed
                    let displayOption = option;
                    if (savedLanguage === 'en') { // Used savedLanguage here
                        if (option === 'Нижча') displayOption = 'Lower';
                        if (option === 'Вища') displayOption = 'Higher';
                    }
                    listItem.textContent = displayOption;
                    listItem.dataset.originalValue = option; // Store original value for setting button.dataset.value
                    listItem.style.padding = '8px 15px';
                    listItem.style.cursor = 'pointer';
                    listItem.style.whiteSpace = 'nowrap';
                    listItem.addEventListener('mouseover', () => listItem.style.backgroundColor = '#f0f0f0');
                    listItem.addEventListener('mouseout', () => listItem.style.backgroundColor = '');
                    listItem.addEventListener('click', (e) => {
                        e.stopPropagation(); // Запобігти закриттю кнопки одразу
                        button.textContent = listItem.textContent; // Use translated text for display
                        button.dataset.value = listItem.dataset.originalValue; // Store original value in data-attribute
                        button.classList.remove('active');
                        dropdownList.style.display = 'none';
                        clearFeedback(button); // Очищаємо зворотний зв'язок при зміні відповіді
                    });
                    dropdownList.appendChild(listItem);
                });

                // Append dropdownList to the .input-with-feedback parent
                button.closest('.input-with-feedback').appendChild(dropdownList);


                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    document.querySelectorAll('.dropdown-list').forEach(list => list.style.display = 'none');
                    document.querySelectorAll('.dropdown-button').forEach(btn => btn.classList.remove('active'));

                    const isActive = dropdownList.style.display === 'block';
                    dropdownList.style.display = isActive ? 'none' : 'block';
                    button.classList.toggle('active', !isActive);

                    // Set position relative to the button's offsetParent (which should be .input-with-feedback)
                    dropdownList.style.top = `${button.offsetHeight + 5}px`;
                    dropdownList.style.left = `0`;
                    dropdownList.style.width = `${button.offsetWidth}px`;
                });

                document.addEventListener('click', (e) => {
                    if (!button.contains(e.target) && !dropdownList.contains(e.target)) {
                        dropdownList.style.display = 'none';
                        button.classList.remove('active');
                    }
                });

                // Відновити значення кнопки, якщо воно було збережено
                // Тут можна додати логіку для завантаження збережених відповідей, якщо потрібно
                // Наприклад, з localStorage
                if (button.dataset.value) {
                    // This logic ensures dropdown button text is updated on language change
                    // to the *selected* value, not the placeholder text.
                    let selectedDisplayText = button.dataset.value;
                    if (savedLanguage === 'en') { // Used savedLanguage here
                        if (button.dataset.value === 'Нижча') selectedDisplayText = 'Lower';
                        if (button.dataset.value === 'Вища') selectedDisplayText = 'Higher';
                    }
                    button.textContent = selectedDisplayText;
                } else {
                    // This updates the placeholder text based on current language
                    if (qType === 'q3') button.textContent = translations[savedLanguage]['chooseQuantity'];
                    else if (qType === 'q4') button.textContent = translations[savedLanguage]['chooseClass'];
                    else if (qType === 'q5') button.textContent = translations[savedLanguage]['chooseType'];
                }
            });
        });


        // --- Логіка перевірки відповідей та підрахунку балів ---
        let remainingAttempts = localStorage.getItem('remainingAttempts');
        if (remainingAttempts === null || isNaN(remainingAttempts)) {
            remainingAttempts = 3; // Початкова кількість спроб
        } else {
            remainingAttempts = parseInt(remainingAttempts);
        }

        const checkButton = document.querySelector('.check-button');
        if (checkButton) {
            // Оновлення тексту кнопки при завантаженні сторінки
            if (remainingAttempts > 0) {
                checkButton.textContent = `${translations[savedLanguage]['checkButtonPrefix']} (${remainingAttempts} ${translations[savedLanguage]['attemptsSuffix']})`;
            } else {
                checkButton.textContent = translations[savedLanguage]['toResults'];
                // Можна відключити поля введення та випадаючі списки тут, якщо спроб більше немає
            }

            checkButton.addEventListener('click', () => {
                const selectedImagesData = selectedImages.map(imgName => KINEMATIC_PAIRS_DATA.find(data => data.imageName === imgName));

                // Допоміжна функція для порівняння відповідей (для осей)
                const compareAxisAnswers = (userAnsString, correctAnsString) => {
                    const userArray = userAnsString.split(', ').filter(Boolean).sort();
                    const correctArray = correctAnsString.split(', ').filter(Boolean).sort();
                    return userArray.length === correctArray.length &&
                        userArray.every((val, index) => val === correctArray[index]);
                };

                // Функція для застосування візуального зворотного зв'язку
                const applyFeedback = (element, isCorrect) => {
                    clearFeedback(element); // Очищаємо попередній зворотний зв'язок
                    const parentContainer = element.closest('.input-with-feedback'); // Знаходимо батьківський контейнер
                    const feedbackIcon = parentContainer ? parentContainer.querySelector('.feedback-icon') : null;

                    if (isCorrect) {
                        element.classList.add('correct-answer');
                        if (feedbackIcon) {
                            feedbackIcon.classList.add('correct');
                            feedbackIcon.classList.remove('incorrect');
                        }
                    } else {
                        element.classList.add('incorrect-answer');
                        if (feedbackIcon) {
                            feedbackIcon.classList.add('incorrect');
                            feedbackIcon.classList.remove('correct');
                        }
                    }
                };

                // Якщо спроб більше немає, переходимо на сторінку результатів
                if (remainingAttempts <= 0) {
                    let totalFinalScore = 0;
                    if (selectedImagesData.length === 2) {
                        const image1Data = selectedImagesData[0];
                        const image2Data = selectedImagesData[1];

                        // Остання перевірка всіх відповідей перед переходом
                        if (compareAxisAnswers(document.getElementById('q1_ans1').value, image1Data.q1_translation)) totalFinalScore++;
                        if (compareAxisAnswers(document.getElementById('q2_ans1').value, image1Data.q2_rotation)) totalFinalScore++;
                        if (document.querySelectorAll('[data-qtype="q3"]')[0].dataset.value === image1Data.q3_impossible_moves) totalFinalScore++;
                        if (document.querySelectorAll('[data-qtype="q4"]')[0].dataset.value === image1Data.q4_class) totalFinalScore++;
                        if (document.querySelectorAll('[data-qtype="q5"]')[0].dataset.value === image1Data.q5_type) totalFinalScore++;

                        if (compareAxisAnswers(document.getElementById('q1_ans2').value, image2Data.q1_translation)) totalFinalScore++;
                        if (compareAxisAnswers(document.getElementById('q2_ans2').value, image2Data.q2_rotation)) totalFinalScore++;
                        if (document.querySelectorAll('[data-qtype="q3"]')[1].dataset.value === image2Data.q3_impossible_moves) totalFinalScore++;
                        if (document.querySelectorAll('[data-qtype="q4"]')[1].dataset.value === image2Data.q4_class) totalFinalScore++;
                        if (document.querySelectorAll('[data-qtype="q5"]')[1].dataset.value === image2Data.q5_type) totalFinalScore++;
                    }
                    localStorage.setItem('finalScore', totalFinalScore);
                    localStorage.setItem('testEndTime', new Date().getTime());
                    localStorage.removeItem('remainingAttempts'); // Скидаємо спроби для наступного тесту
                    window.location.href = 'page5.html';
                    return; // Виходимо з функції
                }

                // --- Виконуємо перевірку для поточної спроби ---
                if (selectedImagesData.length === 2) {
                    const image1Data = selectedImagesData[0];
                    const image2Data = selectedImagesData[1];

                    // Відповіді для Зображення 1
                    const userQ1Ans1 = document.getElementById('q1_ans1');
                    const userQ2Ans1 = document.getElementById('q2_ans1');
                    const userQ3Btn1 = document.querySelectorAll('[data-qtype="q3"]')[0];
                    const userQ4Btn1 = document.querySelectorAll('[data-qtype="q4"]')[0]; // Corrected line
                    const userQ5Btn1 = document.querySelectorAll('[data-qtype="q5"]')[0];

                    // Застосовуємо зворотний зв'язок для Зображення 1
                    applyFeedback(userQ1Ans1, compareAxisAnswers(userQ1Ans1.value, image1Data.q1_translation));
                    applyFeedback(userQ2Ans1, compareAxisAnswers(userQ2Ans1.value, image1Data.q2_rotation));
                    applyFeedback(userQ3Btn1, userQ3Btn1.dataset.value === image1Data.q3_impossible_moves);
                    applyFeedback(userQ4Btn1, userQ4Btn1.dataset.value === image1Data.q4_class);
                    applyFeedback(userQ5Btn1, userQ5Btn1.dataset.value === image1Data.q5_type);

                    // Відповіді для Зображення 2
                    const userQ1Ans2 = document.getElementById('q1_ans2');
                    const userQ2Ans2 = document.getElementById('q2_ans2');
                    const userQ3Btn2 = document.querySelectorAll('[data-qtype="q3"]')[1];
                    const userQ4Btn2 = document.querySelectorAll('[data-qtype="q4"]')[1];
                    const userQ5Btn2 = document.querySelectorAll('[data-qtype="q5"]')[1]; // Corrected line

                    // Застосовуємо зворотний зв'язок для Зображення 2
                    applyFeedback(userQ1Ans2, compareAxisAnswers(userQ1Ans2.value, image2Data.q1_translation));
                    applyFeedback(userQ2Ans2, compareAxisAnswers(userQ2Ans2.value, image2Data.q2_rotation));
                    applyFeedback(userQ3Btn2, userQ3Btn2.dataset.value === image2Data.q3_impossible_moves);
                    applyFeedback(userQ4Btn2, userQ4Btn2.dataset.value === image2Data.q4_class);
                    applyFeedback(userQ5Btn2, userQ5Btn2.dataset.value === image2Data.q5_type);
                }

                // Зменшуємо кількість спроб
                remainingAttempts--;
                localStorage.setItem('remainingAttempts', remainingAttempts);

                if (remainingAttempts > 0) {
                    checkButton.textContent = `${translations[savedLanguage]['checkButtonPrefix']} (${remainingAttempts} ${translations[savedLanguage]['attemptsSuffix']})`;
                } else {
                    checkButton.textContent = translations[savedLanguage]['toResults'];
                }
            });
        }
    }
});
