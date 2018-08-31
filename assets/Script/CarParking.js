// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        parkingNode : cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.parkingArr = this.parkingNode.getChildren();
    },

    start () {

    },

    // update (dt) {},

    //获取精灵组件
    getParkingSprite(i){
        let parkingSprite = this.parkingArr[i].getComponent(cc.Sprite);
        return parkingSprite;
    },
});
