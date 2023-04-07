"use client";

import { BiMenu } from "react-icons/bi";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const userMenuToggle = useCallback(() => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	}, []);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={() => {}}
					className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
				>
					Airbnb your home
				</div>
				<div
					onClick={userMenuToggle}
					className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
				>
					<BiMenu />
					<div className="hidden md:block">
						<Avatar />
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="absolute rounded-xl shadow-md w-[40vw] bg-white overflow-hidden right-0 top-12 text-sm">
					<div className="flex flex-col cursor-pointer">
						<>
							<MenuItem onClick={() => {}} label="Log In" />
							<MenuItem onClick={() => {}} label="Sign Up" />
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
