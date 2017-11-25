import Ember from 'ember';

export default Ember.Service.extend({

    showElement(elemSelector, step) {
        // скрываем верхнюю половину блока "инфо"
        $('.ticket-info-top').addClass('hidden');

        // отображаем нижние строки блока "инфо" если они не пустые
        var bottomItems = $('.ticket-info-bottom');

        bottomItems.each(function(){
            if ($(this).find('.ticket-info-bottom__text').text()){
                $(this).removeClass('hidden');
            }
        });

        // убираем активное состояние со всех шагов и добавляем выбранному
        $('.mt-step-col').removeClass('active');
        $(step).addClass('active');

        // скрываем правые панельки и отображаем выбранную
        $('.right-panel').addClass('hidden');
        $(elemSelector).removeClass('hidden');

        // если на шаге "Клиент" то отображаем блок с маской телефона
        if ($('#client-step').hasClass('active')) {
            $('.ticket-info-client-top').removeClass('hidden');
        }
    },

    selectMaster(master) {
        var masterJSON = master.toJSON();

        $('.ticket-info-master-top').removeClass('hidden');
        console.log(masterJSON);

        $('.ticket-info-master__name').text(masterJSON.firstname + " " +masterJSON.secondname);
        if (typeof masterJSON.imgSrc !== "undefined") {
            $('.ticket-info-master__img').attr("src", masterJSON.imgSrc);
        } else {
            $('.ticket-info-master__img').attr("src", 'https://image.flaticon.com/icons/svg/522/522401.svg');
        }
        // var masterCard = $(event.target);
        // console.log(masterCard);
    },

    selectServiceItem(itemName, itemTime, itemPrice) {
        $('.ticket-info-services-top').removeClass('hidden');

        var selectedItem = $(event.target).closest('.mt-widget-1');

        if (!$(selectedItem).hasClass('selected-item')) {
            $('.ticket-info-services-top ul').append('<li>' + itemName + '</li>');
        } else {
            $('.ticket-info-services-top ul').find('li').filter(function() {
                return $.text([this]) === itemName;
            }).remove();
        }

        $('.ticket-info-services__text ul').remove();
        $('.ticket-info-services-top ul').clone().appendTo('.ticket-info-services__text');
        $(selectedItem).toggleClass('selected-item');
    }
});
