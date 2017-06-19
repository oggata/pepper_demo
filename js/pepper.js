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
            qis.service('ALAutonomousLife').done(function(ins){
                als.alALAutonomousLife = ins;
            });
            qis.service('ALBehaviorManager').done(function(ins){
                als.alALBehaviorManager = ins;
            });
            qis.service('ALBattery').done(function(ins){
                als.alALBattery = ins;
            });
            /*
            qis.service('ALRobotPosturer').done(function(ins){
                als.alRobotPosturer = ins;
            });
            */
            //alRobotPosturer
            //als.alALAudioDevice.setOutputVolume(0);
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
        //オートノマスを切る
        als.alALAutonomousLife.setState("disabled");
        //als.alMotion.rest();
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
        //起動中のBehaviorを全て終了
        als.alALBehaviorManager.stopAllBehaviors();
        //ポーズをリセットする
        als.alMotion.goToPosture("StandInit", 0.5);
        //全ての動作を止める
        als.alMotion.setBreathEnabled("All", false);
    });


    //http://doc.aldebaran.com/2-1/family/nao_dcm/actuator_sensor_names.html
    $('#action001-btn').on('click', function(){
        var _degress = $('#degress').val();
        var _rad = toRadian(_degress);
        als.alMotion.changeAngles('RShoulderPitch',  _rad, 0.08);
    });
    $('#action002-btn').on('click', function(){
        var _degress = $('#degress').val();
        var _rad = toRadian(_degress);
        als.alMotion.changeAngles('LShoulderPitch',  _rad, 0.08);
    });
    $('#action003-btn').on('click', function(){
        var _degress = $('#degress').val();
        var _rad = toRadian(_degress);
        als.alMotion.changeAngles('RElbowRoll',  _rad, 0.08);
    });
    $('#action004-btn').on('click', function(){
        var _degress = $('#degress').val();
        var _rad = toRadian(_degress);
        als.alMotion.changeAngles('LElbowRoll',  _rad, 0.08);
    });
    $('#action005-btn').on('click', function(){
        var _degress = $('#degress').val();
        var _rad = toRadian(_degress);
        als.alMotion.changeAngles('HeadPitch',  _rad, 0.08);
    });
    $('#action006-btn').on('click', function(){
        //als.alMotion.changeAngles('HeadPitch',  2, 0.08);
    });
    $('#action007-btn').on('click', function(){

    });
    $('#action008-btn').on('click', function(){

    });
    $('#action009-btn').on('click', function(){

    });
    $('#action010-btn').on('click', function(){
        //als.alMotion.changeAngles('LElbowYaw',  -2, 0.08);
        //als.alRobotPosturer.goToPosture("Crouch");
        var _rad = toRadian(90);
        console.log(_rad);
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

    $('#intelligent001-btn').on('click', function(){
        als.alALAutonomousLife.getState().done(function(val)
            {
                console.log(val);
                alert(val);
            }
        );
    });
    $('#intelligent002-btn').on('click', function(){
        als.alALAutonomousLife.setState("solitary");
    });
    $('#intelligent003-btn').on('click', function(){
        als.alALAutonomousLife.setState("interactive");
    });
    $('#intelligent004-btn').on('click', function(){
        als.alALAutonomousLife.setState("disabled");
    });
    $('#intelligent005-btn').on('click', function(){
        als.alALAutonomousLife.setState("safeguard");
    });


    $('#battery-btn').on('click', function(){
        als.alALBattery.getBatteryCharge().done(function(val)
            {
                console.log(val);
                alert(val);
            }
        );
    });

    $('#test-btn').on('click', function(){
/*
intelligent001-btn
State.setState("disabled") #Turn off AutoIntelligent
6   currentState = State.getState()
*/
    });
});

function hoge(){
    console.log("hoge");
}

function toRadian(degrees) {
  return degrees * Math.PI / 180;
};

