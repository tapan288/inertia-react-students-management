<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Classes;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\ClassResource;
use App\Http\Resources\StudentResource;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        Gate::authorize('student_access');

        $students = Student::search($request)->paginate(10);

        return Inertia::render('Student/Index', [
            'students' => StudentResource::collection($students),
        ]);
    }

    public function create()
    {
        Gate::authorize('student_create');

        $classes = ClassResource::collection(Classes::all());

        return Inertia::render('Student/Create', [
            'classes' => $classes,
        ]);
    }

    public function store(StoreStudentRequest $request)
    {
        Gate::authorize('student_create');

        Student::create($request->validated());

        return redirect()->route('students.index');
    }

    public function edit(Student $student)
    {
        Gate::authorize('student_edit');

        $classes = ClassResource::collection(Classes::all());

        return Inertia::render('Student/Edit', [
            'classes' => $classes,
            'student' => StudentResource::make($student),
        ]);
    }

    public function update(UpdateStudentRequest $request, Student $student)
    {
        Gate::authorize('student_edit');

        $student->update($request->validated());

        return redirect()->route('students.index');
    }

    public function destroy(Student $student)
    {
        Gate::authorize('student_delete');

        $student->delete();

        return redirect()->route('students.index');
    }
}
