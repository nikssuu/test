function getCurrentPageName() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1);
}

const KINEMATIC_PAIRS_DATA = [
    {
        imageName: "1.jpg",
        q1_translation: "Ox, Oy, Oz",
        q2_rotation: "Жодної",
        q3_impossible_moves: "3",
        q4_class: "III",
        q5_type: "Нижча"
    },
    {
        imageName: "2.jpg",
        q1_translation: "Ox, Oy, Oz",
        q2_rotation: "Oy, Oz",
        q3_impossible_moves: "5",
        q4_class: "V",
        q5_type: "Нижча"
    },
    {
        imageName: "3.jpg",
        q1_translation: "Oy, Oz",
        q2_rotation: "Ox, Oy, Oz",
        q3_impossible_moves: "5",
        q4_class: "V",
        q5_type: "Нижча"
    },
    {
        imageName: "4.jpg",
        q1_translation: "Ox, Oy",
        q2_rotation: "Ox, Oy",
        q3_impossible_moves: "5",
        q4_class: "V",
        q5_type: "Нижча"
    },
    {
        imageName: "5.jpg",
        q1_translation: "Oy, Oz",
        q2_rotation: "Oy, Oz",
        q3_impossible_moves: "4",
        q4_class: "IV",
        q5_type: "Нижча"
    },
    {
        imageName: "6.jpg",
        q1_translation: "Oz",
        q2_rotation: "Ox, Oy",
        q3_impossible_moves: "3",
        q4_class: "III",
        q5_type: "Нижча"
    },
    {
        imageName: "7.jpg",
        q1_translation: "Ox, Oy",
        q2_rotation: "Жодної",
        q3_impossible_moves: "2",
        q4_class: "II",
        q5_type: "Вища"
    },
    {
        imageName: "8.jpg",
        q1_translation: "Oz",
        q2_rotation: "Жодної",
        q3_impossible_moves: "1",
        q4_class: "I",
        q5_type: "Вища"
    },
];

const translations = {
    'uk': {
        'prevStep': 'ПОПЕРЕДНІЙ КРОК',
        'nextStep': 'НАСТУПНИЙ КРОК',

        'mainTitleIndex': 'Інтерактивне практичне завдання до теми 2',
        'enterYourName': 'Введіть ваше ім\'я',
        'startButton': 'Розпочати',

        'mainTitlePage2': 'Інтерактивне практичне завдання до теми 2',
        'subtitlePage2': 'Тема: Кінематичні пари і кінематичні ланцюги',
        'scorePrefix': 'Кількість балів: ',
        'chooseLanguage': 'Оберіть мову:',

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

        'stepTitlePage4': 'Крок 2',
        'taskTitlePage4_1': 'Завдання для студента (Зображення 1)',
        'taskTitlePage4_2': 'Завдання для студента (Зображення 2)',
        'q1Translation': 'Вздовж яких вісей ланка 2 не може переміщуватися поступально відносно ланки 1?',
        'q2Rotation': 'Навколо яких вісей ланка 2 не може обертатися відносно лаки 1?',
        'q3ImpossibleMoves': 'Скільки з шести можливих рухів ланки 2 відносно ланки 1 неможливі?',
        'q4Class': 'Який клас кінематичної пари?',
        'q5Type': 'Нижча або вища кінематична пара?',
        'checkButtonPrefix': 'ПЕРЕВІРИТИ',
        'attemptsSuffix': 'спроб',
        'toResults': 'ПЕРЕЙТИ ДО РЕЗУЛЬТАТІВ',
        'nextPage': 'НАСТУПНИЙ КРОК',
        'chooseQuantity': 'Оберіть кількість',
        'chooseClass': 'Оберіть клас',
        'chooseType': 'Оберіть тип',
        'noAxis': 'Жодної',
        'chooseAxisPlaceholder': 'Оберіть осі',

        'testResultsTitle': 'Ваші результати',
        'startTime': 'Час початку тестування: ',
        'endTime': 'Час завершення тестування: ',
        'executionTime': 'Час виконання: ',
        'seconds': ' сек.',
        'finalScorePrefix': 'Ви отримали: ',
        'points': ' балів'
    },
    'en': {
        'prevStep': 'PREVIOUS STEP',
        'nextStep': 'NEXT STEP',

        'mainTitleIndex': 'Interactive practical task for topic 2',
        'enterYourName': 'Enter your name',
        'startButton': 'Start',

        'mainTitlePage2': 'Interactive practical task for topic 2',
        'subtitlePage2': 'Topic: Kinematic pairs and kinematic chains',
        'scorePrefix': 'Score: ',
        'chooseLanguage': 'Choose language:',

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

        'stepTitlePage4': 'Крок 2',
        'taskTitlePage4_1': 'Student Task (Image 1)',
        'taskTitlePage4_2': 'Student Task (Image 2)',
        'q1Translation': 'Along which axes can link 2 not move translationally relative to link 1?',
        'q2Rotation': 'Around which axes can link 2 not rotate relative to link 1?',
        'q3ImpossibleMoves': 'How many of the six possible movements of link 2 relative to link 1 are impossible?',
        'q4Class': 'What class of kinematic pair?',
        'q5Type': 'Lower or higher kinematic pair?',
        'checkButtonPrefix': 'CHECK',
        'attemptsSuffix': 'attempts',
        'toResults': 'GO TO RESULTS',
        'nextPage': 'NEXT STEP',
        'chooseQuantity': 'Choose quantity',
        'chooseClass': 'Choose class',
        'chooseType': 'Choose type',
        'noAxis': 'None',
        'chooseAxisPlaceholder': 'Select axes',

        'testResultsTitle': 'Your Results',
        'startTime': 'Test start time: ',
        'endTime': 'Test end time: ',
        'executionTime': 'Execution time: ',
        'seconds': ' sec.',
        'finalScorePrefix': 'You received: ',
        'points': ' points'
    }
};

