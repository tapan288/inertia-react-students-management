<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\RoleResource;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::paginate(10);

        return Inertia::render('Role/Index', [
            'roles' => RoleResource::collection($roles)
        ]);
    }

    public function create()
    {
        return Inertia::render('Role/Create');
    }

    public function store(StoreRoleRequest $request)
    {
        Role::create($request->validated());

        return redirect()->route('roles.index');
    }

    public function edit(Role $role)
    {
        return Inertia::render('Role/Edit', [
            'role' => RoleResource::make($role)
        ]);
    }

    public function update(UpdateRoleRequest $request, Role $role)
    {
        $role->update($request->validated());

        return redirect()->route('roles.index');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route('roles.index');
    }
}
