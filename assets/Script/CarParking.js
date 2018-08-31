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
        panelsNode : cc.Node,
        carItemsPrefab : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.parkingArr = this.parkingNode.getChildren();

        //加载停车组件
        this.panels = this.panelsNode.getComponent(JS_PANELS_NODE_NAME);
        this.panels.canvas = this;
        //获取节点
        this.panelArr = this.panels.panelArr;

        //加载预载资源
        this.carItemsPrefab = cc.instantiate(this.carItemsPrefab).getComponent(JS_CAR_ITEMS_NAME);
        this.carItems = this.carItemsPrefab.carItems;
    },

    start () {

    },

    // update (dt) {},

    //获取精灵组件
    getParkingSprite(){
        let parkingSprite = this.getComponent(cc.Sprite);
        return parkingSprite;
    },

    buyCar(level){
        let parkingSprite = this.getParkingSprite();
        if(parkingSprite.spriteFrame == undefined || parkingSprite.spriteFrame == null){
            //位置为空，添加
            parkingSprite.spriteFrame = this.carItems[0];

            //添加移动事件
            parkingSprite.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
            parkingSprite.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);

            return true;
        }
        return false;
    },

    //移动
    touchMove(event){
        this.node.spriteFrame = null;
        let delta = event.touch.getDelta();
        this.node.x += delta.x;
        this.node.y += delta.y;

        console.log(this);

    },
    //移动结束
    touchEnd(event){
        let count = this.panelArr.length;
        for (let i = 0; i < count; i++){
            let panelBox = this.panelArr[i].getBoundingBoxToWorld();
            console.log(panelBox);

            let parkingSprite = this.getParkingSprite();

            let delta = event.touch.getDelta();
            let newX = this.node.x + delta.x;
            let newY = this.node.y + delta.y;
            let newPos = this.node.convertToWorldSpaceAR(cc.v2(newX, newY));
            console.log(newPos); //break;
            // if(cc.rectIntersectsRect(panelBox , newPos)){
            if(panelBox.contains(newPos)){
                console.info(11111);
                if(parkingSprite.spriteFrame != null){

                }else{
                    console.info(33333333333);
                    //位置为空，添加
                    parkingSprite.spriteFrame = this.carItems[0];

                    //添加移动事件
                    parkingSprite.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
                    parkingSprite.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
                    break;
                }
            }

            break;
        }
    },
});
