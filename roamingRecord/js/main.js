/**
 * 自定义js，插件初始化，插件操作
 * 邹贵初
 * T00005162@vipshop.com
 */

jQuery(function($) {
    //注册hb helper 
    //匹配表情
    Handlebars.registerHelper('matchemoji', function(content) {
        var emojiData = [':\\+1:',':-1:',':100:',':109:',':1234:',':8ball:',':a:',':ab:',':abc:',':abcd:',':accept:',':aerial_tramway:',':airplane:',':alarm_clock:',':alien:',':ambulance:',':anchor:',':angel:',':anger:',':angry:',':anguished:',':ant:',':apple:',':aquarius:',':aries:',':arrow_backward:',':arrow_double_down:',':arrow_double_up:',':arrow_down:',':arrow_down_small:',':arrow_forward:',':arrow_heading_down:',':arrow_heading_up:',':arrow_left:',':arrow_lower_left:',':arrow_lower_right:',':arrow_right:',':arrow_right_hook:',':arrow_up:',':arrow_up_down:',':arrow_up_small:',':arrow_upper_left:',':arrow_upper_right:',':arrows_clockwise:',':arrows_counterclockwise:',':art:',':articulated_lorry:',':astonished:',':atm:',':b:',':baby:',':baby_bottle:',':baby_chick:',':baby_symbol:',':baggage_claim:',':balloon:',':ballot_box_with_check:',':bamboo:',':banana:',':bangbang:',':bank:',':bar_chart:',':barber:',':baseball:',':basketball:',':bath:',':bathtub:',':battery:',':bear:',':bee:',':beer:',':beers:',':beetle:',':beginner:',':bell:',':bento:',':bicyclist:',':bike:',':bikini:',':bird:',':birthday:',':black_circle:',':black_joker:',':black_nib:',':black_square:',':black_square_button:',':blossom:',':blowfish:',':blue_book:',':blue_car:',':blue_heart:',':blush:',':boar:',':boat:',':bomb:',':book:',':bookmark:',':bookmark_tabs:',':books:',':boom:',':boot:',':bouquet:',':bow:',':bowling:',':bowtie:',':boy:',':bread:',':bride_with_veil:',':bridge_at_night:',':briefcase:',':broken_heart:',':bug:',':bulb:',':bullettrain_front:',':bullettrain_side:',':bus:',':busstop:',':bust_in_silhouette:',':busts_in_silhouette:',':cactus:',':cake:',':calendar:',':calling:',':camel:',':camera:',':cancer:',':candy:',':capital_abcd:',':capricorn:',':car:',':card_index:',':carousel_horse:',':cat:',':cat2:',':cd:',':chart:',':chart_with_downwards_trend:',':chart_with_upwards_trend:',':checkered_flag:',':cherries:',':cherry_blossom:',':chestnut:',':chicken:',':children_crossing:',':chocolate_bar:',':christmas_tree:',':church:',':cinema:',':circus_tent:',':city_sunrise:',':city_sunset:',':cl:',':clap:',':clapper:',':clipboard:',':clock1:',':clock10:',':clock1030:',':clock11:',':clock1130:',':clock12:',':clock1230:',':clock130:',':clock2:',':clock230:',':clock3:',':clock330:',':clock4:',':clock430:',':clock5:',':clock530:',':clock6:',':clock630:',':clock7:',':clock730:',':clock8:',':clock830:',':clock9:',':clock930:',':closed_book:',':closed_lock_with_key:',':closed_umbrella:',':cloud:',':clubs:',':cn:',':cocktail:',':coffee:',':cold_sweat:',':collision:',':computer:',':confetti_ball:',':confounded:',':confused:',':congratulations:',':construction:',':construction_worker:',':convenience_store:',':cookie:',':cool:',':cop:',':copyright:',':corn:',':couple:',':couple_with_heart:',':couplekiss:',':cow:',':cow2:',':credit_card:',':crocodile:',':crossed_flags:',':crown:',':cry:',':crying_cat_face:',':crystal_ball:',':cupid:',':curly_loop:',':currency_exchange:',':curry:',':custard:',':customs:',':cyclone:',':dancer:',':dancers:',':dango:',':dart:',':dash:',':date:',':de:',':deciduous_tree:',':department_store:',':diamond_shape_with_a_dot_inside:',':diamonds:',':disappointed:',':dizzy:',':dizzy_face:',':do_not_litter:',':dog:',':dog2:',':dollar:',':dolls:',':dolphin:',':door:',':doughnut:',':dragon:',':dragon_face:',':dress:',':dromedary_camel:',':droplet:',':dvd:',':e-mail:',':ear:',':ear_of_rice:',':earth_africa:',':earth_americas:',':earth_asia:',':egg:',':eggplant:',':eight:',':eight_pointed_black_star:',':eight_spoked_asterisk:',':electric_plug:',':elephant:',':email:',':end:',':envelope:',':es:',':euro:',':european_castle:',':european_post_office:',':evergreen_tree:',':exclamation:',':expressionless:',':eyeglasses:',':eyes:',':facepunch:',':factory:',':fallen_leaf:',':family:',':fast_forward:',':fax:',':fearful:',':feelsgood:',':feet:',':ferris_wheel:',':file_folder:',':finnadie:',':fire:',':fire_engine:',':fireworks:',':first_quarter_moon:',':first_quarter_moon_with_face:',':fish:',':fish_cake:',':fishing_pole_and_fish:',':fist:',':five:',':flags:',':flashlight:',':floppy_disk:',':flower_playing_cards:',':flushed:',':foggy:',':football:',':fork_and_knife:',':fountain:',':four:',':four_leaf_clover:',':fr:',':free:',':fried_shrimp:',':fries:',':frog:',':frowning:',':fuelpump:',':full_moon:',':full_moon_with_face:',':game_die:',':gb:',':gem:',':gemini:',':ghost:',':gift:',':gift_heart:',':girl:',':globe_with_meridians:',':goat:',':goberserk:',':godmode:',':golf:',':grapes:',':green_apple:',':green_book:',':green_heart:',':grey_exclamation:',':grey_question:',':grimacing:',':grin:',':grinning:',':guardsman:',':guitar:',':gun:',':haircut:',':hamburger:',':hammer:',':hamster:',':hand:',':handbag:',':hankey:',':hash:',':hatched_chick:',':hatching_chick:',':headphones:',':hear_no_evil:',':heart:',':heart_decoration:',':heart_eyes:',':heart_eyes_cat:',':heartbeat:',':heartpulse:',':hearts:',':heavy_check_mark:',':heavy_division_sign:',':heavy_dollar_sign:',':heavy_exclamation_mark:',':heavy_minus_sign:',':heavy_multiplication_x:',':heavy_plus_sign:',':helicopter:',':herb:',':hibiscus:',':high_brightness:',':high_heel:',':hocho:',':honey_pot:',':honeybee:',':horse:',':horse_racing:',':hospital:',':hotel:',':hotsprings:',':hourglass:',':hourglass_flowing_sand:',':house:',':house_with_garden:',':hurtrealbad:',':hushed:',':ice_cream:',':icecream:',':id:',':ideograph_advantage:',':imp:',':inbox_tray:',':incoming_envelope:',':information_desk_person:',':information_source:',':innocent:',':interrobang:',':iphone:',':it:',':izakaya_lantern:',':jack_o_lantern:',':japan:',':japanese_castle:',':japanese_goblin:',':japanese_ogre:',':jeans:',':joy:',':joy_cat:',':jp:',':key:',':keycap_ten:',':kimono:',':kiss:',':kissing:',':kissing_cat:',':kissing_closed_eyes:',':kissing_face:',':kissing_heart:',':kissing_smiling_eyes:',':koala:',':koko:',':kr:',':large_blue_circle:',':large_blue_diamond:',':large_orange_diamond:',':last_quarter_moon:',':last_quarter_moon_with_face:',':laughing:',':leaves:',':ledger:',':left_luggage:',':left_right_arrow:',':leftwards_arrow_with_hook:',':lemon:',':leo:',':leopard:',':libra:',':light_rail:',':link:',':lips:',':lipstick:',':lock:',':lock_with_ink_pen:',':lollipop:',':loop:',':loudspeaker:',':love_hotel:',':love_letter:',':low_brightness:',':m:',':mag:',':mag_right:',':mahjong:',':mailbox:',':mailbox_closed:',':mailbox_with_mail:',':mailbox_with_no_mail:',':man:',':man_with_gua_pi_mao:',':man_with_turban:',':mans_shoe:',':maple_leaf:',':mask:',':massage:',':meat_on_bone:',':mega:',':melon:',':memo:',':mens:',':metal:',':metro:',':microphone:',':microscope:',':milky_way:',':minibus:',':minidisc:',':mobile_phone_off:',':money_with_wings:',':moneybag:',':monkey:',':monkey_face:',':monorail:',':moon:',':mortar_board:',':mount_fuji:',':mountain_bicyclist:',':mountain_cableway:',':mountain_railway:',':mouse:',':mouse2:',':movie_camera:',':moyai:',':muscle:',':mushroom:',':musical_keyboard:',':musical_note:',':musical_score:',':mute:',':nail_care:',':name_badge:',':neckbeard:',':necktie:',':negative_squared_cross_mark:',':neutral_face:',':new:',':new_moon:',':new_moon_with_face:',':newspaper:',':ng:',':nine:',':no_bell:',':no_bicycles:',':no_entry:',':no_entry_sign:',':no_good:',':no_mobile_phones:',':no_mouth:',':no_pedestrians:',':no_smoking:',':non-potable_water:',':nose:',':notebook:',':notebook_with_decorative_cover:',':notes:',':nut_and_bolt:',':o:',':o2:',':ocean:',':octocat:',':octopus:',':oden:',':office:',':ok:',':ok_hand:',':ok_woman:',':older_man:',':older_woman:',':on:',':oncoming_automobile:',':oncoming_bus:',':oncoming_police_car:',':oncoming_taxi:',':one:',':open_file_folder:',':open_hands:',':open_mouth:',':ophiuchus:',':orange_book:',':outbox_tray:',':ox:',':page_facing_up:',':page_with_curl:',':pager:',':palm_tree:',':panda_face:',':paperclip:',':parking:',':part_alternation_mark:',':partly_sunny:',':passport_control:',':paw_prints:',':peach:',':pear:',':pencil:',':pencil2:',':penguin:',':pensive:',':performing_arts:',':persevere:',':person_frowning:',':person_with_blond_hair:',':person_with_pouting_face:',':phone:',':pig:',':pig2:',':pig_nose:',':pill:',':pineapple:',':pisces:',':pizza:',':plus1:',':point_down:',':point_left:',':point_right:',':point_up:',':point_up_2:',':police_car:',':poodle:',':poop:',':post_office:',':postal_horn:',':postbox:',':potable_water:',':pouch:',':poultry_leg:',':pound:',':pouting_cat:',':pray:',':princess:',':punch:',':purple_heart:',':purse:',':pushpin:',':put_litter_in_its_place:',':question:',':rabbit:',':rabbit2:',':racehorse:',':radio:',':radio_button:',':rage:',':rage1:',':rage2:',':rage3:',':rage4:',':railway_car:',':rainbow:',':raised_hand:',':raised_hands:',':ram:',':ramen:',':rat:',':recycle:',':red_car:',':red_circle:',':registered:',':relaxed:',':relieved:',':repeat:',':repeat_one:',':restroom:',':revolving_hearts:',':rewind:',':ribbon:',':rice:',':rice_ball:',':rice_cracker:',':rice_scene:',':ring:',':rocket:',':roller_coaster:',':rooster:',':rose:',':rotating_light:',':round_pushpin:',':rowboat:',':ru:',':rugby_football:',':runner:',':running:',':running_shirt_with_sash:',':sa:',':sagittarius:',':sailboat:',':sake:',':sandal:',':santa:',':satellite:',':satisfied:',':saxophone:',':school:',':school_satchel:',':scissors:',':scorpius:',':scream:',':scream_cat:',':scroll:',':seat:',':secret:',':see_no_evil:',':seedling:',':seven:',':shaved_ice:',':sheep:',':shell:',':ship:',':shipit:',':shirt:',':shit:',':shoe:',':shower:',':signal_strength:',':six:',':six_pointed_star:',':ski:',':skull:',':sleeping:',':sleepy:',':slot_machine:',':small_blue_diamond:',':small_orange_diamond:',':small_red_triangle:',':small_red_triangle_down:',':smile:',':smile_cat:',':smiley:',':smiley_cat:',':smiling_imp:',':smirk:',':smirk_cat:',':smoking:',':snail:',':snake:',':snowboarder:',':snowflake:',':snowman:',':sob:',':soccer:',':soon:',':sos:',':sound:',':space_invader:',':spades:',':spaghetti:',':sparkler:',':sparkles:',':sparkling_heart:',':speak_no_evil:',':speaker:',':speech_balloon:',':speedboat:',':squirrel:',':star:',':star2:',':stars:',':station:',':statue_of_liberty:',':steam_locomotive:',':stew:',':straight_ruler:',':strawberry:',':stuck_out_tongue:',':stuck_out_tongue_closed_eyes:',':stuck_out_tongue_winking_eye:',':sun_with_face:',':sunflower:',':sunglasses:',':sunny:',':sunrise:',':sunrise_over_mountains:',':surfer:',':sushi:',':suspect:',':suspension_railway:',':sweat:',':sweat_drops:',':sweat_smile:',':sweet_potato:',':swimmer:',':symbols:',':syringe:',':tada:',':tanabata_tree:',':tangerine:',':taurus:',':taxi:',':tea:',':telephone:',':telephone_receiver:',':telescope:',':tennis:',':tent:',':thought_balloon:',':three:',':thumbsdown:',':thumbsup:',':ticket:',':tiger:',':tiger2:',':tired_face:',':tm:',':toilet:',':tokyo_tower:',':tomato:',':tongue:',':top:',':tophat:',':tractor:',':traffic_light:',':train:',':train2:',':tram:',':triangular_flag_on_post:',':triangular_ruler:',':trident:',':triumph:',':trolleybus:',':trollface:',':trophy:',':tropical_drink:',':tropical_fish:',':truck:',':trumpet:',':tshirt:',':tulip:',':turtle:',':tv:',':twisted_rightwards_arrows:',':two:',':two_hearts:',':two_men_holding_hands:',':two_women_holding_hands:',':u5272:',':u5408:',':u55b6:',':u6307:',':u6708:',':u6709:',':u6e80:',':u7121:',':u7533:',':u7981:',':u7a7a:',':uk:',':umbrella:',':unamused:',':underage:',':unlock:',':up:',':us:',':v:',':vertical_traffic_light:',':vhs:',':vibration_mode:',':video_camera:',':video_game:',':violin:',':virgo:',':volcano:',':vs:',':walking:',':waning_crescent_moon:',':waning_gibbous_moon:',':warning:',':watch:',':water_buffalo:',':watermelon:',':wave:',':wavy_dash:',':waxing_crescent_moon:',':waxing_gibbous_moon:',':wc:',':weary:',':wedding:',':whale:',':whale2:',':wheelchair:',':white_check_mark:',':white_circle:',':white_flower:',':white_square:',':white_square_button:',':wind_chime:',':wine_glass:',':wink:',':wink2:',':wolf:',':woman:',':womans_clothes:',':womans_hat:',':womens:',':worried:',':wrench:',':x:',':yellow_heart:',':yen:',':yum:',':zap:',':zero:',':zzz:'];
        $.each(emojiData,function(index,el){    
            var re = new RegExp(el,"g");    
            var setcls = el.substr(1);
            setcls = setcls.substr(0,setcls.length-1);
            content = content.replace(re,'<i class="emoji emoji_'+setcls+'"></i>');
        })
        return new Handlebars.SafeString(content);
    })
    
    //对比聊天记录人名
    Handlebars.registerHelper('isshowme', function(v1, v2, opts) {
        if (v1 === v2) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    })

    //人员列表日期格式化
    Handlebars.registerHelper('dateuser', function(time) {
        return moment(time).format('MM-DD');
    });
    //聊天记录日期格式化
    Handlebars.registerHelper('dateitem', function(time) {
        return moment(time).format('YYYY-MM-DD HH:mm:ss');
    });

    //判断聊天内容类型
    // Handlebars.registerHelper('chatcontent',function(cnt,redata){
    //     var redata = JSON.parse(cnt);
    //     if(redata.params){
    //         redata.params = JSON.parse(redata.params);
    //     }
    //     if(redata.type === 'txt'){
    //         return '<span>'+redata.content+'</span>';
    //     }else{
    //         return redata.params;
    //     }
    // })

    //左侧dom 右侧dom 右侧内部dom
    var leftdom = $('#js-userlist');
    var rightdom = $('.msg-item-container');
    var rightinsidedom = $('#js-itemlist');
    //左侧计算区dom 右侧计算区dom 返回按钮dom
    var leftcountdom = $('.aside-datacontainer');
    var rightcountdom = $('.msg-item-datacontainer');
    var backbtn = $('#js-backbtn');
    //时间 7天开始 自定义开始 结束 day30仅为30天开始
    var day7start = moment().add('days', -7).format('YYYY/MM/DD');
    var day30start = moment().add('days', -30).format('YYYY/MM/DD');
    var todayend = moment().add('days').format('YYYY/MM/DD');
    //表情数组



    //搜索dom
    var searchdom = $('#js-searchinput');

    //mask摸态框显示隐藏
    var hideMask = function(method) {
        $pageMask.addClass('ds-n');
        $customSaerch.addClass('ds-n');
    }

    var showMask = function() {
        $pageMask.removeClass('ds-n');
        $customSaerch.removeClass('ds-n');
    }

    /**
     * 显示有结果页面
     * @param {string} type  search来自搜索 init 来自初始化数据
     */
    var showresult = function(type) {
        if (type === 'search') {
            $('.aside-datacontainer').removeClass('ds-n');
        }
        $('.css-noresult').addClass('ds-n');
        $('.css-hasresult').removeClass('ds-n');
    }

    //显示无结果页面
    var hideresult = function() {
        $('.css-noresult').removeClass('ds-n');
        $('.css-hasresult').addClass('ds-n');
        $('.aside-datacontainer').addClass('ds-n');
        $('#js-userlist').empty();
    }

    //搜索为空只有人员显示
    var onlyusershowresult = function() {
        $('.aside-datacontainer').removeClass('ds-n');
        $('.css-noresult').addClass('ds-n');
        $('.css-hasresult').removeClass('ds-n');
    }

    //搜索为空只有日期显示
    var emptyshowresult = function() {
        $('.aside-datacontainer').addClass('ds-n');
        $('.msg-item-datacontainer').addClass('ds-n');
        $('.css-noresult').addClass('ds-n');
        $('.css-hasresult').removeClass('ds-n');
    }

    //初始化左侧滚动条
    var initleftscroll = function() {
        $('#js-userlist').getNiceScroll().resize();
        $('#js-userlist').niceScroll({
            cursorwidth: 12,
            cursorcolor: '#3fa2fb',
            cursoropacitymin: 0.4,
            cursorborder: 'none',
            cursorborderradius: 4,
            autohidemode: 'leave'
        });
    }

    //初始化右侧滚动条    
    var initrightscroll = function() {
        $('.msg-item-container').getNiceScroll().resize();
        $('.msg-item-container').niceScroll({
            cursorwidth: 12,
            cursorcolor: '#3fa2fb',
            cursoropacitymin: 0.4,
            cursorborder: 'none',
            cursorborderradius: 4,
            autohidemode: 'leave'
        });
    }

    //初始化select2
    var $select2Person = $('#js-select2-person'),
        $select2Date = $('#js-select2-date'),
        $pageMask = $('#js-page-mask'),
        $customSaerch = $('#js-custom-saerch');


    //搜索人员显示格式    
    function formatRepo(repo) {
        if (repo.loading) return '查找中...';
        var markup = repo.name + '<br/>(' + repo.loginID + ')'
        return markup;
    }
    //搜索人员搜索中显示
    function formatRepoSelection(repo) {
        return repo.name || repo.text;
    }
    //搜索人员
    $select2Person.select2({
        width: '180px',
        placeholder: '选择联系人',
        allowClear: true,
        ajax: {
            url: "/api/User/GetUserList",
            dataType: 'json',
            delay: 250,
            data: function(params) {
                return {
                    keyword: params.term
                };
            },
            processResults: function(data, params) {
                // var setdata = JSON.stringify(data.Object).toLowerCase();
                // setdata = JSON.parse(setdata);
                return {
                    results: data.Object
                };
            },
            cache: true
        },
        escapeMarkup: function(markup) {
            return markup;
        },
        minimumInputLength: 2,
        templateResult: formatRepo,
        templateSelection: formatRepoSelection
    })

    $select2Person.on("select2:open", function() {
        $('#js-contact-icon').attr('src', './images/contact-hover.png');
    });
    $select2Person.on("select2:closing", function() {
        $('#js-contact-icon').attr('src', './images/contact.png');
    });
    $select2Person.on("select2:select", function(e) {
        $('.select2-selection__clear').eq(0).removeClass('ds-n');
    });
    //日期
    $select2Date.select2({
        minimumResultsForSearch: Infinity,
        width: '180px',
        placeholder: '近7天',
        allowClear: true,
    })

    $select2Date.on("select2:open", function() {
        $('#js-datetime-icon').attr('src', './images/datetime-hover.png');
    });

    $select2Date.on("select2:closing", function(e) {
        $('#js-datetime-icon').attr('src', './images/datetime.png');
        if (e.currentTarget.value === 'costom') {
            showMask();
        }
    });

    $select2Date.on("select2:select", function(e) {
        $('.select2-selection__clear').eq(1).removeClass('ds-n');
        if (e.currentTarget.value === 'costom') {
            showMask();
            (function(dom) {
                dom.on('click', function() {
                    showMask();
                })
            })($('#select2-js-select2-results').find('li:last'));
        }
    });

    //兼容ie placeholder
    // $('.search-input').placeholder();

    //时间配置初始化
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        format: 'yyyy/mm/dd',
        weekStart: 1,
        yearSuffix: '年',
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        daysShort: ['一', '二', '三', '四', '五', '六', '日'],
        daysMin: ['日', '一', '二', '三', '四', '五', '六'],
    });

    //时间选择处理 摸态框关闭 提交按钮事件
    var pickTime = function() {
        var jsStart = $('#js-start-time'),
            jsEnd = $('#js-end-time'),
            pickedTime = '';
        jsStart.on('pick.datepicker', function(e) {
            if (!pickedTime) {
                pickedTime = e.date;
            } else {
                if (e.date > pickedTime) {
                    swal('结束时间不可小于开始时间');
                    e.preventDefault();
                } else {
                    $(this).val(e.date)
                }
            }

        });
        jsEnd.on('pick.datepicker', function(e) {
            if (!pickedTime) {
                pickedTime = e.date;
            } else {
                if (e.date < pickedTime) {
                    swal('结束时间不可小于开始时间');
                    e.preventDefault();
                } else {
                    $(this).val(e.date)
                }
            }

        });
        $('#js-close-btn').on('click', function() {
            hideMask();
        })
        $('#js-picktimebtn').on('click', function() {
            // day7start = $('#js-start-time').val();
            // todayend = $('#js-end-time').val();

            $('#select2-js-select2-date-container').text($('#js-start-time').val().substr(5) + '-' + $('#js-end-time').val().substr(5))
            hideMask();
        })
    }

    /**
     * 验证搜索
     */
    var valsearch = function(dom) {
        if (dom.val() === '') {
            sendajax('empty');
        } else {
            sendajax('search');
        }
    }

    /**
     * 发送搜索请求 拼接搜索数据
     */
    var sendajax = function(empty) {
        var data = {};
        data.keyword = searchdom.val();
        data.startTime = '';
        data.endTime = '';
        data.empty = empty;
        var userval = $('#js-select2-person').val();
        if (userval !== '-1') {
            data.userval = userval;
        }
        var selval = $('#js-select2-date').val();
        switch (selval) {
            case "0":
                data.startTime = day7start;
                data.endTime = todayend;
                break;
            case "1":
                data.startTime = day30start;
                data.endTime = todayend;
                break;
            case "costom":
                data.startTime = $('#js-start-time').val();
                data.endTime = $('#js-end-time').val();
                break;
        }

        if (empty === 'search') {
            initHeight(110, 160, 70, data);
        } else {
            if (data.userval) {
                initHeight(70, 120, 70, data);
            } else {
                initHeight(70, 120, 30, data);
            }
        }
    }

    /**
     * 搜索事件
     * @param {string} dom 触发事件的dom input或放大镜图
     * @param {string} evt 事件类型 回车或点击放大镜图
     */
    var searchEvt = function(dom, evt) {
        if (evt === 'keydown') {
            dom.on(evt, function(e) {
                if (e.keyCode === 13) {
                    valsearch($(this));
                }
            })
        } else {
            dom.on(evt, function(e) {
                valsearch(searchdom);
            })
        }
    }

    /**
     * 搜索右侧列表
     * @param {object} data user 的数据传递
     * @param {string} tpldom 搜索后的tpl
     * @param {string} container 聊天记录显示容器
     * @param {string} hasmsearchdata 搜索的数据
     */
    var searhresultdata = function(data, tpldom, container, hasmsearchdata) {
        var tpl = $(tpldom).html();
        var data = data;
        data.userid = userid;
        var template = Handlebars.compile(tpl);
        var html = template(data);
        $(container).html(html);
        //右侧滚动条优化
        initrightscroll();
        $(container).find('.msg-search-item').each(function(idx, el) {
            //右侧item鼠标移上背景与查看前后记录显示
            $(el).on('mouseover', function() {
                var _this = $(this);
                $(this).addClass('itemactive').siblings().removeClass('itemactive');
                $(this).find('.css-seehistory').removeClass('ds-n');
                $(this).siblings().find('.css-seehistory').addClass('ds-n');
                //查看前后记录事件
                $(this).find('.css-seehistory').off().on('click', function() {
                    backbtn.removeClass('ds-n');
                    rightcountdom.addClass('ds-n');
                    //查看当前数据前后
                    initData('/api/Manager/GetChatRecord?targetID=' + _this.data('targetid') + '&opType=1&locatorId=' + _this.data('locatorid'), '#tpl-itemlist-init', '#js-itemlist');
                })
            })
        })

        //返回按钮事件
        backbtn.off().on('click', function() {
            backbtn.addClass('ds-n');
            rightcountdom.removeClass('ds-n');
            //返回搜索结果列表
            sendajax('search');
        })

        //搜索结果高亮
        $('.wrapper').unhighlight();
        $('.wrapper').highlight(hasmsearchdata.keyword);
        //右侧关键字
        $('#js-item-keyword').text(hasmsearchdata.keyword);
        //右侧总条数
        $('#js-itemlist-count').text(data.Details.length);
    }


    /**
     * 初始化数据 搜索数据
     * @param {string} url 异步url
     * @param {string} tpldom 模板引擎script dom
     * @param {string} container 模板引擎dom
     * @param {string} hasmsearchdata 搜索的关键字
     */
    var initData = function(url, tpldom, container, hasmsearchdata) {
        //左侧
        $.ajax({
            url: url,
            type: 'get',
            dataType: "json",
            success: function(req) {
                if (req.ResponseHeader.Status === 1) {
                    if (hasmsearchdata) {
                        //搜索 start
                        //左侧搜索
                        if (container === '#js-userlist') {
                            if (req.ChatSessionDatas.length !== 0) {
                                //搜索结果调整dom
                                leftcountdom.removeClass('ds-n');
                                rightcountdom.removeClass('ds-n');
                                backbtn.addClass('ds-n');

                                var tpl = $(tpldom).html();
                                var data = req;
                                var template = Handlebars.compile(tpl);
                                var html = template(data);
                                $(container).html(html);
                                if (data.ChatSessionDatas.length > 0) {
                                    showresult('search');
                                    searhresultdata(data.ChatSessionDatas[0], '#tpl-itemlist', '#js-itemlist', hasmsearchdata);
                                    $(container).find('li').each(function(idx, el) {
                                        if (idx === 0) {
                                            $(el).addClass('msgactive');
                                        }
                                        $(el).on('click', function() {
                                            $(this).addClass('msgactive').siblings().removeClass('msgactive');
                                            searhresultdata(data.ChatSessionDatas[idx], '#tpl-itemlist', '#js-itemlist', hasmsearchdata);
                                            //searhresultdata('data.json', '#tpl-itemlist', '#js-itemlist', hasmsearchdata);
                                        })
                                    })
                                } else {
                                    hideresult();
                                }
                                //左侧总条数
                                $('#js-ulist-count').text(data.ChatSessionDatas.length);

                            } else {
                                hideresult();
                            }
                            //左侧滚动条优化
                            leftdom.niceScroll({
                                cursorwidth: '12px',
                                cursorcolor: '#e2f5ff'
                            });
                        }

                    } else {

                        //初始化 start

                        //左侧
                        if (container === '#js-userlist') {
                            if (req.ChatSessionDatas.length !== 0) {
                                var tpl = $(tpldom).html();
                                var data = req;
                                var template = Handlebars.compile(tpl);
                                var html = template(data);
                                $(container).html(html);

                                $(container).find('li').eq(0).addClass('msgactive');
                                //初始化右侧信息列表
                                initData('/api/Manager/GetChatRecord?targetID=' + data.ChatSessionDatas[0].TargetInfo.TargetID + '&opType=4', '#tpl-itemlist-init', '#js-itemlist');
                                // initData('./json/history01.json', '#tpl-itemlist', '#js-itemlist');

                                //左侧点击事件
                                $(container).find('li').each(function(idx, el) {
                                    $(el).on('click', function() {
                                        if (data.ChatSessionDatas.length > 0) {
                                            showresult('init');
                                            $(this).addClass('msgactive').siblings().removeClass('msgactive');
                                            initData('/api/Manager/GetChatRecord?targetID=' + data.ChatSessionDatas[idx].TargetInfo.TargetID + '&opType=4', '#tpl-itemlist-init', '#js-itemlist');
                                        }
                                        //右侧滚动条优化
                                        leftdom.getNiceScroll(0).doScrollTop(0, 0);
                                        rightdom.getNiceScroll(0).doScrollTop(0, 0);
                                    })
                                })

                                //左侧总条数
                                $('#js-ulist-count').text(data.ChatSessionDatas.length);
                            } else {
                                hideresult();
                            }
                            //初始化左侧滚动条
                            initleftscroll();
                        }

                        //右侧
                        if (container === '#js-itemlist') {
                            if (req.ChatRecordDatas.length !== 0) {

                                var tpl = $(tpldom).html();
                                var data = req;
                                //聊天记录反序列化返回值 添加判断key
                                // console.error('IE 不兼容 console 开发后删除')
                                for (var i = 0, len = data.ChatRecordDatas.length; i < len; i++) {
                                    data.ChatRecordDatas[i].Body = JSON.parse(data.ChatRecordDatas[i].Body);
                                    data.ChatRecordDatas[i].Body.params = JSON.parse(data.ChatRecordDatas[i].Body.params);
                                    data.ChatRecordDatas[i].Body[data.ChatRecordDatas[i].Body.type] = true;
                                    // console.log(data.ChatRecordDatas[i].Body)
                                }

                                data.userid = userid;
                                var template = Handlebars.compile(tpl);
                                var html = template(data);
                                $(container).html(html);
                                //右侧滚动条优化
                                initrightscroll();
                                //播放语音事件
                                $('.js-playvoice').each(function(idx, el) {
                                    var _index = idx;
                                    $(el).on('click', function() {
                                        // $.ajax({
                                        //         type: 'GET',
                                        //         url: $(this).data('url'),
                                        //         dataType: "jsonp",
                                        //         jsonp: "callback",
                                        //         success: function(res) {
                                        //             debugger
                                        //         }
                                        //     })
                                        var _dom = $(this);
                                        var _clickIdx = _index;
                                        fetch($(this).data('url'), {
                                                method: 'GET',
                                                // credentials: "include",
                                                mode: "cors",
                                                headers: {
                                                    "Accept":"application/json,text/plain,*/*",
                                                    "Content-Type": "application/x-www-form-urlencoded"
                                                }
                                            })
                                            .then(function(res) {
                                                // Response stream
                                                return res.blob();
                                            })
                                            .then(function(myBlob) {
                                                readBlob(myBlob, function(data) {
                                                    playAmrArray(data,_dom,_clickIdx);
                                                });
                                            });
                                    })
                                })
                                if (data.IsFirstPage && data.IsLastPage) {
                                    $('.pagenum-container').addClass('ds-n');
                                } else {
                                    $('.pagenum-container').removeClass('ds-n');
                                }

                                $('.pagenum').each(function(index, el) {
                                        var tempindex = index + 1;
                                        //分页事件
                                        $(el).off().on('click', function() {
                                            if (data.ChatRecordDatas.length > 0) {
                                                //右侧滚动条优化
                                                leftdom.getNiceScroll(0).doScrollTop(0, 0);
                                                rightdom.getNiceScroll(0).doScrollTop(0, 0);
                                                var reqdata = false;
                                                switch (tempindex) {
                                                    case 1:
                                                        if (data.IsFirstPage) {
                                                            return false;
                                                        } else {
                                                            reqdata = true;
                                                        }
                                                        break;
                                                    case 2:
                                                        if (data.IsFirstPage) {
                                                            return false;
                                                        } else {
                                                            reqdata = true;
                                                        }
                                                        break;
                                                    case 3:
                                                        if (data.IsLastPage) {
                                                            return false;
                                                        } else {
                                                            reqdata = true;
                                                        }
                                                        break;
                                                    case 4:
                                                        if (data.IsLastPage) {
                                                            return false;
                                                        } else {
                                                            reqdata = true;
                                                        }
                                                }

                                                if (reqdata) {
                                                    var targetid = $('.msgactive').data('targetid');
                                                    if (index === 2) {
                                                        initData('/api/Manager/GetChatRecord?targetID=' + targetid + '&opType=' + tempindex + '&locatorId=' + data.ChatRecordDatas[data.ChatRecordDatas.length - 1].LocatorID, '#tpl-itemlist-init', '#js-itemlist');
                                                    } else {
                                                        initData('/api/Manager/GetChatRecord?targetID=' + targetid + '&opType=' + tempindex + '&locatorId=' + data.ChatRecordDatas[0].LocatorID, '#tpl-itemlist-init', '#js-itemlist');
                                                    }

                                                }
                                            }
                                        })
                                    })
                                    
                            } else {
                                hideresult();
                            }


                        }
                        //初始化 end
                    }

                } else {
                    hideresult();
                    swal('网络不给力，请检查网络后刷新重试');
                }
            },
            error: function(req) {
                hideresult();
                swal('网络不给力，请检查网络后刷新重试');
            }
        })
    }

    /**
     * 初始化容器高度 重新计算容器高度
     * @param {num} left 左侧容器减去高度
     * @param {num} right 右侧容器减去高度
     * @param {num} marginT 左右侧变动的margin-top
     * @param {string} searchdata 搜索关键字
     */
    var initHeight = function(left, right, marginT, searchdata) {
        var weekstart = moment().add('days', -30).format('YYYY/MM/DD');
        var weekend = moment().add('days').format('YYYY/MM/DD');
        //是否搜索
        if (searchdata && searchdata.empty === 'search') {
            url = '/api/Manager/GetChatSession?startTime=' + searchdata.startTime + '&endTime=' + searchdata.endTime;
            if (searchdata.userval) {
                url = url + '&targetID=' + searchdata.userval;
            }

            if (searchdata.keyword) {
                url = url + '&keyword=' + searchdata.keyword;
            }
            //搜索后重新渲染dom
            initData(url, '#tpl-userlist', '#js-userlist', searchdata);
            // initData('./json/history01.json', '#tpl-itemlist', '#js-itemlist', searchdata);
        } else if (searchdata && searchdata.empty === 'empty') {
            url = '/api/Manager/GetChatSession?startTime=' + searchdata.startTime + '&endTime=' + searchdata.endTime;
            if (searchdata.userval) {
                url = url + '&targetID=' + searchdata.userval;
                onlyusershowresult();
            } else {
                emptyshowresult();
            }

            // 执行初始化数据
            initData(url, '#tpl-userlist', '#js-userlist');
            // initData('./json/userlist.json', '#tpl-userlist', '#js-userlist');
        } else {
            // 执行初始化数据
            initData('/api/Manager/GetChatSession?startTime=' + weekstart + '&endTime=' + weekend, '#tpl-userlist', '#js-userlist');
        }

        //wrap高度
        var wrapheight = $('#js-tohighlight').height();
        if (marginT) {
            leftdom.css('margin-top', marginT);
            rightdom.css('margin-top', marginT);
        }
        //左侧高度计算 wrapper高度减上下外边
        leftdom.height(wrapheight - left);
        //右侧高度计算 wrapper高度减上下外边
        rightdom.height(wrapheight - right);

        //窗口变化事件
        $(window).resize(function() {
            wrapheight = $('#js-tohighlight').height();
            //左侧
            leftdom.height(wrapheight - left);
            //右侧
            rightdom.height(wrapheight - right);
        })

    }

    $.ajax({
        url: '/api/user/my',
        dataType: 'json',
        type: 'get',
        dataType: "json",
        success: function(req) {
            if (req.Success) {
                window.userid = req.Object.ID;
            }
        }
    })

    //执行时间选择处理函数
    pickTime();
    //搜索事件
    searchEvt($('#js-searchbtn'), 'click');
    searchEvt(searchdom, 'keydown');
    $('.select2-selection__clear').addClass('ds-n');
    //初始化数据 左右容器高度
    initHeight(70, 120);
})