function applyTranslations(lang) {
    const currentPage = getCurrentPageName();
    if (currentPage === 'index.html' || currentPage === '') {
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
    else if (currentPage === 'page2.html') {
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
    else if (currentPage === 'page3.html') {
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
    else if (currentPage === 'page4.html' || currentPage === 'page4.1.html') {
        const stepTitlePage4 = document.querySelector('.step-title');
        if (stepTitlePage4) stepTitlePage4.textContent = translations[lang]['stepTitlePage4'];

        const taskTitlePage4 = document.querySelector('.task-title');
        if (taskTitlePage4) {
            if (currentPage === 'page4.html') {
                taskTitlePage4.textContent = translations[lang]['taskTitlePage4_1'];
            } else {
                taskTitlePage4.textContent = translations[lang]['taskTitlePage4_2'];
            }
        }

        const questionTexts = document.querySelectorAll('.question-block .question-text');
        if (questionTexts[0]) questionTexts[0].textContent = translations[lang]['q1Translation'];
        if (questionTexts[1]) questionTexts[1].textContent = translations[lang]['q2Rotation'];
        if (questionTexts[2]) questionTexts[2].textContent = translations[lang]['q3ImpossibleMoves'];
        if (questionTexts[3]) questionTexts[3].textContent = translations[lang]['q4Class'];
        if (questionTexts[4]) questionTexts[4].textContent = translations[lang]['q5Type'];

        document.querySelectorAll('.axis-button[data-value="Жодної"]').forEach(btn => {
            btn.textContent = translations[lang]['noAxis'];
        });
        document.querySelectorAll('.question-input').forEach(input => {
            input.placeholder = translations[lang]['chooseAxisPlaceholder'];
        });

        document.querySelectorAll('.dropdown-button').forEach(button => {
            const qType = button.dataset.qtype;
            const currentVal = button.dataset.value;

            if (!currentVal) {
                if (qType === 'q3') button.textContent = translations[lang]['chooseQuantity'];
                else if (qType === 'q4') button.textContent = translations[lang]['chooseClass'];
                else if (qType === 'q5') button.textContent = translations[lang]['chooseType'];
            } else {
                if (currentVal === 'Нижча' && lang === 'en') button.textContent = 'Lower';
                if (currentVal === 'Вища' && lang === 'en') button.textContent = 'Higher';
            }
        });

        const checkButton = document.querySelector('button.check-button');
        const checkButtonPart1 = document.getElementById('checkButtonPart1');

        let actualCheckButton = null;

        if (currentPage === 'page4.html' && checkButtonPart1) {
            actualCheckButton = checkButtonPart1;
        } else if (currentPage === 'page4.1.html' && checkButton) {
            actualCheckButton = checkButton;
        }

        if (actualCheckButton) {
            const remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);
            let attemptsText = '';

            if (remainingAttempts > 0) {
                attemptsText = ` (${remainingAttempts} ${translations[lang]['attemptsSuffix']})`;
            }

            if (actualCheckButton.dataset.state === 'toResults') {
                actualCheckButton.textContent = translations[lang]['toResults'];
            } else { // Default check state or if attempts are 0
                actualCheckButton.textContent = translations[lang]['checkButtonPrefix'] + attemptsText;
            }
        }
    }
    else if (currentPage === 'page5.html') {
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
            const currentSeconds = executionTimeSpan.textContent.replace(/[^0-9]/g, '');
            executionTimeP.innerHTML = translations[lang]['executionTime'] + `<span id="executionTime" class="execution-time-box">${currentSeconds} ${translations[lang]['seconds']}</span>`;
        }

        const finalScoreP = document.querySelector('.score-display p');
        const finalScoreSpan = finalScoreP ? finalScoreP.querySelector('#finalScore') : null;
        if (finalScoreP && finalScoreSpan) finalScoreP.innerHTML = translations[lang]['finalScorePrefix'] + finalScoreSpan.outerHTML + translations[lang]['points'];
    }

    const prevButtonNav = document.querySelector('.bottom-nav-bar .nav-button.gray');
    const nextButtonNav = document.querySelector('.bottom-nav-bar .nav-button.blue');

    if (prevButtonNav) prevButtonNav.textContent = translations[lang]['prevStep'];
    if (nextButtonNav) {
        if (currentPage === 'page2.html' || currentPage === 'page3.html' || currentPage === 'page5.html') {
            nextButtonNav.textContent = translations[lang]['nextStep'];
        } else if (currentPage === 'page4.html') {
            nextButtonNav.textContent = translations[lang]['nextPage'];
        }
    }
}

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

const compareAxisAnswers = (userAnsString, correctAnsString) => {
    const userArray = userAnsString.split(', ').filter(Boolean).sort();
    const correctArray = correctAnsString.split(', ').filter(Boolean).sort();
    return userArray.length === correctArray.length &&
        userArray.every((val, index) => val === correctArray[index]);
};

const applyFeedback = (element, isCorrect) => {
    clearFeedback(element);
    const parentContainer = element.closest('.input-with-feedback');
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

function disablePageElements(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.querySelectorAll('input, button:not(.nav-button):not(.close-overlay-button):not(.check-button)').forEach(element => {
            element.disabled = true;
            element.style.cursor = 'not-allowed';
            element.classList.add('disabled-input-button');
        });
        container.querySelectorAll('.axis-button.in-input-field').forEach(button => {
            button.classList.remove('in-input-field');
            button.style.backgroundColor = '#ccc';
        });
        container.querySelectorAll('.dropdown-button').forEach(button => {
            button.style.backgroundColor = '#f0f0f0';
            button.style.color = '#777';
        });
    }
}
function enablePageElements(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.querySelectorAll('input, button:not(.nav-button):not(.close-overlay-button):not(.check-button)').forEach(element => {
            element.disabled = false;
            element.style.cursor = '';
            element.classList.remove('disabled-input-button');
        });
    }
}

