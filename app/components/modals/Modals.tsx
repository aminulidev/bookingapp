"use client";
import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalsProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

const Modals: React.FC<ModalsProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}
		onSubmit();
	}, [disabled, onsubmit]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}
		secondaryAction();
	}, [disabled, secondaryAction]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
				<div className="w-full md:w-4/6 lg:w-3/6 xl:w-2/5 mx-auto h-full xl:h-auto xl:mt-32 2">
					{/* Content */}
					<div
						className={`translate duration-300 ${
							showModal
								? "translate-y-0 opacity-100"
								: "translate-y-full opacity-0"
						}`}
					>
						<div className="translate border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							{/* Header */}
							<div className="flex items-center p-6 rounded-t justify-center relative border-b">
								<button
									onClick={handleClose}
									className="text-red-600 p-1 border-0 hover:opacity-70 transition absolute left-9"
								>
									<IoMdClose size={18} />
								</button>
								<div className="text-lg font-semibold">{title}</div>
							</div>
							{/* Modal Body */}
							<div className="relative p-6 flex-auto">{body}</div>
							{/* Modal Footer */}
							<div className="flex flex-col gap-2 p-6">
								<div className="flex flex-row items-center gap-4 w-full">
									{secondaryAction && secondaryActionLabel && (
										<Button
											disabled={disabled}
											label={secondaryActionLabel}
											onClick={handleSecondaryAction}
											outline
										/>
									)}

									<Button
										disabled={disabled}
										label={actionLabel}
										onClick={handleSubmit}
									/>
								</div>
								{footer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modals;
