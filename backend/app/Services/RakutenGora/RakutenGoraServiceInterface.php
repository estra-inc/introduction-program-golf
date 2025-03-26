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
        ?int $page = 1,
        ?string $keyword = null,
        ?int $areaCode = null,
        ?float $latitude = null,
        ?float $longitude = null,
    );

    /**
     * 指定されたIDのゴルフコース情報を取得する
     *
     * @param int $golfCourseId ゴルフコースID
     * @return array ゴルフコース情報
     */
    public function getGolfCourse(int $golfCourseId);
}