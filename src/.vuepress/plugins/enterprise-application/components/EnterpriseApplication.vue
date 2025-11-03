<template>
  <div class="enterprise-application">
    <div class="container">
      <h1>企业资格检测</h1>
      
      <!-- 加载中状态 -->
      <div v-if="!dataLoaded && !loadFailed" class="loading">
        <p>正在加载企业数据...</p>
      </div>
      
      <!-- 加载失败状态 -->
      <div v-if="loadFailed" class="error-message">
        <h2>数据加载失败</h2>
        <p>无法加载企业数据，请稍后再试。</p>
      </div>
            
      <!-- 第一步：填写公司名称 (只在数据成功加载时显示) -->
      <div v-if="dataLoaded && step === 1" class="step-no-border">
        <div class="form-group">
          <label for="companyName">请输入公司官方全称：</label>
          <input 
            type="text" 
            id="companyName" 
            v-model="companyName"
            placeholder="例如：阿里巴巴集团"
            @input="searchCompanies"
          >
          <div v-show="showError" class="error">公司名称不能为空</div>
        </div>
        
        <!-- 搜索结果区域 -->
        <div v-show="showResults" id="searchResultsContainer">
          <div class="search-results">
            <div 
              v-for="(company, index) in searchResults" 
              :key="index"
              class="search-result-item"
              @click="selectCompany(company)"
              :style="{ background: selectedCompany === company ? 'rgba(227, 242, 253, 0.5)' : '' }"
            >
              {{ company.company_name }}
            </div>
          </div>
        </div>
        
        <div class="form-group" style="margin-top: 16px;">
          <button @click="submitApplication">提交</button>
          <button class="secondary" @click="resetForm">重置</button>
        </div>
      </div>
      
      <!-- 第二步：显示结果 -->
      <div v-if="dataLoaded && step === 2" class="step">
        <div class="result-message" :class="resultClass">
          <div v-if="resultMessage" v-html="resultMessage"></div>
        </div>
        <div style="margin-top: 20px; text-align: center;">
          <button @click="resetForm">重新开始</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterpriseApplication',
  data() {
    return {
      qualifiedCompanies: [],
      companyName: '',
      selectedCompany: '',
      searchResults: [],
      showError: false,
      showResults: false,
      step: 1,
      resultClass: '',
      resultMessage: '',
      dataLoaded: false, // 新增：跟踪数据是否加载完成
      loadFailed: false  // 新增：跟踪是否加载失败
    }
  },
  computed: {
    // 安全获取插件配置
    pluginOptions() {
      return {
        dataPath: this.$withBase(
          typeof __ENTERPRISE_DATA_PATH__ !== 'undefined' 
            ? __ENTERPRISE_DATA_PATH__ 
            : '/test.csv'
        ),
      }
    }
  },
  mounted() {
    console.log("组件挂载，开始加载企业数据")
    console.log("插件配置:", this.pluginOptions)
    this.loadCompanyData()
  },
  methods: {
    async loadCompanyData() {
      try {
        const csvPath = this.pluginOptions.dataPath
        console.log("尝试加载文件:", csvPath)
        
        const response = await fetch(csvPath)
        console.log("HTTP状态码:", response.status)
        
        // 检查内容类型
        const contentType = response.headers.get('content-type') || ''
        console.log("内容类型:", contentType)
        
        if (!response.ok) {
          throw new Error(`HTTP错误: ${response.status} ${response.statusText}`)
        }
        
        const data = await response.text()
        console.log("原始数据长度:", data.length)
        
        // 更严格的CSV数据验证
        if (this.isValidCSVData(data)) {
          this.processCSVData(data)
          console.log("✅ 有效的CSV文件加载成功")
          this.dataLoaded = true // 标记数据已加载
        } else {
          throw new Error('文件内容不是有效的CSV格式')
        }
        
      } catch (error) {
        console.log("❌ 加载失败:", error.message)
        this.loadFailed = true // 标记加载失败
      }
    },

    // 添加CSV验证方法
    isValidCSVData(data) {
      if (!data || typeof data !== 'string') return false
      
      const trimmed = data.trim()
      
      // 检查是否为空
      if (trimmed.length === 0) return false
      
      // 检查是否是HTML页面（404页面等）
      if (trimmed.startsWith('<!DOCTYPE') || 
          trimmed.startsWith('<html') || 
          trimmed.includes('<body>') ||
          trimmed.includes('404') ||
          trimmed.includes('Not Found')) {
        return false
      }
      
      // 检查是否有CSV特征（逗号分隔，多行数据）
      const lines = trimmed.split('\n').filter(line => line.trim().length > 0)
      if (lines.length < 2) return false // 至少应该有表头和数据行
      
      // 检查第一行是否包含逗号（CSV特征）
      if (lines[0].includes(',')) {
        return true
      }
      
      return false
    },
    
    // 修改processCSVData方法，保留完整的公司数据
    processCSVData(csvText) {
      const lines = csvText.split('\n').filter(line => line.trim() !== '');
      
      // 提取表头
      const headers = lines[0].split(',').map(h => h.trim());
      
      // 处理数据行
      this.qualifiedCompanies = lines.slice(1).map(line => {
        const values = line.split(',');
        const company = {};
        headers.forEach((header, index) => {
          company[header] = values[index]?.trim();
        });
        return company;
      });
      
      console.log("处理后的公司数据:", this.qualifiedCompanies);
    },

  searchCompanies() {
    const query = this.companyName.trim();
    this.showResults = false;
    
    if (query === '') return;
    
    this.searchResults = this.qualifiedCompanies.filter(company => {
      const companyName = company.company_name || '';
      return companyName.toLowerCase().includes(query.toLowerCase());
    });
    
    this.showResults = this.searchResults.length > 0;
  },
  
  selectCompany(company) {
    this.selectedCompany = company;
    this.companyName = company.company_name;
  },
  
  submitApplication() {
    if (this.companyName.trim() === '') {
      this.showError = true;
      return;
    }
    
    this.showError = false;
    
    const matchedCompany = this.qualifiedCompanies.find(company => {
      const companyName = company.company_name || '';
      return companyName.toLowerCase() === this.companyName.toLowerCase();
    });
    
    if (matchedCompany) {
      this.resultClass = 'success';
      
      const qualifiedConditions = [];
      //fortune_global_2000,fortune_china_500,global_tech_100,china_tech_100,hk_top_100,hk_it_top_100,is_unicorn,data_year

      if (matchedCompany.fortune_global_2000 === 'true') qualifiedConditions.push("全球2000强");
      if (matchedCompany.fortune_china_500 === 'true') qualifiedConditions.push("中国500强");
      if (matchedCompany.global_tech_100 === 'true') qualifiedConditions.push("全球IT100强");
      if (matchedCompany.china_tech_100 === 'true') qualifiedConditions.push("中国IT100强");
      if (matchedCompany.hk_top_100 === 'true') qualifiedConditions.push("香港100强");
      if (matchedCompany.hk_it_top_100 === 'true') qualifiedConditions.push("香港IT100强");
      if (matchedCompany.is_unicorn === 'true') qualifiedConditions.push("独角兽");
      // 添加其他条件检查...
      
      if (qualifiedConditions.length > 0) {
        this.resultMessage = `恭喜！"${matchedCompany.company_name}"符合以下企业条件：<br> ${qualifiedConditions.join('<br>')}`;
      } else {
        this.resultMessage = `"${matchedCompany.company_name}"在我们的数据库中，但未符合任何特定条件。`;
      }
    } else {
      this.resultClass = 'failure';
      this.resultMessage = `抱歉！"${this.companyName}"不在我们的企业数据库中。`;
    }
    
    this.step = 2;
  },
    resetForm() {
      this.companyName = '';
      this.selectedCompany = '';
      this.showError = false;
      this.showResults = false;
      this.step = 1;
    }
  }
}
</script>

