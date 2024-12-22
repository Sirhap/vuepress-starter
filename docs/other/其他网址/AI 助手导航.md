# AI 助手导航

## 免费使用
<div class="ai-container">
  <div class="ai-card">
    <img src="https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg" alt="通义千问" class="ai-logo"/>
    <div class="ai-content">
      <h3>通义千问</h3>
      <p>阿里巴巴出品，支持多模态对话，中文优化</p>
      <div class="ai-features">
        <span class="tag">免费</span>
        <span class="tag">中文友好</span>
        <span class="tag">图片理解</span>
      </div>
      <a href="https://tongyi.aliyun.com/" target="_blank" class="ai-button">立即使用</a>
    </div>
  </div>

  <div class="ai-card">
    <img src="https://www.baidu.com/favicon.ico" alt="文心一言" class="ai-logo"/>
    <div class="ai-content">
      <h3>文心一言</h3>
      <p>百度研发，擅长中文创作和对话</p>
      <div class="ai-features">
        <span class="tag">免费</span>
        <span class="tag">中文优化</span>
        <span class="tag">创作助手</span>
      </div>
      <a href="https://yiyan.baidu.com/" target="_blank" class="ai-button">立即使用</a>
    </div>
  </div>

  <div class="ai-card">
    <img src="https://psc2.cf2.poecdn.net/assets/apple-touch-icon.png" alt="Poe" class="ai-logo"/>
    <div class="ai-content">
      <h3>Poe</h3>
      <p>集成多个AI模型，支持ChatGPT、Claude等</p>
      <div class="ai-features">
        <span class="tag">免费</span>
        <span class="tag">多模型</span>
        <span class="tag">需科学上网</span>
      </div>
      <a href="https://poe.com" target="_blank" class="ai-button">立即使用</a>
    </div>
  </div>
</div>

## 付费使用
<div class="ai-container">
  <div class="ai-card">
    <img src="https://chat.openai.com/favicon.ico" alt="ChatGPT" class="ai-logo"/>
    <div class="ai-content">
      <h3>ChatGPT</h3>
      <p>OpenAI 开发的 AI 模型，需科学上网</p>
      <div class="ai-features">
        <span class="tag warning">付费</span>
        <span class="tag">GPT-4</span>
        <span class="tag">插件支持</span>
      </div>
      <a href="https://chat.openai.com" target="_blank" class="ai-button">访问官网</a>
    </div>
  </div>

  <div class="ai-card">
    <img src="https://claude.ai/favicon.ico" alt="Claude" class="ai-logo"/>
    <div class="ai-content">
      <h3>Claude</h3>
      <p>Anthropic 开发，注重安全性和准确性</p>
      <div class="ai-features">
        <span class="tag warning">付费</span>
        <span class="tag">高准确度</span>
        <span class="tag">文件处理</span>
      </div>
      <a href="https://claude.ai/" target="_blank" class="ai-button">访问官网</a>
    </div>
  </div>
</div>

## 开发工具
<div class="ai-container">
  <div class="ai-card">
    <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub Copilot" class="ai-logo"/>
    <div class="ai-content">
      <h3>GitHub Copilot</h3>
      <p>AI 代码助手，提供实时代码建议</p>
      <div class="ai-features">
        <span class="tag warning">付费</span>
        <span class="tag">代码补全</span>
        <span class="tag">IDE集成</span>
      </div>
      <a href="https://github.com/features/copilot" target="_blank" class="ai-button">了解更多</a>
    </div>
  </div>
</div>

<style>
.ai-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.ai-card {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.ai-card:hover {
  transform: translateY(-5px);
}

.ai-logo {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.ai-content h3 {
  margin: 10px 0;
  color: #2c3e50;
}

.ai-content p {
  color: #666;
  margin-bottom: 15px;
}

.ai-features {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  background: #e9ecef;
  color: #495057;
}

.tag.warning {
  background: #fff3cd;
  color: #856404;
}

.ai-button {
  display: inline-block;
  padding: 8px 16px;
  background: #3eaf7c;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.ai-button:hover {
  background: #2c855b;
}
</style>