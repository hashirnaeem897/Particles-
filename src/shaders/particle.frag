precision highp float;

uniform sampler2D uTexture;

varying vec2 vPUv;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
	vec4 color = vec4(0.0);
	vec2 uv = vUv;
	vec2 puv = vPUv;

	vec4 colB = vec4(.81, .227, .47, 1.0);

	// circle
	float border = 0.2;
	float radius = 0.6;
	float dist = radius - distance(uv, vec2(0.5));
	float t = smoothstep(0.0, border, dist);

	// final color
	color = colB;
	color.a = t;


	gl_FragColor = vec4(color.rgb, color.w);
}