function disableNavButtons() {
    const navButtons = document.querySelectorAll('.bottom-nav-bar .nav-button');
    navButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled-input-button');
    });
}

function enableNavButtons() {
    const navButtons = document.querySelectorAll('.bottom-nav-bar .nav-button');
    navButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('disabled-input-button');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPageName();
    const savedLanguage = localStorage.getItem('language') || 'uk';

    applyTranslations(savedLanguage);

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
                    localStorage.setItem('remainingAttempts', 3);
                    localStorage.removeItem('image1Answers');
                    localStorage.removeItem('image2Answers');
                    localStorage.removeItem('image1CompletedCorrectly');
                    window.location.href = 'page2.html';
                } else {
                    alert(savedLanguage === 'uk' ? 'Будь ласка, введіть ваше ім\'я.' : 'Please enter your name.');
                }
            });
        }
    }

    const prevButton = document.querySelector('.nav-button.gray');
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentPage === 'page2.html') {
                window.location.href = 'index.html';
            } else if (currentPage === 'page3.html') {
                window.location.href = 'page2.html';
            } else if (currentPage === 'page4.html') {
                window.location.href = 'page3.html';
            } else if (currentPage === 'page4.1.html') {
                const answersToSave = collectAnswers(2);
                localStorage.setItem('image2Answers', JSON.stringify(answersToSave));
                window.location.href = 'page4.html';
            } else if (currentPage === 'page5.html') {
                localStorage.removeItem('userName');
                localStorage.removeItem('testStartTime');
                localStorage.removeItem('testEndTime');
                localStorage.removeItem('selectedImages');
                localStorage.removeItem('finalScore');
                localStorage.removeItem('remainingAttempts');
                localStorage.removeItem('image1Answers');
                localStorage.removeItem('image2Answers');
                localStorage.removeItem('image1CompletedCorrectly');
                window.location.href = 'index.html';
            }
        });
    }

    const nextButtonGeneral = document.querySelector('.nav-button.blue');
    if (nextButtonGeneral) {
        nextButtonGeneral.addEventListener('click', () => {
            if (currentPage === 'page2.html') {
                if (!localStorage.getItem('testStartTime')) {
                    localStorage.setItem('testStartTime', new Date().getTime());
                }
                let selectedImages = JSON.parse(localStorage.getItem('selectedImages'));
                if (!selectedImages) {
                    const allImageNames = KINEMATIC_PAIRS_DATA.map(pair => pair.imageName);
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
                window.location.href = 'page3.html';
            } else if (currentPage === 'page3.html') {
                window.location.href = 'page4.html';
            }
            else if (currentPage === 'page4.1.html') {
                const answersToSave = collectAnswers(2);
                localStorage.setItem('image2Answers', JSON.stringify(answersToSave));
                const finalScore = calculateAndSaveFinalScore(JSON.parse(localStorage.getItem('selectedImages')));
                localStorage.setItem('finalScore', finalScore);
                localStorage.setItem('testEndTime', new Date().getTime());
                localStorage.removeItem('remainingAttempts');
                localStorage.removeItem('image1Answers');
                localStorage.removeItem('image2Answers');
                localStorage.removeItem('image1CompletedCorrectly');
                window.location.href = 'page5.html';
            }
            else if (currentPage === 'page5.html') {
                localStorage.removeItem('userName');
                localStorage.removeItem('testStartTime');
                localStorage.removeItem('testEndTime');
                localStorage.removeItem('selectedImages');
                localStorage.removeItem('finalScore');
                localStorage.removeItem('remainingAttempts');
                localStorage.removeItem('image1Answers');
                localStorage.removeItem('image2Answers');
                localStorage.removeItem('image1CompletedCorrectly');
                window.location.href = 'index.html';
            }
        });
    }

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

            startTimeElement.textContent = startDate.toLocaleTimeString('uk-UA');
            endTimeElement.textContent = endDate.toLocaleTimeString('uk-UA');

            const executionTimeSeconds = Math.round((endDate - startDate) / 1000);
            executionTimeElement.textContent = `${executionTimeSeconds} ${translations[savedLanguage]['seconds']}.`;
        } else {
            startTimeElement.textContent = '--:--:--';
            endTimeElement.textContent = '--:--:--';
            executionTimeElement.textContent = `-- ${translations[savedLanguage]['seconds']}.`;
        }

        if (finalScore !== null) {
            finalScoreElement.textContent = finalScore;
        } else {
            finalScoreElement.textContent = '0';
        }
    }
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
    if (currentPage === 'page4.html' || currentPage === 'page4.1.html') {
        const selectedImages = JSON.parse(localStorage.getItem('selectedImages'));
        const imageElement = document.querySelector('.question-image');

        if (!selectedImages || selectedImages.length < 2) {
            console.error("Selected images not found or insufficient. Redirecting to index.");
            window.location.href = 'index.html';
            return;
        }

        let currentImageName;
        let currentImageData;
        let imageNumForData;

        const nextToPart2Button = document.getElementById('nextToPart2Button');
        const successMessageOverlay = document.querySelector('.success-message-overlay');
        const closeOverlayButton = document.querySelector('.close-overlay-button');


        const checkButtonPart1 = document.getElementById('checkButtonPart1');
        const checkButtonPart2 = document.querySelector('button.check-button');


        if (currentPage === 'page4.html') {
            imageNumForData = 1;
            currentImageName = selectedImages[0];
            currentImageData = KINEMATIC_PAIRS_DATA.find(data => data.imageName === currentImageName);
            document.title = translations[savedLanguage]['stepTitlePage4'] + ' - ' + translations[savedLanguage]['taskTitlePage4_1'];

            if (nextToPart2Button) nextToPart2Button.style.display = 'none';
            if (successMessageOverlay) successMessageOverlay.style.display = 'none';

            const image1CompletedCorrectly = localStorage.getItem('image1CompletedCorrectly') === 'true';
            let remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);

            if (image1CompletedCorrectly) {
                if (successMessageOverlay) successMessageOverlay.style.display = 'flex';
                if (nextToPart2Button) nextToPart2Button.style.display = 'block';
                disablePageElements('.page4-container');
                if (checkButtonPart1) {
                    checkButtonPart1.disabled = true;
                    checkButtonPart1.classList.add('disabled-input-button');
                }
                disableNavButtons();
            } else if (remainingAttempts <= 0) {
                disablePageElements('.page4-container');
                if (checkButtonPart1) {
                    checkButtonPart1.textContent = translations[savedLanguage]['toResults'];
                    checkButtonPart1.dataset.state = 'toResults';
                    checkButtonPart1.disabled = false;
                    checkButtonPart1.classList.remove('disabled-input-button');
                }
                if (nextToPart2Button) {
                    nextToPart2Button.style.display = 'none'; 
                }
                enableNavButtons();
            } else {
                enablePageElements('.page4-container');
                if (checkButtonPart1) {
                    checkButtonPart1.disabled = false;
                    checkButtonPart1.classList.remove('disabled-input-button');
                }
            }

            if (closeOverlayButton) {
                closeOverlayButton.addEventListener('click', () => {
                    if (successMessageOverlay) {
                        successMessageOverlay.style.display = 'none';
                        enableNavButtons();
                    }
                });
            }

            if (nextToPart2Button) {
                nextToPart2Button.addEventListener('click', () => {
                    const answersToSave = collectAnswers(1);
                    localStorage.setItem('image1Answers', JSON.stringify(answersToSave));
                    window.location.href = 'page4.1.html';
                });
            }


        } else {
            imageNumForData = 2;
            currentImageName = selectedImages[1];
            currentImageData = KINEMATIC_PAIRS_DATA.find(data => data.imageName === currentImageName);
            document.title = translations[savedLanguage]['stepTitlePage4'] + ' - ' + translations[savedLanguage]['taskTitlePage4_2'];

            let remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);
            if (checkButtonPart2) {
                if (remainingAttempts <= 0 || checkButtonPart2.dataset.state === 'toResults') {
                    checkButtonPart2.textContent = translations[savedLanguage]['toResults'];
                    checkButtonPart2.dataset.state = 'toResults';
                    checkButtonPart2.disabled = false;
                    checkButtonPart2.classList.remove('disabled-input-button');
                    disablePageElements('.page4-container');
                } else {
                    checkButtonPart2.textContent = `${translations[savedLanguage]['checkButtonPrefix']} (${remainingAttempts} ${translations[savedLanguage]['attemptsSuffix']})`;
                    checkButtonPart2.dataset.state = 'check';
                    checkButtonPart2.disabled = false;
                    checkButtonPart2.classList.remove('disabled-input-button');
                    enablePageElements('.page4-container');
                }
            }
        }

        if (imageElement) {
            imageElement.src = `images/${currentImageName}`;
        }

        const axisButtons = document.querySelectorAll('.axis-button');
        axisButtons.forEach(button => {
            button.addEventListener('click', () => {
                let remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);

                if (remainingAttempts <= 0 || (currentPage === 'page4.html' && localStorage.getItem('image1CompletedCorrectly') === 'true')) {
                    return;
                }

                const inputValue = button.dataset.value;
                const inputField = button.closest('.input-and-choices').querySelector('.question-input');
                const acceptsMultiple = inputField.dataset.acceptMultiple === 'true';

                let currentValues = inputField.value.split(', ').filter(val => val !== '');

                if (acceptsMultiple) {
                    if (currentValues.includes(inputValue)) {
                        currentValues = currentValues.filter(val => val !== inputValue);
                    } else {
                        currentValues.push(inputValue);
                    }
                } else {
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
                inputField.value = currentValues.sort().join(', ');
                const currentAxisButtonsInGroup = button.closest('.axis-buttons').querySelectorAll('.axis-button');
                currentAxisButtonsInGroup.forEach(btn => {
                    if (currentValues.includes(btn.dataset.value)) {
                        btn.classList.add('in-input-field');
                    } else {
                        btn.classList.remove('in-input-field');
                    }
                });
                clearFeedback(inputField);
            });
        });

        if (currentPage === 'page4.html' && localStorage.getItem('image1Answers')) {
            const savedAnswers = JSON.parse(localStorage.getItem('image1Answers'));
            restoreAnswers(1, savedAnswers);
        } else if (currentPage === 'page4.1.html' && localStorage.getItem('image2Answers')) {
            const savedAnswers = JSON.parse(localStorage.getItem('image2Answers'));
            restoreAnswers(2, savedAnswers);
        }

        const dropdownOptions = {
            q3: ["1", "2", "3", "4", "5", "6"],
            q4: ["I", "II", "III", "IV", "V"],
            q5: ["Нижча", "Вища"]
        };

        document.querySelectorAll('.dropdown-buttons-group').forEach(group => {
            group.querySelectorAll('.dropdown-button').forEach(button => {
                const qType = button.dataset.qtype;
                const options = dropdownOptions[qType];

                let dropdownList = document.createElement('ul');
                dropdownList.classList.add('dropdown-list');
                dropdownList.style.display = 'none';
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
                    let displayOption = option;
                    if (savedLanguage === 'en') {
                        if (option === 'Нижча') displayOption = 'Lower';
                        if (option === 'Вища') displayOption = 'Higher';
                    }
                    listItem.textContent = displayOption;
                    listItem.dataset.originalValue = option;
                    listItem.style.padding = '8px 15px';
                    listItem.style.cursor = 'pointer';
                    listItem.style.whiteSpace = 'nowrap';
                    listItem.addEventListener('mouseover', () => listItem.style.backgroundColor = '#f0f0f0');
                    listItem.addEventListener('mouseout', () => listItem.style.backgroundColor = '');
                    listItem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        let remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);

                        if (remainingAttempts <= 0 || (currentPage === 'page4.html' && localStorage.getItem('image1CompletedCorrectly') === 'true')) {
                            return;
                        }

                        button.textContent = listItem.textContent;
                        button.dataset.value = listItem.dataset.originalValue;
                        button.classList.remove('active');
                        dropdownList.style.display = 'none';
                        clearFeedback(button);
                    });
                    dropdownList.appendChild(listItem);
                });
                button.closest('.input-with-feedback').appendChild(dropdownList);
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);

                    if (remainingAttempts <= 0 || (currentPage === 'page4.html' && localStorage.getItem('image1CompletedCorrectly') === 'true')) {
                        return;
                    }

                    document.querySelectorAll('.dropdown-list').forEach(list => list.style.display = 'none');
                    document.querySelectorAll('.dropdown-button').forEach(btn => btn.classList.remove('active'));

                    const isActive = dropdownList.style.display === 'block';
                    dropdownList.style.display = isActive ? 'none' : 'block';
                    button.classList.toggle('active', !isActive);

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

                if (button.dataset.value) {
                    let selectedDisplayText = button.dataset.value;
                    if (savedLanguage === 'en') {
                        if (button.dataset.value === 'Нижча') selectedDisplayText = 'Lower';
                        if (button.dataset.value === 'Вища') selectedDisplayText = 'Higher';
                    }
                    button.textContent = selectedDisplayText;
                } else {
                    if (qType === 'q3') button.textContent = translations[savedLanguage]['chooseQuantity'];
                    else if (qType === 'q4') button.textContent = translations[savedLanguage]['chooseClass'];
                    else if (qType === 'q5') button.textContent = translations[savedLanguage]['chooseType'];
                }
            });
        });

        if (currentPage === 'page4.html' && checkButtonPart1) {
            let initialAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);
            if (initialAttempts <= 0) {
                checkButtonPart1.textContent = translations[savedLanguage]['toResults'];
                checkButtonPart1.dataset.state = 'toResults';
                checkButtonPart1.disabled = false;
                checkButtonPart1.classList.remove('disabled-input-button');
            } else {
                checkButtonPart1.textContent = `${translations[savedLanguage]['checkButtonPrefix']} (${initialAttempts} ${translations[savedLanguage]['attemptsSuffix']})`;
                checkButtonPart1.disabled = false;
                checkButtonPart1.classList.remove('disabled-input-button');
            }

            checkButtonPart1.addEventListener('click', () => {
                if (checkButtonPart1.dataset.state === 'toResults') {
                    console.log('Navigating to results from page4.html via "To Results" button.');
                    const finalScore = calculateAndSaveFinalScore(selectedImages);
                    localStorage.setItem('finalScore', finalScore);
                    localStorage.setItem('testEndTime', new Date().getTime());
                    localStorage.removeItem('remainingAttempts');
                    localStorage.removeItem('image1Answers');
                    localStorage.removeItem('image2Answers');
                    localStorage.removeItem('image1CompletedCorrectly');
                    window.location.href = 'page5.html';
                    return;
                }

                let remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);

                if (checkButtonPart1.disabled) {
                    return;
                }

                const image1Data = KINEMATIC_PAIRS_DATA.find(data => data.imageName === selectedImages[0]);
                const answersCollected = collectAnswers(1);
                localStorage.setItem('image1Answers', JSON.stringify(answersCollected));

                let allAnswersCorrectOnPage1 = true;
                const questionsData1 = [
                    {id: 'q1_ans1', correct: image1Data.q1_translation, type: 'axis'},
                    {id: 'q2_ans1', correct: image1Data.q2_rotation, type: 'axis'},
                    {id: 'q3_btn1', correct: image1Data.q3_impossible_moves, type: 'dropdown'},
                    {id: 'q4_btn1', correct: image1Data.q4_class, type: 'dropdown'},
                    {id: 'q5_btn1', correct: image1Data.q5_type, type: 'dropdown'}
                ];
                questionsData1.forEach(q => {
                    let element = document.getElementById(q.id);
                    let isCorrect;
                    if (q.type === 'axis') {
                        isCorrect = compareAxisAnswers(answersCollected[q.id.split('_')[0]], q.correct);
                    } else if (q.type === 'dropdown') {
                        isCorrect = answersCollected[q.id.split('_')[0]] === q.correct;
                    }
                    applyFeedback(element, isCorrect);
                    if (!isCorrect) allAnswersCorrectOnPage1 = false;
                });

                if (!allAnswersCorrectOnPage1) {
                    remainingAttempts--;
                    localStorage.setItem('remainingAttempts', remainingAttempts);
                }

                let buttonText = `${translations[savedLanguage]['checkButtonPrefix']} (${remainingAttempts} ${translations[savedLanguage]['attemptsSuffix']})`;

                if (remainingAttempts <= 0) {
                    buttonText = translations[savedLanguage]['toResults'];
                    checkButtonPart1.dataset.state = 'toResults';
                    disablePageElements('.page4-container');
                    checkButtonPart1.disabled = false;
                    checkButtonPart1.classList.remove('disabled-input-button');
                    if (nextToPart2Button) {
                        nextToPart2Button.style.display = 'none';
                    }
                    enableNavButtons();
                } else if (allAnswersCorrectOnPage1) {
                    if (successMessageOverlay) successMessageOverlay.style.display = 'flex';
                    if (nextToPart2Button) {
                        nextToPart2Button.style.display = 'block';
                    }
                    localStorage.setItem('image1CompletedCorrectly', 'true');
                    disablePageElements('.page4-container');
                    checkButtonPart1.disabled = true;
                    checkButtonPart1.classList.add('disabled-input-button');
                    disableNavButtons();
                } else {
                    checkButtonPart1.dataset.state = 'check';
                    checkButtonPart1.disabled = false;
                    checkButtonPart1.classList.remove('disabled-input-button');
                    enablePageElements('.page4-container');
                }

                checkButtonPart1.textContent = buttonText;
            });
        }

        if (currentPage === 'page4.1.html' && checkButtonPart2) {
            let initialAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);
            if (checkButtonPart2.dataset.state === 'toResults') {
                checkButtonPart2.textContent = translations[savedLanguage]['toResults'];
                checkButtonPart2.disabled = false;
                checkButtonPart2.classList.remove('disabled-input-button');
                disablePageElements('.page4-container');
            } else if (initialAttempts <= 0) {
                checkButtonPart2.textContent = translations[savedLanguage]['toResults'];
                checkButtonPart2.dataset.state = 'toResults';
                checkButtonPart2.disabled = false;
                checkButtonPart2.classList.remove('disabled-input-button');
                disablePageElements('.page4-container');
            } else {
                checkButtonPart2.textContent = `${translations[savedLanguage]['checkButtonPrefix']} (${initialAttempts} ${translations[savedLanguage]['attemptsSuffix']})`;
                checkButtonPart2.dataset.state = 'check';
                checkButtonPart2.disabled = false;
                checkButtonPart2.classList.remove('disabled-input-button');
                enablePageElements('.page4-container');
            }

            checkButtonPart2.addEventListener('click', () => {
                let remainingAttempts = parseInt(localStorage.getItem('remainingAttempts') || 3);

                const currentImage2Answers = collectAnswers(2);
                localStorage.setItem('image2Answers', JSON.stringify(currentImage2Answers));

                if (checkButtonPart2.dataset.state === 'toResults') {
                    const finalScore = calculateAndSaveFinalScore(selectedImages);
                    localStorage.setItem('finalScore', finalScore);
                    localStorage.setItem('testEndTime', new Date().getTime());
                    localStorage.removeItem('remainingAttempts');
                    localStorage.removeItem('image1Answers');
                    localStorage.removeItem('image2Answers');
                    localStorage.removeItem('image1CompletedCorrectly');
                    window.location.href = 'page5.html';
                    return;
                }

                const image1Data = KINEMATIC_PAIRS_DATA.find(data => data.imageName === selectedImages[0]);
                const image2Data = KINEMATIC_PAIRS_DATA.find(data => data.imageName === selectedImages[1]);

                let allAnswersCorrectOnPage2 = true;
                const questionsData2 = [
                    {id: 'q1_ans2', correct: image2Data.q1_translation, type: 'axis'},
                    {id: 'q2_ans2', correct: image2Data.q2_rotation, type: 'axis'},
                    {id: 'q3_btn2', correct: image2Data.q3_impossible_moves, type: 'dropdown'},
                    {id: 'q4_btn2', correct: image2Data.q4_class, type: 'dropdown'},
                    {id: 'q5_btn2', correct: image2Data.q5_type, type: 'dropdown'}
                ];
                questionsData2.forEach(q => {
                    let element = document.getElementById(q.id);
                    let isCorrect;
                    if (q.type === 'axis') {
                        isCorrect = compareAxisAnswers(currentImage2Answers[q.id.split('_')[0]], q.correct);
                    } else if (q.type === 'dropdown') {
                        isCorrect = currentImage2Answers[q.id.split('_')[0]] === q.correct;
                    }
                    applyFeedback(element, isCorrect);
                    if (!isCorrect) allAnswersCorrectOnPage2 = false;
                });

                if (!allAnswersCorrectOnPage2 && remainingAttempts > 0) {
                    remainingAttempts--;
                    localStorage.setItem('remainingAttempts', remainingAttempts);
                }

                if (allAnswersCorrectOnPage2 || remainingAttempts <= 0) {
                    checkButtonPart2.textContent = translations[savedLanguage]['toResults'];
                    checkButtonPart2.dataset.state = 'toResults';
                    localStorage.setItem('testEndTime', new Date().getTime());
                    disablePageElements('.page4-container');
                    checkButtonPart2.disabled = false;
                    checkButtonPart2.classList.remove('disabled-input-button');
                } else {
                    checkButtonPart2.textContent = `${translations[savedLanguage]['checkButtonPrefix']} (${remainingAttempts} ${translations[savedLanguage]['attemptsSuffix']})`;
                    checkButtonPart2.dataset.state = 'check';
                    enablePageElements('.page4-container');
                    checkButtonPart2.disabled = false;
                    checkButtonPart2.classList.remove('disabled-input-button');
                }
            });
        }
    }
});

