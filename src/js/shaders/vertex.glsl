attribute vec3 aVertexPosition;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;


void main () {
  vec3 vertexPos = aVertexPosition;

  vec4 pos = uPMatrix * uMVMatrix * vec4(vertexPos, 1.0);

  gl_Position = pos;
}