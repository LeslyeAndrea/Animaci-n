
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.gif');
      
        game.load.spritesheet('spider', 'assets/images/spider.png',486,605);
        

    },
    create: function() {
        game.add.sprite(0,0, 'background');
        this.spider= game.add.sprite(0, 425, 'spider');
        this.spider.animations.add('walk', [0,1,2,3,4,5,6,],4,true);
        this.spider.animations.play("walk");
       
    },
    update: function() {
        console.log("update");
        this.spider.x += 2;
        
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);

    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");