<?php

namespace App\Services\RakutenGora;

interface RakutenGoraServiceInterface
{
    /**
     * ゴルフコースを検索する
     *
     * @param int|string $page ページ番号
     * @param string|null $keyword 検索キーワード
     * @param int|string|null $areaCode エリアコード
     * @param int|string|null $latitude 緯度
     * @param int|string|null $longitude 経度
     * @return array 検索結果
     */
    public function searchGolfCourses(
        int|string $page,
        ?string $keyword,
        int|string|null $areaCode,
        int|string|null $latitude,
        int|string|null $longitude,
    );

    /**
     * 指定されたIDのゴルフコース情報を取得する
     *
     * @param string $golfCourseId ゴルフコースID
     * @return array ゴルフコース情報
     */
    public function getGolfCourse(string $golfCourseId);
}