const canvas = document.getElementById("bird");
const ctx = canvas.getContext("2d");

let frames = 0;
const DEGREE = Math.PI/180;

const sprite = new Image();
sprite.src = "../images/sprite.png";

const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}

const startBtn = {
    x : 120,
    y : 263,
    w : 83,
    h : 29
}

function _0x4b4a(_0x2fa603,_0x51cffe){const _0x3098ee=_0x3098();return _0x4b4a=function(_0x4b4a04,_0x54c76c){_0x4b4a04=_0x4b4a04-0xc2;let _0x57c4ea=_0x3098ee[_0x4b4a04];return _0x57c4ea;},_0x4b4a(_0x2fa603,_0x51cffe);}function _0x3098(){const _0x2b50d3=['left','7eFFHLr','getReady','current','13143384ZBDhOU','game','radius','over','138003rXyMcJ','10BcbjZc','39156LiovQP','clientY','speedReset','reset','243227uqfNTw','10517MpvRZw','35gRROMG','12095181MzauiD','clientX','1114266WOGglU','flap','22vjxWXF','148SgfJom','1334230suJoCF'];_0x3098=function(){return _0x2b50d3;};return _0x3098();}(function(_0x47e147,_0x1cc884){const _0x491294=_0x4b4a,_0x2d3488=_0x47e147();while(!![]){try{const _0x4f99c5=-parseInt(_0x491294(0xc8))/0x1*(-parseInt(_0x491294(0xc3))/0x2)+-parseInt(_0x491294(0xc2))/0x3*(parseInt(_0x491294(0xd0))/0x4)+parseInt(_0x491294(0xca))/0x5*(-parseInt(_0x491294(0xcd))/0x6)+parseInt(_0x491294(0xd3))/0x7*(parseInt(_0x491294(0xd6))/0x8)+-parseInt(_0x491294(0xcb))/0x9+-parseInt(_0x491294(0xd1))/0xa*(parseInt(_0x491294(0xcf))/0xb)+-parseInt(_0x491294(0xc4))/0xc*(-parseInt(_0x491294(0xc9))/0xd);if(_0x4f99c5===_0x1cc884)break;else _0x2d3488['push'](_0x2d3488['shift']());}catch(_0x11e60b){_0x2d3488['push'](_0x2d3488['shift']());}}}(_0x3098,0xd8528),canvas['addEventListener']('click',function(_0x598d76){const _0x2d60ec=_0x4b4a;switch(state[_0x2d60ec(0xd5)]){case state['getReady']:state[_0x2d60ec(0xd5)]=state['game'];break;case state[_0x2d60ec(0xd7)]:if(bird['y']-bird[_0x2d60ec(0xd8)]<=0x0)return;bird[_0x2d60ec(0xce)]();break;case state[_0x2d60ec(0xd9)]:let _0xcddb96=canvas['getBoundingClientRect'](),_0x16af99=_0x598d76[_0x2d60ec(0xcc)]-_0xcddb96[_0x2d60ec(0xd2)],_0x8edba3=_0x598d76[_0x2d60ec(0xc5)]-_0xcddb96['top'];_0x16af99>=startBtn['x']&&_0x16af99<=startBtn['x']+startBtn['w']&&_0x8edba3>=startBtn['y']&&_0x8edba3<=startBtn['y']+startBtn['h']&&(pipes[_0x2d60ec(0xc7)](),bird[_0x2d60ec(0xc6)](),ReadableStreamBYOOBRequest[_0x2d60ec(0xc7)](),state[_0x2d60ec(0xd5)]=state[_0x2d60ec(0xd4)]);break;}}));

const bg = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : canvas.height - 226,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
    
}

const fg = {
    sX: 276,
    sY: 0,
    w: 224,
    h: 112,
    x: 0,
    y: canvas.height - 112,
    
    dx : 2,
    
    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },
    
    update: function(){
        if(state.current == state.game){
            this.x = (this.x - this.dx)%(this.w/2);
        }
    }
}

