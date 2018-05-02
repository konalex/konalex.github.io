Реализовано:
1. Макет по примеру (https://image.prntscr.com/image/dDOVGYKmQB_i0xppnnCx_A.jpg).
2. Фиксированный header.
3. Закрепленный внизу, но не фиксированный footer.
4. Две боковые панели.
    4.1. При активном состоянии панели "наезжают" на контент. При закрытом - "скрываются" за экраном.
5. Максимальная ширина контейнера - 1024 пикселя.
6. Внутри контейнера после описания страницы закрепленный блок.
Особенности:
1. Разметка блоков, того требующих была реализована на свойстве flex.
2. Все стили написаны с использованием процепроцессора SASS.
3. Реализована мультибраузерность.
    3.1. И на мобильных браузерах.
4. Минимальное разрешение экрана для мобильных устройств - 320 пикселей.
5. Разметка в блочном стиле.
    5.1. Стили написаны аккуратно, в файлах sass - соблюдается разбиение на категории стилей.
        5.1.1. Стили при компиляции минификуются.
6. Код написан в едином стиле для языка.
    6.1. В HTML разметке использовал БЭМ методологию.
    6.2. В SASS коде использовал вложенность.
    6.3. В JS коде реализовал все действия через функции.
7. Придерживался одного стиля для макета.
    7.1. Шрифт - Ubuntu.
    7.2. Цвет - "мокрый асфальт".