<?php

namespace App\Mail;

use App\Models\Reserve;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReserveRemindMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Reserve $reserve,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'ご予約内容確認のお願い',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.reserve-remind',
            with: [
                'startDate' => Carbon::parse($this->reserve->start_date)->format('Y年m月d日'),
            ],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