function collectAnswers(imageNum) {
    const answers = {};
    const qPrefix = `q`;
    const qSuffix = `_ans${imageNum}`;
    const btnSuffix = `_btn${imageNum}`;

    for (let i = 1; i <= 2; i++) {
        const inputElement = document.getElementById(`${qPrefix}${i}${qSuffix}`);
        if (inputElement) {
            answers[`q${i}`] = inputElement.value;
        }
    }

    for (let i = 3; i <= 5; i++) {
        const buttonElement = document.getElementById(`${qPrefix}${i}${btnSuffix}`);
        if (buttonElement && buttonElement.dataset.value) {
            answers[`q${i}`] = buttonElement.dataset.value;
        } else if (buttonElement) {
            answers[`q${i}`] = '';
        }
    }
    return answers;
}

function restoreAnswers(imageNum, savedAnswers) {
    const qPrefix = `q`;
    const qSuffix = `_ans${imageNum}`;
    const btnSuffix = `_btn${imageNum}`;
    const currentLanguage = localStorage.getItem('language') || 'uk';

    for (let i = 1; i <= 2; i++) {
        const inputElement = document.getElementById(`${qPrefix}${i}${qSuffix}`);
        if (inputElement && savedAnswers[`q${i}`] !== undefined) {
            inputElement.value = savedAnswers[`q${i}`];
            const currentAxisButtonsInGroup = inputElement.closest('.input-and-choices').querySelectorAll('.axis-button');
            const savedValuesArray = savedAnswers[`q${i}`].split(', ').filter(val => val !== '');
            currentAxisButtonsInGroup.forEach(btn => {
                if (savedValuesArray.includes(btn.dataset.value)) {
                    btn.classList.add('in-input-field');
                } else {
                    btn.classList.remove('in-input-field');
                }
            });
        }
    }

    for (let i = 3; i <= 5; i++) {
        const buttonElement = document.getElementById(`${qPrefix}${i}${btnSuffix}`);
        if (buttonElement && savedAnswers[`q${i}`] !== undefined) {
            buttonElement.dataset.value = savedAnswers[`q${i}`];
            let displayOption = savedAnswers[`q${i}`];
            if (currentLanguage === 'en') {
                if (savedAnswers[`q${i}`] === 'Нижча') displayOption = 'Lower';
                if (savedAnswers[`q${i}`] === 'Вища') displayOption = 'Higher';
            }
            buttonElement.textContent = displayOption;
        } else if (buttonElement) {
            const qType = buttonElement.dataset.qtype;
            if (qType === 'q3') buttonElement.textContent = translations[currentLanguage]['chooseQuantity'];
            else if (qType === 'q4') buttonElement.textContent = translations[currentLanguage]['chooseClass'];
            else if (qType === 'q5') buttonElement.textContent = translations[currentLanguage]['chooseType'];
        }
    }
}

