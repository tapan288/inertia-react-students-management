<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Classes;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Resources\ClassResource;
use App\Http\Resources\StudentResource;
use App\Http\Requests\StoreStudentRequest;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::paginate(10);

        return Inertia::render('Student/Index', [
            'students' => StudentResource::collection($students),
        ]);
    }

    public function create()
    {
        $classes = ClassResource::collection(Classes::all());

        return Inertia::render('Student/Create', [
            'classes' => $classes,
        ]);
    }

    public function store(StoreStudentRequest $request)
    {
        Student::create($request->validated());

        return redirect()->route('students.index');
    }
}
