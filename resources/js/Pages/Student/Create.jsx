import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth, classes }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        class_id: "",
        section_id: "",
    });

    function submit(e) {
        e.preventDefault();
        // post("/login");
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Student
                </h2>
            }
        >
            <Head title="Create Student" />

            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
                        <form>
                            <div class="shadow sm:rounded-md sm:overflow-hidden">
                                <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                                    <div>
                                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                                            Student Information
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-500">
                                            Use this form to create a new
                                            student.
                                        </p>
                                    </div>

                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="name"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                id="name"
                                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm @error text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300 @enderror"
                                            />
                                            <p class="text-red-500">
                                                This field is required
                                            </p>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="email"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                id="email"
                                                autocomplete="email"
                                                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="class_id"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Class
                                            </label>
                                            <select
                                                id="class_id"
                                                value={data.class_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "class_id",
                                                        e.target.value
                                                    )
                                                }
                                                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="">
                                                    Select a Class
                                                </option>
                                                <option value="1">
                                                    Class 1
                                                </option>
                                            </select>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="section_id"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Section
                                            </label>
                                            <select
                                                id="section_id"
                                                value={data.section_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "section_id",
                                                        e.target.value
                                                    )
                                                }
                                                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="">
                                                    Select a Section
                                                </option>
                                                <option value="1">
                                                    Section A
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <a
                                        href="#"
                                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                                    >
                                        Cancel
                                    </a>
                                    <button
                                        type="submit"
                                        class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