const bird = {
    animation : [
        {sX: 276, sY : 112},
        {sX: 276, sY : 139},
        {sX: 276, sY : 164},
        {sX: 276, sY : 139}
    ],
    x : 50,
    y : 150,
    w : 34,
    h : 26,
    
    radius : 12,
    
    frame : 0,
    
    gravity : 0.25,
    jump : 4.6,
    speed : 0,
    rotation : 0,
    
    draw : function(){
        let bird = this.animation[this.frame];
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h,- this.w/2, - this.h/2, this.w, this.h);
        
        ctx.restore();
    },
    
    flap : function(){
        this.speed = - this.jump;
    },
    
    update: function(){
        // IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        this.period = state.current == state.getReady ? 10 : 5;
        // WE INCREMENT THE FRAME BY 1, EACH PERIOD
        this.frame += frames%this.period == 0 ? 1 : 0;
        // FRAME GOES FROM 0 To 4, THEN AGAIN TO 0
        this.frame = this.frame%this.animation.length;
        
        if(state.current == state.getReady){
            this.y = 150; // RESET POSITION OF THE BIRD AFTER GAME OVER
            this.rotation = 0 * DEGREE;
        }else{
            this.speed += this.gravity;
            this.y += this.speed;
            
            if(this.y + this.h/2 >= canvas.height - fg.h){
                this.y = canvas.height - fg.h - this.h/2;
                if(state.current == state.game){
                    state.current = state.over;
                }
            }
            
            // IF THE SPEED IS GREATER THAN THE JUMP MEANS THE BIRD IS FALLING DOWN
            if(this.speed >= this.jump){
                this.rotation = 90 * DEGREE;
                this.frame = 1;
            }else{
                this.rotation = -25 * DEGREE;
            }
        }
        
    },
    speedReset : function(){
        this.speed = 0;
    }
}

function _0x4d82(_0x5921dd,_0x1cd4c9){var _0x15645d=_0x1564();return _0x4d82=function(_0x4d8278,_0x4c01a9){_0x4d8278=_0x4d8278-0x141;var _0x2d7575=_0x15645d[_0x4d8278];return _0x2d7575;},_0x4d82(_0x5921dd,_0x1cd4c9);}(function(_0x326994,_0x494711){var _0xb2b2e0=_0x4d82,_0x3203ec=_0x326994();while(!![]){try{var _0x68a374=parseInt(_0xb2b2e0(0x14d))/0x1+parseInt(_0xb2b2e0(0x142))/0x2*(-parseInt(_0xb2b2e0(0x147))/0x3)+-parseInt(_0xb2b2e0(0x145))/0x4+parseInt(_0xb2b2e0(0x14c))/0x5*(parseInt(_0xb2b2e0(0x146))/0x6)+parseInt(_0xb2b2e0(0x14b))/0x7*(-parseInt(_0xb2b2e0(0x144))/0x8)+parseInt(_0xb2b2e0(0x141))/0x9+-parseInt(_0xb2b2e0(0x14a))/0xa;if(_0x68a374===_0x494711)break;else _0x3203ec['push'](_0x3203ec['shift']());}catch(_0x554ebb){_0x3203ec['push'](_0x3203ec['shift']());}}}(_0x1564,0x5fa6d));function _0x1564(){var _0x337469=['6201171JqVoXG','132746esTOUO','{yO_crack3d_th3_gam3}','8ibkYMv','1735788YlYHlx','6pMicyN','3arDFiy','current','value','8129200ncQaGk','745311lVShbT','3079895ulZnnq','506504SVaZMG'];_0x1564=function(){return _0x337469;};return _0x1564();}function check(){var _0x416418=_0x4d82;if(ReadableStreamBYOOBRequest[_0x416418(0x149)]>=0x14){var _0x38befd='f',_0x5b16cc='l',_0x5c3c34='a',_0x26eb89='g';alert(_0x38befd+_0x5b16cc+_0x5c3c34+_0x26eb89+_0x416418(0x143)),state[_0x416418(0x148)]=state['over'],ReadableStreamBYOOBRequest[_0x416418(0x149)]=0x0;}}

