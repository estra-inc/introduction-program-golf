@extends('layouts.email')

@section('content')
    <p>明日プレー予定の方にリマインドメールを送信しております。</p>
    <br>
    <br>
    <p>予約の内容は以下になっております。</p>
    <p>
        プレー場所：{{ $reserve->golf_course_name }} <br>
        プレー日時：{{ $startDate }} <br>
        プレー人数：{{ $reserve->person_count }}
    </p>
    <br>
    <br>
    <p>当日はお気をつけてお越しください。</p>
    <br>
    <br>
    <p>お心当たりのない場合は、本メールを無視もしくは破棄していただきますようお願いします。</p>
@endsection
