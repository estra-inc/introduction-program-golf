<?php

declare(strict_types=1);

namespace Database\Factories;

class GolfCourseFactory
{
    public static function create(array $attributes = [], bool $detailed = false): array
    {
        $defaultData = [
            'golfCourseId' => (string) fake()->numberBetween(1, 1000),
            'golfCourseName' => fake()->randomElement(['富士山', '箱根', '軽井沢', '琵琶湖']).fake()->randomElement(['ゴルフクラブ', 'カントリークラブ', 'ゴルフ倶楽部']),
            'golfCourseAbbr' => fake()->randomElement(['富士山', '箱根', '軽井沢', '琵琶湖']).'GC',
            'golfCourseNameKana' => 'フジサンゴルフクラブ',
            'golfCourseCaption' => fake()->realText(100),
            'address' => fake()->prefecture().fake()->city().fake()->streetAddress(),
            'latitude' => (string) fake()->latitude(35.0, 36.0),
            'longitude' => (string) fake()->longitude(135.0, 136.0),
            'highway' => fake()->randomElement(['中央自動車道', '東名高速道路', '関越自動車道']).fake()->randomElement(['IC', 'インターチェンジ']),
            'golfCourseDetailUrl' => fake()->url(),
            'reserveCalUrl' => fake()->url(),
            'ratingUrl' => fake()->url(),
            'golfCourseImageUrl' => fake()->imageUrl(),
            'evaluation' => (string) fake()->randomFloat(1, 3.0, 5.0),
            'areaCode' => (string) fake()->numberBetween(1, 47),
        ];

        if ($detailed) {
            $defaultData['information'] = fake()->realText(200);
            $defaultData['ic'] = fake()->randomElement(['富士', '箱根', '軽井沢']).'IC';
            $defaultData['icDistance'] = fake()->numberBetween(1, 20).'km';
            $defaultData['postalCode'] = fake()->postcode();
            $defaultData['telephoneNo'] = fake()->phoneNumber();
            $defaultData['faxNo'] = fake()->phoneNumber();
            $defaultData['openDay'] = fake()->date();
            $defaultData['closeDay'] = null;
            $defaultData['creditCard'] = 'VISA,Master,JCB';
            $defaultData['shoes'] = fake()->randomElement(['レンタル可', 'レンタル不可']);
            $defaultData['dressCode'] = fake()->realText(50);
            $defaultData['practiceFacility'] = fake()->randomElement(['練習場完備', '練習場なし']);
            $defaultData['lodgingFacility'] = fake()->randomElement(['宿泊施設あり', '宿泊施設なし']);
            $defaultData['otherFacility'] = fake()->realText(50);
            $defaultData['golfCourseImageUrl1'] = fake()->imageUrl();
            $defaultData['golfCourseImageUrl2'] = fake()->imageUrl();
            $defaultData['golfCourseImageUrl3'] = fake()->imageUrl();
            $defaultData['golfCourseImageUrl4'] = fake()->imageUrl();
            $defaultData['golfCourseImageUrl5'] = fake()->imageUrl();
            $defaultData['weekdayMinPrice'] = fake()->numberBetween(10000, 100000);
            $defaultData['baseWeekdayMinPrice'] = fake()->numberBetween(10000, 100000);
            $defaultData['holidayMinPrice'] = fake()->numberBetween(10000, 100000);
            $defaultData['baseHolidayMinPrice'] = fake()->numberBetween(10000, 100000);
            $defaultData['designer'] = fake()->name();
            $defaultData['courseType'] = fake()->randomElement(['丘陵コース', '平地コース']);
            $defaultData['courseVerticalInterval'] = fake()->numberBetween(100, 1000).'m';
            $defaultData['dimension'] = fake()->numberBetween(1000, 10000).'y';
            $defaultData['green'] = fake()->randomElement(['ベント', 'パンチ']);
            $defaultData['greenCount'] = fake()->numberBetween(1, 10).'グリーン';
            $defaultData['holeCount'] = fake()->numberBetween(1, 100);
            $defaultData['parCount'] = fake()->numberBetween(1, 100);
            $defaultData['courseName'] = fake()->randomElement(['OUTコース', 'INコース']);
            $defaultData['courseDistance'] = fake()->numberBetween(1000, 10000).'y';
            $defaultData['longDrivingContest'] = fake()->boolean();
            $defaultData['nearPin'] = fake()->boolean();
            $defaultData['ratingNum'] = fake()->numberBetween(1, 100);
            $defaultData['evaluation'] = fake()->numberBetween(1, 5);
            $defaultData['staff'] = fake()->numberBetween(1, 5);
            $defaultData['facility'] = fake()->numberBetween(1, 5);
            $defaultData['meal'] = fake()->numberBetween(1, 5);
            $defaultData['course'] = fake()->numberBetween(1, 5);
            $defaultData['costperformance'] = fake()->numberBetween(1, 5);
            $defaultData['distance'] = fake()->numberBetween(1, 5);
            $defaultData['fairway'] = fake()->numberBetween(1, 5);
            $defaultData['reserveCalUrl'] = fake()->url();
            $defaultData['voiceUrl'] = fake()->url();
            $defaultData['layoutUrl'] = fake()->url();
            $defaultData['routeMapUrl'] = fake()->url();
            $defaultData['newPlans'] = [];
            $defaultData['ratings'] = [];
        }

        return array_merge($defaultData, $attributes);
    }
}
