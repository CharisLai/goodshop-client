# GooDShop 購物平台
使用 Vue Nuxt supabase stripe 的練習作業。<br>
- 使用者可以查看商品，添加商品到購物車，並進行結帳。
- 使用者可以透過search bar 搜尋相關品項

信用卡支付測試卡號<br>
4242 4242 4242 4242 12/24 XXX<br>
註:(CVC隨意）*年份請輸入 數字23～以後的

## 預先準備
node.js 16.x
## 安裝說明
1. 下載
```bash
git clone https://github.com/CharisLai/goodshop-client.git
```
2. 安裝
```bash
npm install
```
3. 在專案的根目錄建立 .env 檔案
```bash
STRIPE_PK_KEY=
STRIPE_SK_KEY=

SUPABASE_URL=""
SUPABASE_KEY=""
```
4. local 運行
```bash
npm run dev
```

Deploy on netlify:  [Demo](https://master--admirable-croquembouche-a8a946.netlify.app/)

