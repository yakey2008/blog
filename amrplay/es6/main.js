var startBtn = document.getElementById('js-play');
var stopBtn = document.getElementById('js-stop');
var amr = document.getElementById('js-amr');

// File Reader 返回 buffer array
function readBlob(blob, callback) {
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        callback(data);
    };
    reader.readAsArrayBuffer(blob);
}

// AMR 解码
function playAmrArray(array) {
    var samples = AMR.decode(array);
    if (!samples) {
        // alert('Failed to decode!');
        return;
    }
    playPcm(samples);
}
var src;
// 播放 AudioContext
function playPcm(samples) {

    
    // src.start(0);
    // 创建一个gain node
    // var gainNode = ctx.createGainNode();
    // 将实例与gain node相连
    // src.connect(gainNode);
    // 将gain node与播放设备连接
    // gainNode.connect(ctx.destination);
    //一旦设定完成之后， 你就可以通过改变值之后来控制音量了。
    //减少音量
  
    if (startBtn.getAttribute('data-statu') === 'stop') {
        var ctx = getAudioContext();
        src = ctx.createBufferSource();
        var buffer = ctx.createBuffer(1, samples.length, 8000);

        if (buffer.copyToChannel) {
            buffer.copyToChannel(samples, 0, 0)
        } else {
            var channelBuffer = buffer.getChannelData(0);
            channelBuffer.set(samples);
        }

        src.buffer = buffer;
        src.connect(ctx.destination);
        var result = src.start(0)
        startBtn.setAttribute('data-statu', 'start');
    } else {
        //   gainNode.gain.value = 0.5;
        src.stop(0);
        // ctx.currentTime = 0;
        startBtn.setAttribute('data-statu', 'stop');
    }
}

function stopPcm() {
    if (!this.source.stop)
        this.source.stop = source.noteOff;
    this.source.stop(0);
}

// 返回 AudioContext 音频处理对象
// https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext
function getAudioContext() {
    if (!gAudioContext) {
        gAudioContext = new AudioContext();
    }
    return gAudioContext;
}


startBtn.addEventListener('click', function () {
    //amr url
    // fetch(amr.getAttribute('href'))
    fetch('http://10.100.69.100:3200/src/female.amr')
        .then(function (res) {
            // Response stream
            return res.blob();
        })
        .then(function (myBlob) {
            readBlob(myBlob, function (data) {
                playAmrArray(data);
            });
        });
});

var gAudioContext = new AudioContext();