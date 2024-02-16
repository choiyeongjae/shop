(function($){
  
    const shop ={
        init(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        },
        header(){
           //네비게이션
           //1.메인 메뉴에 마우스 오버시(올리면) => 서브메뉴 보인다.
           $(".menu-btn").on({
                mouseenter(){
                    // $('.sub').stop().slideDown(300);
                    $('.sub').stop().show(0);
                },
                focusin(){        //탭키 선택 포커스인(focus===focusin) 반대 blur === focusout
                   
                    $('.sub').stop().show(0);
                }
            });
               
            
            //2. 서브메뉴에 마우스 아웃시 (떠나면) => 서브메뉴 숨긴다.
            //2. 수정보안 nav(네비게이션) 에 마우스 아웃시 (떠나면) => 서브메뉴 숨긴다.
            $('#nav').on({
                mouseleave(){
                    // $('.sub').stop().slideUp(300);
                    $('.sub').stop().hide(0);
                }
            });
        },
        
        section1(){
           //1.변수설정 
           let cnt=0;
           //2. 메인슬라이드 함수 3개 우측에서 좌측으로 이동 0 1 2
           function mainSlide(){   
            $('.slide-wrap').stop().animate({top:`${-300*cnt}%px`},600, function(){
                if(cnt>2) cnt=0;
                $('.slide-wrap').stop().animate({top:`${-300*cnt}px`},0) 
            });
           }
           //3. 다음카운터 함수
           function nextCount(){
            cnt++;
            mainSlide();
           }
           //4. 자동타이머 함수
           function autotimer(){
            setInterval (nextCount , 3000);
           }
           autotimer();
        },
        section2(){
            //갤러리 버튼 클릭 이벤트
            $('.gallery-btn').on({
                click(){
                    $('.notice-btn').addClass('on');
                    $('.gallery-btn').addClass('on');
                    $('.notice-box').hide();
                    $('.gallery-box').show();
                }
            });
            //공지사항 버튼
            $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.notice-box').show();
                    $('.gallery-box').hide();
                }
            })
            //팝업버튼 클릭 이벤트
            $('.popup-btn').on({
                click(){
                    $('.popup').css({display:'flex'});    //show().css({diplay:'flex'});
                }
            });
            //팝업닫기버튼 클릭 이벤트
            $('.close-btn').on({
                click(){
                    // $('.popup').hide();      //hide()
                    $('.popup').css({display:'none'});      //hide()
                }
            });

        },
        footer(){
            
        }

    }
    shop.init();

})(jQuery);