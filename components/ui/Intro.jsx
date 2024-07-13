import React from "react";
import Image from "next/image";

function Intro() {
	return (
		<div className="sm:w-3/5 w-full px-5 sm:py-24 xl:py-18 py-6 border-solid border-2 relative">
			<h1 className="font-secondary sm:text-4xl text-2xl xl:text-6xl text-center ">
				Frontend Developer
			</h1>
			<p className=" sm:text-lg text-base mx-auto sm:text-justify text-center lg:px-[80px] px-0 sm:px-0 ">
				Hello! My name is Esther and I build seamless and usable applications. I
				have 6 years experience of building scalable applications.
			</p>
			<div className="flex justify-center items-center">
				<Image
					src="/Me.jpg"
					width={150}
					height={150}
					alt="Esther photo"
					className="w-24 sm:w-40 rounded-full absolute"
					style={{
						top: "-17x",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				/>
			</div>
		</div>
	);
}

export default Intro;
