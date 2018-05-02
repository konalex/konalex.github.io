// действия переключателей в header
// переключает если у боковых колонок есть классы с названием сторон
function asideToogle(button_class, aside_class) {
    $('.'+button_class).click(function (event) {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            if($(this).hasClass('left')) {
                $('.'+aside_class+'.left').removeClass('active');
            }
            if($(this).hasClass('right')) {
                $('.'+aside_class+'.right').removeClass('active');
            }
        }
        else {
            $(this).addClass('active');
            if($(this).hasClass('left')) {
                $('.'+aside_class+'.left').addClass('active');
            }
            if($(this).hasClass('right')) {
                $('.'+aside_class+'.right').addClass('active');
            }
        }
    });
    
}
// действие закрывающей кнопки на боковых колонках
// закрывает данную колонку, и отключает кнопку
// действует если в кнопках есть класс стороны
function asideButtonClose(button_class, aside_class, header_button) {
    $('.'+button_class).click(function (event) {
        if($(this).parent().parent().hasClass('active')) {
            $(this).parent().parent().removeClass('active');
            //
            if($(this).parent().parent().hasClass('left')) {
                $('.'+aside_class+'.left').removeClass('active');
                $('.'+header_button+'.left').removeClass('active');
            }
            if($(this).parent().parent().hasClass('right')) {
                $('.'+aside_class+'.right').removeClass('active');
                $('.'+header_button+'.right').removeClass('active');
            }
        }
    });
}
// закрепить боковой блок
function sidebarFix(item_class, item_offset) {
    $(window).scroll(function (event) {
        if($(window).width() > 768){
            if($(window).scrollTop() > 110) {
                $('.' +item_class).css({'top': $(window).scrollTop() + 50 + 'px'});
            } 
            else {
                $('.' +item_class).css({'top': item_offset+'px'});
            }
        }
        else {
            if($(window).scrollTop() > 110) {
                $('.' +item_class).css({'top': $(window).scrollTop() + 40 + 'px'});
            } 
            else {
                $('.' +item_class).css({'top': item_offset+'px'});
            }
        }
    });
}
// действия с пунктами меню
function headerMenuActions(item_class) {
    $('.'+item_class).click(function (event) {
        $('.'+item_class).removeClass('active');
        $(this).addClass('active');
    });
}
// убрать фокус на пункте меню
function clearActiveMenu(item_class,menu_item_class) {
    $('.'+item_class).click(function (event) {
        $('.'+menu_item_class).removeClass('active');
    });
}
// 
function setPaddingToContainer(container_class, stick_block_class) {
    $('.'+container_class).css({'padding': $('.'+stick_block_class).outerHeight() + 10 +'px 5px 5px 5px'});
}
// установка отступа в контейнера относительно другого блока
$(document).ready(function(){
    asideToogle('aside-switcher__button','out-content');
    asideButtonClose('aside-close','out-content','aside-switcher__button');
    if($(window).width() > 768) {
        sidebarFix('always-visible', 151);
    }
    else {
        sidebarFix('always-visible', 140);
        setPaddingToContainer('main-content__container>.container','always-visible');       
    }
    headerMenuActions('header-menu__list-item a');
    clearActiveMenu('header-logo', 'header-menu__list-item a');
});