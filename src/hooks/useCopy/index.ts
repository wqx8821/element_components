import { ElMessage } from 'element-plus';

// 文本复制 一键复制图标名称
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement('input');
  input.value = text;
  // 追加到body
  document.body.appendChild(input);
  // 选中输入框
  input.select();
  // 复制操作
  document.execCommand('Copy');
  // 提示用户
  ElMessage({
    message: '复制成功',
    type: 'success',
  });
  // 移除输入框
  document.body.removeChild(input);
};