function checkAllAnswersCombined(image1Data, image2Data, selectedImages) {
    const image1Answers = JSON.parse(localStorage.getItem('image1Answers') || '{}');
    const image2Answers = JSON.parse(localStorage.getItem('image2Answers') || '{}');

    let allCorrect = true;

    if (!image1Answers['q1'] || !compareAxisAnswers(image1Answers['q1'], image1Data.q1_translation)) allCorrect = false;
    if (allCorrect && (!image1Answers['q2'] || !compareAxisAnswers(image1Answers['q2'], image1Data.q2_rotation))) allCorrect = false;
    if (allCorrect && (!image1Answers['q3'] || image1Answers['q3'] !== image1Data.q3_impossible_moves)) allCorrect = false;
    if (allCorrect && (!image1Answers['q4'] || image1Answers['q4'] !== image1Data.q4_class)) allCorrect = false;
    if (allCorrect && (!image1Answers['q5'] || image1Answers['q5'] !== image1Data.q5_type)) allCorrect = false;

    if (!allCorrect) return false;

    if (!image2Answers['q1'] || !compareAxisAnswers(image2Answers['q1'], image2Data.q1_translation)) allCorrect = false;
    if (allCorrect && (!image2Answers['q2'] || !compareAxisAnswers(image2Answers['q2'], image2Data.q2_rotation))) allCorrect = false;
    if (allCorrect && (!image2Answers['q3'] || image2Answers['q3'] !== image2Data.q3_impossible_moves)) allCorrect = false;
    if (allCorrect && (!image2Answers['q4'] || image2Answers['q4'] !== image2Data.q4_class)) allCorrect = false;
    if (allCorrect && (!image2Answers['q5'] || image2Answers['q5'] !== image2Data.q5_type)) allCorrect = false;

    return allCorrect;
}

