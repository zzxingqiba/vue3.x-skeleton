module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 编译正式环境时禁止开启调试器
    quotes: ['error', 'single'], // 强制使用单引号
    'no-unused-vars': 'off', // 关闭已定义未使用变量
    'spaced-comment': ['error', 'always'], // 注释必须有空格
    'no-undef': 'off',
    'vue/no-unused-vars': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-multiple-template-root': 'off', // 不需要外层包裹根标签
  },
};
