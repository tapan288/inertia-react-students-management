import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";

export default function Index({ auth, roles }) {
    const page = usePage();

    function deleteRole(id) {
        if (confirm("Are you sure you want to delete this role?")) {
            router.delete(route("roles.destroy", id), {
                preserveScroll: true,
            });
        }
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Roles List
                </h2>
            }
        >
            <Head title="Roles List" />

            <div className="bg-gray-100 py-10">
                <div className="mx-auto max-w-7xl">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-xl font-semibold text-gray-900">
                                    Roles
                                </h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    A list of all the Roles.
                                </p>
                            </div>

                            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                {page.props.can.role_create && (
                                    <Link
                                        href={route("roles.create")}
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        Add Role
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg relative">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                                    >
                                                        ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                                    >
                                                        Title
                                                    </th>
                                                    {/* <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Created At
                                                    </th> */}
                                                    <th
                                                        scope="col"
                                                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                                    />
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {roles.data.map((role) => {
                                                    return (
                                                        <tr key={role.id}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                {role.id}
                                                            </td>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                {role.title}
                                                            </td>

                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                {page.props.can
                                                                    .role_edit && (
                                                                    <Link
                                                                        href={route(
                                                                            "roles.edit",
                                                                            role.id
                                                                        )}
                                                                        className="text-indigo-600 hover:text-indigo-900"
                                                                    >
                                                                        Edit
                                                                    </Link>
                                                                )}
                                                                {page.props.can
                                                                    .role_delete && (
                                                                    <button
                                                                        onClick={() =>
                                                                            deleteRole(
                                                                                role.id
                                                                            )
                                                                        }
                                                                        className="ml-2 text-indigo-600 hover:text-indigo-900"
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <Pagination meta={roles.meta} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
