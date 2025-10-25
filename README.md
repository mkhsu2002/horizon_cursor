# Horizon Outdoor 品牌網站

## 專案概述

Horizon Outdoor 品牌文化與社群互動的核心平台，傳遞「Go. Back to Nature.」與「Do the right thing.」的雙核心理念。

## 網站架構

### 主要頁面
- **首頁 (index.html)** - 品牌主視覺、理念闡述、商品推薦
- **品牌誌 (journal.html)** - 內容行銷平台，分為「Go」和「Do」兩大分類
- **社群牆 (community.html)** - #DoTheRightThing UGC 活動展示
- **商品頁 (shop.html)** - 電子商務功能，環保商品展示
- **承諾頁 (commitment.html)** - 品牌承諾、影響力報告

### 核心功能
1. **響應式設計** - 支援桌面、平板、手機
2. **社群互動** - UGC 內容聚合與展示
3. **商品展示** - 環保材質商品與理念連結
4. **內容管理** - 品牌誌文章分類與搜尋
5. **購物功能** - 購物車與商品篩選

## 技術規格

- **前端技術**: HTML5, CSS3, JavaScript (ES6+)
- **字體**: Noto Sans TC (繁體中文)
- **圖標**: Font Awesome 6.0
- **圖片**: Unsplash (高品質免費圖片)
- **部署**: GitHub Pages 相容

## 部署到 GitHub Pages

### 步驟 1: 建立 GitHub 儲存庫
1. 在 GitHub 上建立新的儲存庫
2. 將所有檔案上傳到儲存庫

### 步驟 2: 啟用 GitHub Pages
1. 進入儲存庫的 Settings
2. 滾動到 "Pages" 區段
3. 在 "Source" 選擇 "Deploy from a branch"
4. 選擇 "main" 分支和 "/ (root)" 資料夾
5. 點擊 "Save"

### 步驟 3: 訪問網站
- 網站將在 `https://[你的用戶名].github.io/[儲存庫名稱]` 上線
- 通常需要幾分鐘時間才能完全部署

## 檔案結構

```
Horizon_Web/
├── index.html          # 首頁
├── journal.html         # 品牌誌頁面
├── community.html       # 社群牆頁面
├── shop.html           # 商品頁面
├── commitment.html     # 承諾頁面
├── styles.css          # 主要樣式檔案
├── script.js           # 主要 JavaScript 檔案
└── README.md           # 專案說明
```

## 主要特色

### 1. 品牌理念傳達
- 清晰的「Go. Back to Nature.」與「Do the right thing.」訊息
- 視覺化的理念闡述區塊
- 品牌故事與使命說明

### 2. 社群互動功能
- #DoTheRightThing 標籤聚合
- 社群貼文展示與互動
- 參與方式說明與引導

### 3. 商品展示與銷售
- 環保材質商品展示
- 理念連結說明
- 購物車功能
- 商品篩選與搜尋

### 4. 內容行銷平台
- 品牌誌文章分類
- 搜尋功能
- 文章標籤系統

### 5. 品牌承諾展示
- 材質與供應鏈透明化
- 公益合作展示
- 影響力數據報告

## 自訂化指南

### 修改品牌資訊
1. 編輯各 HTML 檔案中的品牌名稱、聯絡資訊
2. 更新 `styles.css` 中的品牌色彩 (#2c5530, #4a7c59)

### 添加商品
1. 在 `shop.html` 中添加新的商品卡片
2. 更新 JavaScript 中的商品數據

### 更新社群內容
1. 修改 `community.html` 中的社群貼文數據
2. 更新社群牆的篩選邏輯

### 添加文章
1. 在 `journal.html` 中添加新的文章卡片
2. 更新分類和標籤

## 瀏覽器支援

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 注意事項

1. 所有圖片使用 Unsplash 的免費圖片，建議替換為實際品牌圖片
2. 社群牆功能為模擬數據，實際部署需要整合真實的社群媒體 API
3. 購物車功能為前端展示，實際電商需要後端支援
4. 建議定期更新內容以保持網站活躍度

## 聯絡資訊

如有技術問題或建議，請聯絡開發團隊。

---

© 2024 Horizon Outdoor. All rights reserved.
