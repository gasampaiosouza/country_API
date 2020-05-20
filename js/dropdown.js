const dropdown = () => {

    // make dropdown work
    $('.dropdown__container').find('.dropdown').click(function () {
        $(this).toggleClass('dropdown__border');
        $(this).find('ul').toggleClass('dropdown__active');
    });

    // change dropdown text
    $('.dropdown__container').find('ul > li').click(function () {
        $(this).parents('.dropdown').children('p').html($(this).text());

        check('.dropdown p');
    });

};

export default dropdown;