function calculateAndSaveFinalScore(selectedImages) {
    const image1Answers = JSON.parse(localStorage.getItem('image1Answers') || '{}');
    const image2Answers = JSON.parse(localStorage.getItem('image2Answers') || '{}');

    const image1Data = KINEMATIC_PAIRS_DATA.find(data => data.imageName === selectedImages[0]);
    const image2Data = KINEMATIC_PAIRS_DATA.find(data => data.imageName === selectedImages[1]);

    let score = 0;

    if (image1Answers['q1'] && compareAxisAnswers(image1Answers['q1'], image1Data.q1_translation)) score++;
    if (image1Answers['q2'] && compareAxisAnswers(image1Answers['q2'], image1Data.q2_rotation)) score++;
    if (image1Answers['q3'] && image1Answers['q3'] === image1Data.q3_impossible_moves) score++;
    if (image1Answers['q4'] && image1Answers['q4'] === image1Data.q4_class) score++;
    if (image1Answers['q5'] && image1Answers['q5'] === image1Data.q5_type) score++;

    if (image2Answers['q1'] && compareAxisAnswers(image2Answers['q1'], image2Data.q1_translation)) score++;
    if (image2Answers['q2'] && compareAxisAnswers(image2Answers['q2'], image2Data.q2_rotation)) score++;
    if (image2Answers['q3'] && image2Answers['q3'] === image2Data.q3_impossible_moves) score++;
    if (image2Answers['q4'] && image2Answers['q4'] === image2Data.q4_class) score++;
    if (image2Answers['q5'] && image2Answers['q5'] === image2Data.q5_type) score++;

    return score;
}
