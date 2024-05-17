<?php

namespace App\Http\Controllers;

use App\Http\Resources\SectionResource;
use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index(Request $request)
    {
        $sections = Section::where('class_id', $request->class_id)->get();

        return SectionResource::collection($sections);
    }
}
