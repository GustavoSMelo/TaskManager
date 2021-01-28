<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskModel extends Model
{   

    protected $table = 'tasks';

    protected $fillable = [
        'name',
        'description',
        'week_days',
        'start_at',
        'end_at',
    ];

    public function user () {
        return $this->hasMany(UserModel::class, 'id', 'user_id');
    }

    use HasFactory;
}
