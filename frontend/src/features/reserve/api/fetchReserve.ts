import type { Reserve } from "@/features/reserve/types";

export default async function fetchReserve(
  reserveId: number
): Promise<Reserve> {
  return {
    id: 1,
    startDate: "2021-01-01",
    guestName: "John Doe",
    guestEmail: "john.doe@example.com",
    personCount: 4,
    status: {
      id: 1,
      name: "Active",
    },
    golfCourseImageUrl1:
      "https://gora.golf.rakuten.co.jp/img/golf/30014/photo1.jpg",
    golfCourseImageUrl2:
      "https://gora.golf.rakuten.co.jp/img/golf/30014/photo2.jpg",
    golfCourseImageUrl3:
      "https://gora.golf.rakuten.co.jp/img/golf/30014/photo3.jpg",
    golfCourseImageUrl4:
      "https://gora.golf.rakuten.co.jp/img/golf/30014/photo4.jpg",
    golfCourseImageUrl5:
      "https://gora.golf.rakuten.co.jp/img/golf/30014/photo5.jpg",
    golfCourseName: "みちのく古都カントリークラブ",
    evaluation: "5.0",
    golfCourseCaption:
      "岩手県奥州市にございますみちのく古都カントリークラブでございます。盛岡、宮城県栗原市、大崎市、登米市方面から東北自動車道をご使用して頂き、1時間ほどでおいで頂けます。前沢平泉インター、一関インターより降車下さい。小高い丘の上にあるリンクスタイプのコース。コース間はマウンドでセパレートされて開放感があり栗駒の山々の眺望は抜群で戦略性の高いコースを是非お楽しみください。クラブハウスもみちのくの小京都を感じさせる情緒ある雰囲気です。距離も長くないので、初心者の方や女性の方もお得に!気軽に！プレーしていただけます！早朝・薄暮もお得な料金でプレーしていただけますよ！皆さまお気軽にみちのく古都カントリークラブへ遊びに来て下さいネ！ＳＴＡＦＦ一同皆さまのお越しを心よりお待ちしております。　　　　　　★　古都のおすすめポイント　★◎１５Ｈの通称”グランドキャニオン”でのダイナミックな打　ち下ろしは古都名物！◎日差しを避けながらの楽々プレー！フェアウェイカート乗り入れ！！　（天候・コースコンディションにより行わない日がございます）◎お待たせしました！！練習場オープン！！◎レストラン自慢のお料理をご堪能下さい。　おすすめは、自慢の肉味噌をレタスで巻いていただく”古都　サラダ”、ジュウジュウと耳でも味わえる”もやし炒め”などおすすめがいっぱいです！",
  };
}