<style scoped>
/* 这里放置原有的所有CSS样式 */
.enterprise-application {
  --vp-c-accent: var(--vp-c-accent-bg);
  --vp-c-brand: var(--vp-c-accent-bg);
}

.container {
  /* 尺寸与边距 */
  max-width: 420px;                  /* 必须与.vp-banner相同 */
  width: 100%;                       /* 确保实际宽度一致 */
  padding: 1.5rem;                   /* 与.vp-banner相同 */
  margin-left: 8px;                  /* 清除所有外边距 */
  
  /* 定位与对齐 */
  position: relative;                /* 保持原有层级 */
  z-index: 0;
  text-align: left;
  
  /* 视觉样式 */
  border-radius: 0.5rem;             /* 与.vp-banner相同 */
  background: var(--vp-c-bg-alt);
  box-shadow: 2px 2px 10px 2px var(--vp-c-shadow);
  
  /* 毛玻璃特效 */
  backdrop-filter: saturate(150%) blur(10px);
}

.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--vp-c-bg-blur);
  z-index: -1;
  backdrop-filter: saturate(150%) blur(10px);
  border-radius: 0.5rem;             /* 与容器保持一致 */
}

h1 {
  text-align: left;
  margin-bottom: 24px;
  color: var(--vp-c-text);
  font-weight: 600;
  font-size: 2.2rem;
  background: linear-gradient(45deg, var(--vp-c-accent) 10%, var(--vp-c-brand) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 新增的无边框步骤样式 */
.step-no-border {
  padding: 0;
  margin-bottom: 20px;
  background: transparent;
  text-align: left;
}

.form-group {
  margin-bottom: 16px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--vp-c-text-light);
}

input[type="text"] {
  width: 90%;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
  background-color: var(--vp-c-bg-soft);
}

input[type="text"]:focus {
  outline: none;
  border-color: var(--vp-c-accent);
}

button {
  padding: 10px 16px;
  background: linear-gradient(45deg, var(--vp-c-accent), var(--vp-c-brand));
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  background-size: 200% 200%;
  background-position: 100% 100%;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-position: 0% 0%;
}

button.secondary {
  background: linear-gradient(45deg, #95a5a6, #7f8c8d);
}

.search-results {
  margin-top: 16px;
  border: 1px solid rgba(var(--vp-c-divider-rgb), 0.3);
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
  background-color: var(--vp-c-bg-soft);
}

.search-result-item {
  padding: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.2s ease;
}

.search-result-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
  transform: translateX(2px);
}

.search-result-item:last-child {
  border-bottom: none;
}

.error {
  color: #e74c3c;
  margin-top: 8px;
  font-size: 14px;
}

.result-message {
  padding: 16px;
  border-radius: 6px;
  margin-top: 16px;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease;
}

.success {
  background: linear-gradient(45deg, rgba(212, 237, 218, 0.8), rgba(195, 230, 203, 0.8));
  color: #155724;
  border: 1px solid rgba(195, 230, 203, 0.5);
}

.failure {
  background: linear-gradient(45deg, rgba(248, 215, 218, 0.8), rgba(245, 198, 203, 0.8));
  color: #721c24;
  border: 1px solid rgba(245, 198, 203, 0.5);
}

.progress-bar {
  display: flex;
  margin-bottom: 24px;
  justify-content: space-between;
  position: relative;
}

.progress-bar::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--vp-c-divider);
  transform: translateY(-50%);
  z-index: 1;
}

.progress-step {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--vp-c-divider);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  font-weight: 500;
  transition: all 0.3s ease;
}

.progress-step.active {
  background: linear-gradient(45deg, var(--vp-c-accent), var(--vp-c-brand));
  color: white;
  transform: scale(1.1);
}

.progress-step.completed {
  background: #2ecc71;
  color: white;
}

.hidden {
  display: none;
}

.loading {
  text-align: center;
  padding: 12px;
  color: var(--vp-c-text-light);
}

.error-message {
  text-align: center;
  padding: 20px;
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(231, 76, 60, 0.2);
}

.error-message h2 {
  margin-top: 0;
  color: #e74c3c;
}

@media (max-width: 640px) {
  .container {
    padding: 16px;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  button {
    width: 100%;
    margin-bottom: 8px;
    margin-right: 0;
  }
}
</style>