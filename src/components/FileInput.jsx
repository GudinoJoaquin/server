import React from "react";

function FileInput({ label, name }) {
  return (
    <div class="grid w-full max-w-xs items-center gap-1.5">
      <label class="text-sm text-gray-900 font-medium ">
        {label}
      </label>
      <input
        class="flex w-full rounded-md bg-gray-300 text-sm text-gray-900 file:border-0 file:bg-gray-900 file:text-gray-200 file:text-sm file:font-medium file:hover:bg-gray-300 file:hover:text-gray-900 file:transition duration-[.3s] file:cursor-pointer"
        type="file"
        id="picture"
        name={name}
      />
    </div>
  );
}

export default FileInput;
