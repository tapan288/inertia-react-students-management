<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Resources\StudentResource;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::paginate(10);

        return Inertia::render('Student/Index', [
            'students' => StudentResource::collection($students),
        ]);
    }
}
