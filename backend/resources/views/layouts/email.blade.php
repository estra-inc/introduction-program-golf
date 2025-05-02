<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: 'Noto Sans JP', sans-serif; margin: 0; padding: 0; font-size: 14px; color: #000;" color="#000000">
    <div style="max-width: 600px; margin: 30px auto; padding: 20px; background-color: #ffffff;">
        <!-- 本文 -->
        <main style="margin: 40px 0;">
            @yield('content')
        </main>

        <div style="border-top: 1px dashed #000;"></div>

        <!-- フッター -->
        <footer style="padding: 10px 0;">
            <div style="margin-bottom: 20px;">
                <p style="margin: 0; padding: 0;">ご不明な点がございましたら、以下のURLよりヘルプページをご確認ください。</p>
                <a href="https://XXXXXXXXXXXXXXXXXXXXXXXXX" style="color: #1a82e2; text-decoration: none; word-wrap: break-word;">https://XXXXXXXXXXXXXXXXXXXXXXXXX</a>
            </div>
            <div>
                <p style="margin: 0; padding: 0;">ヘルプページにて解決しない場合は、お手数ですが以下よりお問い合わせください。</p>
                <a href="https://XXXXXXXXXXXXXXXXXXXXXXXXX" style="color: #1a82e2; text-decoration: none; word-wrap: break-word;">https://XXXXXXXXXXXXXXXXXXXXXXXXX</a>
            </div>
        </footer>
    </div>
</body>
</html>