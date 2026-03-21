# 日本大学女子サッカー部 公式Webサイト

## 概要
本プロジェクトは、日本大学女子サッカー部の公式Webサイトとして制作したものです。  
チームの活動情報や選手紹介、ニュース、写真などを掲載し、  
部の広報活動および新入部員・関係者への情報発信を目的としています。

React と TypeScript を用いたSPA（Single Page Application）として開発し、  
Netlify を利用して公開しています。

---

## WebサイトURL
https://nu-girls-soccer.com/

---

## サイトイメージ
- トップページ
<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/d98427cc-85fc-4768-8df1-5ef756f29650" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/078d7fed-e934-4293-b5e1-798273aa77b2" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/8e4f8610-6b65-41cf-9b23-e9dcd3890263" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/17a741d1-6418-439b-884d-bc3e36ba7d3f" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/e0c0722f-b7bb-446d-84d7-1c60f339e0f0" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/f391e62b-0c65-4689-944c-ac7bda64949e" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/677cfd84-d66e-4810-95c1-c49480fcac7c" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/084c623b-e702-46c8-a296-77f01864aaa9" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/330c9079-f7f4-4e37-8a7c-eace748d9348" />

- チーム紹介ページ
<img width="1912" height="1200" alt="Image" src="https://github.com/user-attachments/assets/ce7e2175-2bcb-485c-8688-d429aa3586db" />

- 選手一覧ページ
<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/5badad0f-dc54-4acd-9ff6-4f51ca3e3447" />

- 選手詳細ページ
<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/1d2454e6-121c-4b0c-a01d-f3904aad6192" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/a52900e9-cede-4cd2-8b86-f6b01accffb9" />

- 試合日程・結果ページ
<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/b1e1800c-cc06-4e0f-a4b4-e55d1a4ed2b7" />

<img width="1920" height="1200" alt="Image" src="https://github.com/user-attachments/assets/3a6d499f-fc8f-4b12-a6a5-bdb64cc229db" />

- 交通アクセスページ
<img width="1872" height="1200" alt="Image" src="https://github.com/user-attachments/assets/d219d413-b20a-42eb-bbcd-7264777c4dd6" />

---

## 主な機能
- チーム概要・活動紹介ページ
- 選手一覧表示
- 選手個別プロフィールページ
- 試合日程・結果ページ
- ニュース記事表示
- ギャラリー表示
- レスポンシブデザイン（PC / スマートフォン対応）
- UIアニメーション（Framer Motion）

---

## 使用技術（Tech Stack）

### フロントエンド
- React
- TypeScript

### UI / アニメーション
- Framer Motion

### 開発環境
- Node.js
- npm

### デプロイ
- Netlify

### 画像最適化
- WebP形式への変換
- Lazy Loading

---

## ディレクトリ構成
src
├ components // 再利用可能なUIコンポーネント
├ pages // 各ページコンポーネント
├ data // 選手情報・ニュースなどのデータ
├ styles // グローバルCSSやスタイル定義
└ App.tsx // アプリケーションのルートコンポーネント

public
└ images // Webサイトで使用する画像

---

## ローカル環境での起動方法
1.リポジトリをクローンします。
`git clone https://github.com/chfu24098/nu_girls_soccer_web.git`


2.プロジェクトディレクトリに移動します。
`cd nu_girls_soccer_web`


3.依存関係をインストールします。
`npm install`

4.開発サーバーを起動します。
`npm run dev`
5.ブラウザで以下のURLにアクセスします。
`http://localhost:5173/`



---

## 実装でこだわった点

### UI / UX設計
ユーザーが直感的に情報を理解できるよう、  
選手カードの表示やページ遷移時のアニメーションなどを実装しました。

### コンポーネント設計
Reactのコンポーネントを役割ごとに分割し、  
再利用性と保守性を意識した設計を行いました。

### レスポンシブデザイン
スマートフォン・タブレット・PCの各画面サイズに対応するよう  
レイアウトを調整しました。

---

## パフォーマンス最適化

- 画像を **WebP形式** に変換し、ファイルサイズを削減
- 画像の **Lazy Loading** を導入
- 用途に応じて画像サイズを調整

これにより、ページ読み込み速度の改善を行いました。

---

## 今後の改善点

- CMS導入によるニュース更新の簡略化（microCMSなどのヘッドレスCMSを導入し、非エンジニアでもニュース更新が可能な仕組み検討）
- 検索機能の追加
- アクセシビリティの改善
- 試合結果データの管理機能
- 入部希望者用まとめページやスタッフ陣紹介ページなどの追加

---

## ライセンス / クレジット

本Webサイトは、日本大学女子サッカー部の活動紹介を目的として制作しました。  
掲載されている写真・情報はチームの許可のもと使用しています。
