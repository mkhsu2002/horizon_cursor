# Logo 圖檔上傳指南

## 如何將您的 Logo 圖檔添加到網站

### 步驟 1：準備 Logo 圖檔
- 建議格式：PNG、JPG 或 SVG
- 建議尺寸：200x60 像素或更高解析度
- 檔案名稱：`logo.png` 或 `logo.jpg`

### 步驟 2：上傳到專案資料夾
將您的 Logo 圖檔直接拖放到以下位置：
```
/Users/mkhsu/Library/CloudStorage/Dropbox/Cursor_Projects/Horizon_Web/
```

### 步驟 3：更新 HTML 檔案
將所有 HTML 檔案中的：
```html
<img src="logo.svg" alt="Horizon Outdoor Logo" class="logo-img">
```

改為：
```html
<img src="logo.png" alt="Horizon Outdoor Logo" class="logo-img">
```
（或您實際的檔案名稱）

### 步驟 4：測試顯示
- 在瀏覽器中打開 index.html
- 檢查 Logo 是否正確顯示
- 調整 CSS 中的 `.logo-img` 樣式以符合您的需求

## 目前使用的臨時 Logo
目前網站使用的是我創建的 SVG Logo，您可以隨時替換為您的實際 Logo 圖檔。
