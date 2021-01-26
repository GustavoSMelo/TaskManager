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

    use HasFactory;
}
