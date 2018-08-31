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
        carItemsPrefab : cc.Prefab,
        parkingNode : cc.Node,
        panelsNode : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        //加载预载资源
        this.carItemsPrefab = cc.instantiate(this.carItemsPrefab).getComponent(JS_CAR_ITEMS_NAME);
        this.carItems = this.carItemsPrefab.carItems

        //加载车组件
        this.parkings = this.parkingNode.getComponent(JS_CAR_PARKING_NODE_NAME);
        this.parkings.canvas = this;

        //加载停车组件
        this.panels = this.panelsNode.getComponent(JS_PANELS_NODE_NAME);
        this.panels.canvas = this;

        //获取节点
        this.panelArr = this.panels.panelArr;
        this.parkingArr = this.parkings.parkingArr;

        this.self = this;
    },

    start () {

    },

    // update (dt) {},

    //初始化商店

    //快速购买
    quickBuy(event, data){

        //循环判断位置是否为空
        let count = this.panelArr.length;
        for (let i = 0; i < count; i++){
            let parkingSprite = this.parkings.getParkingSprite(i);
            console.log(parkingSprite.spriteFrame);
            if(parkingSprite.spriteFrame == undefined || parkingSprite.spriteFrame == null){
                console.log(1111111);
                //位置为空，添加
                parkingSprite.spriteFrame = this.carItems[0];

                //添加移动事件
                parkingSprite.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, parkingSprite);
                parkingSprite.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, parkingSprite);
                break;
            }
        }
    },

    //移动
    touchMove(event){
        this.node.spriteFrame = null;
        let delta = event.touch.getDelta();
        this.node.x += delta.x;
        this.node.y += delta.y;

        console.log(this);

    },
    //移动
    touchEnd(touch, event){
        let count = this.self.panelArr.length;
        for (let i = 0; i < count; i++){
            var panelBox = this.panelArr[i].getBoundingBoxToWorld();

            let laySprite = this.layArr[i].getComponent(cc.Sprite);

            let delta = event.touch.getDelta();
            let newX = laySprite.node.x + delta.x;
            let newY = laySprite.node.y + delta.y;
            let newPos = this.node.convertToWorldSpace(cc.v2(newX, newY));

            if(cc.rectIntersectsRect(panelBox, newPos)){
                console.info(11111);
                if(laySprite.spriteFrame != null){

                }else{
                    console.info(2222222);
                    //位置为空，添加
                    laySprite.spriteFrame = this.carItems[0];

                    //添加移动事件
                    laySprite.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, laySprite);
                    laySprite.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, laySprite);
                    break;
                }
            }
            console.info(2222222);

            break;
        }
    },
});
