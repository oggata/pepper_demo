$(function(){
    var qis, ip;
    var als = {};

    // 接続ボタンclickイベント
    $('#connect-btn').on('click', function(){
        // 入力IP取得
        ip = $('#ip').val();
        // NAOqi Session 生成
        qis = new QiSession(ip);
        // 接続
        qis.socket()
        .on('connect', function(){
            // 接続成功
            console.log('[CONNECTED]');
            alert('[CONNECTED]');

            qis.service('ALTextToSpeech').done(function(ins){
                als.alTextToSpeech = ins;
            });
            qis.service('ALMotion').done(function(ins){
                als.alMotion = ins;
            });
            qis.service('ALRobotPosture').done(function(ins){
                als.alRobotPosture = ins;
            });
            qis.service('ALAudioDevice').done(function(ins){
                als.alALAudioDevice = ins;
            });
            qis.service('ALAnimatedSpeech').done(function(ins){
                als.alAnimatedSpeech = ins;
            });
            qis.service('ALTabletService').done(function(ins){
                als.alALTabletService = ins;
            });
        })
        .on('disconnect', function(){
            // 接続断
            alert('[DISCONNECTED]');
            console.log('[DISCONNECTED]');
        })
        .on('error', function(){
            // 接続エラー
            alert('[CONNECTION ERROR]');
            console.log('[CONNECTION ERROR]');
        });
    });

    $('#volume0-btn').on('click', function(){
        console.log('[volume0-btn]');
        als.alALAudioDevice.setOutputVolume(0);
    });
    $('#volume40-btn').on('click', function(){
        console.log('[volume40-btn]');
        als.alALAudioDevice.setOutputVolume(40);
    });
    $('#sleep-btn').on('click', function(){
        als.alMotion.rest();
    });
    $('#wakeup-btn').on('click', function(){
        als.alMotion.wakeUp();
    });
    $('#talk-text-btn').on('click', function(){
        console.log("talk-text-btn");
        var _txt = $('#talk-text').val();
        als.alAnimatedSpeech.say(_txt);
        console.log(_txt);
    });
    $('#talk-hello-btn').on('click', function(){
        console.log("talk-hello-btn");
        als.alAnimatedSpeech.say("おはようございます");
    });
    $('#action000-btn').on('click', function(){
        //als.alMotion.changeAngles('RShoulderPitch',  -2, 0.08);
        //als.alMotion.stopAllBehaviors();
        als.alMotion.goToPosture("StandInit", 0.5)
        als.alMotion.setBreathEnabled("All", false);
    });
    $('#action001-btn').on('click', function(){
        als.alMotion.changeAngles('RShoulderPitch',  -2, 0.08);
    });
    $('#action002-btn').on('click', function(){
        als.alMotion.changeAngles('LShoulderPitch',  -2, 0.08);
    });
    $('#action003-btn').on('click', function(){
        als.alMotion.changeAngles('RShoulderPitch',  2, 0.08);
    });
    $('#action004-btn').on('click', function(){
        als.alMotion.changeAngles('LShoulderPitch',  2, 0.08);
    });
    $('#action005-btn').on('click', function(){
        als.alMotion.changeAngles('RShoulderPitch',  -2, 0.08);
    });
    $('#action006-btn').on('click', function(){
        als.alMotion.changeAngles('RShoulderPitch',  -2, 0.08);
    });
    $('#action007-btn').on('click', function(){
        als.alMotion.changeAngles('RShoulderPitch',  -2, 0.08);
    });
    $('#action008-btn').on('click', function(){
        als.alMotion.changeAngles('RShoulderPitch',  -2, 0.08);
    });
    $('#url-free-btn').on('click', function(){
        console.log("url-free-btn");
        var _url = $('#url-text').val();
        als.alALTabletService.loadUrl(_url);
        als.alALTabletService.showWebview();
        als.alALTabletService.loadUrl(_url);
        console.log(_url);
    });

    $('#image-free-btn').on('click', function(){
        console.log("image-free-btn");
        var _image = $('#image-text').val();
        als.alALTabletService.showImage(_image);
        als.alALTabletService.showWebview();
        als.alALTabletService.showImage(_image);
        console.log(_image);
    });

    $('#test-btn').on('click', function(){

    });
    $('#test-btn').on('click', function(){

    });
});

function hoge(){
    console.log("hoge");
}