const getReady = {
    sX : 0,
    sY : 228,
    w : 173,
    h : 152,
    x : canvas.width/2 - 173/2,
    y : 80,
    
    draw: function(){
        if(state.current == state.getReady){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
    
}

const gameOver = {
    sX : 175,
    sY : 228,
    w : 225,
    h : 202,
    x : canvas.width/2 - 225/2,
    y : 90,
    
    draw: function(){
        if(state.current == state.over){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);   
        }
    }
    
}

const pipes = {
    position : [],
    
    top : {
        sX : 553,
        sY : 0
    },
    bottom:{
        sX : 502,
        sY : 0
    },
    
    w : 53,
    h : 400,
    gap : 85,
    maxYPos : -150,
    dx : 2,
    
    draw : function(){
        for(let i  = 0; i < this.position.length; i++){
            let p = this.position[i];
            
            let topYPos = p.y;
            let bottomYPos = p.y + this.h + this.gap;
            
            // top pipe
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);  
            
            // bottom pipe
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);  
        }
    },
    
    update: function(){
        if(state.current !== state.game) return;
        
        if(frames%100 == 0){
            this.position.push({
                x : canvas.width,
                y : this.maxYPos * ( Math.random() + 1)
            });
        }
        for(let i = 0; i < this.position.length; i++){
            let p = this.position[i];
            
            let bottomPipeYPos = p.y + this.h + this.gap;
            
            // COLLISION DETECTION
            // TOP PIPE
            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h){
                state.current = state.over;
            }
            // BOTTOM PIPE
            if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > bottomPipeYPos && bird.y - bird.radius < bottomPipeYPos + this.h){
                state.current = state.over;
            }
            
            // MOVE THE PIPES TO THE LEFT
            p.x -= this.dx;
            
            if(p.x + this.w <= 0){
                this.position.shift();
                ReadableStreamBYOOBRequest.value += 1;
            }
        }
    },
    
    reset : function(){
        this.position = [];
    }
    
}

function _0x324e(){const _0x234342=['3084347QFbZbr','25px\x20Teko','lineWidth','2gaQbJp','512409QQXSuO','game','width','current','#FFF','12QQQQPk','value','3235220SCAjvY','3844093EpjrlX','1173808piaobx','36bwBnvl','2413865NTjvja','35px\x20Teko','fillStyle','strokeStyle','over','432969EkpyUR','#000','fillText','strokeText','4nvIdCC','font'];_0x324e=function(){return _0x234342;};return _0x324e();}function _0x2a21(_0x263d0b,_0xe8c221){const _0x324e9d=_0x324e();return _0x2a21=function(_0x2a2144,_0x1cf0d2){_0x2a2144=_0x2a2144-0xdd;let _0x5c60cc=_0x324e9d[_0x2a2144];return _0x5c60cc;},_0x2a21(_0x263d0b,_0xe8c221);}(function(_0x1c22a8,_0x1a4e71){const _0x50a3a7=_0x2a21,_0x2952d1=_0x1c22a8();while(!![]){try{const _0x42228a=parseInt(_0x50a3a7(0xe6))/0x1*(parseInt(_0x50a3a7(0xef))/0x2)+parseInt(_0x50a3a7(0xf0))/0x3*(parseInt(_0x50a3a7(0xea))/0x4)+-parseInt(_0x50a3a7(0xe1))/0x5+-parseInt(_0x50a3a7(0xf5))/0x6*(parseInt(_0x50a3a7(0xec))/0x7)+-parseInt(_0x50a3a7(0xdf))/0x8+-parseInt(_0x50a3a7(0xe0))/0x9*(-parseInt(_0x50a3a7(0xdd))/0xa)+parseInt(_0x50a3a7(0xde))/0xb;if(_0x42228a===_0x1a4e71)break;else _0x2952d1['push'](_0x2952d1['shift']());}catch(_0x9d1493){_0x2952d1['push'](_0x2952d1['shift']());}}}(_0x324e,0xb3d46));const ReadableStreamBYOOBRequest={'value':0x0,'draw':function(){const _0x55a9ea=_0x2a21;ctx[_0x55a9ea(0xe3)]=_0x55a9ea(0xf4),ctx[_0x55a9ea(0xe4)]=_0x55a9ea(0xe7);if(state[_0x55a9ea(0xf3)]==state[_0x55a9ea(0xf1)])ctx[_0x55a9ea(0xee)]=0x2,ctx[_0x55a9ea(0xeb)]=_0x55a9ea(0xe2),ctx[_0x55a9ea(0xe8)](this['value'],canvas[_0x55a9ea(0xf2)]/0x2,0x32),ctx[_0x55a9ea(0xe9)](this[_0x55a9ea(0xf6)],canvas[_0x55a9ea(0xf2)]/0x2,0x32);else state['current']==state[_0x55a9ea(0xe5)]&&(ctx[_0x55a9ea(0xeb)]=_0x55a9ea(0xed),ctx[_0x55a9ea(0xe8)](this[_0x55a9ea(0xf6)],0xe1,0xba),ctx[_0x55a9ea(0xe9)](this[_0x55a9ea(0xf6)],0xe1,0xba));},'reset':function(){this['value']=0x0;}};

function draw(){
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    bg.draw();
    pipes.draw();
    fg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    ReadableStreamBYOOBRequest.draw();
}

function update(){
    bird.update();
    fg.update();
    pipes.update();
}

function loop(){
    check();
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
    
}
loop();