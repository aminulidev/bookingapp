"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
	return (
		<div className="border w-full py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer md:w-auto">
			<div className="flex flex-row items-center justify-between">
				<div className="text-sm font-semibold px-6">Anywhere</div>
				<div className="hidden text-sm font-semibold px-6 border-x flex-1 text-center sm:block">
					Any Week
				</div>
				<div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
					<div className="hidden sm:block">Add Guests</div>
					<div className="p-2 bg-rose-500 rounded-full text-white">
						<BiSearch size={18} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
