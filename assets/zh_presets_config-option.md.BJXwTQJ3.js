import{_ as i,o as a,c as n,a0 as t}from"./chunks/framework.D6w4zQ8K.js";const g=JSON.parse('{"title":"可配置项","description":"","frontmatter":{},"headers":[],"relativePath":"zh/presets/config-option.md","filePath":"zh/presets/config-option.md"}'),p={name:"zh/presets/config-option.md"};function e(l,s,h,k,E,r){return a(),n("div",null,s[0]||(s[0]=[t(`<h1 id="可配置项" tabindex="-1">可配置项 <a class="header-anchor" href="#可配置项" aria-label="Permalink to &quot;可配置项&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PresetMtOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * 类名前缀</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  prefix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="prefix" tabindex="-1">prefix <a class="header-anchor" href="#prefix" aria-label="Permalink to &quot;prefix&quot;">​</a></h2><p>类名前缀，为mortise-tenon-preset配置前缀，可以让你在项目中同时使用多种预设或快捷方式时避免类名冲突，导致样式覆盖。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { presetMortiseTenon } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;mortise-tenon-preset&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig, presetUno } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unocss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetUno</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetMortiseTenon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ prefix: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mt-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  shortcuts: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { btn: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;py-2 px-4 font-semibold rounded-lg shadow-md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mt-btn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    presets button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> btn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    shortcuts button</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,6)]))}const o=i(p,[["render",e]]);export{g as __pageData,o as default};