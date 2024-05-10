import { useState } from "react";

function Input({ label, type, name, placeholder, value }) {
  return (
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-900" for="name">
        {label}
      </label>
      <input
        class="mt-1 p-2 w-full bg-gray-300 rounded-md text-gray-900 placeholder:text-gray-700 placeholder:italic"
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
}

export default Input;
