<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserModel extends Model
{   

    protected $table = 'user';

    protected $fillable = [
        'name',
        'email',
        'password',
        'password_token'
    ];

    public function task () {
        return $this->belongsTo(TaskModel::class, 'user_id', 'id');
    }

    use HasFactory, HasApiTokens, Notifiable;
}
