# 基礎研修

## 環境構築

1. make install

### Rakuten Gora API

[こちら](https://webservice.rakuten.co.jp/guide)からアプリ ID を取得
`backend/.env`の`RAKUTEN_GORA_APPLICATION_ID=`にアプリ ID を設定

例  
RAKUTEN_GORA_APPLICATION_ID=1122280314645528641

## 機能一覧

### GolfCourse

- ゴルフコース一覧取得
- ゴルフコース詳細取得

### Reserve

- 予約一覧取得
- 予約詳細取得
- 予約作成
- 予約リマインド

### 予約リンマインド実行

1. make app
2. php artisan reserve:remind

※`reserves.start_date===1日前` 且つ `reserves.status_id === 2` である必要があります

## ブランチ戦略

### ブランチ

- master ブランチ：リリース用ブランチです。直接編集をしないでください。
- task ブランチ：master ブランチから切ります。タスク単位で作成し、#123 のように作成します。

### 手順

1. プログラマーが master ブランチを pull して最新にする
2. プログラマーが master ブランチから task ブランチを作成
3. プログラマーが task ブランチで作業完了後、master ブランチに向けて Pull Request を変更
4. プロジェクトマネージャーが task ブランチの内容をレビュー
5. プロジェクトマネージャーが master ブランチにマージ

## タスク管理

タスク管理は Trello で行います。

### ステータス

- Icebox：いつやるかは分からないが、今後やる予定のタスクリスト
- Backlog：いつやるかが決まっているタスクリスト
- In Progress：進行中のタスクリスト
- Ready for Review：レビュー前のタスクリスト
- In Review：レビュー中のタスクリスト
- Closed：完了したタスクリスト

### 手順

1. プロジェクトマネージャーが Icebox にタスクを作成
2. プロジェクトマネージャーが Icebox のタスクを Backlog に移動
3. プロジェクトマネージャーがプログラマーに Slack でタスクを依頼
4. プログラマーがタスク内容を確認し、疑問点をプロジェクトマネージャーに質問
5. 疑問点がなくなり次第、プログラマーが Backlog のタスクを In Progress に移動
6. 作業が完了し次第、プログラマーが In Progress のタスクを Ready for Review に移動
7. レビューを開始する前に、プロジェクトマネージャーが Ready for Review のタスクを In Review に移動
8. レビューが完了し次第、プロジェクトマネージャーが In Review のタスクを Closed に移動
