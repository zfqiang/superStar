
//定义场景名称
window.SCENE_START_NAME = 'StartScene';
window.SCENE_GAME_NAME = 'GameScene';

//定义脚本名称
window.JS_SHOP_NAME = 'Shop';
window.JS_CAR_PARKING_NODE_NAME = 'CarParking';
window.JS_PANELS_NODE_NAME = 'Panels';
window.JS_CAR_ITEMS_NAME = 'CarItems';

//定义节点名称


//定义公共方法
window.loadScene = function(sceneName){
    cc.director.loadScene(sceneName);
}