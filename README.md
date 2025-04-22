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

### 予約リンマインド実行方法

1. make app
2. php artisan reserve:remind

※`reserves.start_date===1` 且つ `reserves.status_id === 2` である必要があります
