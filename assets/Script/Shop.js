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
        parkingNode : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {



        //加载车组件
        // this.parkings = this.parkingNode.getComponent(JS_CAR_PARKING_NODE_NAME);
        this.parkingArr = this.parkingNode.getChildren();
        // this.parkings.canvas = this;

        //加载停车组件
        // this.panels = this.panelsNode.getComponent(JS_PANELS_NODE_NAME);
        // this.panels.canvas = this;
        //
        // //获取节点
        // this.panelArr = this.panels.panelArr;
        // this.parkingArr = this.parkings.parkingArr;

    },

    start () {

    },

    // update (dt) {},

    //初始化商店

    //快速购买
    quickBuy(event, data){
        let length = this.parkingArr.length;
        for (let i = 0; i < length; i++){
            //获取组件
            let parkingSprite = this.parkingArr[i].getComponent(JS_CAR_PARKING_NAME);

            //快速购买--返回成功，跳出循环
            let result = parkingSprite.buyCar(data);
            if(result){
                break;
            }
        }

    },


});
