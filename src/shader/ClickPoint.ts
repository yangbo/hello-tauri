/* 接收鼠标点击位置，显示随机颜色的点 */

export const vertexShaderCode = `
// 设置浮点数精度
precision medium float;

// 接收鼠标在 canvas 上点击的坐标 (x, y)
attribute vec2 a_Position;
// 接收 canvas 的宽高
attribute vec3 a_Screen_Size;

void main() {
    //start 开始将屏幕坐标系转换为裁剪坐标系
    vec2 position = (a_Position / a_Screen_Size) * 2.0 - 1.0;
    // 将 y 反向
    position = position * vec2(1.0, -1.0);
    // gl_Position 是一个约定的变量，决定定点的位置，由 vec4(x,y,z,w) 组成
    // 属于“裁剪坐标系”，定点 shader 会做“透视除法”得到 NDC 坐标（设备坐标系）
    gl_Position = vec4(position, 0, 1);
    // 设置点的大小
    gl_PointSize = 10.0;
}
`;

export const fragShaderCode = `
//设置浮点数精度为中等精度
precision mediump float;
//接收 JavaScript 传过来的颜色值（RGBA）。
uniform vec4 u_Color;
void main(){
    //将普通的颜色表示转化为 WebGL 需要的表示方式，即将【0-255】转化到【0,1】之间。
   vec4 color = u_Color / vec4(255, 255, 255, 1);
   gl_FragColor = color; 
}
`;
