# 关注公众号

<div class="official-account">
  <div class="account-card">
    <div class="account-header">
      <img src="/熊猫头.jpg" alt="技术搬砖" class="qr-code"/>
      <div class="account-info">
        <h2>技术搬砖</h2>
        <p class="account-desc">分享技术知识，解答开发难题</p>
      </div>
    </div>
    <div class="feature-list">
      <div class="feature-item">
        <span class="feature-icon">📚</span>
        <span class="feature-text">技术文章</span>
      </div>
      <div class="feature-item">
        <span class="feature-icon">💡</span>
        <span class="feature-text">编程技巧</span>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🔧</span>
        <span class="feature-text">实用工具</span>
      </div>
      <div class="feature-item">
        <span class="feature-icon">🎯</span>
        <span class="feature-text">面试技巧</span>
      </div>
    </div>
  </div>
</div>

<style>
.official-account {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.account-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 2rem;
  max-width: 500px;
  width: 100%;
}

.account-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.qr-code {
  width: 120px;
  height: 120px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.account-info {
  flex: 1;
}

.account-info h2 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.8rem;
}

.account-desc {
  color: #666;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.5;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.feature-item:hover {
  transform: translateY(-2px);
  background: #f0f2f5;
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-text {
  color: #2c3e50;
  font-weight: 500;
}

/* 暗色主题适配 */
@media (prefers-color-scheme: dark) {
  .account-card {
    background: #2d2d2d;
  }
  
  .account-info h2 {
    color: #fff;
  }
  
  .account-desc {
    color: #aaa;
  }
  
  .feature-item {
    background: #363636;
  }
  
  .feature-item:hover {
    background: #404040;
  }
  
  .feature-text {
    color: #fff;
  }
}

/* 移动端适配 */
@media (max-width: 576px) {
  .account-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .feature-list {
    grid-template-columns: 1fr;
  }
  
  .account-card {
    margin: 0 1rem;
  }
}
</style>