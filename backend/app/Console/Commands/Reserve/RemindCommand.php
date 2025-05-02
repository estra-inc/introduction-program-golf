<?php

declare(strict_types=1);

namespace App\Console\Commands\Reserve;

use App\Enums\ReserveStatus;
use App\Mail\ReserveRemindMail;
use App\Models\Reserve;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class RemindCommand extends Command
{
    protected $signature = 'reserve:remind';

    protected $description = 'プレー前日にリマインドメールを送信する';

    public function handle()
    {
        $this->info('start reserve:remind');

        $tomorrow = now()->addDay()->startOfDay();

        $reserves = Reserve::query()
            ->where('status_id', ReserveStatus::CONFIRMED->value)
            ->whereDate('start_date', $tomorrow)
            ->get();

        $this->info('リマインドメールを送信する予約数: '.$reserves->count());

        $failedCount = 0;
        foreach ($reserves as $reserve) {
            try {
                Mail::to($reserve->guest_email)->send(new ReserveRemindMail($reserve));
            } catch (\Throwable $th) {
                $this->error('リマインドに失敗しました');
                $this->error('予約ID: '.$reserve->id);
                $this->error('メールアドレス: '.$reserve->guest_email);
                $this->error('エラー: '.$th->getMessage());
                $failedCount++;
            }
        }

        $this->info('送信に失敗した件数: '.$failedCount);
        $this->info('end reserve:remind');
    }
}