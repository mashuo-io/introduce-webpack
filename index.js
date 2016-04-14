var $= require('jquery');
require('./style.scss');
import bmap from 'BMap';
document.addEventListener('DOMContentLoaded', () => {
	$('button').click(function(){
		// let bmap = window.BMap;
		let map = new bmap.Map("container");          // 创建地图实例
		let point = new bmap.Point(116.404, 39.915);  // 创建点坐标
		map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
	});
});