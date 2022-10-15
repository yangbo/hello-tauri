// 定点着色器代码
export const vertexShaderCode = `
void main()
{
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  gl_PointSize = 5.0;
}
`;

// 片元着色器代码
export const fragShaderCode = `
void main()
{
  gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
}
`
