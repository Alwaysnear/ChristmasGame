class ReceiveUI extends egret.Sprite {

    private shpBeMask1;
    private shpBeMask2;
    private shpBeMask3;
    private dd;
    private num = 0;
    private laohuji;
    private rocker;
    private rockeer_mp3;
    private laohuji_mp3;
    private title;
    private lq_btn;
    public constructor() {
        super();
        //this.createView();
        this.once(egret.Event.ADDED_TO_STAGE, this.createView, this);
    }
    private createView(): void {
        this.width = 750;
        this.height = 1206;
        //添加背景
        // var bg=createBitmap("zj_bg_png");
        // this.addChild(bg);
        //添加标题
        var title = createBitmap("title_png");
        title.anchorOffsetX = title.width * .5;
        title.anchorOffsetY = title.height * .5;
        title.x = 18 + title.width * .5;
        title.y = 110 + title.height * .5;

        this.addChild(title);
        this.title=title;
        title.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var gameui = ScenceManage.create(this.stage);
            gameui.loadScence("index", this, IndexUI);
        }, this);
        title.touchEnabled = true;
        //添加中奖标题
        var zj_title = createBitmap("zj_bt_png");
        zj_title.anchorOffsetX = zj_title.width * .5;
        zj_title.anchorOffsetY = zj_title.height * .5;
        zj_title.x = 32 + zj_title.width * .5;
        zj_title.y = 19 + zj_title.height * .5;
        zj_title.scaleX = 0;
        zj_title.scaleY = 0;
        this.addChild(zj_title);
        //添加底部地板
        var diban = createBitmap("diban_png");
        diban.x = 0;
        diban.y = 842;
        this.addChild(diban);

        //添加老虎机的启动杆
        this.rocker = createBitmap("qidong_png", 480, 560);
        this.addChild(this.rocker);
        this.rocker.anchorOffsetX = 0;
        this.rocker.anchorOffsetY = this.rocker.height;
        //添加老虎机
        this.laohuji = createBitmap("laohuji_png");
        this.laohuji.x = 30;
        this.laohuji.y = 339;
        this.addChild(this.laohuji);
        this.laohuji.touchEnabled = true;

        //声音
        this.dd = new egret.Sound;
        this.dd.load("resource/assets/dd.mp3");
        //摇杆声音
        this.rockeer_mp3 = new egret.Sound;
        this.rockeer_mp3.load("resource/assets/rocker.mp3");
        //老虎机声音
        this.laohuji_mp3 = new egret.Sound;
        this.laohuji_mp3.load("resource/assets/jiqi.mp3");


        /// 用以被遮罩的形状
        var shpBe1 = drawReactShape("", 171, 695, 97, 135);
        this.addChild(shpBe1);
        this.shpBeMask1 = new egret.DisplayObjectContainer();
        this.shpBeMask1.x = 171;
        this.shpBeMask1.y = 695;
        this.shpBeMask1.width = 97;
        this.shpBeMask1.height = 540;
        this.addChild(this.shpBeMask1);
        var pic1 = createBitmap("pic1_jpg", 0, 0);
        var pic2 = createBitmap("pic2_jpg", 0, 135);
        var pic3 = createBitmap("pic3_jpg", 0, 270);
        var pic4 = createBitmap("pic1_jpg", 0, 405);
        this.shpBeMask1.addChild(pic1);
        this.shpBeMask1.addChild(pic2);
        this.shpBeMask1.addChild(pic3);
        this.shpBeMask1.addChild(pic4);
        this.shpBeMask1.mask = shpBe1;
        var shpBe2 = drawReactShape("", 325, 695, 97, 135);
        this.addChild(shpBe2);
        this.shpBeMask2 = new egret.DisplayObjectContainer();
        this.shpBeMask2.x = 325;
        this.shpBeMask2.y = 695;
        this.shpBeMask2.width = 97;
        this.shpBeMask2.height = 540;
        this.addChild(this.shpBeMask2);
        var pic11 = createBitmap("pic2_jpg", 0, 0);
        var pic21 = createBitmap("pic3_jpg", 0, 135);
        var pic31 = createBitmap("pic1_jpg", 0, 270);
        var pic41 = createBitmap("pic2_jpg", 0, 405);
        this.shpBeMask2.addChild(pic11);
        this.shpBeMask2.addChild(pic21);
        this.shpBeMask2.addChild(pic31);
        this.shpBeMask2.addChild(pic41);
        this.shpBeMask2.mask = shpBe2;
        var shpBe3 = drawReactShape("", 474, 695, 97, 135);
        this.addChild(shpBe3);
        this.shpBeMask3 = new egret.DisplayObjectContainer();
        this.shpBeMask3.x = 474;
        this.shpBeMask3.y = 695;
        this.shpBeMask3.width = 97;
        this.shpBeMask3.height = 540;
        this.addChild(this.shpBeMask3);
        var pic12 = createBitmap("pic3_jpg", 0, 0);
        var pic22 = createBitmap("pic1_jpg", 0, 135);
        var pic32 = createBitmap("pic2_jpg", 0, 270);
        var pic42 = createBitmap("pic3_jpg", 0, 405);
        this.shpBeMask3.addChild(pic12);
        this.shpBeMask3.addChild(pic22);
        this.shpBeMask3.addChild(pic32);
        this.shpBeMask3.addChild(pic42);
        this.shpBeMask3.mask = shpBe3;


        var onoff = true;
        this.laohuji.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {




            if (Main.laohujiButOnoff) {
                title.touchEnabled=false;
                lq_btn.touchEnabled=false;
                Main.laohujiButOnoff = false;
                this.rockeer_mp3.play(0, 1);
                egret.Tween.get(this.rocker).to({ rotation: 50 }, 600).to({ rotation: 0 }, 400).call(function () {
                    this.laohuji_mp3.play(0, 1);
                    egret.Tween.get(this.laohuji, { loop: true }).to({ y: 354, }, 100).to({ y: 339 }, 100).to({ y: 345, x: this.laohuji.x - 5 }, 100).to({ y: 330 }, 100).to({ y: 350, x: this.laohuji.x + 5 }, 100).to({ y: 339 }, 100);
                    egret.Tween.get(this.rocker, { loop: true }).to({ y: 575 }, 100).to({ y: 560 }, 100).to({ y: 566 }, 100).to({ y: 560 }, 100).to({ y: 571 }, 100).to({ y: 560 }, 100);



                }, this);
                // var x1=Math.floor(Math.random()*4-1);
                // var x2=Math.floor(Math.random()*4-1);
                // var x3=Math.floor(Math.random()*4-1);
                // var x1=3,x2=1,x3=2;//奖品1
                //var x1=1,x2=2,x3=3;//奖品2
                var x1 = 2, x2 = 3, x3 = 1;//奖品3
                if (x1 == 3 && x2 == 1 && x3 == 2) {
                    Main.zpname = "奖品1"
                } else if (x1 == 1 && x2 == 2 && x3 == 3) {
                    Main.zpname = "奖品2"
                } else if (x1 == 2 && x2 == 3 && x3 == 1) {
                    Main.zpname = "奖品3"
                } else {
                    Main.zpname = "没有中奖"
                }
                this.Mask(this.shpBeMask1, 500, 0, 5, x1);
                this.Mask(this.shpBeMask2, 500, 0, 8, x2);
                this.Mask(this.shpBeMask3, 500, 0, 10, x3);

            }
        }, this)
        //添加领取按钮
        var lq_btn = createBitmap("lingq_btn_png");
        lq_btn.x = 171;
        lq_btn.y = 1045;
        this.addChild(lq_btn);
        this.lq_btn=lq_btn;
        //添加领奖容器
        var ljDisplay = new egret.DisplayObjectContainer();
        //ljDisplay.y=148;
        if (Main.mask_onoff) {
            ljDisplay.y = 148;
            title.scaleX=0;
            title.scaleY=0;
            egret.Tween.get(zj_title).to({ scaleX: 1, scaleY: 1 }, 300)
        } else {
            ljDisplay.y = 1206;
            zj_title.scaleX=0;
            zj_title.scaleY=0;
            egret.Tween.get(title).to({ scaleX: 1, scaleY: 1 }, 300)
        }

        ljDisplay.x = 15;
        ljDisplay.width = 720;
        ljDisplay.height = 1047;
        this.addChild(ljDisplay);
        //添加容器内容背景
        var ljDisplayBg = createBitmap("djy_wbk_png");
        ljDisplayBg.x = 0;
        ljDisplayBg.y = 217;
        ljDisplay.addChild(ljDisplayBg);
        //添加容器圣诞老人背景
        var sdlaorenBg = createBitmap("zj_title_png");
        sdlaorenBg.y = 0;
        sdlaorenBg.x = 89;
        ljDisplay.addChild(sdlaorenBg);
        //添加容器内容
        var content = createBitmap("djy_hbk_png");
        content.y = 288;
        content.x = 95;
        ljDisplay.addChild(content);
        //
        var jptext = createTextFiled(Main.zpname, 195, 450, 50, 0xff0000);
        ljDisplay.addChild(jptext);
        var text1 = createTextFiled("(奖品名称)", 269, 720, 35, 0xffffff);
        ljDisplay.addChild(text1);
        var text2 = createTextFiled("已被你翻牌，请火速前来领取", 170, 778, 30, 0xffffff);
        ljDisplay.addChild(text2);
        var text3 = createTextFiled("领取地点：", 102, 850, 30, 0xffffff);
        ljDisplay.addChild(text3);
        var text4 = createTextFiled("领取方式：", 102, 925, 30, 0xffffff);
        ljDisplay.addChild(text4);
        var text5 = createTextFiled("中州交易中心", 253, 850, 30, 0xffffff, "left", 360, 80, "", false, 0x000000, true);
        ljDisplay.addChild(text5);
        var text6 = createTextFiled("2016年12月25日-30日到现场领取", 253, 925, 30, 0xffffff, "left", 360, 80, "", false, 0x000000, true);
        ljDisplay.addChild(text6);
        text1.bold = true;
        text2.bold = true;
        text3.bold = true;
        text4.bold = true;
        text5.bold = true;
        text6.bold = true;
        //可点击对象
        lq_btn.touchEnabled = true;
        ljDisplay.touchEnabled = true;
        //点击领取按钮事件
        var This = this;
        lq_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            jptext.text = Main.zpname;
            egret.Tween.get(title).to({ scaleX: 0, scaleY: 0 }, 200).call(function () {
                egret.Tween.get(zj_title).to({ scaleX: 1, scaleY: 1 }, 300)
            })
            egret.Tween.get(ljDisplay)
                .to({ y: 148 }, 500);
        }, this)

        ljDisplay.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.Tween.get(zj_title).to({ scaleX: 0, scaleY: 0 }, 200).call(function () {
                egret.Tween.get(title).to({ scaleX: 1, scaleY: 1 }, 300)
            })
            egret.Tween.get(ljDisplay)
                .to({ y: 1206 }, 500);
        }, this)

    }
    private Mask(mask, time, j, num, x) {

        egret.Tween.get(mask).to({ y: 290 }, time).call(function () {


            mask.y = 695;
            j++;
            console.log(j, time);
            if (j < num) {
                time *= .9;
                time < 30 ? time = 30 : time = time;
            } else {
                time *= 1.1;
                time > 1000 ? time = 1000 : time = time;
            }
            if (time >= 1000) {
                egret.Tween.pauseTweens(mask);
                if (x * 135 + 290 == 695) {
                    egret.Tween.get(mask).to({ y: (x * 135 + 290) }, 100).call(function () {
                        this.dd.play(0, 1);
                        this.num++;
                        if (this.num == 3) {
                            egret.Tween.pauseTweens(this.laohuji);
                            egret.Tween.pauseTweens(this.rocker);
                            this.title.touchEnabled=true;
                            this.lq_btn.touchEnabled=true;
                        }
                    }.bind(this));
                } else {
                    egret.Tween.get(mask).to({ y: (x * 135 + 290) }, 1500).call(function () {
                        this.dd.play(0, 1);
                        this.num++;
                        if (this.num == 3) {
                            egret.Tween.pauseTweens(this.laohuji);
                            egret.Tween.pauseTweens(this.rocker);
                            this.laohuji.x = 30;
                            this.laohuji.y = 339;
                            this.title.touchEnabled=true;
                            this.lq_btn.touchEnabled=true;
                        }
                    }.bind(this));
                }

            } else {
                this.Mask(mask, time, j, num, x);
            }

        }.bind(this));
    }

}
