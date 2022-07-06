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
<img width="1440" alt="スクリーンショット 2022-07-07 2 23 04" src="https://user-images.githubusercontent.com/65577595/177608192-ffc18763-31cc-4aa8-ae71-ae63eaba87cd.png">
<img width="1440" alt="スクリーンショット 2022-07-07 2 23 10" src="https://user-images.githubusercontent.com/65577595/177608242-33ffe6e8-dbcd-46e3-bb60-e968ecefff0d.png">
<img width="1440" alt="スクリーンショット 2022-07-07 2 23 19" src="https://user-images.githubusercontent.com/65577595/177608261-00396924-6780-4f52-80a3-1fc767ffdb58.png">
<img width="1440" alt="スクリーンショット 2022-07-07 2 23 26" src="https://user-images.githubusercontent.com/65577595/177608276-8703b1d9-26bd-49a7-b9ac-b5adf88f0748.png">

