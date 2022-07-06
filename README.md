# Thread Hub for Web
## 概要
Webブラウザで利用できる掲示板アプリです。  
ユーザーがスレッドを作成し、他のユーザーがそれにコメントを追加していく仕様です。
匿名掲示板となっており、アカウント登録不要で利用することができます。

## 特徴
**React**を用いて開発し、データの管理には**Firebase Cloud Firestore**を利用しています。
コメントの投稿者のIDを生成するために、**Firebase Authentication**も利用しています。

## 使用したnpmモジュール
- `react`
- `react-router-dom`
- `react-icons`
- `dayjs`
- `firebase`

## スクリーンショット
<img width="1440" alt="スクリーンショット 2022-07-07 2 16 16" src="https://user-images.githubusercontent.com/65577595/177607236-06a34537-3742-456a-964d-49e739e6f336.png">
<img width="1440" alt="スクリーンショット 2022-07-07 2 16 35" src="https://user-images.githubusercontent.com/65577595/177607248-3af7aa83-3015-4f58-bcb2-349f314aa0b6.png">
<img width="1440" alt="スクリーンショット 2022-07-07 2 16 58" src="https://user-images.githubusercontent.com/65577595/177607267-d79b9227-dd46-4fc7-ac56-7468e9033adf.png">
<img width="1440" alt="スクリーンショット 2022-07-07 2 17 08" src="https://user-images.githubusercontent.com/65577595/177607294-8860c333-66c2-4773-9836-4fcd3129684a.png">
