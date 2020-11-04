$(function(){
    // 서브 메뉴 클릭시
    $('#m1').on('click', function() { 
        $('#slide_box div').removeClass('on').removeClass('off');
        $('#sub_menu_match').addClass('on');
        $('#sub_menu_match').siblings().addClass('off');

        $('#sub_menu a').removeClass('on');
        $(this).addClass('on');
    });
    $('#m2').on('click', function() {
        $('#slide_box div').removeClass('on').removeClass('off');
        $('#sub_menu_message').addClass('on');
        $('#sub_menu_message').siblings().addClass('off');

        $('#sub_menu a').removeClass('on');
        $(this).addClass('on');
    });
    $('#m3').on('click', function() {
        $('#slide_box div').removeClass('on').removeClass('off');
        $('#sub_menu_enter').addClass('on');
        $('#sub_menu_enter').siblings().addClass('off');

        $('#sub_menu a').removeClass('on');
        $(this).addClass('on');
    });
    $('#myprofile_btn').on('click', function() {
        $('#slide_box div').removeClass('on').removeClass('off');
        $('#sub_menu_myprofile').addClass('on');
        $('#sub_menu_myprofile').siblings().addClass('off');

        $('#sub_menu a').removeClass('on');
        $(this).addClass('on');
    });

    // 메시지 사람 누르면
    $('#left_menu #slide_box #sub_menu_message ul a').on('click', function() {
        $(this).addClass('on');
    });

    // 공지사항 누르면
        // 웹 버전
    $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(5)').on('click', function(){
        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').toggleClass('on2');
        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').toggleClass('on2');
    });

    if($('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').hasClass('on') || $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').hasClass('on')){
        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(6)').addClass('on2');
        $('#left_menu #slide_box #sub_menu_enter ul a:nth-child(7)').addClass('on2');
    }

        // 모바일 버전
    $('.enterM_1 a:nth-child(5)').on('click', function(){
        $('.enterM_1 a:nth-child(6)').toggleClass('on2');
        $('.enterM_1 a:nth-child(7)').toggleClass('on2');
    });


    // match.html
    // '프로필 더보기' 버튼 누르면
    $('#contentBox .match_3 a').on('click', function(){
        $('#contentBox .match_4').toggleClass('on');
    });

    // find_select
    // select 선택시
    
    // find_match.html
    // '프로필 더보기' 버튼 누르면
    $('#contentBox .findM_3 a').on('click', function(){
        $('#contentBox .findM_4').toggleClass('on');
    });

    // board.bad.html
    // 누르면 밑에 글 보이게
    $('#contentBox .gramB_2 dt a').on('click', function(){
        $(this).parent().toggleClass('on').next().toggleClass('on');
        $(this).parent().prevAll('dt').removeClass('on');
        $(this).parent().nextAll('dt').removeClass('on');
        $(this).parent().next().prevAll('dd').removeClass('on');
        $(this).parent().next().nextAll('dd').removeClass('on');
        
    });

    let media = window.matchMedia('( max-width: 768px )');
    if(media.matches == true) {
        // 모바일

        // 신고버튼 누르면 팝업
        $('.declare_popup').click(function(){
            var $href = $(this).attr('href');
            layer_popup($href);
        });
        function layer_popup(el){
            var $el = $(el);        //레이어의 id를 $el 변수에 저장
            var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

            isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

            var $elWidth = ~~($el.outerWidth()),
                $elHeight = ~~($el.outerHeight()),
                docWidth = $(document).width(),
                docHeight = $(document).height();

            // 화면의 중앙에 레이어를 띄운다.
            if ($elHeight < docHeight || $elWidth < docWidth) {
                $el.css({
                    marginTop: 0,
                    marginLeft: 0
                })
            } else {
                $el.css({top: 0, left: 0});
            }

            $el.find('.popup_close').click(function(){
                isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
                return false;
            });

            $('.layer .dimBg').click(function(){
                $('.dim-layer').fadeOut();
                return false;
            });
        }
    }else{
        // 웹

        // 신고버튼 누르면 팝업
        $('.declare_popup').click(function(){
            var $href = $(this).attr('href');
            layer_popup($href);
        });
        function layer_popup(el){
            var $el = $(el);        //레이어의 id를 $el 변수에 저장
            var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

            isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

            var $elWidth = ~~($el.outerWidth()),
                $elHeight = ~~($el.outerHeight()),
                docWidth = $(document).width(),
                docHeight = $(document).height();

            // 화면의 중앙에 레이어를 띄운다.
            if ($elHeight < docHeight || $elWidth < docWidth) {
                $el.css({
                    marginTop: -$elHeight /2,
                    marginLeft: -$elWidth/2
                })
            } else {
                $el.css({top: 0, left: 0});
            }

            $el.find('.popup_close').click(function(){
                isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
                return false;
            });

            $('.layer .dimBg').click(function(){
                $('.dim-layer').fadeOut();
                return false;
            });

        }
    }

    $('.pop-layer a').on('click', function(){
        // alert('on');
        $(this).toggleClass('on');
        $(this).parent().siblings().children('a').removeClass('on');
        if($(this).hasClass('on')){
            $('.pop-layer button').css({
                'background': 'linear-gradient( to left, #FFD7DD, #9E7FFE )'
            }).text('신고').on('click', function(){
                alert('신고가 접수되었습니다');
            });
        }
    });

    // gram_write
    // 파일 선택하면 미리보게
    $('#gramW_1_file').on('change', function(){
        readURL(this);
    });


});

// function adjustHeight() {
//     var textEle = $('textarea');
//     textEle[0].style.height = 'auto';
//     var textEleHeight = textEle.prop('scrollHeight');
//     textEle.css('height', textEleHeight);
//   };

// 프로필 나이설정하는 바 관련
function xSize(e){
    var xe = $('#xt'), t;

    e.onfocus = function(){
        t = setInterval(function(){
            xe.value = e.value;
            e.style.height = (xe.scrollHeight + 12) + 'px';
        }, 100);
    }

    e.onblur = function(){
        clearInterval(t);
    }
}

xSize($('#ta'));

// 파일 선택 미리보기 관련
function readURL(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
        $('#photoPre').css({'display': 'none'});
        $('#gramW_1_photo img').css({'display': 'block'});
        $('#gramW_1_photo img').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
    }
}
