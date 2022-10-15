<template>
  <div></div>
  <b-container>
    <b-row>
      <b-col>
        <canvas ref="canvasEl" class="webgl-canvas bg-primary"></canvas>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">最简单的 WebGL 程序</b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-3';
import { onMounted, ref } from 'vue';
import { vertexShaderCode, fragShaderCode } from '../shader/SimplePoint';

// 使用 ref 应用 <canvas/> 元素
const canvasEl = ref()
onMounted(() => {
  // 编译 shader program
  // let canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
  let canvas = canvasEl.value;
  glRender(canvas, vertexShaderCode, fragShaderCode);
});

function glRender(canvas: HTMLCanvasElement, vertexShaderCode: string, fragShaderCode: string) {
  if (!canvas) {
    console.log("没有 canvas 元素!");
    return;
  }
  let gl = canvas.getContext('webgl');
  if (!gl) {
    console.log("不能创建 webgl context!");
    return;
  }
  // 创建顶点着色器对象
  let vertexShader = gl.createShader(gl.VERTEX_SHADER);
  let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  if (vertexShader && fragShader) {
    // 输入源代码
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.shaderSource(fragShader, fragShaderCode);
    // 编译着色器
    gl.compileShader(vertexShader);
    gl.compileShader(fragShader);
    // 链接程序
    let program = gl.createProgram();
    if (program) {
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragShader);
      gl.linkProgram(program);
      // 使用刚创建好的着色器程序
      gl.useProgram(program);
    } else {
      console.log("不能创建 shader program!");
    }
  } else {
    console.log("不能创建定点或片元着色器!");
  }
  // 开始绘制
  // 清空背景
  gl.clearColor(0, 0, 0, 1);
  // 一个用于指定需要清除的缓冲区的 GLbitfield (en-US) 。可能的值有：
  // gl.COLOR_BUFFER_BIT    //颜色缓冲区
  // gl.DEPTH_BUFFER_BIT    //深度缓冲区
  // gl.STENCIL_BUFFER_BIT  //模板缓冲区
  gl.clear(gl.COLOR_BUFFER_BIT);
  //绘制点, 参数：
  // mode，代表图元类型。
  // first，代表从第几个点开始绘制。
  // count，代表绘制的点的数量。
  gl.drawArrays(gl.POINTS, 0, 1);
}
</script>

<style lang="scss" scoped>
.webgl-canvas {
  width: 100%;
}
</style>