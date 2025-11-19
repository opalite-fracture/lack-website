export type Language = 'en' | 'zh';

export const translations = {
    en: {
        // Header
        'header.getStarted': 'Get Started',
        'header.features': 'Features',
        'header.useCases': 'Use Cases',
        'header.whyLack': 'Why Lack',

        // Hero
        'hero.title': 'LLM Attack Construction Kit',
        'hero.subtitle': 'Professional LLM Red Teaming Toolkit',
        'hero.viewFeatures': 'View Features',

        // Features (Core Capabilities)
        'features.title': 'Comprehensive Safety Assessment',
        'features.riskCoverage.title': '20+ Risk Categories',
        'features.riskCoverage.desc': 'Covers jailbreak, prompt injection, PII leakage, hallucinations, and more.',
        'features.multimodal.title': 'Multimodal Support',
        'features.multimodal.desc': 'Test text, images, audio, video, code, and mixed modalities.',
        'features.multiLanguage.title': 'Multi-language Testing',
        'features.multiLanguage.desc': 'Support for Chinese, English, and multi-language bypass techniques.',
        'features.dialogueModes.title': 'Diverse Dialogue Modes',
        'features.dialogueModes.desc': 'Single-turn, multi-turn, reflection/self-repair, and tool invocation scenarios.',

        // Use Cases
        'useCases.title': 'Application Scenarios',
        'useCases.modelEval.title': 'Model Safety Evaluation',
        'useCases.modelEval.desc': 'Comprehensive content safety assessment before model deployment.',
        'useCases.modelEval.details': 'Automated benchmarks • Custom safety policies • Release readiness check',
        'useCases.compliance.title': 'Compliance Checks',
        'useCases.compliance.desc': 'Meet AI regulations like the "Interim Measures for Generative AI Services".',
        'useCases.compliance.details': 'Regulatory mapping • Audit logs • Compliance reports',
        'useCases.redTeaming.title': 'Red Teaming',
        'useCases.redTeaming.desc': 'Simulate attacker attempts to bypass security defenses.',
        'useCases.redTeaming.details': 'Jailbreak attacks • Prompt injection • Adversarial examples',
        'useCases.monitoring.title': 'Continuous Monitoring',
        'useCases.monitoring.desc': 'Regularly assess model safety to discover new vulnerabilities.',
        'useCases.monitoring.details': 'Scheduled scans • Drift detection • Alerting system',
        'useCases.reporting.title': 'Professional Reporting',
        'useCases.reporting.desc': 'Generate professional safety assessment reports for stakeholders.',
        'useCases.reporting.details': 'PDF/HTML export • Executive summary • Technical details',
        'useCases.research.title': 'Research & Teaching',
        'useCases.research.desc': 'Tools for AI safety research and educational purposes.',
        'useCases.research.details': 'Dataset analysis • Attack visualization • Educational demos',

        // Why Choose Lack
        'why.title': 'Why Choose Lack?',
        'why.local.title': 'Local-First Privacy',
        'why.local.desc': 'All sensitive data and scan tasks run locally. No third-party server involvement.',
        'why.ready.title': 'Out-of-the-Box',
        'why.ready.desc': 'Desktop app with built-in test cases. Start testing immediately without complex config.',
        'why.flexible.title': 'Flexible & Extensible',
        'why.flexible.desc': 'Custom test cases, datasets, and scan policies. Template system for quick reuse.',
        'why.report.title': 'Standardized Reports',
        'why.report.desc': 'International standard reports (NIST AI RMF, ISO/IEC 42001) with rich visualizations.',

        // Download
        'download.title': 'Get Started',
        'download.subtitle': 'Download the latest version of lack for your operating system.',
        'download.mac': 'Download for macOS',
        'download.windows': 'Download for Windows',
        'download.mac.appleSilicon': 'Apple Silicon (M1/M2/M3)',
        'download.mac.intel': 'Intel',
        'download.windows.x64': 'x64 Installer',
        'download.windows.arm64': 'ARM64 Installer',
        'download.version': 'v1.0.0 • Release Notes',

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.contact': 'Contact: admin@lackrt.com',
        'footer.docs': 'Documentation',
        'footer.github': 'GitHub',
        'footer.twitter': 'Twitter',
    },
    zh: {
        // Header
        'header.getStarted': '开始使用',
        'header.features': '功能特性',
        'header.useCases': '应用场景',
        'header.whyLack': '为什么选择',

        // Hero
        'hero.title': 'LLM Attack Construction Kit',
        'hero.subtitle': '专业的 LLM 红队攻击工具包',
        'hero.viewFeatures': '查看功能',

        // Features (Core Capabilities)
        'features.title': '全面的安全测评体系',
        'features.riskCoverage.title': '20+ 风险类目覆盖',
        'features.riskCoverage.desc': '包括越狱绕过、提示注入、隐私泄露、幻觉诽谤等多种风险。',
        'features.multimodal.title': '多模态支持',
        'features.multimodal.desc': '支持文本、图像、音频、视频、代码及混合模态测试。',
        'features.multiLanguage.title': '多语言测试',
        'features.multiLanguage.desc': '支持中文、英文及多语言绕过技术测试。',
        'features.dialogueModes.title': '多种对话模式',
        'features.dialogueModes.desc': '支持单轮、多轮、反思/自我修复、工具调用等场景。',

        // Use Cases
        'useCases.title': '应用场景',
        'useCases.modelEval.title': 'AI 模型安全评估',
        'useCases.modelEval.desc': '在模型上线前进行全面的内容安全测评。',
        'useCases.modelEval.details': '自动化基准测试 • 自定义安全策略 • 上线准备检查',
        'useCases.compliance.title': '合规检查',
        'useCases.compliance.desc': '满足各国 AI 监管要求（如中国《生成式人工智能服务管理暂行办法》）。',
        'useCases.compliance.details': '法规映射 • 审计日志 • 合规性报告',
        'useCases.redTeaming.title': '红队测试',
        'useCases.redTeaming.desc': '模拟攻击者绕过安全防线的尝试。',
        'useCases.redTeaming.details': '越狱攻击 • 提示注入 • 对抗样本生成',
        'useCases.monitoring.title': '持续监控',
        'useCases.monitoring.desc': '定期评估模型安全性，发现新的漏洞。',
        'useCases.monitoring.details': '定时扫描 • 漂移检测 • 告警系统',
        'useCases.reporting.title': '报告生成',
        'useCases.reporting.desc': '为利益相关方提供专业的安全评估报告。',
        'useCases.reporting.details': 'PDF/HTML 导出 • 执行摘要 • 技术细节',
        'useCases.research.title': '研究与教学',
        'useCases.research.desc': 'AI 安全领域的研究和教学工具。',
        'useCases.research.details': '数据集分析 • 攻击可视化 • 教学演示',

        // Why Choose Lack
        'why.title': '为什么选择 Lack？',
        'why.local.title': '本地优先，隐私安全',
        'why.local.desc': '所有敏感数据和扫描任务在本地执行，不经过第三方服务器。',
        'why.ready.title': '开箱即用，快速上手',
        'why.ready.desc': '桌面应用，内置测试用例库，无需复杂配置，立即开始测试。',
        'why.flexible.title': '灵活扩展，深度定制',
        'why.flexible.desc': '支持自定义测试用例、样本集和扫描策略。模板系统支持快速复用。',
        'why.report.title': '专业报告，符合标准',
        'why.report.desc': '基于国际标准的报告格式（NIST AI RMF 等），提供丰富的可视化图表。',

        // Download
        'download.title': '立即下载',
        'download.subtitle': '下载适用于您操作系统的 lack 最新版本。',
        'download.mac': '下载 macOS 版本',
        'download.windows': '下载 Windows 版本',
        'download.mac.appleSilicon': 'Apple Silicon (M1/M2/M3)',
        'download.mac.intel': 'Intel 芯片',
        'download.windows.x64': 'x64 安装包',
        'download.windows.arm64': 'ARM64 安装包',
        'download.version': 'v1.0.0 • 发布说明',

        // Footer
        'footer.rights': '保留所有权利。',
        'footer.contact': '联系我们: admin@lackrt.com',
        'footer.docs': '文档',
        'footer.github': 'GitHub',
        'footer.twitter': 'Twitter',
    }
};
