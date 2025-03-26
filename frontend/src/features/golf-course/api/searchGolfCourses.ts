import { SearchGolfCourseItem } from "../types/SearchGolfCourseItem";

// TODO: APIを叩く
export const searchGolfCourses = async ({
  area,
  keyword,
  page,
}: {
  area?: string;
  keyword?: string;
  page?: string;
}): Promise<{
  count: number;
  page: number;
  first: number;
  last: number;
  hits: number;
  carrier: number;
  pageCount: number;
  Items: SearchGolfCourseItem[];
}> => {
  return {
    count: 13,
    page: 1,
    first: 1,
    last: 13,
    hits: 13,
    carrier: 0,
    pageCount: 1,
    Items: [
      {
        golfCourseId: 110047,
        golfCourseName: "秩父国際カントリークラブ",
        golfCourseAbbr: "秩父国際CC",
        golfCourseNameKana: "ちちぶこくさいかんとりーくらぶ",
        golfCourseCaption:
          "－－－－－－－－－－－－－－－－－－－－【浴場利用再開につきまして】クラブハウス改修に伴う工事により、ご利用不可とさせていただいておりました浴場を再開いたしました。長期間ご迷惑をお掛けし申し訳ございませんでした。脱衣場、浴場ともに改修され設備も一新されましたので、ぜひご利用下さいませ。－－－－－－－－－－－－－－－－－－－－都心から約１時間半。遥かに秩父連山を眺望する戦略性豊かなゴルフ場。豪快な打ち下ろし７番ショートホールはまさに絶景ホール。それぞれのホールが個性豊かできっとあなたの心にのこります。食事のおいしさと、従業員の方の対応の良さにも定評あり！長瀞峡の清流が運ぶ爽やかな風が心地よい、最高のドライブスポットですさあ、爽やかな風に向かって豪快なショットをどうぞ。",
        address: "埼玉県秩父郡皆野町三沢4633-1",
        latitude: 36.0608469,
        longitude: 139.1344869,
        highway: "関越自動車道花園",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110047?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110047?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110047?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110047/photo1.jpg",
        evaluation: 3.6,
      },
      {
        golfCourseId: 110042,
        golfCourseName: "彩の森カントリークラブ",
        golfCourseAbbr: "彩の森CC",
        golfCourseNameKana: "さいのもりかんとりーくらぶ",
        golfCourseCaption:
          "＜ホテル閉館のお知らせ＞「彩の森カントリークラブ・ホテル秩父」は2024年1月8日チェックアウトをもちまして宿泊サービスのご提供を終了することとなりました。長きにわたり、皆さまのご愛顧を賜りましたこと、厚く御礼を申し上げます。当ホテル営業終了後も、「彩の森カントリークラブ」は変わらず営業しておりますので、引き続きご愛顧賜りますよう宜しくお願い申し上げます。－－－－－－－－－－－－－－－＜新帝王トム・ワトソンの手によるコース＞全英オープン５度制覇など、メジャー８勝、通算３４勝を挙げたトム･ワトソンが、設計･監修した世界初のコース。秩父の大自然とトム･ワトソンのち密な設計が融合したコースとして人気を集めている。フェアウェーは、広く要所に池やバンカー、グリーンには、微妙なアンジュレーションを配し｢すべてのプレーヤーに公平にミスショットにはペナルティーを与える｣ワトソンの設計理念が随所に表れている。名物ホールとして、４番ショート（右グリーン）、10番ミドルでは、グリーン中央にバンカーがあり、グリーンにオンさせるのも難しく、グリーンに乗っても、３･４パットありで気が抜けない。－－－－－－－－－－－－－－－【ACCORDIA NEXT ポイントプログラム改定のお知らせ】2020年12月より「ACCORDIA NEXTポイント」の還元は、自社公式予約サイト、電話、フロントでのご予約に限り対象となりましたので予めご了承ください。",
        address: "埼玉県秩父市品沢坊ヶ入1641",
        latitude: 36.0262525,
        longitude: 139.0564853,
        highway: "関越自動車道花園",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110042?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110042?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110042?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110042/photo1.jpg",
        evaluation: 4,
      },
      {
        golfCourseId: 110026,
        golfCourseName:
          "ザ　ナショナルカントリー倶楽部　埼玉（旧：廣済堂埼玉ＧＣ）",
        golfCourseAbbr: "ザ　ナショナルCC　埼玉",
        golfCourseNameKana: "ざ　なしょなるかんとりーふくらぶ　さいたま",
        golfCourseCaption:
          "都会の喧騒を離れ、静かに立つティグランド。無心のスイングが描く白い弾道。なだらかなフェアウェイ･･････花道のむこうに待つ、パッティンググリーンという名の仕上げの舞台。詩情あふれる秩父路の、四季折々の景観の美しさの中で、「ザ ナショナルカントリー倶楽部 埼玉」は、総てのプレーヤーに、ゴルフの醍醐味と新たな活力をご提供したいと願っています。",
        address: "埼玉県秩父市小柱685",
        latitude: 36.0501608,
        longitude: 139.0860711,
        highway: "関越自動車道花園",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110026?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110026?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110026?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110026/photo1.jpg",
        evaluation: 4.2,
      },
      {
        golfCourseId: 110076,
        golfCourseName: "ユニオンエース　ゴルフクラブ",
        golfCourseAbbr: "ユニオンエース　GC",
        golfCourseNameKana: "ゆにおんえーす　ごるふくらぶ",
        golfCourseCaption:
          "秩父連山のふもとに展開するユニオンエースゴルフクラブの18ホールズ。始めて訪れる方ならば、首都圏コースの常識を超える圧倒的なスケールに、きっと驚かれることでしょう。 もちろん魅力はその開放感だけではありません。30余年の歳月の中で幾度もの改修が重ねられ、大自然のパノラマを攻める西コース。メンタリティが勝負の鍵となる南コース。 ビギナーからプロフェッショナルに至るまで、ゴルフの醍醐味を余すところなくお楽しみいただけるはずです。",
        address: "埼玉県秩父市下吉田8371-3",
        latitude: 36.0256444,
        longitude: 139.02992,
        highway: "関越自動車道花園",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110076?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110076?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110076?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110076/photo1.jpg",
        evaluation: 4,
      },
      {
        golfCourseId: 110077,
        golfCourseName: "寄居カントリークラブ",
        golfCourseAbbr: "寄居CC",
        golfCourseNameKana: "よりいかんとりーくらぶ",
        golfCourseCaption:
          "＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝【ACCORDIA NEXT ポイントプログラム改定のお知らせ】「ACCORDIA NEXTポイント」の還元は、自社公式予約サイト、電話、フロントでのご予約に限り対象となりましたので予めご了承ください。＝＝＝＝＝＝＝＝＝＝＝＝＝＝首都圏から至近距離ながら、大自然の美しさが堪能できる丘陵コース。荒川が秩父山地から関東平野へ出る所に発達した緑の濃い丘陵地であり、自然の地形と樹木を残しています。フェアウエイはゆったりとして、比較的フラット。アウト・イン共に、スタートホールは４００ヤードを越すミドルホールで始まります。思いっきりドライバーショットを楽しめますが、ベストルートの周囲に危険が潜み、戦略性を高めています。",
        address: "埼玉県大里郡寄居町牟礼1286",
        latitude: 36.08992,
        longitude: 139.2471106,
        highway: "関越自動車道嵐山小川",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110077?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110077?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110077?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110077/photo1.jpg",
        evaluation: 3.6,
      },
      {
        golfCourseId: 110073,
        golfCourseName: "さいたま梨花カントリークラブ",
        golfCourseAbbr: "さいたま梨花CC",
        golfCourseNameKana: "さいたまりかかんとりーくらぶ",
        golfCourseCaption:
          "　『水と緑と石の調和』をテーマにした美しいコースです。老松赤松の巨木、杉、檜などをそのまま活かし、随所に池、クリーク、滝のウォーターハザードを配したフラットなレイアウトの戦略的コースです。１８ホールそれぞれ個性的なホールが続き、各ホールに応じて攻略ルートを設定するクレバーな頭脳と、１４本のクラブを万遍なく使うテクニックが要求されます。また、コースからの景観も素晴らしく、新宿・池袋のビル群やスカイツリー、秩父の山々、遠く谷川岳まで望めます。　クラブハウスは、２０１９年にプリツカー賞受賞者の磯崎新氏設計で昭和６３年度日本建築学会賞受賞の風格あるクラブハウスです。フロント前の樹齢３５０年の杉の４本柱は、一見の価値があります。　きっと感動と充実の一日を心ゆくまでお楽しみいただけます。",
        address: "埼玉県比企郡ときがわ町西平2042",
        latitude: 35.9883861,
        longitude: 139.2489147,
        highway: "関越自動車道鶴ヶ島",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110073?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110073?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110073?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110073/photo1.jpg",
        evaluation: 4,
      },
      {
        golfCourseId: 110054,
        golfCourseName: "長瀞カントリークラブ",
        golfCourseAbbr: "長瀞CC",
        golfCourseNameKana: "ながとろかんとりーくらぶ",
        golfCourseCaption:
          "標高400M。夏は街中より約３℃低く快適にプレーが楽しめます。関東の名勝「長瀞」の丘陵に秩父連山を望む、都心から僅か１時間の１８ホール。 ダイナミックな打ち下ろし、打ち上げ、谷越え、スリリングなショートホールなど、バラエティに富んだ手造りレイアウトが大自然との調和を感じさせます。特にスタートホールの爽快感は他では味わえません！秩父でもっとも歴史のあるゴルフ場。毎年コース改造を重ね芝の状態も良好でのびのびプレーが楽しめます。また、全体的には適度な打ち上げ、打ち下ろし、谷越えと変化に富んでいますが、最新ナビ付リモコン式乗用カートの導入で年配の方、女性の方たちもいっそうゴルフが楽しめるようになりました。クラブハウスは小高い山頂にあり、関東平野を一望できます。都心からのアクセスも抜群！皆様お誘いの上、ぜひご来場下さい。",
        address: "埼玉県大里郡寄居町金尾428",
        latitude: 36.1167386,
        longitude: 139.1454961,
        highway: "関越自動車道花園",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110054?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110054?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110054?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110054/photo1.jpg",
        evaluation: 3.9,
      },
      {
        golfCourseId: 110052,
        golfCourseName: "東都秩父カントリー倶楽部",
        golfCourseAbbr: "東都秩父CC",
        golfCourseNameKana: "とうとちちぶかんとりーくらぶ",
        golfCourseCaption:
          "秩父連山に囲まれた丘陵地に展開する雄大なコースとして好評を得ている。東都自動車グループ初のゴルフ場。ＪＬＰＧＡ公認の第１回東都自動車レディースプロゴルフトーナメント(1987年)の開催コースでもある。\n尚、皆野・寄居有料道路が開通した為、帰りの渋滞が大幅に緩和されるようになった。",
        address: "埼玉県秩父市蒔田1514-3",
        latitude: 36.0363561,
        longitude: 139.0782539,
        highway: "関越自動車道花園",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110052?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110052?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110052?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110052/photo1.jpg",
        evaluation: 3.4,
      },
      {
        golfCourseId: 110014,
        golfCourseName: "越生ゴルフクラブ",
        golfCourseAbbr: "越生GC",
        golfCourseNameKana: "おごせごるふくらぶ",
        golfCourseCaption:
          "越生ゴルフクラブは、恵まれた丘陵地帯に豊かな林を縫って18ホールが展開するコースです。クラブハウスからの景観は、秩父連峰の雄大な山脈を望み、広々としたスターティングホールは、豪快なティショットを存分に味わう事ができます。池越のショートホール、S字型の超ロングホールと飛距離とテクニックを要し、爽やかな大気を胸一杯吸って食堂でくつろぐひとときと、連峰に沈む夕日を眺める展望は充実したすばらしい１日をお約束いたします。※ご予約は２ヶ月先の同日からの受付けとなっております。",
        address: "埼玉県比企郡ときがわ町番匠61",
        latitude: 35.9939475,
        longitude: 139.2964217,
        highway: "関越自動車道鶴ヶ島",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110014?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110014?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110014?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110014/photo1.jpg",
        evaluation: 4.1,
      },
      {
        golfCourseId: 190016,
        golfCourseName: "境川カントリー倶楽部",
        golfCourseAbbr: "境川CC",
        golfCourseNameKana: "さかいがわかんとりーくらぶ",
        golfCourseCaption:
          "山梨の豊かな自然に囲まれた、青木功プロ監修の戦略性に富むコースです。 \n春には桃と李の花が眼下に広がる李桃の里。 \n八ケ岳や南アルプス、秩父連峰などの素晴らしい眺めは四季折々に違った表情を見せてくれて、ひときわ爽快なプレーが楽しめます。\nフラットなコースでビギナーからベテランまでプレイが楽しめます。 絶好のロケーションとともに最高の一日をお届けします。",
        address: "山梨県笛吹市境川町小黒坂2266",
        latitude: 35.5824653,
        longitude: 138.6389039,
        highway: "中央自動車道一宮御坂",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/190016?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/190016?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/190016?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/190016/photo1.jpg",
        evaluation: 4.5,
      },
      {
        golfCourseId: 190013,
        golfCourseName: "北の杜カントリー倶楽部",
        golfCourseAbbr: "北の杜CC",
        golfCourseNameKana: "きたのもりかんとりーくらぶ",
        golfCourseCaption:
          "当倶楽部は、八ヶ岳中信高原国定公園の豊かな自然に恵まれた美しいたたずまいの中に位置し、北に八ヶ岳、西に南アルプス連峰、南に霊峰富士、東に秩父連山と、360度展望の大パノラマ、日本でも稀にみる雄大な景観美で大庭園の趣さえ感じさせるゴルフ場です。 \n\n東京から車で2時間と気軽に行ける距離に、こんな壮大な景観があるのかと驚かれることでしょう。\n\nまたゴルフウェアとして人気の「PEARLY GATES」の、ゴルフ場初・正規販売代理店となります。季節ごとにセールやキャンペーンを実施しており、PEARLY GATESファンは必見です。",
        address: "山梨県北杜市長坂町中島4402",
        latitude: 35.8243583,
        longitude: 138.3453694,
        highway: "中央自動車道長坂",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/190013?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/190013?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/190013?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/190013/photo1.jpg",
        evaluation: 4.8,
      },
      {
        golfCourseId: 110075,
        golfCourseName: "武蔵松山カントリークラブ",
        golfCourseAbbr: "武蔵松山CC",
        golfCourseNameKana: "むさしまつやまかんとりーくらぶ",
        golfCourseCaption:
          "埼玉県東松山市にある武蔵松山カントリークラブは、新井規矩雄プロがコース監修に携わった戦略性の高いゴルフコースです。\n\n昭和60年9月18日の開場以来、数多くのゴルファーを魅了してきました。なだらかな起伏を活かしたコースレイアウトや、松林や池でセパレートされた各ホールは、自然に溢れた特長があり、攻める楽しさを思う存分味わうことができます。グリーンの背後には、秩父の山々が遠く浮かび、絶景を堪能しながらのプレーを楽しめます。コース全長も長く、難易度の高さには定評があります。\n\n武蔵松山カントリークラブの名物コースは、池を挟んでレイアウトされている9番ホールと18番ホールです。9番ロングホールは、豪快なロングドライブが試されるホール。セカンドは右側の池に注意しながら、手堅いパーオンを狙ってみてください。手入れの行き届いた広々としたフェアウェイでのプレーは、最終ホールならではの緊張感を味わうことができます。さらに、全米プロで注目をあつめたチャンピオンドワーフグリーンを2年前から採用しています。武蔵松山カントリークラブでしか味わえない繊細なグリーンのタッチを体感してみてください。\n\nアクセスは、関越自動車道東松山ICから約10分、電車でお越しの場合は、東武東上線高坂駅からクラブ送迎バスにて約15分です。ビギナーからシングルまで、レベルに合わせたプレーを楽しめるゴルフ場です。",
        address: "埼玉県東松山市神戸2275-1",
        latitude: 36.0125042,
        longitude: 139.3468392,
        highway: "関越自動車道東松山",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/110075?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/110075?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/110075?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/110075/photo1.jpg",
        evaluation: 4.4,
      },
      {
        golfCourseId: 130013,
        golfCourseName: "東京バーディクラブ",
        golfCourseAbbr: "東京バーディC",
        golfCourseNameKana: "とうきょうばーでぃくらぶ",
        golfCourseCaption:
          "全長７，１４４ヤードの１８ホールであり、全体としては起伏の少ないスロープとなっています。丘陵地にあるコースではありますが、周囲が高く中央部は高さを均一化しています。自然の地形を十分に生かし変化に富みながらもプレーヤーに負担がかからないよう配慮されています。武蔵野の緑と秩父多摩の山々に囲まれた自然が美しいコースです。",
        address: "東京都青梅市小曽木5丁目2943番地",
        latitude: 35.8261995,
        longitude: 139.2810767,
        highway: "首都圏中央連絡自動車道青梅",
        golfCourseDetailUrl:
          "https://booking.gora.golf.rakuten.co.jp/guide/disp/c_id/130013?rafcid=wsc_g_cs_1018280517649528141",
        reserveCalUrl:
          "https://search.gora.golf.rakuten.co.jp/cal/disp/c_id/130013?rafcid=wsc_g_cs_1018280517649528141",
        ratingUrl:
          "https://booking.gora.golf.rakuten.co.jp/voice/detail/c_id/130013?rafcid=wsc_g_cs_1018280517649528141",
        golfCourseImageUrl:
          "https://gora.golf.rakuten.co.jp/img/golf/130013/photo1.jpg",
        evaluation: 4.9,
      },
    ],
  };
};
